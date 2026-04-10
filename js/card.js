
function loadLessonContent() {
  document.getElementById("lessonTitle").textContent = lessonTitle;
  const stack = document.querySelector(".card-stack");
  stack.innerHTML = "";

  lessonCards.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = "card";

    if (index === 0) div.classList.add("active");

    // IMAGEM NO TOPO DO CARD
    if (card.image) {
      const img = document.createElement("img");
      img.src = card.image;
      img.alt = "Imagem da pergunta";
      img.style.display = "block";
      img.style.margin = "0 auto 20px";
      img.style.maxWidth = "100%";
      img.style.maxHeight = "300px";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
      div.appendChild(img);
    }

    // TÍTULO COM BOTÃO PLAY/PAUSE
    if (card.title) {
      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.style.display = "flex";
      h2.style.justifyContent = "space-between";
      h2.style.alignItems = "center";
      h2.style.gap = "10px";

      const titleSpan = document.createElement("span");
      titleSpan.textContent = card.title;

      const btnPlayPause = document.createElement("button");
      btnPlayPause.textContent = "▶️";
      btnPlayPause.style.background = "#111";
      btnPlayPause.style.color = "#fff";
      btnPlayPause.style.border = "none";
      btnPlayPause.style.borderRadius = "6px";
      btnPlayPause.style.padding = "6px 10px";
      btnPlayPause.style.cursor = "pointer";
      btnPlayPause.style.fontSize = "14px";
      btnPlayPause.style.flexShrink = "0";

      btnPlayPause.onclick = () => {
        if (typeof player === "undefined" || !player) return;

        const state = player.getPlayerState();

        if (state === 1) {
          player.pauseVideo();
          btnPlayPause.textContent = "▶️";
        } else {
          player.playVideo();
          btnPlayPause.textContent = "⏸";
        }
      };

      h2.appendChild(titleSpan);
      h2.appendChild(btnPlayPause);
      div.appendChild(h2);
    }

    // CARD DE LISTENING
    if (card.type === "listening" && Array.isArray(card.segments)) {
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
      stack.appendChild(div);
      return;
    }

    // OUTROS CARDS
    const grid = document.createElement("div");
    grid.className = "grid2";

    card.columns.forEach((colData) => {
      const col = document.createElement("div");
      col.className = "vocab-col";

      colData.forEach((item) => {
        // SE FOR IMAGEM NA COLUNA
        if (item[0] === "img" && item[1]) {
          const img = document.createElement("img");
          img.src = item[1];
          img.alt = "Imagem da coluna";
          img.style.display = "block";
          img.style.margin = "0 auto 30px";
          img.style.maxWidth = "100%";
          img.style.maxHeight = "300px";
          img.style.borderRadius = "8px";
          img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
          col.appendChild(img);
        } else {
          const p = document.createElement("p");

          if (item.length === 4) {
            const [text, , start, end] = item;

            const span = document.createElement("span");
            span.className = "text-blue clickable";
            span.innerHTML = processHiddenWords(text);

            span.onclick = (e) => {
              if (!e.target.classList.contains("hidden-word")) {
                playSegment(start, end);
              }
            };

            p.appendChild(span);
          } else {
            const [en, pt] = item;
            const processedEn = processHiddenWords(en || "");

            p.innerHTML = `
              <span class="text-blue">${processedEn}</span>
              ${pt ? `<br><span class="text-white">${pt}</span>` : ""}
            `;
          }

          col.appendChild(p);
        }
      });

      grid.appendChild(col);
    });

    div.appendChild(grid);
    stack.appendChild(div);
  });
}

function processHiddenWords(text) {
  if (!text) return "";

  return text.replace(/\{\{(.*?)\}\}/g, (_, word) => {
    const safeWord = String(word).replace(/"/g, "&quot;");
    return `<span class="hidden-word" data-word="${safeWord}">__________</span>`;
  });
}

function toggleWord(el) {
  if (el.classList.contains("revealed")) {
    el.textContent = "__________";
    el.classList.remove("revealed");
  } else {
    el.textContent = el.dataset.word;
    el.classList.add("revealed");
  }
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hidden-word")) {
    e.stopPropagation();
    toggleWord(e.target);
  }
});

function playSegment(start, end) {
  const iframe = document.querySelector("iframe");
  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: "loadVideoById",
      args: [{
        videoId: currentVideoId,
        startSeconds: start,
        endSeconds: end
      }]
    }),
    "*"
  );
}

function toggleText(button) {
  const card = button.closest(".listening-card");
  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}

window.onload = () => {
  loadLessonContent();
};