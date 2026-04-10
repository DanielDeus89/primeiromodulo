let currentIndex = 0;
let isDevMode = false;

function toggleDevMode() {
  const checkbox = document.getElementById("devCheckbox");
  isDevMode = checkbox ? checkbox.checked : false;
  updateMainButtons();
  renderLessonContent();
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateMainButtons();
    renderLessonContent();
  }
}

function nextCard() {
  if (!isDevMode) return;

  if (currentIndex < lessonCards.length - 1) {
    currentIndex++;
    updateMainButtons();
    renderLessonContent();
  }
}

function back5Seconds() {
  if (typeof player !== "undefined" && player && typeof player.getCurrentTime === "function") {
    const currentTime = player.getCurrentTime();
    const newTime = Math.max(0, currentTime - 5);
    player.seekTo(newTime, true);
    player.playVideo();
  }
}

function updateMainButtons() {
  const nextBtn = document.getElementById("nextBtn");

  if (nextBtn) {
    nextBtn.disabled = !isDevMode || currentIndex === lessonCards.length - 1;
  }
}

function toggleText(button) {
  const card = button.closest(".listening-card");
  if (!card) return;

  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}

function createTitle(card) {
  const h2 = document.createElement("h2");
  h2.className = "section-title lesson-card-title";

  const titleSpan = document.createElement("span");
  titleSpan.className = "lesson-card-title-text";
  titleSpan.textContent = card.title || "Sem título";

  const playPauseBtn = document.createElement("button");
  playPauseBtn.className = "mini-control-btn";
  playPauseBtn.textContent = "▶️";

  h2.appendChild(titleSpan);
  h2.appendChild(playPauseBtn);

  return h2;
}

function createListeningContent(card) {
  const row = document.createElement("div");
  row.className = "listening-row";

  card.segments.forEach((segment) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "listening-card";

    const playBtn = document.createElement("button");
    playBtn.className = "segment-btn";
    playBtn.textContent = "▶️ Ouvir";
    playBtn.onclick = () => {
      if (typeof playSegment === "function") {
        playSegment(segment.start, segment.end);
      }
    };

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "segment-btn";
    toggleBtn.textContent = "👁️ Exibir";
    toggleBtn.onclick = function () {
      toggleText(this);
    };

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

function createNormalContent(card) {
  const grid = document.createElement("div");
  grid.className = "grid2";

  if (!Array.isArray(card.columns)) return grid;

  card.columns.forEach((colData) => {
    const col = document.createElement("div");
    col.className = "vocab-col";

    colData.forEach(([en, pt]) => {
      const p = document.createElement("p");
      p.innerHTML = `<span class="text-blue">${en}</span><br><span class="text-white">${pt}</span>`;
      col.appendChild(p);
    });

    grid.appendChild(col);
  });

  return grid;
}

function renderLessonContent() {
  document.getElementById("lessonTitle").textContent = lessonTitle;

  const stack = document.querySelector(".card-stack");
  if (!stack) return;

  stack.innerHTML = "";

  const card = lessonCards[currentIndex];
  if (!card) return;

  const div = document.createElement("div");
  div.className = "card active";

  div.appendChild(createTitle(card));

  if (card.type === "listening" && Array.isArray(card.segments)) {
    div.appendChild(createListeningContent(card));
  } else {
    div.appendChild(createNormalContent(card));
  }

  stack.appendChild(div);
}

window.onload = () => {
  updateMainButtons();
  renderLessonContent();
};