const lessonTitle = "Lesson 04";
const currentVideoId = "2UqjD__uP30";

const timeRanges = [
  { start: 10, end: 32 }, //0
  { start: 32, end: 95 }, //0
  { start: 113, end: 321 }, //0
  { start: 334, end: 412 }, //0
  { start: 422, end: 462 }, //0
  { start: 473, end: 555 }, //0
  { start: 565, end: 605 }, //0
  { start: 615, end: 678 }, //0
  { start: 688, end: 722 }, //0
  { start: 732, end: 995 }, //0
  { start: 805, end: 852 }, //0
  { start: 862, end: 998 }, //0
  { start: 998, end: 1050 }, //0
  { start: 1096, end: 1601 }, //0
  { start: 1618, end: 1651 }, //0

];

const lessonCards = [
  {
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["I study English at night.", ""],
      ["I don't study English at night", ""],
      ["", ""],
      ["Portuguese", ""],
      ["Spanish", ""],
      ["French", ""],
      ["piano", ""],
      ["guitar", ""],
      ["violin", ""]
    ]
  ]
},
{
  "title": "Make your own Senteces",
  "columns": [
  ]
},
{
  "title": "Conversation",
  "type": "conversation",
  "columns": [
    [
      ["I drink coffee in the morning.", ""],
      ["I don't drink coffee in the morning, but I drink tea.", ""],
      ["", ""],

      ["I eat cheese in the afternoon.", ""],
      ["I don't eat cheese in the afternoon, but I eat bread and ham.", ""],
      ["", ""],

      ["I work with my father.", ""],
      ["I don't work with my father, but I work with my brother.", ""],
      ["", ""],

      ["I play the piano.", ""],
      ["I don't play the piano, but I play the guitar.", ""]
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
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Afirmativo ",
  "columns": []  
},
{
  "title": "Oral Practice",
  "type": "speak",
  "columns": [
    [
      ["I drink juice.", ""],
      ["You work at night.", ""],
      ["I eat ham.", ""],
      ["You play the violin.", ""],
      ["I drink tea.", ""],
      ["You study English.", ""],
      ["I speak Portuguese.", ""],
      ["You eat meat.", ""],
      ["I eat cheese in the morning.", ""],
      ["You speak with the teacher.", ""]
    ],
    [
      ["I play with my sister.", ""],
      ["You work with your brother.", ""],
      ["I study with my sister.", ""],
      ["You drink tea in the evening.", ""],
      ["I eat bread and ham.", ""],
      ["You drink coffee at night.", ""],
      ["I study and work.", ""],
      ["You play tennis.", ""],
      ["I speak with my brother.", ""],
      ["You work at the store.", ""]
    ]
  ]
},
{
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
      "start": 1011,
      "end": 1018
    },
    {
      "start": 1018,
      "end": 1023
    },
    {
      "start": 1023,
      "end": 1031
    },
    {
      "start": 1031,
      "end": 1039
    },
    {
      "start": 1039,
      "end": 1048 
    }
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
      "start": 1618,
      "end": 1623
    },
    {
      "start": 1623,
      "end": 1629
    },
    {
      "start": 1629,
      "end": 1635
    },
    {
      "start": 1635,
      "end": 1642
    },
    {
      "start": 1642,
      "end": 1651
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
