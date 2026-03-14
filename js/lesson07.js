const lessonTitle = "Lesson 07";
const currentVideoId = "rSWd4_9blSY";

const timeRanges = [
  { start: 10, end: 467 }, //0
  { start: 477, end: 687 }, //1
  { start: 697, end: 774 }, //2
  { start: 784, end: 902 }, //Verbs
  { start: 912, end: 1640 }, //Vocabulary
  { start: 1650, end: 1794 }, //Expressions
  { start: 1804, end: 1974 },  //Grammar
  { start: 1984, end: 2478 },  //Grammar
  { start: 2488, end: 2521 },  //Listening
];

const lessonCards = [
{
  "title": "I want / I go",
  "columns": [
    [
      ["I want to go with you.", "Eu quero ir com você."],
      ["I want to speak only English.", "Eu quero falar só inglês."],
      ["I want to play soccer.", "Eu quero jogar futebol."],
      ["I want to sleep now.", "Eu quero dormir agora."],
      ["I want to study French.", "Eu quero estudar francês."],
      ["I want to work at night.", "Eu quero trabalhar à noite."]    ],
    [
      ["I want to go to the movies.", "Eu quero ir ao cinema."],
      ["I want to go to the park.", "Eu quero ir ao parque."],
      ["I want to go to school.", "Eu quero ir à escola."],
      ["I want to go to church.", "Eu quero ir à igreja."],
      ["I want to go downtown.", "Eu quero ir ao centro."],
      ["I want to go home.", "Eu quero ir para casa."]    ]
  ]
},
{
  "title": "I want / I go",
  "columns": [
    [
      ["What do you eat?", "O que você come?"],
      ["What do you play?", "O que você joga?"],
      ["What do you drink?", "O que você bebe?"],
      ["What do you want?", "O que você quer?"]    
    ],
    [
      ["What do you like to drink?", "O que você gosta de beber?"],
      ["What do you like to study?", "O que você gosta de estudar?"],
      ["What do you like to play?", "O que você gosta de jogar?"],
      ["What do you like to eat?", "O que você gosta de comer?"]
    ]
  ]
},
{
  "title": "I want / I go",
  "columns": [
    [
      ["How do you spell your name?", "Como se escreve seu nome?"]
    ],
    [
            ["How do you spell your last name?", "Como se escreve seu sobrenome?"]
   ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to want", "querer"]
    ],
    [
      ["to go", "ir"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["office", "escritório"],
      ["movies", "cinema"],
      ["park", "parque"],
      ["church", "igreja"],
      ["downtown", "centro da cidade"],
      ["boss", "chefe"],
      ["manager", "gerente"],
      ["neighbor", "vizinho"],
      ["parents", "pais"],
      ["name", "nome"]
    ],
    [
      ["day", "dia"],
      ["week", "semana"],
      ["tomorrow", "amanhã"],
      ["to", "para, a"],
      ["to the", "para o, para a, ao, à"],
      ["in", "em"],
      ["in the", "no, na"],
      ["that", "aquele, aquela, aquilo"],
      ["what", "o que, qual"],
      ["how", "como"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["How do you spell your name?", "Como se escreve seu nome?"],
      ["last name", "sobrenome"],
      ["so long", "até logo"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["I want to go to the movies.", "Eu quero ir ao cinema."],
      ["I want to go to school.", "Eu quero ir à escola."],
      ["I want to go home.", "Eu quero ir para casa."]
    ],
    [
      ["I want to go downtown.", "Eu quero ir ao centro."],
      ["I play in the park.", "Eu brinco no parque."],
      ["What do you want to drink?", "O que você quer beber?"]
    ]
  ]
},
{
  "title": "Alphabet",
  "columns": [
    [
      ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", ""],
      [" ", ""],
      ["\"B\" as in boy", ""],
      ["\"S\" as in Sam", ""]
    ]
  ]
},
{
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
       "start": 2490,
      "end": 2496
    },
    {
       "start": 2496,
      "end": 2501
    },
    {
       "start": 2501,
      "end": 2508
    },
    {
       "start": 2508,
      "end": 2514
    },
    {
       "start": 2514,
      "end": 2521
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
