const lessonTitle = "Suh";
const currentVideoId = "atKAEtCNEio";

const timeRanges = [

  { start: 15, end: 9999 }, 

];

const lessonCards = [
{
  "title": "Au Pair Introduction",
  "columns": [
    [
      ["Hi! My name is Sulian Favorato, and I’m from Brazil.", "", 15, 21],
      ["",""],
      ["I am a caring, responsible, and patient person, and I truly enjoy working with children.", "", 21, 27],
      ["",""],
      ["I chose to become an au pair because I want to experience a new culture, improve my English, and be part of a host family.", "", 27, 34],
      ["",""],
      ["I have solid childcare experience.", "", 34, 36],
      ["",""],
      ["I took care of a girl named Alicia for one year and four months, from the age of two until she was four.", "",  36, 42],
      ["",""],
      ["My responsibilities included preparing meals, helping with daily routines, playing, reading, and supporting her overall development.", "", 42, 50],
      ["",""],
      ["I also cared for a baby named Lua for eight months, from two to ten months old.", "", 50, 55],
      ["",""],
      ["I was responsible for her daily care, including feeding, changing diapers, bathing, putting her to sleep, and doing sensory and creative activities.", "", 55, 65],
      ["",""],
      ["Caring for children has taught me patience, responsibility, and how essential love and attention are for a child’s development.", "", 65, 72],
      ["",""],
      ["I come from a close and loving family, and family is very important to me.", "", 72, 77],
      ["",""],
      ["In my free time, I enjoy listening to music, watching videos, going out with friends, and learning new things.", "",77, 83 ],
      ["",""],
      ["I also love traveling and discovering new cultures.", "",83, 87 ],
      ["",""],
      ["I believe I can be a positive part of a host family by helping with childcare and sharing my culture.", "", 86, 93],
      ["",""],
      ["Thank you for watching my video. I hope to meet you soon!", "",93,9999 ]
    ]
  ]
}

];

function loadLessonContent() {
  document.getElementById("lessonTitle").textContent = lessonTitle;
  const stack = document.querySelector(".card-stack");
  stack.innerHTML = "";

  lessonCards.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = "card";
    if (index === 0) div.classList.add("active");

    // Verifica se existe imagem no card
if (card.image) {
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = "Imagem da pergunta";
  img.style.maxWidth = "100%";
  img.style.marginBottom = "10px";
  div.appendChild(img);
}


    if (card.title) {
      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.textContent = card.title;
      div.appendChild(h2);
    }

    // Cards do tipo Listening
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

    // Outros tipos de cards
    const grid = document.createElement("div");
    grid.className = "grid2";

    card.columns.forEach(colData => {
      const col = document.createElement("div");
      col.className = "vocab-col";

colData.forEach(item => {
  // Verifica se é uma imagem
  if (item[0] === "img" && item[1]) {
    const img = document.createElement("img");
    img.src = item[1];
    img.alt = "Imagem da coluna";
   img.style.display = "block";
img.style.margin = "0 auto 30px";
img.style.maxWidth = "200%";
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
      span.textContent = text;
      span.onclick = () => playSegment(start, end);

      p.appendChild(span);
    } else {
      const [en, pt] = item;
      p.innerHTML = `<span class="text-blue">${en}</span><br><span class="text-white">${pt}</span>`;
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
