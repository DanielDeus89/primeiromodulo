const lessonTitle = "Lesson 06";
const currentVideoId = "4DfRzuJQVnE";

const timeRanges = [
  { start: 10, end: 43 }, //0
  { start: 43, end: 78 }, //0
  { start: 95, end: 274 }, //0Conversation
  { start: 284, end: 361 }, //0Fixacão
  { start: 371, end: 418 }, //0Passe para o Negativo
  { start: 428, end: 508 }, //0Fixacão
  { start: 518, end: 575 }, //0Passe para o Afirmativo
  { start: 585, end: 663 }, //0Fixacão
  { start: 673, end: 721 }, //0Passe para o Interrogativo
  { start: 731, end: 807 }, //0Fixacão
  { start: 817, end: 857 }, //0
  { start: 857, end: 1161 }, //0Questions
  { start: 1171, end: 1574 }, //REsponda
  { start: 1584, end: 1626 }, //0
  { start: 1699, end: 2208 }, //0
  { start: 2208, end: 9999 }, //0

];

const lessonCards = [
  {
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["I have a small car.", ""],
      ["I don't have a small car.", ""],
      ["Do you have a small car?", ""],
      ["", ""],
      ["house", ""],
      ["cup", ""],
      ["glass", ""],
      ["store", ""],
      ["chess", ""],
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
      ["Do you speak Portuguese at home?", " "],
      ["No, I don't. I don't speak Portuguese at home. I speak English.", " ."],
      ["", ""],

      ["Do you work in the morning?", " "],
      ["No, I don't. I don't work in the morning. I work at night.", " "],
      ["", ""],

      ["Do you like to drink tea with your friends?", ""],
      ["Yes, I do. I like to drink tea with my friends in the afternoon.", " "],
      ["", ""],

      ["Do you speak English with your brother?", " "],
      ["No, I don't. I speak English with my sister.", " "]
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
  "title": "Questions",
  "columns": [
    [
      ["Do you speak English?", ""],
      ["Do you like to sleep in the morning?", ""],
      ["Do you drink coffee or milk for breakfast?", ""],
      ["Do you study English with your brother?", ""],
      ["Do you eat meat for breakfast?", ""],
      ["Do you drink juice at night?", ""],
      ["Do you play with your son every day?", ""],
      ["Do you eat bread and cheese at school?", ""],
      ["Do you study English or Portuguese at school?", ""],
      ["Do you drink coffee or tea for breakfast?", ""],
      ["Do you study your English lessons alone?", ""],
      ["Do you like to play soccer or volleyball?", ""]
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
      "start": 1589,
      "end": 1593
    },
    {
      "start": 1593,
      "end": 1601
    },
    {
      "start": 1601,
      "end": 1609
    },
    {
      "start": 1609,
      "end": 1621
    },
    {
      "start": 1621,
      "end": 1626
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
      "start": 2223,
      "end": 2229
    },
    {
      "start": 2229,
      "end": 2235
    },
    {
      "start": 2235,
      "end": 2242
    },
    {
      "start": 2242,
      "end": 2248
    },
    {
      "start": 2248,
      "end": 2257
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
