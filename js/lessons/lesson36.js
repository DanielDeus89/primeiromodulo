const lessonTitle = "Lesson 36";
const currentVideoId = "hsG-XOlo2CU";

const timeRanges = [
  { start: 0, end: 45 }, //0
  { start: 71, end: 105 }, //1
  { start: 119 , end: 139 }, //Conversation in Trio 1
  { start: 139, end: 152 }, //Conversation in Trio 2
  { start: 152, end: 164 }, //Conversation in Trio 3
  { start: 164, end: 184 }, ///Conversation in Trio 1
  { start: 184, end: 196 }, ///Conversation in Trio 2
  { start: 196, end: 209 },  //Conversation in Trio 3
  { start: 212, end: 799 },  //Practice
  { start: 799, end: 977 },  //Questions in Trio
  { start: 987, end: 1063 },  //Questions in Trio
  { start: 1073, end: 1104 },  //Questions in Trio
];

const lessonCards = [
{
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["He/She has enough time.", ""],
      ["He/She doesn't have enough time.", ""],
      ["Does he/she have enough time?", ""],
      ["Doesn't he/she have enough time?", ""],
      ["", ""],
      ["money", ""],
      ["credit", ""],
      ["change", ""],
      ["work", ""],
       ["cash", ""],
      ["food", ""],
      ["coupons", ""]
    ]  
  ]
},
{
  "title": "Make your own Senteces",
  "columns": [
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Does she want to go to the US?", ""],
      ["Do you want to go to the US?", ""],
      ["Yes, I do. I want to go to the US.", ""],
      ["Yes, She does. She wants to go to the US.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Doesn't he have children?", ""],
      ["Don't you have children?", ""],
      ["No, I don't. I don't have children.", ""],
      ["No, he doesn't. He doesn't have children.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Where does he need to go this week?", ""],
      ["Where do you need to go this week?", ""],
      ["I need to go downtown this week.", ""],
      ["He needs to go downtown this week.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Does he want to go to the US?", ""],
      ["Do you want to go to the US?", ""],
      ["Yes, I do. I want to go to the US.", ""],
      ["Yes, She does. She wants to go to the US.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Doesn't he have children?", ""],
      ["Don't you have children?", ""],
      ["No, I don't. I don't have children.", ""],
      ["No, he doesn't. He doesn't have children.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Where does She need to go this week?", ""],
      ["Where do you need to go this week?", ""],
      ["I need to go downtown this week.", ""],
      ["She needs to go downtown this week.", ""]
    ]
  ]
},
{
   title: "Practice",
    columns: [
      [ 
      ]
    ]
},
{
  "title": "Questions in Trio",
  "columns": [
    [
      ["What does she have for breakfast?", ""],
      ["Where does he have to go this week?", ""],
      ["How much money does she need to go to the USA?", ""],
      ["Doesn't he want to buy a new car?", ""],
      ["Doesn't she want to play soccer tomorrow?", ""],
      ["Doesn't he need to go to the bank tomorrow?", ""],
      ["When does she study English?", ""],
      ["How many children does he have?", ""],
      ["Does she play the guitar?", ""],
      ["How much water does she have a day?", ""]
    ]
  ]
},
{
  "title": "Responda",
  "columns": [
    [
      
    ]
  ]
},

{
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
      "start": 1073,
      "end": 1078
    },
    {
       "start": 1078,
      "end": 1083
    },
    {
       "start": 1083,
      "end": 1090
    },
    {
       "start": 1090,
      "end": 1096
    },
    {
       "start": 1096,
      "end": 1104
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
