// player.js

// ======================================================
// PLAYER DO YOUTUBE
// ======================================================

let player = null;


// ======================================================
// ESTADO DE CARREGAMENTO
// ======================================================

// A API do YouTube terminou de carregar?
let youtubeApiReady = false;


// ======================================================
// CONTROLE DO RANGE PRINCIPAL
// ======================================================

let rangeMonitor = null;


// ======================================================
// CONTROLE DE SEGMENTOS
// ======================================================

let segmentMonitor = null;

let isPlayingSegment = false;

let currentSegmentStart = null;
let currentSegmentEnd = null;


// ======================================================
// CONTROLE DE BUFFERING
// ======================================================

let bufferingTimer = null;

let recoveryAttempts = 0;

let lastKnownTime = 0;

const BUFFER_TIMEOUT = 5000;

const MAX_RECOVERY_ATTEMPTS = 3;


// ======================================================
// API DO YOUTUBE PRONTA
// ======================================================

function onYouTubeIframeAPIReady() {

  console.log("API do YouTube pronta.");

  youtubeApiReady = true;

  tryInitializePlayer();

}


// ======================================================
// TENTAR INICIALIZAR O PLAYER
// ======================================================

function tryInitializePlayer() {

  // API do YouTube ainda não carregou
  if (!youtubeApiReady) {

    console.log(
      "Aguardando API do YouTube..."
    );

    return;

  }


  // Aula ainda não carregou
  if (!window.lessonReady) {

    console.log(
      "Aguardando conteúdo da aula..."
    );

    return;

  }


  // Player já existe
  if (player) {

    console.log(
      "Player já inicializado."
    );

    return;

  }


  // Validar vídeo
  if (
    typeof currentVideoId === "undefined" ||
    !currentVideoId
  ) {

    console.error(
      "currentVideoId não definido."
    );

    return;

  }


  console.log(
    "Criando player para vídeo:",
    currentVideoId
  );


  player = new YT.Player(
    "player",
    {

      videoId: currentVideoId,

      playerVars: {

        autoplay: 0,

        controls: 1,

        rel: 0,

        modestbranding: 1,

        playsinline: 1

      },

      events: {

        onReady:
          onPlayerReady,

        onStateChange:
          onPlayerStateChange,

        onError:
          onPlayerError

      }

    }
  );

}


// ======================================================
// PLAYER PRONTO
// ======================================================

function onPlayerReady() {

  console.log(
    "YouTube Player pronto."
  );


  if (
    player &&
    typeof player.unMute ===
    "function"
  ) {

    player.unMute();

  }


  // Pequeno atraso para garantir
  // que o player esteja realmente operacional.
  setTimeout(
    function () {

      playCurrentRange();

    },
    300
  );

}


// ======================================================
// EVENTOS DO PLAYER
// ======================================================

function onPlayerStateChange(event) {

  // ----------------------------------------------------
  // PLAYING
  // ----------------------------------------------------

  if (
    event.data ===
    YT.PlayerState.PLAYING
  ) {

    clearTimeout(
      bufferingTimer
    );


    bufferingTimer =
      null;


    recoveryAttempts =
      0;


    if (
      player &&
      typeof player.getCurrentTime ===
      "function"
    ) {

      lastKnownTime =
        player.getCurrentTime();

    }


    hideVideoStatus();

  }


  // ----------------------------------------------------
  // BUFFERING
  // ----------------------------------------------------

  if (
    event.data ===
    YT.PlayerState.BUFFERING
  ) {

    if (
      player &&
      typeof player.getCurrentTime ===
      "function"
    ) {

      lastKnownTime =
        player.getCurrentTime();

    }


    showVideoStatus(
      "⏳ Conexão instável. Carregando vídeo..."
    );


    startBufferRecovery();

  }


  // ----------------------------------------------------
  // ENDED
  // ----------------------------------------------------

  if (
    event.data ===
    YT.PlayerState.ENDED
  ) {

    stopRangeMonitor();

    cancelSegmentPlayback();

  }

}


// ======================================================
// RECUPERAÇÃO DE BUFFERING
// ======================================================

function startBufferRecovery() {

  clearTimeout(
    bufferingTimer
  );


  bufferingTimer =
    setTimeout(
      function () {

        if (
          !player ||
          typeof player.getPlayerState !==
          "function"
        ) {

          return;

        }


        const state =
          player.getPlayerState();


        // Se já saiu do buffering,
        // não precisa recuperar.
        if (
          state !==
          YT.PlayerState.BUFFERING
        ) {

          return;

        }


        recoveryAttempts++;


        console.warn(
          "Tentativa de recuperação:",
          recoveryAttempts,
          "/",
          MAX_RECOVERY_ATTEMPTS
        );


        // ------------------------------------------------
        // TENTAR RECUPERAR
        // ------------------------------------------------

        if (
          recoveryAttempts <=
          MAX_RECOVERY_ATTEMPTS
        ) {

          let recoveryTime =
            lastKnownTime;


          if (
            typeof player.getCurrentTime ===
            "function"
          ) {

            const currentTime =
              player.getCurrentTime();


            if (
              Number.isFinite(
                currentTime
              ) &&
              currentTime >= 0
            ) {

              recoveryTime =
                currentTime;

            }

          }


          console.log(
            "Tentando recuperar em:",
            recoveryTime
          );


          player.seekTo(
            recoveryTime,
            true
          );


          setTimeout(
            function () {

              if (
                player &&
                typeof player.playVideo ===
                "function"
              ) {

                player.playVideo();

              }

            },
            300
          );


          startBufferRecovery();

        }

        // ------------------------------------------------
        // FALHOU APÓS TODAS AS TENTATIVAS
        // ------------------------------------------------

        else {

          console.error(
            "Não foi possível recuperar o vídeo."
          );


          showVideoStatus(
            "⚠️ Não foi possível continuar o vídeo. Verifique a conexão."
          );

        }

      },
      BUFFER_TIMEOUT
    );

}


// ======================================================
// ERRO DO PLAYER
// ======================================================

function onPlayerError(event) {

  console.error(
    "Erro no YouTube Player:",
    event.data
  );


  showVideoStatus(
    "⚠️ Erro ao carregar o vídeo."
  );

}


// ======================================================
// REPRODUZIR RANGE PRINCIPAL DO CARD
// ======================================================

function playCurrentRange() {

  if (
    !player ||
    typeof player.seekTo !==
    "function"
  ) {

    console.warn(
      "Player ainda não está pronto."
    );

    return;

  }


  if (
    typeof getCurrentRange !==
    "function"
  ) {

    console.error(
      "getCurrentRange() não encontrada."
    );

    return;

  }


  const range =
    getCurrentRange();


  if (!range) {

    console.warn(
      "Range atual não encontrado."
    );

    return;

  }


  // Cancela eventual frase individual
  cancelSegmentPlayback();


  // Para monitor anterior
  stopRangeMonitor();


  console.log(
    "Reproduzindo range principal:",
    range.start,
    "até",
    range.end
  );


  // Bloquear próximo
  if (
    typeof lockNextButton ===
    "function"
  ) {

    lockNextButton();

  }


  // Ir para início do trecho
  player.seekTo(
    Number(range.start),
    true
  );


  player.playVideo();


  // Monitorar final real
  startRangeMonitor(
    Number(range.end)
  );

}


// ======================================================
// MONITOR DO RANGE PRINCIPAL
// ======================================================

function startRangeMonitor(
  endTime
) {

  stopRangeMonitor();


  if (
    !Number.isFinite(
      endTime
    )
  ) {

    console.error(
      "Fim de range inválido:",
      endTime
    );

    return;

  }


  rangeMonitor =
    setInterval(
      function () {

        if (
          !player ||
          typeof player.getCurrentTime !==
          "function" ||
          typeof player.getPlayerState !==
          "function"
        ) {

          return;

        }


        // Uma frase individual está tocando.
        // Não interferir.
        if (
          isPlayingSegment
        ) {

          return;

        }


        const state =
          player.getPlayerState();


        // Durante buffering,
        // não avaliar final.
        if (
          state ===
          YT.PlayerState.BUFFERING
        ) {

          return;

        }


        const currentTime =
          player.getCurrentTime();


        if (
          Number.isFinite(
            currentTime
          )
        ) {

          lastKnownTime =
            currentTime;

        }


        // Chegou ao final real do range
        if (
          currentTime >=
          endTime - 0.2
        ) {

          player.pauseVideo();


          stopRangeMonitor();


          if (
            typeof unlockNextButton ===
            "function"
          ) {

            unlockNextButton();

          }


          console.log(
            "Fim do range principal."
          );

        }

      },
      100
    );

}


// ======================================================
// PARAR MONITOR DO RANGE
// ======================================================

function stopRangeMonitor() {

  if (
    rangeMonitor
  ) {

    clearInterval(
      rangeMonitor
    );


    rangeMonitor =
      null;

  }

}


// ======================================================
// REPRODUZIR FRASE / SEGMENTO
// ======================================================

function playSegment(
  start,
  end
) {

  if (
    !player ||
    typeof player.seekTo !==
    "function"
  ) {

    console.warn(
      "Player ainda não está pronto."
    );

    return;

  }


  start =
    Number(start);

  end =
    Number(end);


  // ----------------------------------------------------
  // VALIDAR SEGMENTO
  // ----------------------------------------------------

  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    end <= start
  ) {

    console.error(
      "Segmento inválido:",
      start,
      end
    );

    return;

  }


  // Cancela segmento anterior
  cancelSegmentPlayback();


  isPlayingSegment =
    true;


  currentSegmentStart =
    start;


  currentSegmentEnd =
    end;


  console.log(
    "Reproduzindo segmento:",
    start,
    "até",
    end
  );


  // ----------------------------------------------------
  // IR PARA INÍCIO DA FRASE
  // ----------------------------------------------------

  player.seekTo(
    start,
    true
  );


  player.playVideo();


  // ----------------------------------------------------
  // MONITOR DO TEMPO REAL
  // ----------------------------------------------------

  segmentMonitor =
    setInterval(
      function () {

        if (
          !player ||
          typeof player.getCurrentTime !==
          "function" ||
          typeof player.getPlayerState !==
          "function"
        ) {

          return;

        }


        const state =
          player.getPlayerState();


        // Buffering:
        // não encerrar segmento.
        if (
          state ===
          YT.PlayerState.BUFFERING
        ) {

          return;

        }


        const currentTime =
          player.getCurrentTime();


        if (
          Number.isFinite(
            currentTime
          )
        ) {

          lastKnownTime =
            currentTime;

        }


        // ------------------------------------------------
        // FINAL REAL DA FRASE
        // ------------------------------------------------

        if (
          currentTime >=
          currentSegmentEnd - 0.05
        ) {

          player.pauseVideo();


          clearInterval(
            segmentMonitor
          );


          segmentMonitor =
            null;


          isPlayingSegment =
            false;


          currentSegmentStart =
            null;


          currentSegmentEnd =
            null;


          console.log(
            "Fim do segmento."
          );

        }

      },
      50
    );

}


// ======================================================
// CANCELAR SEGMENTO
// ======================================================

function cancelSegmentPlayback() {

  if (
    segmentMonitor
  ) {

    clearInterval(
      segmentMonitor
    );


    segmentMonitor =
      null;

  }


  isPlayingSegment =
    false;


  currentSegmentStart =
    null;


  currentSegmentEnd =
    null;

}


// ======================================================
// STATUS VISUAL DO PLAYER
// ======================================================

function showVideoStatus(
  message
) {

  const status =
    document.getElementById(
      "videoStatus"
    );


  if (!status) {

    return;

  }


  status.textContent =
    message;


  status.style.display =
    "block";

}


// ======================================================
// ESCONDER STATUS
// ======================================================

function hideVideoStatus() {

  const status =
    document.getElementById(
      "videoStatus"
    );


  if (!status) {

    return;

  }


  status.textContent =
    "";


  status.style.display =
    "none";

}


// ======================================================
// DEBUG
//
// Pode executar no console:
//
// getPlayerState()
// ======================================================

function getPlayerState() {

  if (!player) {

    return {
      ready: false,
      youtubeApiReady:
        youtubeApiReady,
      lessonReady:
        window.lessonReady
    };

  }


  return {

    ready: true,

    youtubeApiReady:
      youtubeApiReady,

    lessonReady:
      window.lessonReady,

    video:
      typeof currentVideoId !==
      "undefined"
        ? currentVideoId
        : null,

    time:
      typeof player.getCurrentTime ===
      "function"
        ? player.getCurrentTime()
        : null,

    state:
      typeof player.getPlayerState ===
      "function"
        ? player.getPlayerState()
        : null,

    isPlayingSegment:
      isPlayingSegment,

    currentSegmentStart:
      currentSegmentStart,

    currentSegmentEnd:
      currentSegmentEnd,

    bufferingAttempts:
      recoveryAttempts

  };

}