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
// VELOCIDADE ATUAL
// ======================================================

let currentPlaybackRate = 1;



// ======================================================
// CANAL DE CONTROLE DO PROFESSOR
//
// IMPORTANTE:
//
// engine.js também utiliza o canal:
// teacherLessonSync
//
// Aqui utilizamos OUTRO objeto BroadcastChannel
// com o mesmo nome.
//
// Assim:
// - engine.js recebe comandos de CARD
// - player.js recebe comandos de PLAYER
// ======================================================

const playerControlChannel =
  typeof BroadcastChannel !==
    "undefined"
    ? new BroadcastChannel(
        "teacherLessonSync"
      )
    : null;



// ======================================================
// RECEBER COMANDO DO PROFESSOR
// ======================================================

if (
  playerControlChannel
) {

  playerControlChannel.onmessage =
    function (event) {

      const data =
        event.data;


      if (!data) {

        return;

      }


      // ==================================================
      // SOMENTE COMANDO DO PROFESSOR
      // ==================================================

      if (
        data.source !==
        "teacher"
      ) {

        return;

      }


      // ==================================================
      // SOMENTE PLAYER COMMAND
      // ==================================================

      if (
        data.type !==
        "PLAYER_COMMAND"
      ) {

        return;

      }


      // ==================================================
      // VALIDAR LESSON
      // ==================================================

      if (
        !isPlayerCommandForCurrentLesson(
          data
        )
      ) {

        console.warn(
          "Comando ignorado. Pertence a outra Lesson.",
          data.lesson
        );


        return;

      }


      console.log(
        "Comando recebido do professor:",
        data
      );


      executeTeacherPlayerCommand(
        data.command,
        data.value
      );

    };

}



// ======================================================
// VERIFICAR SE O COMANDO É DA LESSON ATUAL
// ======================================================

function isPlayerCommandForCurrentLesson(
  data
) {

  // ====================================================
  // SEM LESSON NO COMANDO
  //
  // Aceitar por compatibilidade.
  // ====================================================

  if (
    !data.lesson
  ) {

    return true;

  }


  // ====================================================
  // USAR FUNÇÃO DO ENGINE
  // ====================================================

  if (
    typeof getCurrentContentInfo ===
      "function"
  ) {

    const content =
      getCurrentContentInfo();


    if (!content) {

      return false;

    }


    if (
      content.type !==
      "lesson"
    ) {

      return false;

    }


    return (
      content.number ===
      String(
        data.lesson
      ).padStart(
        2,
        "0"
      )
    );

  }


  return true;

}



// ======================================================
// EXECUTAR COMANDO DO PROFESSOR
// ======================================================

function executeTeacherPlayerCommand(
  command,
  value
) {

  if (
    !player
  ) {

    console.warn(
      "Player ainda não está pronto."
    );


    return;

  }


  // ====================================================
  // VOLTAR 5 SEGUNDOS
  // ====================================================

  if (
    command ===
    "BACK_5"
  ) {

    teacherBack5Seconds();


    return;

  }



  // ====================================================
  // PAUSAR / CONTINUAR
  // ====================================================

  if (
    command ===
    "TOGGLE_PLAY"
  ) {

    teacherTogglePlay();


    return;

  }



  // ====================================================
  // ALTERAR VELOCIDADE
  // ====================================================

  if (
    command ===
    "SET_SPEED"
  ) {

    teacherSetPlaybackRate(
      value
    );


    return;

  }



  // ====================================================
  // COMANDO DESCONHECIDO
  // ====================================================

  console.warn(
    "Comando do professor desconhecido:",
    command
  );

}



// ======================================================
// PROFESSOR - VOLTAR 5 SEGUNDOS
// ======================================================

function teacherBack5Seconds() {

  if (
    !player ||
    typeof player.getCurrentTime !==
      "function" ||
    typeof player.seekTo !==
      "function"
  ) {

    return;

  }


  const currentTime =
    Number(
      player.getCurrentTime()
    );


  if (
    !Number.isFinite(
      currentTime
    )
  ) {

    return;

  }



  // ====================================================
  // NÃO VOLTAR PARA O CARD ANTERIOR
  //
  // O limite inferior será o início do range atual.
  // ====================================================

  let minimumTime = 0;


  if (
    typeof getCurrentRange ===
      "function"
  ) {

    const range =
      getCurrentRange();


    if (
      range &&
      Number.isFinite(
        Number(
          range.start
        )
      )
    ) {

      minimumTime =
        Number(
          range.start
        );

    }

  }


  const newTime =
    Math.max(
      minimumTime,
      currentTime - 5
    );


  player.seekTo(
    newTime,
    true
  );


  lastKnownTime =
    newTime;


  console.log(
    "Professor voltou 5 segundos:",
    currentTime,
    "→",
    newTime
  );

}



// ======================================================
// PROFESSOR - PAUSAR / CONTINUAR
// ======================================================

function teacherTogglePlay() {

  if (
    !player ||
    typeof player.getPlayerState !==
      "function"
  ) {

    return;

  }


  const state =
    player.getPlayerState();



  // ====================================================
  // ESTÁ TOCANDO
  // ====================================================

  if (
    state ===
    YT.PlayerState.PLAYING
  ) {

    if (
      typeof player.pauseVideo ===
        "function"
    ) {

      player.pauseVideo();

    }


    console.log(
      "Vídeo pausado pelo professor."
    );


    return;

  }



  // ====================================================
  // PAUSADO / CUED / OUTRO ESTADO
  // ====================================================

  if (
    typeof player.playVideo ===
      "function"
  ) {

    player.playVideo();

  }


  console.log(
    "Vídeo retomado pelo professor."
  );

}



// ======================================================
// PROFESSOR - VELOCIDADE
// ======================================================

function teacherSetPlaybackRate(
  value
) {

  const rate =
    Number(
      value
    );


  // ====================================================
  // VELOCIDADES PERMITIDAS
  // ====================================================

  const allowedRates = [

    0.5,

    0.75,

    1,

    1.25

  ];


  if (
    !allowedRates.includes(
      rate
    )
  ) {

    console.warn(
      "Velocidade inválida:",
      value
    );


    return;

  }


  if (
    !player ||
    typeof player.setPlaybackRate !==
      "function"
  ) {

    console.warn(
      "Player não permite alterar velocidade."
    );


    return;

  }



  // ====================================================
  // VERIFICAR VELOCIDADES DISPONÍVEIS
  // ====================================================

  if (
    typeof player.getAvailablePlaybackRates ===
      "function"
  ) {

    const availableRates =
      player.getAvailablePlaybackRates();


    if (
      Array.isArray(
        availableRates
      ) &&
      availableRates.length > 0 &&
      !availableRates.includes(
        rate
      )
    ) {

      console.warn(
        "Velocidade não disponível neste vídeo:",
        rate,
        availableRates
      );


      return;

    }

  }



  // ====================================================
  // APLICAR
  // ====================================================

  player.setPlaybackRate(
    rate
  );


  currentPlaybackRate =
    rate;


  console.log(
    "Velocidade alterada pelo professor:",
    `${rate}x`
  );

}



// ======================================================
// API DO YOUTUBE PRONTA
// ======================================================

function onYouTubeIframeAPIReady() {

  console.log(
    "API do YouTube pronta."
  );


  youtubeApiReady =
    true;


  tryInitializePlayer();

}



// ======================================================
// TENTAR INICIALIZAR PLAYER
// ======================================================

function tryInitializePlayer() {


  // ====================================================
  // API AINDA NÃO CARREGOU
  // ====================================================

  if (
    !youtubeApiReady
  ) {

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

  if (
    player
  ) {

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

          onPlaybackRateChange:
            onPlaybackRateChange,

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
  // APLICAR VELOCIDADE PADRÃO
  // ====================================================

  if (
    player &&
    typeof player.setPlaybackRate ===
      "function"
  ) {

    player.setPlaybackRate(
      currentPlaybackRate
    );

  }



  // ====================================================
  // INICIAR RANGE
  // ====================================================

  setTimeout(
    function () {

      playCurrentRange();

    },
    300
  );

}



// ======================================================
// ALTERAÇÃO DA VELOCIDADE
// ======================================================

function onPlaybackRateChange(
  event
) {

  const rate =
    Number(
      event.data
    );


  if (
    Number.isFinite(
      rate
    )
  ) {

    currentPlaybackRate =
      rate;


    console.log(
      "Velocidade atual:",
      `${rate}x`
    );

  }

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


  if (
    !range
  ) {

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



  // ====================================================
  // PRESERVAR VELOCIDADE
  // ====================================================

  if (
    typeof player.setPlaybackRate ===
      "function"
  ) {

    player.setPlaybackRate(
      currentPlaybackRate
    );

  }



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
          // VERIFICAR ÚLTIMO CARD
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
          // LIBERAR PRÓXIMO
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
    Number(
      start
    );


  end =
    Number(
      end
    );



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



  // ====================================================
  // PRESERVAR VELOCIDADE
  // ====================================================

  if (
    typeof player.setPlaybackRate ===
      "function"
  ) {

    player.setPlaybackRate(
      currentPlaybackRate
    );

  }


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


  if (
    !status
  ) {

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


  if (
    !status
  ) {

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

  if (
    !player
  ) {

    return {

      ready:
        false,

      youtubeApiReady:
        youtubeApiReady,

      lessonReady:
        window.lessonReady,

      playbackRate:
        currentPlaybackRate

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

    playbackRate:
      typeof player.getPlaybackRate ===
        "function"
        ? player.getPlaybackRate()
        : currentPlaybackRate,

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