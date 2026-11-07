
// ======================================================
// card.js
// ======================================================


// ======================================================
// CONFIGURAÇÕES GERAIS DO VOCABULÁRIO
// ======================================================

const VOCABULARY_SPEECH_RATE = 1.00;


// ======================================================
// CONTROLE DE TEXTO DO LISTENING
// ======================================================

function toggleText(button) {

  const card = button.closest(
    ".listening-card"
  );

  if (!card) {
    return;
  }

  const isNowVisible = card.classList.toggle(
    "show-text"
  );

  button.textContent = isNowVisible
    ? "🙈 Ocultar"
    : "👁️ Exibir";

}


// ======================================================
// CRIAÇÃO DO TÍTULO DO CARD
// ======================================================

function createTitle(card) {

  const h2 = document.createElement("h2");

  h2.className =
    "section-title lesson-card-title";

  const titleSpan = document.createElement("span");

  titleSpan.className =
    "lesson-card-title-text";

  titleSpan.textContent =
    card.title || "Sem título";

  h2.appendChild(titleSpan);

  return h2;

}


// ======================================================
// CARD LISTENING
// ======================================================

function createListeningContent(card) {

  const row = document.createElement("div");

  row.className = "listening-row";

  if (!Array.isArray(card.segments)) {
    return row;
  }

  card.segments.forEach(function (segment) {

    const cardDiv = document.createElement("div");

    cardDiv.className = "listening-card";


    // ==================================================
    // BOTÃO OUVIR
    // ==================================================

    const playBtn = document.createElement("button");

    playBtn.className = "segment-btn";

    playBtn.textContent = "▶️ Ouvir";

    playBtn.onclick = function () {

      if (typeof playSegment === "function") {

        playSegment(
          segment.start,
          segment.end
        );

      } else {

        console.error(
          "Função playSegment não encontrada."
        );

      }

    };


    // ==================================================
    // BOTÃO EXIBIR / OCULTAR
    // ==================================================

    const toggleBtn = document.createElement("button");

    toggleBtn.className = "segment-btn";

    toggleBtn.textContent = "👁️ Exibir";

    toggleBtn.onclick = function () {
      toggleText(this);
    };


    // ==================================================
    // TEXTO ESCONDIDO
    // ==================================================

    const span = document.createElement("span");

    span.className = "hidden-text";

    span.textContent = segment.text || "";

    cardDiv.appendChild(playBtn);
    cardDiv.appendChild(toggleBtn);
    cardDiv.appendChild(span);

    row.appendChild(cardDiv);

  });

  return row;

}


// ======================================================
// VOCABULÁRIO
// ======================================================


// ======================================================
// ABRIR DEFINIÇÃO
// ======================================================

async function showVocabularyDefinition(
  word,
  translation
) {

  // ====================================================
  // GARANTIR MODAL
  // ====================================================

  createVocabularyModal();

  const modal = document.getElementById(
    "vocabularyModal"
  );

  const wordElement = document.getElementById(
    "vocabularyModalWord"
  );

  const translationElement = document.getElementById(
    "vocabularyModalTranslation"
  );

  const typeElement = document.getElementById(
    "vocabularyModalType"
  );

  const definitionElement = document.getElementById(
    "vocabularyModalDefinition"
  );

  const examplesElement = document.getElementById(
    "vocabularyModalExamples"
  );


  // ====================================================
  // VALIDAR ELEMENTOS
  // ====================================================

  if (
    !modal ||
    !wordElement ||
    !translationElement ||
    !typeElement ||
    !definitionElement ||
    !examplesElement
  ) {

    console.error(
      "Elementos do modal de vocabulário não encontrados."
    );

    return;

  }


  // ====================================================
  // MOSTRAR MODAL
  // ====================================================

  modal.style.display = "flex";


  // ====================================================
  // CONTROLE DE CONSULTAS SIMULTÂNEAS
  // ====================================================

  const requestId = String(
    Number(modal.dataset.requestId || 0) + 1
  );

  modal.dataset.requestId = requestId;


  // ====================================================
  // CONTEÚDO INICIAL
  // ====================================================

  wordElement.textContent = word;

  translationElement.textContent =
    translation || "";

  typeElement.textContent = "";

  typeElement.style.display = "none";

  definitionElement.textContent =
    "Carregando definição...";

  examplesElement.innerHTML = "";


  // ====================================================
  // CARREGAR EXEMPLOS INDEPENDENTEMENTE DA DEFINIÇÃO
  // ====================================================

  renderVocabularyExamples(
    word,
    examplesElement,
    requestId
  );


  // ====================================================
  // VERIFICAR FUNÇÃO DO DICIONÁRIO
  // ====================================================

  if (
    typeof fetchVocabularyDefinition !== "function"
  ) {

    console.error(
      "fetchVocabularyDefinition() não encontrada."
    );

    definitionElement.textContent =
      "Serviço de definição indisponível.";

    return;

  }


  try {

    // ==================================================
    // CONSULTAR DEFINIÇÃO
    // ==================================================

    const data = await fetchVocabularyDefinition(
      word
    );

    if (modal.dataset.requestId !== requestId) {
      return;
    }

    if (!data || typeof data !== "object") {

      throw new Error(
        "Resposta inválida da API do dicionário."
      );

    }


    // ==================================================
    // CLASSE GRAMATICAL
    // ==================================================

    const partOfSpeech = formatPartOfSpeech(
      data.partOfSpeech
    );

    typeElement.textContent = partOfSpeech;

    typeElement.style.display = partOfSpeech
      ? "inline-block"
      : "none";


    // ==================================================
    // DEFINIÇÃO COM PALAVRAS CLICÁVEIS
    // ==================================================

    renderClickableDefinition(
      data.definition ||
        "Definição não disponível.",
      definitionElement
    );

  } catch (error) {

    if (modal.dataset.requestId !== requestId) {
      return;
    }

    console.error(
      "Erro ao carregar definição:",
      error
    );

    definitionElement.textContent =
      "Não foi possível carregar a definição.";

  }

}


// ======================================================
// VOCABULÁRIO - DEFINIÇÃO COM PALAVRAS CLICÁVEIS
// ======================================================

function renderClickableDefinition(
  definition,
  container
) {

  if (!container) {
    return;
  }

  container.innerHTML = "";

  const text = String(definition || "");


  // ====================================================
  // SEPARAR PALAVRAS E PONTUAÇÃO
  // ====================================================

  const parts = text.match(
    /[A-Za-zÀ-ÿ'-]+|[^A-Za-zÀ-ÿ'-]+/g
  ) || [];


  parts.forEach(function (part) {

    // ==================================================
    // É PALAVRA?
    // ==================================================

    if (/^[A-Za-zÀ-ÿ'-]+$/.test(part)) {

      const word = document.createElement("span");

      word.textContent = part;

      word.style.cursor = "pointer";

      word.style.borderRadius = "4px";

      word.style.padding = "1px 2px";

      word.style.transition =
        "background 0.15s ease";

      word.title = "Clique para ouvir";


      // ==================================================
      // ACESSIBILIDADE
      // ==================================================

      word.setAttribute("role", "button");

      word.setAttribute("tabindex", "0");

      word.setAttribute(
        "aria-label",
        "Ouvir " + part
      );


      // ==================================================
      // DESTAQUE AO PASSAR O MOUSE
      // ==================================================

      word.onmouseenter = function () {

        word.style.background = "#dbeafe";

      };

      word.onmouseleave = function () {

        word.style.background = "transparent";

      };


      // ==================================================
      // PRONUNCIAR APENAS A PALAVRA CLICADA
      // ==================================================

      function pronounceSelectedWord(event) {

        event.stopPropagation();

        word.style.background = "#93c5fd";

        speakVocabularyWord(part);

        setTimeout(function () {

          if (word.isConnected) {
            word.style.background = "transparent";
          }

        }, 600);

      }

      word.onclick = pronounceSelectedWord;

      word.onkeydown = function (event) {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          pronounceSelectedWord(event);

        }

      };

      container.appendChild(word);

    }

    // ==================================================
    // PONTUAÇÃO / ESPAÇO
    // ==================================================

    else {

      container.appendChild(
        document.createTextNode(part)
      );

    }

  });

}


// ======================================================
// CLASSE GRAMATICAL
// ======================================================

function formatPartOfSpeech(type) {

  const types = {

    n: "noun",

    v: "verb",

    adj: "adjective",

    adv: "adverb",

    prep: "preposition",

    pron: "pronoun",

    conj: "conjunction",

    det: "determiner",

    interj: "interjection"

  };

  return types[type] || type || "";

}


// ======================================================
// PEGAR FONTE DE VOCABULÁRIO DA LESSON
//
// PADRÃO NOVO:
// const lessonVocabulary = {...}
//
// COMPATIBILIDADE:
// const vocabulary121 = {...}
// ======================================================

function getLessonVocabularySource() {

  // ====================================================
  // PADRÃO RECOMENDADO
  // ====================================================

  if (
    typeof lessonVocabulary !== "undefined" &&
    lessonVocabulary
  ) {

    return lessonVocabulary;

  }


  // ====================================================
  // COMPATIBILIDADE COM VOCABULARY 121
  // ====================================================

  if (
    typeof vocabulary121 !== "undefined" &&
    vocabulary121
  ) {

    return vocabulary121;

  }

  return null;

}


// ======================================================
// PEGAR EXEMPLOS MANUAIS
// ======================================================

function getVocabularyExamples(word) {

  const source = getLessonVocabularySource();

  if (!source) {
    return [];
  }

  const key = String(word || "")
    .trim()
    .toLowerCase();

  const entry = source[key];

  if (
    !entry ||
    !Array.isArray(entry.examples)
  ) {

    return [];

  }

  return entry.examples;

}


// ======================================================
// VALIDAR SE A CONSULTA AINDA É ATUAL
// ======================================================

function isVocabularyRequestCurrent(
  container,
  requestId
) {

  const modal = document.getElementById(
    "vocabularyModal"
  );

  return Boolean(
    modal &&
    container &&
    container.isConnected &&
    modal.style.display !== "none" &&
    modal.dataset.requestId === requestId
  );

}


// ======================================================
// NORMALIZAR EXEMPLOS RETORNADOS PELA API
// ======================================================

function normalizeVocabularyExamples(result) {

  const rawExamples = Array.isArray(result)
    ? result
    : (
        result &&
        Array.isArray(result.examples)
          ? result.examples
          : []
      );

  const levels = ["B1", "B2", "C1"];

  const normalized = [];

  levels.forEach(function (level) {

    const example = rawExamples.find(function (item) {

      return (
        item &&
        String(item.level || "")
          .toUpperCase() === level
      );

    });

    if (
      example &&
      typeof example.text === "string" &&
      example.text.trim()
    ) {

      normalized.push({

        level: level,

        text: example.text.trim()

      });

    }

  });

  return normalized;

}


// ======================================================
// RENDERIZAR EXEMPLOS
// EXEMPLOS MANUAIS + GEMINI AI
// ======================================================

async function renderVocabularyExamples(
  word,
  container,
  requestId
) {

  if (!container) {
    return;
  }

  container.innerHTML = "";


  // ====================================================
  // 1. VERIFICAR EXEMPLOS MANUAIS
  // ====================================================

  let examples = getVocabularyExamples(word);

  const hasManualExamples =
    examples.length > 0;


  // ====================================================
  // 2. CONSULTAR GEMINI SE NÃO HOUVER EXEMPLOS
  // ====================================================

  if (!hasManualExamples) {

    const loading = document.createElement("div");

    loading.textContent =
      "Gerando exemplos B1, B2 e C1 com IA...";

    loading.style.cssText = `
      color: #64748b;
      font-size: 14px;
      margin-top: 8px;
    `;

    container.appendChild(loading);

    try {

      // ==================================================
      // VERIFICAR FUNÇÃO DE CONSULTA AUTOMÁTICA
      // ==================================================

      if (
        typeof fetchAutomaticVocabularyExamples !== "function"
      ) {

        throw new Error(
          "fetchAutomaticVocabularyExamples() não encontrada. " +
          "Verifique o carregamento de vocabulary-examples.js."
        );

      }


      // ==================================================
      // CONSULTAR API / CACHE
      // ==================================================

      const result =
        await fetchAutomaticVocabularyExamples(word);


      // ==================================================
      // EVITAR ATUALIZAR UMA PALAVRA ANTIGA
      // ==================================================

      if (
        requestId !== undefined &&
        !isVocabularyRequestCurrent(
          container,
          requestId
        )
      ) {

        return;

      }


      // ==================================================
      // NORMALIZAR RETORNO
      // ==================================================

      examples = normalizeVocabularyExamples(
        result
      );

    } catch (error) {

      console.error(
        "Erro ao gerar exemplos com Gemini:",
        error
      );

      examples = [];

    }

  }


  // ====================================================
  // 3. VALIDAR SE O MODAL CONTINUA ABERTO
  // ====================================================

  if (
    requestId !== undefined &&
    !isVocabularyRequestCurrent(
      container,
      requestId
    )
  ) {

    return;

  }

  container.innerHTML = "";


  // ====================================================
  // 4. SEM EXEMPLOS
  // ====================================================

  if (examples.length === 0) {

    const empty = document.createElement("div");

    empty.textContent =
      "Não foi possível carregar os exemplos.";

    empty.style.cssText = `
      color: #64748b;
      font-size: 14px;
      margin-top: 8px;
    `;

    container.appendChild(empty);

    return;

  }


  // ====================================================
  // 5. EXIBIR EXEMPLOS
  // ====================================================

  examples.forEach(function (example) {

    const row = document.createElement("div");

    row.style.cssText = `
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 12px 0;
      border-bottom: 1px solid #cbd5e1;
    `;


    // ==================================================
    // NÍVEL
    // ==================================================

    const level = document.createElement("span");

    level.textContent = example.level || "";

    level.style.cssText = `
      min-width: 40px;
      background: #dbeafe;
      color: #1d4ed8;
      padding: 5px 7px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
    `;


    // ==================================================
    // FRASE
    // ==================================================

    const text = document.createElement("div");

    text.textContent = example.text || "";

    text.style.cssText = `
      flex: 1;
      font-size: 16px;
      line-height: 1.5;
      color: #1e293b;
    `;


    // ==================================================
    // BOTÃO ÁUDIO
    // ==================================================

    const audioButton = document.createElement("button");

    audioButton.type = "button";

    audioButton.textContent = "🔊";

    audioButton.title = "Ouvir exemplo";

    audioButton.style.cssText = `
      border: none;
      background: #334155;
      color: white;
      min-width: 38px;
      height: 38px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 15px;
    `;

    audioButton.onclick = function () {

      speakVocabularyExample(example.text);

    };


    // ==================================================
    // MONTAR LINHA
    // ==================================================

    row.appendChild(level);

    row.appendChild(text);

    row.appendChild(audioButton);

    container.appendChild(row);

  });

}


// ======================================================
// ESCOLHER MELHOR VOZ INGLESA
// ======================================================

function getBestEnglishVoice() {

  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();

  if (
    !Array.isArray(voices) ||
    voices.length === 0
  ) {

    return null;

  }


  // ====================================================
  // ORDEM DE PREFERÊNCIA
  // ====================================================

  const preferredNames = [

    "Microsoft Aria",

    "Microsoft Jenny",

    "Microsoft Guy",

    "Microsoft Ava",

    "Microsoft Andrew",

    "Google US English",

    "Samantha",

    "Daniel"

  ];


  // ====================================================
  // TENTAR VOZ PREFERIDA
  // ====================================================

  for (const preferred of preferredNames) {

    const voice = voices.find(function (item) {

      return (
        item.name
          .toLowerCase()
          .includes(preferred.toLowerCase()) &&

        item.lang
          .toLowerCase()
          .startsWith("en")
      );

    });

    if (voice) {
      return voice;
    }

  }


  // ====================================================
  // QUALQUER EN-US
  // ====================================================

  const american = voices.find(function (voice) {

    return voice.lang.toLowerCase() === "en-us";

  });

  if (american) {
    return american;
  }


  // ====================================================
  // QUALQUER EN-GB
  // ====================================================

  const british = voices.find(function (voice) {

    return voice.lang.toLowerCase() === "en-gb";

  });

  if (british) {
    return british;
  }


  // ====================================================
  // QUALQUER VOZ INGLESA
  // ====================================================

  return voices.find(function (voice) {

    return voice.lang
      .toLowerCase()
      .startsWith("en");

  }) || null;

}


// ======================================================
// GARANTIR CARREGAMENTO DAS VOZES
// ======================================================

if ("speechSynthesis" in window) {

  window.speechSynthesis.getVoices();

  if (
    typeof window.speechSynthesis.addEventListener ===
    "function"
  ) {

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      function () {

        window.speechSynthesis.getVoices();

      }
    );

  }

}


// ======================================================
// FUNÇÃO CENTRAL DE PRONÚNCIA
// ======================================================

function speakVocabularyText(text) {

  if (
    !("speechSynthesis" in window) ||
    !text
  ) {

    return;

  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(
    String(text)
  );

  utterance.lang = "en-US";

  utterance.rate = VOCABULARY_SPEECH_RATE;

  utterance.pitch = 1;

  const voice = getBestEnglishVoice();

  if (voice) {

    utterance.voice = voice;

  }

  window.speechSynthesis.speak(utterance);

}


// ======================================================
// OUVIR PALAVRA
// ======================================================

function speakVocabularyWord(word) {

  speakVocabularyText(word);

}


// ======================================================
// OUVIR DEFINIÇÃO
// ======================================================

function speakVocabularyDefinition(definition) {

  speakVocabularyText(definition);

}


// ======================================================
// OUVIR EXEMPLO
// ======================================================

function speakVocabularyExample(text) {

  speakVocabularyText(text);

}


// ======================================================
// CRIAR MODAL
// ======================================================

function createVocabularyModal() {

  if (
    document.getElementById("vocabularyModal")
  ) {

    return;

  }


  // ====================================================
  // FUNDO
  // ====================================================

  const modal = document.createElement("div");

  modal.id = "vocabularyModal";

  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.72);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    padding: 20px;
  `;


  // ====================================================
  // CAIXA
  // ====================================================

  const box = document.createElement("div");

  box.style.cssText = `
    width: 100%;
    max-width: 620px;
    max-height: 88vh;
    overflow-y: auto;
    background: #e2e8f0;
    color: #0f172a;
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.45);
    position: relative;
  `;


  // ====================================================
  // FECHAR
  // ====================================================

  const closeButton = document.createElement("button");

  closeButton.type = "button";

  closeButton.textContent = "✕";

  closeButton.style.cssText = `
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background: #334155;
    color: white;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
  `;

  function closeVocabularyModal() {

    if ("speechSynthesis" in window) {

      window.speechSynthesis.cancel();

    }

    modal.dataset.requestId = String(
      Number(modal.dataset.requestId || 0) + 1
    );

    modal.style.display = "none";

  }

  closeButton.onclick = closeVocabularyModal;


  // ====================================================
  // PALAVRA
  // ====================================================

  const word = document.createElement("div");

  word.id = "vocabularyModalWord";

  word.style.cssText = `
    font-size: 32px;
    font-weight: 700;
    color: #2563eb;
    margin-bottom: 6px;
    padding-right: 45px;
  `;


  // ====================================================
  // TRADUÇÃO
  // ====================================================

  const translation = document.createElement("div");

  translation.id = "vocabularyModalTranslation";

  translation.style.cssText = `
    font-size: 18px;
    color: #475569;
    margin-bottom: 18px;
  `;


  // ====================================================
  // BOTÕES DE ÁUDIO
  // ====================================================

  const audioControls = document.createElement("div");

  audioControls.style.cssText = `
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  `;


  // ====================================================
  // BOTÃO PALAVRA
  // ====================================================

  const wordAudioButton = document.createElement("button");

  wordAudioButton.type = "button";

  wordAudioButton.textContent = "🔊 Ouvir palavra";

  wordAudioButton.style.cssText = `
    border: none;
    background: #2563eb;
    color: white;
    padding: 9px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  `;

  wordAudioButton.onclick = function () {

    const currentWord = document.getElementById(
      "vocabularyModalWord"
    );

    if (!currentWord) {
      return;
    }

    speakVocabularyWord(
      currentWord.textContent
    );

  };


  // ====================================================
  // BOTÃO DEFINIÇÃO
  // ====================================================

  const definitionAudioButton =
    document.createElement("button");

  definitionAudioButton.type = "button";

  definitionAudioButton.textContent =
    "🔊 Ouvir definição";

  definitionAudioButton.style.cssText = `
    border: none;
    background: #334155;
    color: white;
    padding: 9px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  `;

  definitionAudioButton.onclick = function () {

    const currentDefinition =
      document.getElementById(
        "vocabularyModalDefinition"
      );

    if (!currentDefinition) {
      return;
    }

    speakVocabularyDefinition(
      currentDefinition.textContent
    );

  };

  audioControls.appendChild(wordAudioButton);

  audioControls.appendChild(definitionAudioButton);


  // ====================================================
  // CLASSE GRAMATICAL
  // ====================================================

  const type = document.createElement("div");

  type.id = "vocabularyModalType";

  type.style.cssText = `
    display: none;
    background: #cbd5e1;
    color: #334155;
    padding: 5px 10px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 16px;
  `;


  // ====================================================
  // DEFINITION LABEL
  // ====================================================

  const label = document.createElement("div");

  label.textContent = "Definition";

  label.style.cssText = `
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
    margin-bottom: 6px;
  `;


  // ====================================================
  // DEFINIÇÃO
  // ====================================================

  const definition = document.createElement("div");

  definition.id = "vocabularyModalDefinition";

  definition.style.cssText = `
    font-size: 18px;
    line-height: 1.6;
    color: #1e293b;
  `;


  // ====================================================
  // EXAMPLES LABEL
  // ====================================================

  const examplesLabel = document.createElement("div");

  examplesLabel.textContent = "Examples";

  examplesLabel.style.cssText = `
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
    margin-top: 24px;
    margin-bottom: 6px;
  `;


  // ====================================================
  // EXEMPLOS
  // ====================================================

  const examples = document.createElement("div");

  examples.id = "vocabularyModalExamples";

  examples.style.cssText = `
    display: flex;
    flex-direction: column;
    width: 100%;
  `;


  // ====================================================
  // MONTAR MODAL
  // ====================================================

  box.appendChild(closeButton);

  box.appendChild(word);

  box.appendChild(translation);

  box.appendChild(audioControls);

  box.appendChild(type);

  box.appendChild(label);

  box.appendChild(definition);

  box.appendChild(examplesLabel);

  box.appendChild(examples);

  modal.appendChild(box);


  // ====================================================
  // FECHAR AO CLICAR FORA
  // ====================================================

  modal.addEventListener(
    "click",
    function (event) {

      if (event.target === modal) {

        closeVocabularyModal();

      }

    }
  );


  // ====================================================
  // ADICIONAR À PÁGINA
  // ====================================================

  document.body.appendChild(modal);

}


// ======================================================
// CONTEÚDO NORMAL
// ======================================================


// ======================================================
// DICIONÁRIO UNIVERSAL - MÓDULOS 01 A 06
// Reconhece cards Vocabulary em qualquer aula (001-360).
// ======================================================

function isVocabularyCard(card) {

  const title = String(
    (card && card.title) || ""
  ).trim();

  return /^(vocabulary|vocabulário|vocabulario)(\b|\s*[-–:])/i.test(
    title
  );

}


// ======================================================
// CRIAR CONTEÚDO NORMAL
// ======================================================

function createNormalContent(card) {

  const grid = document.createElement("div");

  grid.className = "grid2";

  if (!Array.isArray(card.columns)) {
    return grid;
  }


  card.columns.forEach(function (colData) {

    const col = document.createElement("div");

    col.className = "vocab-col";

    if (!Array.isArray(colData)) {

      grid.appendChild(col);

      return;

    }


    colData.forEach(function (item) {

      if (!Array.isArray(item)) {
        return;
      }


      // ==================================================
      // IMAGEM
      // ==================================================

      if (
        item[0] === "img" &&
        item[1]
      ) {

        const img = document.createElement("img");

        img.src = item[1];

        img.alt = "Imagem da coluna";

        img.style.display = "block";

        img.style.margin = "0 auto 30px";

        img.style.maxWidth = "100%";

        img.style.maxHeight = "300px";

        img.style.borderRadius = "8px";

        img.style.boxShadow =
          "0 2px 6px rgba(0,0,0,0.1)";

        col.appendChild(img);

        return;

      }


      // ==================================================
      // TEXTO
      // ==================================================

      const p = document.createElement("p");

      const en = item[0] || "";

      const pt = item[1] || "";

      const start = item[2];

      const end = item[3];


      // ==================================================
      // FRASE COM TEMPO DE ÁUDIO
      // ==================================================

      if (
        start !== undefined &&
        end !== undefined
      ) {

        const span = document.createElement("span");

        span.className = "text-blue clickable";

        span.innerHTML = processHiddenWords(en);

        span.onclick = function (event) {

          // ============================================
          // PALAVRA ESCONDIDA
          // ============================================

          if (
            event.target.classList.contains(
              "hidden-word"
            )
          ) {

            return;

          }


          // ============================================
          // VOCABULARY
          // ============================================

          if (isVocabularyCard(card)) {

            showVocabularyDefinition(
              en,
              pt
            );

            return;

          }


          // ============================================
          // OUTROS CARDS
          // ============================================

          if (
            typeof playSegment === "function"
          ) {

            playSegment(
              start,
              end
            );

          }

        };

        p.appendChild(span);


        // =================================================
        // TRADUÇÃO
        // =================================================

        if (pt) {

          const br = document.createElement("br");

          const translation =
            document.createElement("span");

          translation.className = "text-white";

          translation.textContent = pt;

          p.appendChild(br);

          p.appendChild(translation);

        }

      }


      // ==================================================
      // FRASE SEM TEMPO
      // ==================================================

      else {

        const englishSpan =
          document.createElement("span");

        englishSpan.className = "text-blue";

        englishSpan.innerHTML = processHiddenWords(en);


        // =================================================
        // VOCABULARY CLICÁVEL
        // =================================================

        if (isVocabularyCard(card)) {

          englishSpan.classList.add("clickable");

          englishSpan.style.cursor = "pointer";

          englishSpan.title =
            "Clique para ver a definição";

          englishSpan.onclick = function (event) {

            if (
              event.target.classList.contains(
                "hidden-word"
              )
            ) {

              return;

            }

            showVocabularyDefinition(
              en,
              pt
            );

          };

        }

        p.appendChild(englishSpan);


        // =================================================
        // TRADUÇÃO
        // =================================================

        if (pt) {

          const br = document.createElement("br");

          const portugueseSpan =
            document.createElement("span");

          portugueseSpan.className = "text-white";

          portugueseSpan.textContent = pt;

          p.appendChild(br);

          p.appendChild(portugueseSpan);

        }

      }

      col.appendChild(p);

    });

    grid.appendChild(col);

  });

  return grid;

}


// ======================================================
// PALAVRAS ESCONDIDAS {{PALAVRA}}
// ======================================================

function processHiddenWords(text) {

  if (!text) {
    return "";
  }

  return String(text).replace(
    /\{\{(.*?)\}\}/g,

    function (_, word) {

      const safeWord = String(word)

        .replace(/&/g, "&amp;")

        .replace(/"/g, "&quot;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;");

      return `
        <span
          class="hidden-word"
          data-word="${safeWord}"
        >__________</span>
      `;

    }
  );

}


// ======================================================
// MOSTRAR / ESCONDER PALAVRA
// ======================================================

function toggleWord(element) {

  if (!element) {
    return;
  }

  if (
    element.classList.contains("revealed")
  ) {

    element.textContent = "__________";

    element.classList.remove("revealed");

  } else {

    element.textContent =
      element.dataset.word || "";

    element.classList.add("revealed");

  }

}


// ======================================================
// EVENTO GLOBAL DAS PALAVRAS ESCONDIDAS
// ======================================================

document.addEventListener(
  "click",

  function (event) {

    if (
      event.target.classList.contains(
        "hidden-word"
      )
    ) {

      event.stopPropagation();

      toggleWord(event.target);

    }

  }
);


// ======================================================
// RENDERIZAÇÃO DO CARD ATUAL
// ======================================================

function renderLessonContent() {

  // ====================================================
  // TÍTULO DA AULA
  // ====================================================

  const lessonTitleElement =
    document.getElementById("lessonTitle");

  if (lessonTitleElement) {

    lessonTitleElement.textContent =
      lessonTitle;

  }


  // ====================================================
  // STACK
  // ====================================================

  const stack = document.querySelector(
    ".card-stack"
  );

  if (!stack) {

    console.error(
      "Elemento .card-stack não encontrado."
    );

    return;

  }

  stack.innerHTML = "";


  // ====================================================
  // CARD ATUAL
  // ====================================================

  const card = lessonCards[currentIndex];

  if (!card) {

    console.warn(
      "Card não encontrado:",
      currentIndex
    );

    return;

  }

  const div = document.createElement("div");

  div.className = "card active";


  // ====================================================
  // IMAGEM NO TOPO
  // ====================================================

  if (card.image) {

    const img = document.createElement("img");

    img.src = card.image;

    img.alt = "Imagem da pergunta";

    img.style.display = "block";

    img.style.margin = "0 auto 20px";

    img.style.maxWidth = "100%";

    img.style.maxHeight = "300px";

    img.style.borderRadius = "8px";

    img.style.boxShadow =
      "0 2px 6px rgba(0,0,0,0.1)";

    div.appendChild(img);

  }


  // ====================================================
  // TÍTULO
  // ====================================================

  div.appendChild(
    createTitle(card)
  );


  // ====================================================
  // LISTENING
  // ====================================================

  if (
    card.type === "listening" &&
    Array.isArray(card.segments)
  ) {

    div.appendChild(
      createListeningContent(card)
    );

  }


  // ====================================================
  // CARD NORMAL
  // ====================================================

  else {

    div.appendChild(
      createNormalContent(card)
    );

  }

  stack.appendChild(div);

}


// ======================================================
// INICIALIZAÇÃO
// ======================================================

window.addEventListener(
  "load",

  function () {

    if (
      typeof updateMainButtons === "function"
    ) {

      updateMainButtons();

    }

    if (
      typeof lessonCards !== "undefined" &&
      Array.isArray(lessonCards) &&
      lessonCards.length > 0
    ) {

      renderLessonContent();

    }

  }
);

