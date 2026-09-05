// engine.js

// ======================================================
// ESTADO GLOBAL DA AULA
// ======================================================

let currentIndex = 0;
let isDevMode = false;


// Indica que o arquivo lessonXX.js já foi carregado.
// O player.js poderá consultar esse valor.
window.lessonReady = false;


// ======================================================
// INICIALIZAÇÃO DA AULA
// ======================================================

function initializeLesson() {

  console.log("Inicializando aula...");


  // ----------------------------------------------------
  // VALIDAR DADOS OBRIGATÓRIOS
  // ----------------------------------------------------

  if (typeof lessonTitle === "undefined") {

    console.error(
      "lessonTitle não foi definido no arquivo da aula."
    );

    return;
  }


  if (typeof currentVideoId === "undefined") {

    console.error(
      "currentVideoId não foi definido no arquivo da aula."
    );

    return;
  }


  if (
    typeof lessonCards === "undefined" ||
    !Array.isArray(lessonCards)
  ) {

    console.error(
      "lessonCards não foi definido corretamente."
    );

    return;
  }


  if (
    typeof timeRanges === "undefined" ||
    !Array.isArray(timeRanges)
  ) {

    console.error(
      "timeRanges não foi definido corretamente."
    );

    return;
  }


  // ----------------------------------------------------
  // RESETAR ESTADO
  // ----------------------------------------------------

  currentIndex = 0;


  // ----------------------------------------------------
  // ATUALIZAR TÍTULO DO NAVEGADOR
  // ----------------------------------------------------

  document.title =
    `${lessonTitle} - English Listening Practice`;


  // ----------------------------------------------------
  // ATUALIZAR INTERFACE
  // ----------------------------------------------------

  updateMainButtons();


  if (
    typeof renderLessonContent === "function"
  ) {

    renderLessonContent();

  }


  // ----------------------------------------------------
  // MARCAR AULA COMO PRONTA
  // ----------------------------------------------------

  window.lessonReady = true;


  console.log(
    "Aula carregada:",
    lessonTitle
  );


  console.log(
    "Cards:",
    lessonCards.length
  );


  console.log(
    "Vídeo:",
    currentVideoId
  );


  // ----------------------------------------------------
  // TENTAR INICIALIZAR PLAYER
  //
  // A API do YouTube pode já ter carregado
  // ou ainda pode estar carregando.
  // ----------------------------------------------------

  if (
    typeof tryInitializePlayer === "function"
  ) {

    tryInitializePlayer();

  }

}


// ======================================================
// MODO DESENVOLVEDOR
// ======================================================

function toggleDevMode() {

  const checkbox =
    document.getElementById("devCheckbox");

  isDevMode =
    checkbox ? checkbox.checked : false;


  console.log(
    "Modo desenvolvedor:",
    isDevMode
      ? "ATIVADO"
      : "DESATIVADO"
  );


  // ====================================================
  // MODO DESENVOLVEDOR ATIVADO
  // ====================================================

  if (isDevMode) {

    // Pausar o vídeo
    if (
      typeof player !== "undefined" &&
      player &&
      typeof player.pauseVideo === "function"
    ) {

      player.pauseVideo();

      console.log(
        "Vídeo pausado pelo modo desenvolvedor."
      );

    }

  }


  // ====================================================
  // MODO DESENVOLVEDOR DESATIVADO
  // ====================================================

  else {

    // Continuar o vídeo de onde estava
    if (
      typeof player !== "undefined" &&
      player &&
      typeof player.playVideo === "function"
    ) {

      player.playVideo();

      console.log(
        "Vídeo retomado."
      );

    }

  }


  // Atualizar estado do botão Próximo
  updateMainButtons();
}


// ======================================================
// ATUALIZAÇÃO DOS BOTÕES
// ======================================================

function updateMainButtons() {

  const nextBtn =
    document.getElementById(
      "nextBtn"
    );


  if (!nextBtn) {

    return;

  }


  // ----------------------------------------------------
  // SE A AULA AINDA NÃO CARREGOU
  // ----------------------------------------------------

  if (
    typeof lessonCards === "undefined" ||
    !Array.isArray(lessonCards)
  ) {

    nextBtn.disabled = true;

    return;

  }


  // ----------------------------------------------------
  // ÚLTIMO CARD
  // ----------------------------------------------------

  if (
    currentIndex >=
    lessonCards.length - 1
  ) {

    nextBtn.disabled = true;

    return;

  }


  // ----------------------------------------------------
  // MODO DESENVOLVEDOR
  // ----------------------------------------------------

  if (isDevMode) {

    nextBtn.disabled = false;

    return;

  }


  // ----------------------------------------------------
  // MODO NORMAL
  //
  // O botão Próximo será liberado pelo player.js
  // quando o vídeo atingir o final do timeRange.
  // ----------------------------------------------------

  nextBtn.disabled = true;

}


// ======================================================
// LIBERAR BOTÃO PRÓXIMO
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
    typeof lessonCards === "undefined"
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
// BLOQUEAR BOTÃO PRÓXIMO
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
    typeof lessonCards === "undefined"
  ) {

    return;

  }


  // ----------------------------------------------------
  // JÁ ESTÁ NO PRIMEIRO CARD
  // ----------------------------------------------------

  if (currentIndex <= 0) {

    return;

  }


  // ----------------------------------------------------
  // CANCELAR SEGMENTO INDIVIDUAL
  // ----------------------------------------------------

  if (
    typeof cancelSegmentPlayback ===
    "function"
  ) {

    cancelSegmentPlayback();

  }


  // ----------------------------------------------------
  // ALTERAR ÍNDICE
  // ----------------------------------------------------

  currentIndex--;


  console.log(
    "Card atual:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  // ----------------------------------------------------
  // ATUALIZAR BOTÕES
  // ----------------------------------------------------

  updateMainButtons();


  // ----------------------------------------------------
  // RENDERIZAR CARD
  // ----------------------------------------------------

  if (
    typeof renderLessonContent ===
    "function"
  ) {

    renderLessonContent();

  }


  // ----------------------------------------------------
  // REPRODUZIR RANGE DO CARD
  // ----------------------------------------------------

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
    typeof lessonCards === "undefined"
  ) {

    return;

  }


  // ----------------------------------------------------
  // ÚLTIMO CARD
  // ----------------------------------------------------

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


  // ----------------------------------------------------
  // FORA DO MODO DEV,
  // RESPEITAR BLOQUEIO
  // ----------------------------------------------------

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


  // ----------------------------------------------------
  // CANCELAR SEGMENTO
  // ----------------------------------------------------

  if (
    typeof cancelSegmentPlayback ===
    "function"
  ) {

    cancelSegmentPlayback();

  }


  // ----------------------------------------------------
  // AVANÇAR CARD
  // ----------------------------------------------------

  currentIndex++;


  console.log(
    "Card atual:",
    currentIndex + 1,
    "/",
    lessonCards.length
  );


  // ----------------------------------------------------
  // ATUALIZAR INTERFACE
  // ----------------------------------------------------

  updateMainButtons();


  if (
    typeof renderLessonContent ===
    "function"
  ) {

    renderLessonContent();

  }


  // ----------------------------------------------------
  // REPRODUZIR RANGE
  // ----------------------------------------------------

  if (
    typeof playCurrentRange ===
    "function"
  ) {

    playCurrentRange();

  }

}


// ======================================================
// PEGAR RANGE DO CARD ATUAL
// ======================================================

function getCurrentRange() {

  if (
    typeof timeRanges === "undefined" ||
    !Array.isArray(timeRanges)
  ) {

    return null;

  }


  if (
    currentIndex < 0 ||
    currentIndex >= timeRanges.length
  ) {

    return null;

  }


  return timeRanges[currentIndex];

}


// ======================================================
// PEGAR CARD ATUAL
// ======================================================

function getCurrentCard() {

  if (
    typeof lessonCards === "undefined" ||
    !Array.isArray(lessonCards)
  ) {

    return null;

  }


  return (
    lessonCards[currentIndex] ||
    null
  );

}


// ======================================================
// ESTADO DA AULA
//
// Útil para testes pelo console.
// Exemplo:
//
// getLessonState()
// ======================================================

function getLessonState() {

  return {

    lesson:
      typeof lessonTitle !== "undefined"
        ? lessonTitle
        : null,

    video:
      typeof currentVideoId !== "undefined"
        ? currentVideoId
        : null,

    currentIndex:
      currentIndex,

    currentCard:
      currentIndex + 1,

    totalCards:
      typeof lessonCards !== "undefined"
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

document.addEventListener("keydown", function (event) {

  // Evita interferir quando estiver digitando
  // em input, textarea ou select.
  const tag =
    event.target.tagName.toLowerCase();

  if (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select"
  ) {
    return;
  }


  // ----------------------------------------------------
  // SETA PARA A DIREITA
  // Próximo card
  // ----------------------------------------------------

  if (event.key === "ArrowRight") {

    event.preventDefault();

    nextCard();

  }


  // ----------------------------------------------------
  // SETA PARA A ESQUERDA
  // Card anterior
  // ----------------------------------------------------

  if (event.key === "ArrowLeft") {

    event.preventDefault();

    prevCard();

  }

});