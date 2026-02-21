const lessonTitle = "Lesson 03";
const currentVideoId = "9vrpDb0-aFw";

const timeRanges = [
  { start: 10, end: 283 }, //0
  { start: 283, end: 444 }, //1
  { start: 444, end: 588 }, //2
  { start: 588, end: 778 }, //3
  { start: 778, end: 915 }, //Verbs
  { start: 915, end: 1404 }, //Vocabulary
  { start: 1404, end: 1542 }, //Expressions
  { start: 1542, end: 1999 },  //Grammar
  { start: 1999, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I work.", "Eu trabalho."],
      ["You work.", "Você trabalha."],
      ["I work here.", "Eu trabalho aqui."],
      ["You work there.", "Você trabalha lá."],
      ["I work alone.", "Eu trabalho sozinho."],
      ["You work at home.", "Você trabalha em casa."]
    ],
    [
      ["I play.", "Eu jogo, eu brinco, eu toco."],
      ["You play.", "Você joga, você brinca, você toca."],
      ["I play soccer.", "Eu jogo futebol."],
      ["You play tennis.", "Você joga tênis."],
      ["I play volleyball with my friend.", "Eu jogo vôlei com meu amigo."],
      ["You play chess with your brother.", "Você joga xadrez com seu irmão."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I don't work at a bank.", "Eu não trabalho em um banco."],
      ["I don't work at the store.", "Eu não trabalho na loja."],
      ["I don't work at home.", "Eu não trabalho em casa."]
    ],
    [
      ["I don't play the piano.", "Eu não toco piano."],
      ["I don't play the guitar.", "Eu não toco violão."],
      ["I don't play the violin.", "Eu não toco violino."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I work in the morning.", "Eu trabalho de manhã."],
      ["I work in the afternoon.", "Eu trabalho à tarde."],
      ["You work in the evening.", "Você trabalha à noite."]
    ],
    [
      ["I play in the morning.", "Eu brinco de manhã."],
      ["I play in the afternoon.", "Eu brinco à tarde."],
      ["You play in the evening.", "Você brinca à noite."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I study, but I don't work.", "Eu estudo, mas não trabalho."],
      ["I don't work at night.", "Eu não trabalho à noite."],
      ["I only work in the morning.", "Eu só trabalho de manhã."]
    ],
    [
      ["I play soccer, but I don't play volleyball.", "Eu jogo futebol, mas não jogo vôlei."],
      ["I play the guitar, but I don't play the violin.", "Eu toco violão, mas não toco violino."],
      ["I play soccer, but I don't play tennis.", "Eu jogo futebol, mas não jogo tênis."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to work", "trabalhar"]
    ],
    [
      ["to play", "jogar, brincar, tocar"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["teacher", "professor"],
      ["school", "escola"],
      ["home", "lar, casa"],
      ["store", "mercado, loja"],
      ["bank", "banco"],
      ["alone", "sozinho"],
      ["only", "só, somente"],
      ["but", "mas"],
      ["here", "aqui"],
      ["there", "lá"]
    ],
    [
      ["at", "em"],
      ["the", "o, a, os, as"],
      ["soccer", "futebol"],
      ["tennis", "tênis"],
      ["volleyball", "vôlei"],
      ["basketball", "basquete"],
      ["chess", "xadrez"],
      ["piano", "piano"],
      ["guitar", "violão"],
      ["violin", "violino"]
    ]
  ]
},
  {
  "title": "Expressions",
  "columns": [
    [
      ["excuse me", "desculpe, com licença, \"não entendi\""],
      ["sorry", "desculpe"]
    ],
    [
      ["you're welcome", "de nada"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["in the morning", "de manhã"],
      ["in the afternoon", "à tarde"],
      ["in the evening", "à noite"],
      ["at night", "à noite"]
    ],
    [
      ["I work at home.", "Eu trabalho em casa."],
      ["I study at school.", "Eu estudo na escola."],
      ["I work at a store.", "Eu trabalho em uma loja."],
      ["I work at the bank.", "Eu trabalho no banco."]
    ],
    [
      ["I play volleyball.", "Eu jogo vôlei."],
      ["I play the violin.", "Eu toco violino."]
    ]
  ]
},
{
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
      "text": "1. I play volleyball with my friends.",
      "start": 2012,
      "end": 2019
    },
    {
      "text": "2. I don't work at the bank. I work here.",
      "start": 2019,
      "end": 2028
    },
    {
      "text": "3. I play the guitar but I don't play the violin.",
      "start": 2028,
      "end": 2036
    },
    {
      "text": "4. I study but I don't work.",
      "start": 2036,
      "end": 2043
    },
    {
      "text": "5. I study French with my children.",
      "start": 2043,
      "end": 2053
    }
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

    // Título
    if (card.title) {
      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.textContent = card.title;
      div.appendChild(h2);
    }

    // Se for card de Listening
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
      return; // evita processar abaixo
    }

    // Cards normais
    const grid = document.createElement("div");
    grid.className = "grid2";

    card.columns.forEach(colData => {
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

// 🔸 ESSENCIAL PARA FUNCIONAR:
window.onload = () => {
  loadLessonContent();
};

function toggleText(button) {
  const card = button.closest(".listening-card");
  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}
