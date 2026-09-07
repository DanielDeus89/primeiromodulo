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
// SINCRONIZAÇÃO COM PAINEL DO PROFESSOR
// ======================================================

const teacherSyncChannel =
  new BroadcastChannel(
    "teacherLessonSync"
  );


// ======================================================
// ENVIAR ESTADO PARA O PROFESSOR
// ======================================================

function syncTeacherPanel() {

  const content =
    getCurrentContentInfo();


  if (!content) {

    return;

  }


  const state = {

    type:
      content.type,

    number:
      content.number,

    title:
      content.title,

    cardIndex:
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

    updatedAt:
      Date.now()

  };


  // ====================================================
  // GUARDAR ÚLTIMO ESTADO
  // ====================================================

  localStorage.setItem(
    "teacherLessonSyncState",
    JSON.stringify(
      state
    )
  );


  // ====================================================
  // ENVIAR PARA ABA DO PROFESSOR
  // ====================================================

  teacherSyncChannel.postMessage(
    state
  );


  console.log(
    "Professor sincronizado:",
    state
  );

}

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


  // Não salvar Review como progresso de aula
  if (
    content.type !==
    "lesson"
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


  // Reviews sempre começam no Card 1
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
  // AVISO DE DIFERENÇA ENTRE CARDS E RANGES
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

    syncTeacherPanel();

    saveCurrentLessonPosition();

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


  // Último card
  if (
    currentIndex >=
    lessonCards.length - 1
  ) {

    nextBtn.disabled =
      true;

    return;

  }


  // DEV libera navegação
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


  if (
    typeof cancelSegmentPlayback ===
    "function"
  ) {

    cancelSegmentPlayback();

  }


  currentIndex--;


  // ====================================================
  // SALVAR POSIÇÃO
  // ====================================================

  syncTeacherPanel();

  saveCurrentLessonPosition();


  console.log(
    "Card atual:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  updateMainButtons();


  if (
    typeof renderLessonContent ===
    "function"
  ) {

    renderLessonContent();

  }


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


  if (
    typeof cancelSegmentPlayback ===
    "function"
  ) {

    cancelSegmentPlayback();

  }


  currentIndex++;

  syncTeacherPanel();


  // ====================================================
  // SALVAR POSIÇÃO
  // ====================================================

  saveCurrentLessonPosition();


  console.log(
    "Card atual:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  updateMainButtons();


  if (
    typeof renderLessonContent ===
    "function"
  ) {

    renderLessonContent();

  }


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
  // REVIEW NÃO MARCA LESSON COMO CONCLUÍDA
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
  // SALVAR
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
  // LIMPAR POSIÇÃO SALVA DESSA AULA
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