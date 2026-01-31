let currentIndex = 0;
let isDevMode = false;
let lessonCardsData = [];

function toggleDevMode() {
  isDevMode = document.getElementById('devCheckbox').checked;
  document.getElementById("nextBtn").disabled = !isDevMode;
}

function loadCards(cardsData) {
    console.log("Total de cards carregados:", cardsData.length);

  lessonCardsData = cardsData;
  renderCard(currentIndex);
}

function renderCard(index) {
    console.log("Renderizando card", index);

  const mainStack = document.querySelector(".card-stack");
  mainStack.innerHTML = "";

  const card = lessonCardsData[index];
  if (!card) return;

  const div = document.createElement("div");
  div.className = "card";

  if (card.title) {
    const h2 = document.createElement("h2");
    h2.className = "section-title";
    h2.textContent = card.title;
    div.appendChild(h2);
  }

  if (card.type === "listening") {
    const row = document.createElement("div");
    row.className = "listening-row";

    card.segments.forEach((segment) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "listening-card";

      const playBtn = document.createElement("button");
      playBtn.textContent = "▶️ Ouvir";
      playBtn.onclick = () => playSegment(segment.start, segment.end);

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "👁️ Exibir";
      toggleBtn.onclick = function () {
        toggleText(this);
      };

      const span = document.createElement("span");
      span.className = "hidden-text";
      span.textContent = segment.text;

      cardDiv.appendChild(playBtn);
      cardDiv.appendChild(toggleBtn);
      cardDiv.appendChild(span);
      row.appendChild(cardDiv);
    });

    div.appendChild(row);
  } else {
    const grid = document.createElement("div");
    grid.className = "grid2";

    card.columns.forEach(column => {
      const colDiv = document.createElement("div");
      colDiv.className = "vocab-col";

      column.forEach(([en, pt]) => {
        const p = document.createElement("p");

        const spanEng = document.createElement("span");
        spanEng.className = "text-blue";
        spanEng.textContent = en;

        const br = document.createElement("br");

        const spanPt = document.createElement("span");
        spanPt.className = "text-white";
        spanPt.textContent = pt;

        p.appendChild(spanEng);
        p.appendChild(br);
        p.appendChild(spanPt);
        colDiv.appendChild(p);
      });

      grid.appendChild(colDiv);
    });

    div.appendChild(grid);
  }

  mainStack.appendChild(div);
}

