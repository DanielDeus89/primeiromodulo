// ======================================================
// engine.js
// ======================================================


// ======================================================
// ESTADO GLOBAL
// ======================================================

let currentIndex = 0;

let isDevMode = false;


// Conteúdo da Lesson / Review já foi carregado?
window.lessonReady = false;


// ======================================================
// CONTROLE DE SINCRONIZAÇÃO
// ======================================================

// Evita retransmitir uma alteração que acabou de chegar
// do painel do professor.
let applyingTeacherSync = false;


// ======================================================
// CANAL ALUNO <-> PROFESSOR
// ======================================================

const teacherSyncChannel =
  typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel(
        "teacherLessonSync"
      )
    : null;



// ======================================================
// IDENTIFICAR CONTEÚDO ATUAL
// ======================================================

function getCurrentContentInfo() {

  if (
    typeof lessonTitle === "undefined" ||
    typeof lessonTitle !== "string"
  ) {

    return null;

  }


  const title =
    lessonTitle.trim();


  const match =
    title.match(
      /\d+/
    );


  if (!match) {

    return null;

  }


  const number =
    match[0].padStart(
      2,
      "0"
    );


  // ====================================================
  // LESSON
  // ====================================================

  if (
    /^lesson\b/i.test(
      title
    )
  ) {

    return {

      type:
        "lesson",

      number:
        number,

      title:
        title

    };

  }


  // ====================================================
  // REVIEW
  // ====================================================

  if (
    /^review\b/i.test(
      title
    )
  ) {

    return {

      type:
        "review",

      number:
        number,

      title:
        title

    };

  }


  return null;

}



// ======================================================
// SINCRONIZAR PROFESSOR
//
// ENVIA O CARD ATUAL DO ALUNO PARA O PROFESSOR.
//
// SOMENTE LESSON.
// ======================================================

function syncTeacherPanel() {

  // ====================================================
  // ALTERAÇÃO VEIO DO PROFESSOR
  //
  // NÃO DEVOLVER A MESMA MENSAGEM.
  // ====================================================

  if (
    applyingTeacherSync
  ) {

    return;

  }


  const content =
    getCurrentContentInfo();


  if (!content) {

    return;

  }


  // ====================================================
  // PROFESSOR ATUALMENTE SINCRONIZA APENAS LESSONS
  // ====================================================

  if (
    content.type !==
    "lesson"
  ) {

    return;

  }


  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return;

  }


  const state = {

    source:
      "student",

    type:
      "lesson",

    number:
      content.number,

    title:
      content.title,

    cardIndex:
      currentIndex,

    currentCard:
      currentIndex + 1,

    totalCards:
      lessonCards.length,

    updatedAt:
      Date.now()

  };


  // ====================================================
  // SALVAR ÚLTIMO ESTADO
  // ====================================================

  localStorage.setItem(
    "teacherLessonSyncState",
    JSON.stringify(
      state
    )
  );


  // ====================================================
  // ENVIAR PARA PROFESSOR
  // ====================================================

  if (
    teacherSyncChannel
  ) {

    teacherSyncChannel.postMessage(
      state
    );

  }


  console.log(
    "Professor sincronizado:",
    state
  );

}



// ======================================================
// RECEBER ALTERAÇÃO DO PROFESSOR
// ======================================================

function handleTeacherCardSync(
  state
) {

  if (!state) {

    return;

  }


  // ====================================================
  // SOMENTE MENSAGEM DO PROFESSOR
  // ====================================================

  if (
    state.source !==
    "teacher"
  ) {

    return;

  }


  // ====================================================
  // SOMENTE LESSON
  // ====================================================

  if (
    state.type !==
    "lesson"
  ) {

    return;

  }


  const content =
    getCurrentContentInfo();


  if (!content) {

    return;

  }


  // ====================================================
  // ALUNO PRECISA ESTAR EM LESSON
  // ====================================================

  if (
    content.type !==
    "lesson"
  ) {

    return;

  }


  // ====================================================
  // PRECISA SER A MESMA AULA
  // ====================================================

  if (
    state.number !==
    content.number
  ) {

    console.warn(
      "Professor enviou card de outra Lesson:",
      state.number,
      "Aluno está na:",
      content.number
    );


    return;

  }


  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return;

  }


  const newCardIndex =
    Number(
      state.cardIndex
    );


  // ====================================================
  // VALIDAR ÍNDICE
  // ====================================================

  if (
    !Number.isInteger(
      newCardIndex
    )
  ) {

    return;

  }


  if (
    newCardIndex < 0 ||
    newCardIndex >=
      lessonCards.length
  ) {

    return;

  }


  // ====================================================
  // JÁ ESTÁ NO MESMO CARD
  // ====================================================

  if (
    newCardIndex ===
    currentIndex
  ) {

    return;

  }


  console.log(
    "Professor solicitou mudança:",
    "Card",
    currentIndex + 1,
    "→",
    newCardIndex + 1
  );


  // ====================================================
  // EVITAR LOOP
  // ====================================================

  applyingTeacherSync =
    true;


  try {


    // ==================================================
    // CANCELAR SEGMENTO INDIVIDUAL
    // ==================================================

    if (
      typeof cancelSegmentPlayback ===
        "function"
    ) {

      cancelSegmentPlayback();

    }


    // ==================================================
    // ALTERAR CARD
    // ==================================================

    currentIndex =
      newCardIndex;


    // ==================================================
    // SALVAR PROGRESSO
    // ==================================================

    saveCurrentLessonPosition();


    // ==================================================
    // ATUALIZAR INTERFACE
    // ==================================================

    updateMainButtons();


    if (
      typeof renderLessonContent ===
        "function"
    ) {

      renderLessonContent();

    }


    // ==================================================
    // INICIAR RANGE DO NOVO CARD
    // ==================================================

    if (
      typeof playCurrentRange ===
        "function"
    ) {

      playCurrentRange();

    }


    console.log(
      "Aluno sincronizado pelo professor:",
      "Card",
      currentIndex + 1,
      "/",
      lessonCards.length
    );


  }

  finally {


    // ==================================================
    // LIBERAR NOVAS SINCRONIZAÇÕES
    // ==================================================

    applyingTeacherSync =
      false;

  }

}



// ======================================================
// ESCUTAR PROFESSOR
// ======================================================

if (
  teacherSyncChannel
) {

  teacherSyncChannel.onmessage =
    function (event) {

      handleTeacherCardSync(
        event.data
      );

    };

}



// ======================================================
// SALVAR POSIÇÃO ATUAL
//
// SOMENTE PARA LESSONS
// ======================================================

function saveCurrentLessonPosition() {

  const content =
    getCurrentContentInfo();


  if (!content) {

    return;

  }


  // ====================================================
  // NÃO SALVAR REVIEW COMO PROGRESSO DE LESSON
  // ====================================================

  if (
    content.type !==
    "lesson"
  ) {

    return;

  }


  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return;

  }


  const progressData = {

    lesson:
      content.number,

    cardIndex:
      currentIndex,

    totalCards:
      lessonCards.length,

    updatedAt:
      Date.now()

  };


  localStorage.setItem(
    "studentLessonPosition",
    JSON.stringify(
      progressData
    )
  );


  // ====================================================
  // AVISAR aluno.html
  // ====================================================

  if (
    window.parent &&
    window.parent !== window
  ) {

    window.parent.postMessage(
      {

        type:
          "LESSON_POSITION",

        lesson:
          content.number,

        cardIndex:
          currentIndex,

        totalCards:
          lessonCards.length

      },
      "*"
    );

  }


  console.log(
    "Posição salva:",
    progressData
  );

}



// ======================================================
// RESTAURAR POSIÇÃO
//
// SOMENTE PARA LESSONS
// ======================================================

function restoreCurrentLessonPosition() {

  const content =
    getCurrentContentInfo();


  if (!content) {

    return 0;

  }


  // ====================================================
  // REVIEWS SEMPRE COMEÇAM NO CARD 1
  // ====================================================

  if (
    content.type !==
    "lesson"
  ) {

    return 0;

  }


  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          "studentLessonPosition"
        )
      );


    if (
      !saved ||
      saved.lesson !==
        content.number ||
      typeof saved.cardIndex !==
        "number"
    ) {

      return 0;

    }


    if (
      saved.cardIndex < 0 ||
      saved.cardIndex >=
        lessonCards.length
    ) {

      return 0;

    }


    console.log(
      "Restaurando Lesson",
      content.number,
      "Card",
      saved.cardIndex + 1
    );


    return saved.cardIndex;

  }

  catch (error) {

    console.warn(
      "Erro ao restaurar posição:",
      error
    );


    return 0;

  }

}



// ======================================================
// INICIALIZAÇÃO
// ======================================================

function initializeLesson() {

  console.log(
    "Inicializando conteúdo..."
  );


  // ====================================================
  // VALIDAR TÍTULO
  // ====================================================

  if (
    typeof lessonTitle ===
      "undefined" ||
    typeof lessonTitle !==
      "string"
  ) {

    console.error(
      "lessonTitle não definido corretamente."
    );


    return;

  }


  // ====================================================
  // VALIDAR VÍDEO
  // ====================================================

  if (
    typeof currentVideoId ===
      "undefined" ||
    !currentVideoId
  ) {

    console.error(
      "currentVideoId não definido."
    );


    return;

  }


  // ====================================================
  // VALIDAR CARDS
  // ====================================================

  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    console.error(
      "lessonCards não definido corretamente."
    );


    return;

  }


  // ====================================================
  // VALIDAR RANGES
  // ====================================================

  if (
    typeof timeRanges ===
      "undefined" ||
    !Array.isArray(
      timeRanges
    )
  ) {

    console.error(
      "timeRanges não definido corretamente."
    );


    return;

  }


  // ====================================================
  // AVISO CARDS X RANGES
  // ====================================================

  if (
    timeRanges.length !==
    lessonCards.length
  ) {

    console.warn(
      "Quantidade de ranges diferente da quantidade de cards.",
      {

        cards:
          lessonCards.length,

        ranges:
          timeRanges.length

      }
    );

  }


  // ====================================================
  // RESTAURAR CARD
  // ====================================================

  currentIndex =
    restoreCurrentLessonPosition();


  // ====================================================
  // TÍTULO DA PÁGINA
  // ====================================================

  document.title =
    `${lessonTitle} - English Listening Practice`;


  // ====================================================
  // INTERFACE
  // ====================================================

  updateMainButtons();


  if (
    typeof renderLessonContent ===
      "function"
  ) {

    renderLessonContent();

  }


  // ====================================================
  // CONTEÚDO PRONTO
  // ====================================================

  window.lessonReady =
    true;


  // ====================================================
  // SALVAR POSIÇÃO INICIAL
  // ====================================================

  saveCurrentLessonPosition();


  // ====================================================
  // SINCRONIZAR PROFESSOR
  // ====================================================

  syncTeacherPanel();


  console.log(
    "Conteúdo carregado:",
    lessonTitle
  );


  console.log(
    "Card inicial:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  console.log(
    "Vídeo:",
    currentVideoId
  );


  // ====================================================
  // PLAYER
  // ====================================================

  if (
    typeof tryInitializePlayer ===
      "function"
  ) {

    tryInitializePlayer();

  }

}



// ======================================================
// MODO DESENVOLVEDOR
// ======================================================

function toggleDevMode() {

  const checkbox =
    document.getElementById(
      "devCheckbox"
    );


  isDevMode =
    checkbox
      ? checkbox.checked
      : false;


  console.log(
    "Modo desenvolvedor:",
    isDevMode
      ? "ATIVADO"
      : "DESATIVADO"
  );


  // ====================================================
  // ATIVOU DEV
  // ====================================================

  if (isDevMode) {

    if (
      typeof player !==
        "undefined" &&
      player &&
      typeof player.pauseVideo ===
        "function"
    ) {

      player.pauseVideo();

    }

  }


  // ====================================================
  // DESATIVOU DEV
  // ====================================================

  else {

    if (
      typeof player !==
        "undefined" &&
      player &&
      typeof player.playVideo ===
        "function"
    ) {

      player.playVideo();

    }

  }


  updateMainButtons();

}



// ======================================================
// ATUALIZAR BOTÕES
// ======================================================

function updateMainButtons() {

  const nextBtn =
    document.getElementById(
      "nextBtn"
    );


  if (!nextBtn) {

    return;

  }


  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    nextBtn.disabled =
      true;


    return;

  }


  // ====================================================
  // ÚLTIMO CARD
  // ====================================================

  if (
    currentIndex >=
    lessonCards.length - 1
  ) {

    nextBtn.disabled =
      true;


    return;

  }


  // ====================================================
  // DEV LIBERA NAVEGAÇÃO
  // ====================================================

  if (isDevMode) {

    nextBtn.disabled =
      false;


    return;

  }


  nextBtn.disabled =
    true;

}



// ======================================================
// LIBERAR PRÓXIMO
// ======================================================

function unlockNextButton() {

  const nextBtn =
    document.getElementById(
      "nextBtn"
    );


  if (!nextBtn) {

    return;

  }


  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return;

  }


  if (
    currentIndex <
    lessonCards.length - 1
  ) {

    nextBtn.disabled =
      false;

  }

}



// ======================================================
// BLOQUEAR PRÓXIMO
// ======================================================

function lockNextButton() {

  const nextBtn =
    document.getElementById(
      "nextBtn"
    );


  if (!nextBtn) {

    return;

  }


  if (!isDevMode) {

    nextBtn.disabled =
      true;

  }

}



// ======================================================
// CARD ANTERIOR
// ======================================================

function prevCard() {

  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return;

  }


  if (
    currentIndex <= 0
  ) {

    return;

  }


  // ====================================================
  // CANCELAR SEGMENTO
  // ====================================================

  if (
    typeof cancelSegmentPlayback ===
      "function"
  ) {

    cancelSegmentPlayback();

  }


  // ====================================================
  // ALTERAR CARD
  // ====================================================

  currentIndex--;


  // ====================================================
  // SALVAR POSIÇÃO
  // ====================================================

  saveCurrentLessonPosition();


  // ====================================================
  // SINCRONIZAR PROFESSOR
  // ====================================================

  syncTeacherPanel();


  console.log(
    "Card atual:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  // ====================================================
  // INTERFACE
  // ====================================================

  updateMainButtons();


  if (
    typeof renderLessonContent ===
      "function"
  ) {

    renderLessonContent();

  }


  // ====================================================
  // VÍDEO
  // ====================================================

  if (
    typeof playCurrentRange ===
      "function"
  ) {

    playCurrentRange();

  }

}



// ======================================================
// PRÓXIMO CARD
// ======================================================

function nextCard() {

  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return;

  }


  if (
    currentIndex >=
    lessonCards.length - 1
  ) {

    return;

  }


  const nextBtn =
    document.getElementById(
      "nextBtn"
    );


  // ====================================================
  // FORA DO DEV, RESPEITAR BLOQUEIO
  // ====================================================

  if (
    !isDevMode &&
    nextBtn &&
    nextBtn.disabled
  ) {

    console.log(
      "Próximo card ainda bloqueado."
    );


    return;

  }


  // ====================================================
  // CANCELAR SEGMENTO
  // ====================================================

  if (
    typeof cancelSegmentPlayback ===
      "function"
  ) {

    cancelSegmentPlayback();

  }


  // ====================================================
  // ALTERAR CARD
  // ====================================================

  currentIndex++;


  // ====================================================
  // SALVAR POSIÇÃO
  // ====================================================

  saveCurrentLessonPosition();


  // ====================================================
  // SINCRONIZAR PROFESSOR
  // ====================================================

  syncTeacherPanel();


  console.log(
    "Card atual:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  // ====================================================
  // INTERFACE
  // ====================================================

  updateMainButtons();


  if (
    typeof renderLessonContent ===
      "function"
  ) {

    renderLessonContent();

  }


  // ====================================================
  // VÍDEO
  // ====================================================

  if (
    typeof playCurrentRange ===
      "function"
  ) {

    playCurrentRange();

  }

}



// ======================================================
// RANGE ATUAL
// ======================================================

function getCurrentRange() {

  if (
    typeof timeRanges ===
      "undefined" ||
    !Array.isArray(
      timeRanges
    )
  ) {

    return null;

  }


  if (
    currentIndex < 0 ||
    currentIndex >=
      timeRanges.length
  ) {

    return null;

  }


  return timeRanges[
    currentIndex
  ];

}



// ======================================================
// CARD ATUAL
// ======================================================

function getCurrentCard() {

  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    return null;

  }


  return (
    lessonCards[
      currentIndex
    ] || null
  );

}



// ======================================================
// MARCAR LESSON COMO CONCLUÍDA
//
// REVIEWS NÃO ENTRAM NO PROGRESSO DAS 60 AULAS
// ======================================================

function markLessonCompleted() {

  const content =
    getCurrentContentInfo();


  if (!content) {

    return;

  }


  // ====================================================
  // REVIEW NÃO CONTA COMO LESSON
  // ====================================================

  if (
    content.type !==
    "lesson"
  ) {

    console.log(
      `${content.title} concluído. Não será contado como Lesson.`
    );


    return;

  }


  const lessonNumber =
    content.number;


  let completedLessons =
    [];


  try {

    completedLessons =
      JSON.parse(
        localStorage.getItem(
          "studentCompletedLessons"
        )
      ) || [];

  }

  catch (error) {

    completedLessons =
      [];

  }


  if (
    !Array.isArray(
      completedLessons
    )
  ) {

    completedLessons =
      [];

  }


  // ====================================================
  // SALVAR CONCLUSÃO
  // ====================================================

  if (
    !completedLessons.includes(
      lessonNumber
    )
  ) {

    completedLessons.push(
      lessonNumber
    );


    localStorage.setItem(
      "studentCompletedLessons",
      JSON.stringify(
        completedLessons
      )
    );


    console.log(
      `Lesson ${lessonNumber} concluída.`
    );

  }


  // ====================================================
  // LIMPAR POSIÇÃO DA AULA CONCLUÍDA
  // ====================================================

  try {

    const savedPosition =
      JSON.parse(
        localStorage.getItem(
          "studentLessonPosition"
        )
      );


    if (
      savedPosition &&
      savedPosition.lesson ===
        lessonNumber
    ) {

      localStorage.removeItem(
        "studentLessonPosition"
      );

    }

  }

  catch (error) {

    console.warn(
      "Não foi possível limpar posição:",
      error
    );

  }


  // ====================================================
  // AVISAR PORTAL
  // ====================================================

  if (
    window.parent &&
    window.parent !== window
  ) {

    window.parent.postMessage(
      {

        type:
          "LESSON_COMPLETED",

        lesson:
          lessonNumber

      },
      "*"
    );

  }

}



// ======================================================
// ESTADO / DEBUG
// ======================================================

function getLessonState() {

  const content =
    getCurrentContentInfo();


  return {

    content:
      content,

    lesson:
      typeof lessonTitle ===
        "string"
        ? lessonTitle
        : null,

    video:
      typeof currentVideoId !==
        "undefined"
        ? currentVideoId
        : null,

    currentIndex:
      currentIndex,

    currentCard:
      currentIndex + 1,

    totalCards:
      typeof lessonCards !==
        "undefined" &&
      Array.isArray(
        lessonCards
      )
        ? lessonCards.length
        : 0,

    isDevMode:
      isDevMode,

    lessonReady:
      window.lessonReady,

    applyingTeacherSync:
      applyingTeacherSync,

    range:
      getCurrentRange()

  };

}



// ======================================================
// NAVEGAÇÃO PELO TECLADO
// ======================================================

document.addEventListener(
  "keydown",
  function (event) {

    const target =
      event.target;


    const tag =
      target &&
      target.tagName
        ? target.tagName.toLowerCase()
        : "";


    // ==================================================
    // NÃO INTERFERIR EM FORMULÁRIOS
    // ==================================================

    if (
      tag === "input" ||
      tag === "textarea" ||
      tag === "select"
    ) {

      return;

    }


    // ==================================================
    // SETA ESQUERDA
    // ==================================================

    if (
      event.key ===
      "ArrowLeft"
    ) {

      event.preventDefault();


      prevCard();

    }


    // ==================================================
    // SETA DIREITA
    // ==================================================

    if (
      event.key ===
      "ArrowRight"
    ) {

      event.preventDefault();


      nextCard();

    }

  }
);