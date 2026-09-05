// card.js

// ======================================================
// CONTROLE DE TEXTO DO LISTENING
// ======================================================

function toggleText(button) {
  const card = button.closest(".listening-card");

  if (!card) return;

  const isNowVisible = card.classList.toggle("show-text");

  button.textContent = isNowVisible
    ? "🙈 Ocultar"
    : "👁️ Exibir";
}


// ======================================================
// CRIAÇÃO DO TÍTULO DO CARD
// ======================================================

function createTitle(card) {
  const h2 = document.createElement("h2");

  h2.className = "section-title lesson-card-title";

  const titleSpan = document.createElement("span");

  titleSpan.className = "lesson-card-title-text";
  titleSpan.textContent = card.title || "Sem título";


  // ----------------------------------------------------
  // BOTÃO PLAY / PAUSE
  // ----------------------------------------------------




  h2.appendChild(titleSpan);

  return h2;
}


// ======================================================
// CARD LISTENING
// ======================================================

function createListeningContent(card) {

  const row = document.createElement("div");

  row.className = "listening-row";


  card.segments.forEach((segment) => {

    const cardDiv = document.createElement("div");

    cardDiv.className = "listening-card";


    // --------------------------------------------------
    // BOTÃO OUVIR
    // --------------------------------------------------

    const playBtn = document.createElement("button");

    playBtn.className = "segment-btn";
    playBtn.textContent = "▶️ Ouvir";


    playBtn.onclick = () => {

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


    // --------------------------------------------------
    // BOTÃO EXIBIR / OCULTAR
    // --------------------------------------------------

    const toggleBtn = document.createElement("button");

    toggleBtn.className = "segment-btn";
    toggleBtn.textContent = "👁️ Exibir";


    toggleBtn.onclick = function () {

      toggleText(this);

    };


    // --------------------------------------------------
    // TEXTO ESCONDIDO
    // --------------------------------------------------

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
// CONTEÚDO NORMAL
// ======================================================

function createNormalContent(card) {

  const grid = document.createElement("div");

  grid.className = "grid2";


  if (!Array.isArray(card.columns)) {

    return grid;

  }


  card.columns.forEach((colData) => {

    const col = document.createElement("div");

    col.className = "vocab-col";


    colData.forEach((item) => {

      // ------------------------------------------------
      // IMAGEM
      // ------------------------------------------------

      if (item[0] === "img" && item[1]) {

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


      // ------------------------------------------------
      // TEXTO
      // ------------------------------------------------

      const p = document.createElement("p");


      const en = item[0] || "";
      const pt = item[1] || "";

      const start = item[2];
      const end = item[3];


      // ------------------------------------------------
      // FRASE COM TEMPO DE ÁUDIO
      // ------------------------------------------------

      if (
        start !== undefined &&
        end !== undefined
      ) {

        const span = document.createElement("span");

        span.className = "text-blue clickable";

        span.innerHTML =
          processHiddenWords(en);


        span.onclick = (event) => {

          // Não reproduzir quando clicar
          // diretamente na palavra escondida

          if (
            event.target.classList.contains(
              "hidden-word"
            )
          ) {
            return;
          }


          if (
            typeof playSegment === "function"
          ) {

            playSegment(start, end);

          }

        };


        p.appendChild(span);


        // Tradução

        if (pt) {

          const br =
            document.createElement("br");

          const translation =
            document.createElement("span");

          translation.className =
            "text-white";

          translation.textContent = pt;


          p.appendChild(br);

          p.appendChild(translation);

        }

      }

      // ------------------------------------------------
      // FRASE SEM TEMPO
      // ------------------------------------------------

      else {

        const englishSpan =
          document.createElement("span");

        englishSpan.className =
          "text-blue";

        englishSpan.innerHTML =
          processHiddenWords(en);


        p.appendChild(englishSpan);


        if (pt) {

          const br =
            document.createElement("br");

          const portugueseSpan =
            document.createElement("span");

          portugueseSpan.className =
            "text-white";

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

  if (!text) return "";


  return text.replace(
    /\{\{(.*?)\}\}/g,

    (_, word) => {

      const safeWord =
        String(word)

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

  if (!element) return;


  if (
    element.classList.contains(
      "revealed"
    )
  ) {

    element.textContent =
      "__________";

    element.classList.remove(
      "revealed"
    );

  }

  else {

    element.textContent =
      element.dataset.word || "";

    element.classList.add(
      "revealed"
    );

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

      toggleWord(
        event.target
      );

    }

  }
);


// ======================================================
// RENDERIZAÇÃO DO CARD ATUAL
// ======================================================

function renderLessonContent() {

  // ----------------------------------------------------
  // TÍTULO DA AULA
  // ----------------------------------------------------

  const lessonTitleElement =
    document.getElementById(
      "lessonTitle"
    );


  if (lessonTitleElement) {

    lessonTitleElement.textContent =
      lessonTitle;

  }


  // ----------------------------------------------------
  // STACK
  // ----------------------------------------------------

  const stack =
    document.querySelector(
      ".card-stack"
    );


  if (!stack) {

    console.error(
      "Elemento .card-stack não encontrado."
    );

    return;

  }


  stack.innerHTML = "";


  // ----------------------------------------------------
  // CARD ATUAL
  // ----------------------------------------------------

  const card =
    lessonCards[currentIndex];


  if (!card) {

    console.warn(
      "Card não encontrado:",
      currentIndex
    );

    return;

  }


  const div =
    document.createElement("div");


  div.className =
    "card active";


  // ----------------------------------------------------
  // IMAGEM NO TOPO
  // ----------------------------------------------------

  if (card.image) {

    const img =
      document.createElement("img");


    img.src = card.image;

    img.alt =
      "Imagem da pergunta";


    img.style.display =
      "block";

    img.style.margin =
      "0 auto 20px";

    img.style.maxWidth =
      "100%";

    img.style.maxHeight =
      "300px";

    img.style.borderRadius =
      "8px";

    img.style.boxShadow =
      "0 2px 6px rgba(0,0,0,0.1)";


    div.appendChild(img);

  }


  // ----------------------------------------------------
  // TÍTULO
  // ----------------------------------------------------

  div.appendChild(
    createTitle(card)
  );


  // ----------------------------------------------------
  // LISTENING
  // ----------------------------------------------------

  if (
    card.type === "listening" &&
    Array.isArray(card.segments)
  ) {

    div.appendChild(
      createListeningContent(card)
    );

  }

  // ----------------------------------------------------
  // CARD NORMAL
  // ----------------------------------------------------

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
      typeof updateMainButtons ===
      "function"
    ) {

      updateMainButtons();

    }


    renderLessonContent();

  }
);