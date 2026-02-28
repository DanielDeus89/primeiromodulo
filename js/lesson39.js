const lessonTitle = "Lesson 39";
const currentVideoId = "Fg1bY6Alsdc";

const timeRanges = [
  { start: 10, end: 193 }, //0
  { start: 203, end: 346 }, //1
  { start: 356, end: 576 }, //2
  { start: 586, end: 787 }, //Verbs
  { start: 797, end: 1290 }, //Vocabulary
  { start: 1310, end: 1523 }, //Expressions
  { start: 1533, end: 2042 },  //Grammar
  { start: 2392, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Simple Present – Like & Sleep",
  "columns": [
    [
      ["I like.", "Eu gosto."],
      ["You like.", "Você gosta."],
      ["I like my car.", "Eu gosto do meu carro."],
      ["You like oranges.", "Você gosta de laranja."],
      ["I like you.", "Eu gosto de você."]
    ],
    [
      ["I sleep.", "Eu durmo."],
      ["You sleep.", "Você dorme."],
      ["I sleep in the morning.", "Eu durmo de manhã."],
      ["You sleep in the afternoon.", "Você dorme à tarde."],
      ["I sleep at night.", "Eu durmo à noite."]
    ]
  ]
},
{
  "title": "Simple Present – Like to",
  "columns": [
    [
      ["I like to study.", "Eu gosto de estudar."],
      ["I like to work.", "Eu gosto de trabalhar."],
      ["I like to speak.", "Eu gosto de falar."]
    ],
    [
      ["I don't like to drink soda.", "Eu não gosto de beber refrigerante."],
      ["I don't like to play.", "Eu não gosto de jogar."],
      ["I don't like to sleep.", "Eu não gosto de dormir."]
    ]
  ]
},
{
  "title": "Simple Present – Like to (Questions & Answers)",
  "columns": [
    [
      ["Do you like to study alone?", "Você gosta de estudar sozinho?"],
      ["Do you like to work?", "Você gosta de trabalhar?"],
      ["Do you like to eat?", "Você gosta de comer?"],
      ["Do you like to sleep?", "Você gosta de dormir?"]
    ],
    [
      ["I like to study with you.", "Eu gosto de estudar com você."],
      ["Do you like to study at home?", "Você gosta de estudar em casa?"],
      ["I like to speak with you.", "Eu gosto de falar com você."],
      ["Do you like to speak with me?", "Você gosta de falar comigo?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to like", "gostar (de)"]
    ],
    [
      ["to sleep", "dormir"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["book", "livro"],
      ["car", "carro"],
      ["house", "casa"],
      ["game", "jogo"],
      ["big", "grande"]
    ],
    [
      ["small", "pequeno"],
      ["new", "novo"],
      ["old", "velho"],
      ["husband", "marido"],
      ["wife", "esposa"]
    ],
    [
      ["apple", "maçã"],
      ["orange", "laranja"],
      ["breakfast", "café da manhã"],
      ["lunch", "almoço"],
      ["dinner", "jantar"]
    ],
    [
      ["this", "este, esse"],
      ["yes", "sim"],
      ["no", "não"],
      ["or", "ou"],
      ["for", "para, por"]
    ]
  ]
},
  {
  "title": "Expressions",
  "columns": [
    [
      ["for breakfast", "no café da manhã"],
      ["for lunch", "no almoço"],
      ["for dinner", "no jantar"],
      ["every day", "todos os dias"],
      ["with me", "comigo"]
      
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["I like to sleep.", "Eu gosto de dormir."],
      ["I don't like to drink.", "Eu não gosto de beber."],
      ["Do you like to study?", "Você gosta de estudar?"],
      ["", ""],
      ["a new book", "um livro novo"],
      ["an old house", "uma casa velha"],
      ["a big car", "um carro grande"],
      ["a small store", "uma loja pequena"]
    ],
    [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["an apple", "uma maçã"],
      ["an orange", "uma laranja"],
      ["an evening", "uma noite"],
      ["an English teacher", "um professor de inglês"]
    ]
  ]
},
{
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
       "start": 2395,
      "end": 2061
    },
    {
       "start": 2061,
      "end": 2065
    },
    {
       "start": 2065,
      "end": 2069
    },
    {
       "start": 2069,
      "end": 2075
    },
    {
       "start": 2075,
      "end": 2082
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
