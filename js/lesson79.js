const lessonTitle = "Lesson 79";
const currentVideoId = "ucE_UVyf6EI";

const timeRanges = [
  { start: 0, end: 30 }, //Verbs
  { start: 30, end: 101 }, //Vocabulary
  { start: 101, end: 119 }, //exp
  { start: 119, end: 210 }, //Grammar
  { start: 210, end: 255 }, //Frases 1
  { start: 255, end: 303 }, //Fr2
  { start: 303, end: 373 }, //Fr3
  { start: 373, end: 394 }, //Fr4
  { start: 394, end: 589 }, //Verbs
  { start: 589, end: 900 }, //vac
  { start: 900, end: 1002 }, //exp
  { start: 1002, end: 9999 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to run, ran", "correr, administrar"]
    ],
    [
      ["to stop, stopped", "parar"]
    ],
    [
      ["to save, saved", "salvar, economizar, poupar"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["sink", "pia"],
      ["salt", "sal"],
      ["salt shaker", "saleiro"],
      ["pepper", "pimenta"],
      ["pepper shaker", "pimenteiro"],
      ["light bulb", "lâmpada"],
      ["lamp", "abajur"],
      ["candle", "vela"],
      ["movie theater", "cinema"],
      ["half", "meio, metade"]
    ],
    [
      ["bell", "sino"],
      ["doorbell", "campainha"],
      ["sunglasses", "óculos de sol"],
      ["place", "lugar"],
      ["online", "conectado"],
      ["offline", "desconectado"],
      ["monitor", "monitor"],
      ["slim monitor", "monitor de tela fina"],
      ["mouse", "mouse"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["half a dollar", "meio dólar"]
    ],
    [
      ["pizza place", "pizzaria"]
    ],
    [
      ["to go jogging", "fazer 'cooper'"]
    ],
    [
      ["leftovers", "sobras"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["This is my passport.", "Este é meu passaporte."],
      ["This is your ring.", "Este é seu anel."],
      ["This is his camera.", "Esta é sua câmera."],
      ["This is her purse.", "Esta é sua bolsa."],
      ["This is our dog.", "Este é nosso cachorro."],
      ["These are their magazines.", "Estas são suas revistas."],

      ["",""],["",""],

      ["She stopped eating red meat.", "Ela parou de comer carne vermelha."],
      ["She stopped working to study only.", "Ela parou de trabalhar para somente estudar."]
    ],
    [
      ["This passport is mine.", "Este passaporte é meu."],
      ["This ring is yours.", "Este anel é seu."],
      ["This camera is his.", "Esta câmera é dele."],
      ["This purse is hers.", "Esta bolsa é dela."],
      ["This dog is ours.", "Este cachorro é nosso."],
      ["These magazines are theirs.", "Estas revistas são deles."],
            ["",""],["",""]

    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["We ran in the rain.",""],
      ["Did you run yesterday morning?",""],
      ["They didn't run to the classroom.",""],
      ["Who runs his business?",""]
    ],
    [
      ["The doctor saved his life.",""],
      ["He didn't save his money.",""],
      ["Did you save a seat for me?",""],
      ["Didn't you save the leftovers?",""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["She didn't stop working.",""],
      ["He didn't stop it to work.",""],
      ["Did you stop running every day?",""],
      ["Didn't she stop thinking about it?",""]
    ],
    [
      ["It's only half a dollar.",""],
      ["How long does it take?",""],
      ["It will take half an hour.",""],
      ["She went jogging this morning.",""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["These are my sunglasses.",""],
      ["This is her wallet.",""],
      ["This is your DVD.",""],
      ["Those are their books.",""],
      ["This is his briefcase.",""],
      ["These are our shoes.",""]
    ],
    [
      ["These sunglasses are mine.",""],
      ["This wallet is hers.",""],
      ["That DVD is yours.",""],
      ["Those books are theirs.",""],
      ["This briefcase is his.",""],
      ["These shoes are ours.",""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["Who's online now?",""],
      ["Jane is online.",""]
    ],
    [
      ["Did you save your text?",""],
      ["I will save it now.",""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to run, ran", "correr, administrar"]
    ],
    [
      ["to stop, stopped", "parar"]
    ],
    [
      ["to save, saved", "salvar, economizar, poupar"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["sink", "pia"],
      ["salt", "sal"],
      ["salt shaker", "saleiro"],
      ["pepper", "pimenta"],
      ["pepper shaker", "pimenteiro"],
      ["light bulb", "lâmpada"],
      ["lamp", "abajur"],
      ["candle", "vela"],
      ["movie theater", "cinema"],
      ["half", "meio, metade"]
    ],
    [
      ["bell", "sino"],
      ["doorbell", "campainha"],
      ["sunglasses", "óculos de sol"],
      ["place", "lugar"],
      ["online", "conectado"],
      ["offline", "desconectado"],
      ["monitor", "monitor"],
      ["slim monitor", "monitor de tela fina"],
      ["mouse", "mouse"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["half a dollar", "meio dólar"]
    ],
    [
      ["pizza place", "pizzaria"]
    ],
    [
      ["to go jogging", "fazer 'cooper'"]
    ],
    [
      ["leftovers", "sobras"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["This is my passport.", "Este é meu passaporte."],
      ["This is your ring.", "Este é seu anel."],
      ["This is his camera.", "Esta é sua câmera."],
      ["This is her purse.", "Esta é sua bolsa."],
      ["This is our dog.", "Este é nosso cachorro."],
      ["These are their magazines.", "Estas são suas revistas."],

      ["",""],["",""],

      ["She stopped eating red meat.", "Ela parou de comer carne vermelha."],
      ["She stopped working to study only.", "Ela parou de trabalhar para somente estudar."]
    ],
    [
      ["This passport is mine.", "Este passaporte é meu."],
      ["This ring is yours.", "Este anel é seu."],
      ["This camera is his.", "Esta câmera é dele."],
      ["This purse is hers.", "Esta bolsa é dela."],
      ["This dog is ours.", "Este cachorro é nosso."],
      ["These magazines are theirs.", "Estas revistas são deles."],
            ["",""],["",""]

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
