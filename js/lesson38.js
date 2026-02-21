const lessonTitle = "Lesson 38";
const currentVideoId = "UVSzcfkGESY";

const timeRanges = [
  { start: 0, end: 32 }, //0
  { start: 60, end: 99 }, //1
  { start: 113 , end: 130 }, //Conversation in Trio 1
  { start: 130, end: 144 }, //Conversation in Trio 2
  { start: 144, end: 160 }, //Conversation in Trio 3
  { start: 160, end: 182 }, ///Conversation in Trio 1
  { start: 182, end: 195 }, ///Conversation in Trio 2
  { start: 195, end: 212 },  //Conversation in Trio 3
  { start: 212, end: 99999 },  //Listening
  { start: 212, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["He / She writes cards.", ""],
      ["He / She doesn't write cards.", ""],
      ["Does he / she write cards?", ""],
      ["Doesn't he / she write cards?", ""]
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
     ["Does he know how to speak German?", ""],
        ["Do you know how to speak German?", ""],
        ["No, I don't. I don't know how to speak German.", ""],
        ["No, he doesn't. He doesn't know how to speak German.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
     ["Doesn't she have an email?", ""],
        ["Don't you have an email?", ""],
        ["Yes, I do. I have an email.", ""],
        ["Yes, she does. She has an email.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
     ["How many emails does he write every day?", ""],
        ["How many emails do you write every day?", ""],
        ["I write about 20 emails every day.", ""],
        ["He writes about 20 emails every day.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
     ["Does he know how to speak German?", ""],
        ["Do you know how to speak German?", ""],
        ["No, I don't. I don't know how to speak German.", ""],
        ["No, he doesn't. He doesn't know how to speak German.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
     ["Doesn't she have an email?", ""],
        ["Don't you have an email?", ""],
        ["Yes, I do. I have an email.", ""],
        ["Yes, she does. She has an email.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
     ["How many emails does he write every day?", ""],
        ["How many emails do you write every day?", ""],
        ["I write about 20 emails every day.", ""],
        ["He writes about 20 emails every day.", ""]
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
      "end": 2386
    },
    {
      "text": "4. I study but I don't work.",
      "start": 2386,
      "end": 2383
    },
    {
      "text": "5. I study French with my children.",
      "start": 2383,
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
