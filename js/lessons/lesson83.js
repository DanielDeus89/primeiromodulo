const lessonTitle = "Lesson 83";
const currentVideoId = "ZeBrUng3ug8";

const timeRanges = [
  { start: 7, end: 13 }, //Verbs
  { start: 13, end: 75 }, //Vocabulary
  { start: 75, end: 97 }, //exp 
  { start: 97, end: 152 }, //Grammar
  { start: 152, end: 225 }, //Frases 1
  { start: 225, end: 305 }, //Fr2
  { start: 305, end: 343 }, //Fr3
  { start: 343, end: 514 }, //Verbs
  { start: 514, end: 773 }, //vac
  { start: 773, end: 875 }, //exp
  { start: 875, end: 1148 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["should", "dever, deveria"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["sticker", "adesivo"],
      ["calendar", "calendário"],
      ["résumé", "currículo"],
      ["folder", "pasta de papéis"],
      ["truth", "verdade"],
      ["lie", "mentira"],
      ["true", "verdade, verdadeiro"],
      ["false", "falso"],
      ["file", "arquivo"]
  
    ],
    [
      ["file cabinet", "arquivo (móvel)"],
      ["report", "relatório"],
      ["clerk", "balconista"],
      ["typist", "datilógrafo, digitador"],
      ["paper clip", "clipes"],
      ["notepad", "bloco de anotações"],
      ["diary", "agenda"],
      ["stapler", "grampeador"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to fire", "dispensar, despedir"],
      ["report card", "boletim escolar"]
    ],
    [
      ["bad words", "palavrões"],
      ["swear words", "palavrões"]
    ],
    [
      ["besides", "além (do mais)"]
    ]
  ]
},
{
  "title": "Grammar - Should / Shouldn't",
  "columns": [
    [
      ["You should study more.", "Você deveria estudar mais."],
      ["She should take an aspirin.", "Ela deveria tomar uma aspirina."],
      ["People shouldn't say bad words.", "As pessoas não deveriam dizer palavrões."],
      ["We shouldn't go there.", "Nós não deveríamos ir lá."],
      ["Should we work this holiday?", "Nós deveríamos trabalhar este feriado?"]
      
    ],
    [
      ["Should we go now?", "Nós deveríamos ir agora?"],
      ["Should I send my résumé?", "Eu deveria enviar meu currículo?"],
      ["Shouldn't we go now?", "Nós não deveríamos ir agora?"],
      ["Shouldn't we stay longer?", "Nós não deveríamos ficar mais tempo?"]
    ]
  ]
},
{
  "title": "Phrases - Should / Shouldn't",
  "columns": [
    [
      ["We should go now.", ""],
      ["You should send it to him.", ""],
      ["It should be ready by now.", ""],
      ["He should invite her.", ""],
      ["She should come with us.", ""],
      ["We should arrive before noon.", ""]
    ],
    [
      ["Shouldn't we call them first?", ""],
      ["Shouldn't they think about it?", ""],
      ["Shouldn't we invite them?", ""],
      ["Shouldn't she come to the meeting?", ""],
      ["Shouldn't they hurry?", ""],
      ["Shouldn't we help them?", ""]
    ]
  ]
},
{
  "title": "Phrases - Should / Shouldn't",
  "columns": [
    [
      ["She shouldn't say anything.", ""],
      ["You shouldn't sleep until late.", ""],
      ["We shouldn't fire her.", ""],
      ["They shouldn't stop studying.", ""],
      ["She shouldn't work overtime.", ""],
      ["They shouldn't give him any money.", ""]
    ],
    [
      ["Should I send him an email?", ""],
      ["Shouldn't you guys wait?", ""],
      ["Should he send it back?", ""],
      ["Should she remember that?", ""],
      ["Should we buy more food?", ""],
      ["Should we leave now?", ""]
    ]
  ]
},
{
  "title": "Phrases - Review",
  "columns": [
    [
      ["She was fired today.", ""],
      ["Besides working, I study too.", ""],
      ["Are they going to fire him?", ""]
    ],
    [
      ["Never say bad words.", ""],
      ["Did you bring your report card?", ""],
      ["We received his résumé by email.", ""]
    ]
  ]
},

{
  "title": "Verbs",
  "columns": [
    [
      ["should", "dever, deveria"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["sticker", "adesivo"],
      ["calendar", "calendário"],
      ["résumé", "currículo"],
      ["folder", "pasta de papéis"],
      ["truth", "verdade"],
      ["lie", "mentira"],
      ["true", "verdade, verdadeiro"],
      ["false", "falso"],
      ["file", "arquivo"]
  
    ],
    [
      ["file cabinet", "arquivo (móvel)"],
      ["report", "relatório"],
      ["clerk", "balconista"],
      ["typist", "datilógrafo, digitador"],
      ["paper clip", "clipes"],
      ["notepad", "bloco de anotações"],
      ["diary", "agenda"],
      ["stapler", "grampeador"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to fire", "dispensar, despedir"],
      ["report card", "boletim escolar"]
    ],
    [
      ["bad words", "palavrões"],
      ["swear words", "palavrões"]
    ],
    [
      ["besides", "além (do mais)"]
    ]
  ]
},
{
  "title": "Grammar - Should / Shouldn't",
  "columns": [
    [
      ["You should study more.", "Você deveria estudar mais."],
      ["She should take an aspirin.", "Ela deveria tomar uma aspirina."],
      ["People shouldn't say bad words.", "As pessoas não deveriam dizer palavrões."],
      ["We shouldn't go there.", "Nós não deveríamos ir lá."],
      ["Should we work this holiday?", "Nós deveríamos trabalhar este feriado?"]
      
    ],
    [
      ["Should we go now?", "Nós deveríamos ir agora?"],
      ["Should I send my résumé?", "Eu deveria enviar meu currículo?"],
      ["Shouldn't we go now?", "Nós não deveríamos ir agora?"],
      ["Shouldn't we stay longer?", "Nós não deveríamos ficar mais tempo?"]
    ]
  ]
}
,
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
