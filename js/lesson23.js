const lessonTitle = "Lesson 23";
const currentVideoId = "ZJ3pe7_QZrU";

const timeRanges = [
  { start: 11, end: 155 }, //0
  { start: 155 + 10, end: 477 }, //1
  { start: 477 + 10, end: 834 }, //2
  { start: 834 + 10, end: 9999 }, //3
  { start: 765 + 10, end: 900 }, //Verbs
  { start: 900 + 10, end: 1472 }, //Vocabulary
  { start: 1472 + 10, end: 1605 }, //Expressions
  { start: 1605 + 10, end: 2125 },  //Grammar
  { start: 2125, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I come.", "Eu falo."],
      ["she speak.", "Você fala."],
      ["I speak English.", "Eu falo inglês."],
      ["You speak Spanish.", "Você fala espanhol."],
      ["I speak Portuguese.", "Eu falo português."],
      ["You speak French.", "Você fala francês."]
    ],
    [
      ["I study.", "Eu estudo."],
      ["You study.", "Você estuda."],
      ["I study English.", "Eu estudo inglês."],
      ["You study Spanish.", "Você estuda espanhol."],
      ["I study Portuguese.", "Eu estudo português."],
      ["You study French.", "Você estuda francês."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I speak with my friend.", "Eu falo com meu amigo."],
      ["I speak with my brother.", "Eu falo com meu irmão."],
      ["You speak with your father.", "Você fala com seu pai."]
    ],
    [
      ["I study with my sister.", "Eu estudo com minha irmã."],
      ["I study with my friend.", "Eu estudo com meu amigo."],
      ["You study with your mother.", "Você estuda com sua mãe."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I speak English with my son.", "Eu falo inglês com meu filho."],
      ["I speak Portuguese with my daughter.", "Eu falo português com minha filha."],
      ["You speak French with your child.", "Você fala francês com seu filho."],
      ["You speak English with your daughter.", "Você fala inglês com sua filha."]
    ],
    [
      ["I study Spanish with my sister.", "Eu estudo espanhol com minha irmã."],
      ["I study French with my children.", "Eu estudo francês com meus filhos."],
      ["You study Portuguese with your father.", "Você estuda português com seu pai."],
      ["You study English with your mother.", "Você estuda inglês com sua mãe."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I don't speak French.", "Eu não falo francês."],
      ["I don't study with my sister.", "Eu não estudo com minha irmã."],
      ["I don't speak Spanish with my brother.", "Eu não falo espanhol com meu irmão."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to speak", "falar"]
    ],
    [
      ["to study", "estudar"]
    ]
  ]
},
 {
  "title": "Vocabulary",
  "columns": [
    [
      ["father", "pai"],
      ["mother", "mãe"],
      ["brother", "irmão"],
      ["sister", "irmã"],
      ["child", "criança"],
      ["daughter", "filha"],
      ["son", "filho"],
      ["children", "crianças, filhos"],
      ["friend", "amigo, amiga"],
      ["my", "meu, minha"],
      ["your", "seu, sua"]
    ],
    [
      ["with", "com"],
      ["Portuguese", "português"],
      ["English", "inglês"],
      ["French", "francês"],
      ["Spanish", "espanhol"],
      ["of", "de"],
      ["a", "um, uma"],
      ["cup", "xícara"],
      ["glass", "copo"],
      ["now", "agora"],
      ["today", "hoje"]
    ]
  ]
},
  {
  "title": "Expressions",
  "columns": [
    [
      ["good morning", "bom dia"],
      ["good afternoon", "boa tarde"]
    ],
    [
      ["good evening", "boa noite (chegada)"],
      ["good night", "boa noite (saída)"]
    ]
  ]
},
 {
  "title": "Grammar",
  "columns": [
    [
      ["I drink.", "Eu bebo."],
      ["I don't drink.", "Eu não bebo."],
      ["I eat.", "Eu como."],
      ["I don't eat.", "Eu não como."]
    ],
    [
      ["I study.", "Eu estudo."],
      ["I don't study.", "Eu não estudo."],
      ["I speak.", "Eu falo."],
      ["I don't speak.", "Eu não falo."]
    ],
    [
      ["I speak with you.", "Eu falo com você."],
      ["I don't speak with you.", "Eu não falo com você."],
      ["I drink a glass of milk.", "Eu bebo um copo de leite."],
      ["I don't drink a cup of coffee.", "Eu não bebo uma xícara de café."]
    ]
  ]
},
 {
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
      "text": "1. I don't speak Portuguese with my mother.",
      "start": 2137,
      "end": 2144
    },
    {
      "text": "2. I study French with my friends.",
      "start": 2144,
      "end": 2150
    },
    {
      "text": "3. I don't speak Spanish with my father.",
      "start": 2150,
      "end": 2156
    },
    {
      "text": "4. I don't drink coffee and milk in the morning.",
      "start": 2156,
      "end": 2163
    },
    {
      "text": "5. I don't eat cheese and I don't drink milk.",
      "start": 2163,
      "end": 2172
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
