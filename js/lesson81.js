const lessonTitle = "Lesson 81";
const currentVideoId = "QpOXLprrIw8";

const timeRanges = [
  { start: 7, end: 13 }, //Verbs
  { start: 13, end: 75 }, //Vocabulary
  { start: 75, end: 110 }, //exp 
  { start: 110, end: 193 }, //Grammar
  { start: 193, end: 273 }, //Frases 1
  { start: 273, end: 356 }, //Fr2
  { start: 356, end: 394 }, //Fr3
  { start: 394, end: 543 }, //Verbs
  { start: 543, end: 802 }, //vac
  { start: 802, end: 941 }, //exp
  { start: 941, end: 9999 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["could", "podia, poderia"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["spice", "tempero"],
      ["vinegar", "vinagre"],
      ["olive", "azeitona"],
      ["olive oil", "azeite de oliva"],
      ["salad dressing", "molho para salada"],
      ["sauce", "molho"],
      ["tray", "bandeja"],
      ["hanger", "cabide"],
      ["rug", "tapete"],
      ["carpet", "carpete"]
    ],
    [
      ["chair", "cadeira"],
      ["armchair", "poltrona"],
      ["couch", "sofá"],
      ["doorknob", "maçaneta"],
      ["dresser", "cômoda"],
      ["doormat", "capacho"],
      ["wardrobe", "armário | guarda-roupa"],
      ["closet", "armário embutido"],
      ["cupboard", "armário de cozinha"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["It's fun", "É divertido"],
      ["to have fun", "divertir-se"],
      ["funny", "engraçado"]
    ],
    [
      ["spicy", "apimentada, bem temperada"],
      ["broadband", "banda larga"],
      ["dial up connection", "conexão discada"]
    ],
    [
      ["guy", "sujeito, cara"],
      ["you guys", "vocês, turma"]
    ]
  ]
},
{
  "title": "Grammar - Could / Couldn't",
  "columns": [
    [
      ["I could do it for you.", "Eu poderia fazer isto para você."],
      ["It could happen again.", "Isto poderia acontecer novamente."],
      ["She could talk to him.", "Ela poderia falar com ele."],
      ["They could stay here.", "Eles poderiam ficar aqui."],
      [" ", " "],
      ["I couldn't live without you.", "Eu não poderia viver sem você."],
      ["It couldn't be better.", "Não poderia ser melhor."],
      ["She couldn't do it alone.", "Ela não poderia fazer isto sozinha."],
      ["We couldn't buy it now.", "Nós não poderíamos comprar isto agora."]
    ],
    [
      ["Could I call you tomorrow?", "Eu poderia te ligar amanhã?"],
      ["Could you come here please?", "Você poderia vir aqui, por favor?"],
      ["Could you help us now?", "Você poderia nos ajudar agora?"],
      ["Could we go with you?", "Nós poderíamos ir com vocês?"],
      [" ", " "],
      ["Couldn't they wait for us?", "Eles não poderiam nos esperar?"],
      ["Couldn't you do it yourself?", "Você não poderia fazer você mesmo?"],
      ["Couldn't we go out tonight?", "Não poderíamos sair hoje à noite?"],
      ["Why couldn't we go now?", "Por que nós não poderíamos ir agora?"]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["I could understand it.", ""],
      ["You could also come.", ""],
      ["We could send it today.", ""],
      ["She could do anything.", ""],
      ["They could take her there.", ""],
      ["He could save more money.", ""],
      ["We could invite them.", ""]
    ],
    [
      ["Could I save it now?", ""],
      ["Could you come tomorrow night?", ""],
      ["Could it be cleaned now?", ""],
      ["Could he take us to the airport?", ""],
      ["Could she go by herself?", ""],
      ["Could they finish it tomorrow?", ""],
      ["Could we start it today?", ""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["I couldn't remember your phone number.", ""],
      ["They couldn't try again.", ""],
      ["He couldn't play soccer very well.", ""],
      ["She couldn't open the door.", ""],
      ["It couldn't start late.", ""],
      ["They couldn't stay with us.", ""],
      ["We couldn't go anymore.", ""]
    ],
    [
      ["Couldn't he sleep here tonight?", ""],
      ["Couldn't they bring anything?", ""],
      ["Couldn't it start again?", ""],
      ["Couldn't we study together?", ""],
      ["Couldn't he sing for us?", ""],
      ["Couldn't they buy a new car?", ""],
      ["Couldn't we take it off?", ""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["Have fun.", ""],
      ["Are you having fun?", ""],
      ["This is so funny.", ""],
      ["He's a funny guy.", ""]
    ],
    [
      ["How fun.", ""],
      ["The movie is so funny.", ""],
      ["Did you have fun?", ""],
      ["We had a lot of fun.", ""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["could", "podia, poderia"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["spice", "tempero"],
      ["vinegar", "vinagre"],
      ["olive", "azeitona"],
      ["olive oil", "azeite de oliva"],
      ["salad dressing", "molho para salada"],
      ["sauce", "molho"],
      ["tray", "bandeja"],
      ["hanger", "cabide"],
      ["rug", "tapete"],
      ["carpet", "carpete"]
    ],
    [
      ["chair", "cadeira"],
      ["armchair", "poltrona"],
      ["couch", "sofá"],
      ["doorknob", "maçaneta"],
      ["dresser", "cômoda"],
      ["doormat", "capacho"],
      ["wardrobe", "armário"],
      ["closet", "armário embutido"],
      ["cupboard", "armário de cozinha"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["It's fun", "É divertido"],
      ["to have fun", "divertir-se"],
      ["funny", "engraçado"]
    ],
    [
      ["spicy", "apimentada, bem temperada"],
      ["broadband", "banda larga"],
      ["dial up connection", "conexão discada"]
    ],
    [
      ["guy", "sujeito, cara"],
      ["you guys", "vocês, turma"]
    ]
  ]
},
{
  "title": "Grammar - Could / Couldn't",
  "columns": [
    [
      ["I could do it for you.", "Eu poderia fazer isto para você."],
      ["It could happen again.", "Isto poderia acontecer novamente."],
      ["She could talk to him.", "Ela poderia falar com ele."],
      ["They could stay here.", "Eles poderiam ficar aqui."],
      [" ", " "],

      ["I couldn't live without you.", "Eu não poderia viver sem você."],
      ["It couldn't be better.", "Não poderia ser melhor."],
      ["She couldn't do it alone.", "Ela não poderia fazer isto sozinha."],
      ["We couldn't buy it now.", "Nós não poderíamos comprar isto agora."]
    ],
    [
      ["Could I call you tomorrow?", "Eu poderia te ligar amanhã?"],
      ["Could you come here please?", "Você poderia vir aqui, por favor?"],
      ["Could you help us now?", "Você poderia nos ajudar agora?"],
      ["Could we go with you?", "Nós poderíamos ir com vocês?"],
      [" ", " "],


      ["Couldn't they wait for us?", "Eles não poderiam nos esperar?"],
      ["Couldn't you do it yourself?", "Você não poderia fazer você mesmo?"],
      ["Couldn't we go out tonight?", "Não poderíamos sair hoje à noite?"],
      ["Why couldn't we go now?", "Por que nós não poderíamos ir agora?"]
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
