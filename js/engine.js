// ======================================================
// engine.js
// ======================================================


// ======================================================
// ESTADO GLOBAL DA AULA
// ======================================================

let currentIndex = 0;

let isDevMode = false;


// Indica que o arquivo lessonXX.js já foi carregado
window.lessonReady = false;


// ======================================================
// INICIALIZAÇÃO DA AULA
// ======================================================

function initializeLesson() {

  console.log(
    "Inicializando aula..."
  );


  // ====================================================
  // VALIDAR DADOS
  // ====================================================

  if (
    typeof lessonTitle ===
    "undefined"
  ) {

    console.error(
      "lessonTitle não definido."
    );

    return;

  }


  if (
    typeof currentVideoId ===
    "undefined"
  ) {

    console.error(
      "currentVideoId não definido."
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

    console.error(
      "lessonCards não definido corretamente."
    );

    return;

  }


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

// ======================================================
// SALVAR PROGRESSO DO CARD ATUAL
// ======================================================

function saveCurrentLessonPosition() {

  if (
    typeof lessonTitle === "undefined"
  ) {
    return;
  }


  const match =
    String(
      lessonTitle
    ).match(
      /\d+/
    );


  if (!match) {
    return;
  }


  const lessonNumber =
    match[0].padStart(
      2,
      "0"
    );


  const progressData = {

    lesson:
      lessonNumber,

    cardIndex:
      currentIndex,

    updatedAt:
      Date.now()

  };


  localStorage.setItem(
    "studentLessonPosition",
    JSON.stringify(
      progressData
    )
  );


  // Avisar aluno.html
  if (
    window.parent &&
    window.parent !== window
  ) {

    window.parent.postMessage(
      {

        type:
          "LESSON_POSITION",

        lesson:
          lessonNumber,

        cardIndex:
          currentIndex

      },
      "*"
    );

  }


  console.log(
    "Posição salva:",
    progressData
  );

}
  // ====================================================
  // RESET
  // ====================================================

  currentIndex = 0;


  // ====================================================
  // TÍTULO
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
  // AULA PRONTA
  // ====================================================

  window.lessonReady = true;


  console.log(
    "Aula carregada:",
    lessonTitle
  );


  console.log(
    "Total de cards:",
    lessonCards.length
  );


  console.log(
    "Vídeo:",
    currentVideoId
  );


  // ====================================================
  // TENTAR INICIAR PLAYER
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
  // DEV ATIVADO
  // PAUSAR VÍDEO
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
  // DEV DESATIVADO
  // RETOMAR VÍDEO
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
// ATUALIZAR BOTÃO PRÓXIMO
// ======================================================

function updateMainButtons() {

  const nextBtn =
    document.getElementById(
      "nextBtn"
    );


  if (!nextBtn) {

    return;

  }


  // ====================================================
  // AULA AINDA NÃO CARREGOU
  // ====================================================

  if (
    typeof lessonCards ===
      "undefined" ||
    !Array.isArray(
      lessonCards
    )
  ) {

    nextBtn.disabled = true;

    return;

  }


  // ====================================================
  // ÚLTIMO CARD
  // ====================================================

  if (
    currentIndex >=
    lessonCards.length - 1
  ) {

    nextBtn.disabled = true;

    return;

  }


  // ====================================================
  // DEV ATIVO
  // ====================================================

  if (isDevMode) {

    nextBtn.disabled = false;

    return;

  }


  // ====================================================
  // MODO NORMAL
  // ====================================================

  nextBtn.disabled = true;

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
      "undefined"
  ) {

    return;

  }


  if (
    currentIndex <
    lessonCards.length - 1
  ) {

    nextBtn.disabled = false;

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

    nextBtn.disabled = true;

  }

}


// ======================================================
// CARD ANTERIOR
// ======================================================

function prevCard() {

  if (
    typeof lessonCards ===
      "undefined"
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
  // DIMINUIR ÍNDICE
  // ====================================================

  currentIndex--;


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
  // PLAY DO RANGE
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
      "undefined"
  ) {

    return;

  }


  // ====================================================
  // ÚLTIMO CARD
  // ====================================================

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
  // FORA DO DEV,
  // RESPEITAR BLOQUEIO
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
  // AVANÇAR
  // ====================================================

  currentIndex++;


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
  // RANGE
  // ====================================================

  if (
    typeof playCurrentRange ===
      "function"
  ) {

    playCurrentRange();

  }

}


// ======================================================
// PEGAR RANGE ATUAL
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
// PEGAR CARD ATUAL
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
// MARCAR AULA COMO CONCLUÍDA
// ======================================================

function markLessonCompleted() {

  if (
    typeof lessonTitle ===
      "undefined"
  ) {

    return;

  }


  // ====================================================
  // EXTRAIR NÚMERO
  //
  // Lesson 01 -> 01
  // ====================================================

  const match =
    String(
      lessonTitle
    ).match(
      /\d+/
    );


  if (!match) {

    return;

  }


  const lessonNumber =
    match[0].padStart(
      2,
      "0"
    );


  // ====================================================
  // PEGAR AULAS CONCLUÍDAS
  // ====================================================

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


  // ====================================================
  // SALVAR SE AINDA NÃO EXISTIR
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
  // AVISAR aluno.html
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
// ESTADO DA AULA
// ======================================================

function getLessonState() {

  return {

    lesson:
      typeof lessonTitle !==
        "undefined"
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
        "undefined"
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

    const tag =
      event.target.tagName
        .toLowerCase();


    // Não interferir em campos
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