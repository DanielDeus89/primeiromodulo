// ======================================================
// player.js
// ======================================================


// ======================================================
// PLAYER DO YOUTUBE
// ======================================================

let player = null;


// ======================================================
// ESTADO DE CARREGAMENTO
// ======================================================

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

  console.log(
    "API do YouTube pronta."
  );


  youtubeApiReady = true;


  tryInitializePlayer();

}


// ======================================================
// TENTAR INICIALIZAR PLAYER
// ======================================================

function tryInitializePlayer() {

  // ====================================================
  // API AINDA NÃO CARREGOU
  // ====================================================

  if (!youtubeApiReady) {

    console.log(
      "Aguardando API do YouTube..."
    );

    return;

  }


  // ====================================================
  // AULA AINDA NÃO CARREGOU
  // ====================================================

  if (
    !window.lessonReady
  ) {

    console.log(
      "Aguardando conteúdo da aula..."
    );

    return;

  }


  // ====================================================
  // PLAYER JÁ EXISTE
  // ====================================================

  if (player) {

    console.log(
      "Player já inicializado."
    );

    return;

  }


  // ====================================================
  // VALIDAR VIDEO ID
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


  console.log(
    "Criando player:",
    currentVideoId
  );


  player =
    new YT.Player(
      "player",
      {

        videoId:
          currentVideoId,

        playerVars: {

          autoplay:
            0,

          controls:
            1,

          rel:
            0,

          modestbranding:
            1,

          playsinline:
            1

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


  // ====================================================
  // INICIAR PRIMEIRO RANGE
  // ====================================================

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

function onPlayerStateChange(
  event
) {

  // ====================================================
  // PLAYING
  // ====================================================

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


  // ====================================================
  // BUFFERING
  // ====================================================

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


  // ====================================================
  // ENDED
  // ====================================================

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


        // ==================================================
        // JÁ SAIU DO BUFFERING
        // ==================================================

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


        // ==================================================
        // TENTAR RECUPERAR
        // ==================================================

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


        // ==================================================
        // FALHOU
        // ==================================================

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

function onPlayerError(
  event
) {

  console.error(
    "Erro no YouTube Player:",
    event.data
  );


  showVideoStatus(
    "⚠️ Erro ao carregar o vídeo."
  );

}


// ======================================================
// REPRODUZIR RANGE PRINCIPAL
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


  // ====================================================
  // CANCELAR SEGMENTO
  // ====================================================

  cancelSegmentPlayback();


  // ====================================================
  // PARAR MONITOR ANTERIOR
  // ====================================================

  stopRangeMonitor();


  console.log(
    "Reproduzindo range:",
    range.start,
    "até",
    range.end
  );


  // ====================================================
  // BLOQUEAR PRÓXIMO
  // ====================================================

  if (
    typeof lockNextButton ===
      "function"
  ) {

    lockNextButton();

  }


  // ====================================================
  // SEEK
  // ====================================================

  player.seekTo(
    Number(
      range.start
    ),
    true
  );


  player.playVideo();


  // ====================================================
  // MONITORAR FINAL
  // ====================================================

  startRangeMonitor(
    Number(
      range.end
    )
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


        // ==================================================
        // NÃO INTERFERIR DURANTE SEGMENTO
        // ==================================================

        if (
          isPlayingSegment
        ) {

          return;

        }


        const state =
          player.getPlayerState();


        // ==================================================
        // BUFFERING
        // ==================================================

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


        // ==================================================
        // FIM DO RANGE
        // ==================================================

        if (
          currentTime >=
            endTime - 0.2
        ) {

          player.pauseVideo();


          stopRangeMonitor();


          // =================================================
          // VERIFICAR SE É ÚLTIMO CARD
          // =================================================

          const isLastCard =

            typeof lessonCards !==
              "undefined" &&

            Array.isArray(
              lessonCards
            ) &&

            typeof currentIndex !==
              "undefined" &&

            currentIndex ===
              lessonCards.length - 1;


          // =================================================
          // ÚLTIMO CARD
          // =================================================

          if (
            isLastCard
          ) {

            console.log(
              "Último card concluído."
            );


            if (
              typeof markLessonCompleted ===
                "function"
            ) {

              markLessonCompleted();

            }


            console.log(
              "Aula concluída."
            );


            return;

          }


          // =================================================
          // AINDA EXISTEM OUTROS CARDS
          // =================================================

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
// REPRODUZIR SEGMENTO
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


  // ====================================================
  // VALIDAR
  // ====================================================

  if (
    !Number.isFinite(
      start
    ) ||
    !Number.isFinite(
      end
    ) ||
    end <= start
  ) {

    console.error(
      "Segmento inválido:",
      start,
      end
    );

    return;

  }


  // ====================================================
  // CANCELAR SEGMENTO ANTERIOR
  // ====================================================

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


  // ====================================================
  // SEEK
  // ====================================================

  player.seekTo(
    start,
    true
  );


  player.playVideo();


  // ====================================================
  // MONITOR
  // ====================================================

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


        // ==================================================
        // BUFFERING
        // ==================================================

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


        // ==================================================
        // FINAL DO SEGMENTO
        // ==================================================

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
// STATUS VISUAL
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
// ======================================================

function getPlayerState() {

  if (!player) {

    return {

      ready:
        false,

      youtubeApiReady:
        youtubeApiReady,

      lessonReady:
        window.lessonReady

    };

  }


  return {

    ready:
      true,

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