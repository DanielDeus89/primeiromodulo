const lessonTitle = "Lesson 08";
const currentVideoId = "WnEDZUQ2c5g";

const timeRanges = [
  { start: 10, end: 52 }, //0
  { start: 52, end: 67 }, //0
  { start: 88, end: 237 }, //0Conversation
  { start: 247, end: 329 }, //0Fixacão
  { start: 339, end: 382 }, //0Passe para o Negativo
  { start: 392, end: 477 }, //0Fixacão
  { start: 487, end: 521 }, //0Passe para o Afirmativo
  { start: 531, end: 610 }, //0Fixacão
  { start: 620, end: 652 }, //0Passe para o Interrogativo
  { start: 662, end: 742 }, //0Fixacão
  { start: 752, end: 795 }, //0
  { start: 805, end: 1077 }, //0Questions
  { start: 1077, end: 1299 }, //REsponda
  { start: 1305, end: 1349 }, //0
  { start: 1359, end: 1386 }, //0

];

const lessonCards = [
{
  "title": "Make your own Senteces",
  "columns": [
  ]
},
{
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["I play the violin.", ""],
      ["I don't play the violin.", ""],
      ["Do you play the violin?", ""],
      ["", ""],
      ["guitar", ""],
      ["chess", ""],
      ["piano", ""],
      ["basketball", ""],
      ["volleyball", ""],
      ["tennis", ""],
      ["soccer", ""]
    ]
  ]
},
{
  "title": "Conversation",
  "type": "conversation",
  "columns": [
    [
      ["Do you want to go to the movies with me tomorrow?", " "],
      ["Yes, I do. I want to go to the movies with you tomorrow.", " "],
      ["", ""],

      ["Do you want to sleep or study English now?", " "],
      ["I want to study English now.", " "],
      ["", ""],

      ["Do you drink coffee or tea in the morning?", " "],
      ["I like to drink coffee and milk in the morning.", " "],
      ["", ""],

      ["What do you like to eat for breakfast?", " "],
      ["I like to eat only bread and ham for breakfast.", " "]
    ]
  ]
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Negativo", 
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Interrogativo", 
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Afirmativo ",
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Negativo", 
  "columns": []  
},
{
  "title": "Questions",
  "columns": [
    [
      ["What do you like to eat for breakfast?", ""],
      ["Do you want to go downtown with me today?", ""],
      ["Do you study in the morning or in the afternoon?", ""],
      ["Do you like your neighbor?", ""],
      ["Do you want to drink juice now?", ""],
      ["How do you spell your name?", ""],
      ["Do you study English at night?", ""],
      ["Do you drink a cup of tea in the afternoon?", ""],
      ["Do you play the piano?", ""],
      ["Do you like to drink coffee or juice for breakfast?", ""],
      ["Do you work at a bank or a store?", ""],
      ["What do you like to play?", ""]
    ]
  ]
},
{
  "title": "Responda",
  "type": "listening",
  "segments": [
   
  ]
},
{
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
      "start": 1309,
      "end": 1315
    },
    {
      "start": 1315,
      "end": 1323
    },
    {
      "start": 1323,
      "end": 1330
    },
    {
      "start": 1330,
      "end": 1340
    },
    {
      "start": 1340,
      "end": 1349
    }
  ]
},
{
  "title": "Culture - Labor Day",
  "columns": [
    [
      ["Labor Day is celebrated", "O dia do trabalho é celebrado", 1368, 1371],
      ["on the first Monday in September.", "na primeira segunda-feira de setembro.", 1370, 1373],
      ["It is a holiday in honor of labor.", "É um feriado em homenagem ao trabalho.", 1372, 1376],
      ["Most businesses close,", "A maioria das empresas fecham,", 1376, 1378],
      ["and there are activities", "e há atividades", 1378, 1380],
      ["such as speeches,", "como discursos,", 1379, 1381],
      ["sports events, parades,", "eventos esportivos, paradas,", 1380, 1384],
      ["and picnics.", "e piqueniques.", 1383, 1386]
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

    // TÍTULO COM BOTÃO PLAY/PAUSE DENTRO
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

    // CARDS NORMAIS
    const grid = document.createElement("div");
    grid.className = "grid2";

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

    div.appendChild(grid);
    stack.appendChild(div);
  });
}

window.onload = () => {
  loadLessonContent();
};

function toggleText(button) {
  const card = button.closest(".listening-card");
  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}