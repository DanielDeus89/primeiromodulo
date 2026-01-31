let currentIndex = 0;
let isDevMode = false;
<<<<<<< HEAD
let lessonCardsData = [];
=======
>>>>>>> b1b8eddbd7509d4cb4c7c99d7049185730e3b692

function toggleDevMode() {
  isDevMode = document.getElementById('devCheckbox').checked;
  document.getElementById("nextBtn").disabled = !isDevMode;
}

function loadCards(cardsData) {
<<<<<<< HEAD
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
=======
  const mainStack = document.querySelector(".card-stack");
  const miniStack = document.querySelector(".minicard-stack");
  mainStack.innerHTML = "";
  miniStack.innerHTML = "";

  cardsData.forEach((card, idx) => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.index = idx;

    const grid = document.createElement("div");
    grid.className = "grid2";

    card.forEach(column => {
      const colDiv = document.createElement("div");
      colDiv.className = "vocab-col";

      column.forEach(pair => {
>>>>>>> b1b8eddbd7509d4cb4c7c99d7049185730e3b692
        const p = document.createElement("p");

        const spanEng = document.createElement("span");
        spanEng.className = "text-blue";
<<<<<<< HEAD
        spanEng.textContent = en;
=======
        spanEng.textContent = pair.en;
>>>>>>> b1b8eddbd7509d4cb4c7c99d7049185730e3b692

        const br = document.createElement("br");

        const spanPt = document.createElement("span");
        spanPt.className = "text-white";
<<<<<<< HEAD
        spanPt.textContent = pt;
=======
        spanPt.textContent = pair.pt;
>>>>>>> b1b8eddbd7509d4cb4c7c99d7049185730e3b692

        p.appendChild(spanEng);
        p.appendChild(br);
        p.appendChild(spanPt);
        colDiv.appendChild(p);
      });

      grid.appendChild(colDiv);
    });

    div.appendChild(grid);
<<<<<<< HEAD
  }

  mainStack.appendChild(div);
}

=======

    if (idx === 0) {
      div.classList.add("active");
      mainStack.appendChild(div);
    } else {
      div.classList.add("minicard");
      div.addEventListener("click", () => {
        currentIndex = idx;
        showCard(currentIndex);
      });
      miniStack.appendChild(div);
    }
  });

  showCard(0);
}

function nextCard() {
  const cards = document.querySelectorAll(".card");
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
  seekToCurrentRange?.();
}

function prevCard() {
  const cards = document.querySelectorAll(".card");
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
  seekToCurrentRange?.();
}

function showCard(index) {
  const allCards = document.querySelectorAll(".card");
  const mainStack = document.querySelector(".card-stack");
  const miniStack = document.querySelector(".minicard-stack");

  mainStack.innerHTML = "";
  miniStack.innerHTML = "";

  allCards.forEach((card, i) => {
    card.classList.remove("active", "next", "minicard", "hidden");

    if (i === index) {
      card.classList.add("active");
      mainStack.appendChild(card);
    } else if (i === index + 1) {
      card.classList.add("next");
      mainStack.appendChild(card);
    } else {
      card.classList.add("minicard");
      card.onclick = () => {
        currentIndex = i;
        showCard(i);
      };
      miniStack.appendChild(card);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}
>>>>>>> b1b8eddbd7509d4cb4c7c99d7049185730e3b692
