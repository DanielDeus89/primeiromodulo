const lessonTitle = "Lesson 70";
const currentVideoId = "FXFuGQenMvI";

const timeRanges = [
  { start: 0, end: 16 }, 
  { start: 16, end: 23 }, 
  { start: 23, end: 33 }, 
  { start: 33, end: 45 }, 
  { start: 45, end: 52 }, 
  { start: 57, end: 75 }, 
  { start: 79, end: 189 },   //https://youtu.be/FXFuGQenMvI?t=189
  { start: 189, end: 244 },   //https://youtu.be/FXFuGQenMvI?t=244
  { start: 244, end: 381 },    //https://youtu.be/FXFuGQenMvI?t=381
  { start: 381, end: 432 },     //https://youtu.be/FXFuGQenMvI?t=432
  { start: 432, end: 550 },      //https://youtu.be/FXFuGQenMvI?t=550
  { start: 550, end: 598 },      //https://youtu.be/FXFuGQenMvI?t=598
  { start: 609, end: 822 },      //https://youtu.be/FXFuGQenMvI?t=822 https://youtu.be/FXFuGQenMvI?t=609
  { start: 828, end: 905 },      //https://youtu.be/FXFuGQenMvI?t=822https://youtu.be/FXFuGQenMvI?t=909 https://youtu.be/FXFuGQenMvI?t=829

];

const lessonCards = [
{
  "title": "Listening 1",
  "columns": [
    [
    ["a) Because she had to go to a party.", ""],
    ["b) Because she had to go to the doctor.", ""],
    ["c) Because she had to stay at home.", ""]
    ]
  ]
},
{
  "title": "Listening 2",
  "columns": [
    [
      ["a) He checks his emails only on weekends.", ""],
      ["b) He checks his emails in the morning.", ""],
      ["c) He checks his emails only in the afternoon.", ""]
    ]
  ]
},
{
  "title": "Listening 3",
  "columns": [
    [
      ["a) He wants to learn Chinese in the morning.", ""],
      ["b) He wants to learn Chinese next year.", ""],
      ["c) He wants to learn Chinese next month.", ""]
    ]
  ]
},
{
  "title": "Listening 4",
  "columns": [
    [
      ["a) His favorite website is Google.", ""],
      ["b) His favorite website is Wikipedia.", ""],
      ["c) His favorite websites are about weather.", ""]
    ]
  ]
},
{
  "title": "Listening 5",
  "columns": [
    [
      ["a) She's 25 years old.", ""],
      ["b) He's 25 years old.", ""],
      ["c) He's 22 years old.", ""]
    ]
  ]
},

{
  "title": "Listen",
  "type": "listening",
  "segments": [
    { "text": "1. They arrived from their trip yesterday.", "start": 57, "end": 61 },
    { "text": "2. I’m going to take my driver’s license tomorrow.", "start": 61, "end": 65 }, //https://youtu.be/FXFuGQenMvI?t=64
    { "text": "3. I already have my new passport.", "start": 65, "end": 68 }, //https://youtu.be/FXFuGQenMvI?t=68
    { "text": "4. His birthday is on June 1st.", "start": 68, "end": 71 }, //https://youtu.be/FXFuGQenMvI?t=71
    { "text": "5. I remember putting my books in the car.", "start": 71, "end": 75 } //https://youtu.be/FXFuGQenMvI?t=75
  ]
},


  {
  "title": "Practice",
  "columns": [
    [
    ]
  ]
  }, 
  {
     title: "Change Into - or +", //aqui
  "columns": [
    [
    ]
  ]
  }, 
  {
  "title": "Practice", //aqui 
  "columns": [
    [
    ]
  ]
  }, 
  {
    title: "Change into interrogative",
    columns: [
      [ 
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
    title: "Short Answers",
    columns: [
      [ 
      ]
    ]
  },
  {
  "title": "Questions in Trio",
  "columns": [
    [
      ["What did he / she give to his / her mother on Christmas?", ""],
      ["What was he / she doing before class?", ""],
      ["Does he / she know who the first President of the U.S. was?", ""],
      ["Does he / she use MSN every day?", ""],
      ["Does he / she have an iPod?", ""],
      ["When was the last time he / she cleaned his / her car?", ""],
      ["Does he / she look like his / her mother?", ""],
      ["Is he / she a good driver?", ""],
      ["Is he / she too busy today?", ""],
      ["Was he / she at home yesterday afternoon?", ""]
    ]
  ]
},
  {
    title: "Short Answers",
    columns: [
      [ 
      ]
    ]
  },


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
