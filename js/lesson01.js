const lessonTitle = "Lesson 01";
const currentVideoId = "MThQbrCO0kQ";

const timeRanges = [
  { start: 7, end: 23 },
  { start: 23, end: 89 }, //https://youtu.be/qVWg4NkpmDA?t=89
  { start: 89, end: 110 },   //https://youtu.be/qVWg4NkpmDA?t=109
  { start: 110, end: 179 }, // https://youtu.be/qVWg4NkpmDA?t=175
  { start: 179, end: 233 }, // https://youtu.be/qVWg4NkpmDA?t=233
  { start: 233, end: 291 }, // https://youtu.be/qVWg4NkpmDA?t=291
  { start: 291, end: 332 }, // https://youtu.be/qVWg4NkpmDA?t=332
  { start: 332, end: 369 }, // https://youtu.be/qVWg4NkpmDA?t=369 https://youtu.be/qVWg4NkpmDA?t=333
  { start: 369, end: 599 }, //https://youtu.be/qVWg4NkpmDA?t=599
  { start: 605, end: 844 }, //https://youtu.be/qVWg4NkpmDA?t=935
  { start: 851, end: 935 }, //https://youtu.be/qVWg4NkpmDA?t=851
  { start: 941, end: 1184 }, //https://youtu.be/qVWg4NkpmDA?t=1184
];

const lessonCards = [
 {
  title: "Verbs",
  columns: [
    [["to do, did", "fazer"]],
    [["to pay, paid", "pagar"]],
    [["to put, put", "pôr, colocar"]],
    [["going to", "futuro"]]
  ]
},
  {
  title: "Vocabulary",
  columns: [
    [
      ["internet", "internet"],
      ["virus", "vírus"],
      ["paper", "jornal, papel"],
      ["newsstand", "banca de jornais"],
      ["nightstand", "criado mudo"],
      ["ready", "pronto"],
      ["Brazilian", "brasileiro"],
      ["American", "americano"],
      ["slow", "lento, devagar"],
      ["same", "mesmo"]
    ],
    [
      ["on", "sobre, em cima"],
      ["floor", "chão, piso"],
      ["weather", "tempo (clima)"],
      ["snow", "neve"],
      ["rain", "chuva"],
      ["fog", "neblina"],
      ["cloud", "nuvem"],
      ["sun", "sol"],
      ["beautiful", "bonito"],
      ["forgetful", "esquecido"]
    ]
  ]
},
 {
  title: "Expressions",
  columns: [
    [
      ["to go to bed", "ir dormir, deitar-se"],
      ["to access the internet", "acessar a internet"]
    ],
    [
      ["great", "ótimo"],
      ["finally", "finalmente"]
    ]
  ]
},
  {
  title: "Grammar",
  columns: [
    [
      ["I'm going to a party tomorrow.", "Eu vou a uma festa amanhã."],
      ["I'm not going to the movies tonight.", "Eu não vou ao cinema hoje à noite."],
      ["Are you going to the mall now?", "Você vai ao shopping agora?"],
      ["What are you going to do now?", "O que você vai fazer agora?"],
      ["Why are you going to do this?", "Por que você vai fazer isto?"],
      ["Who is going to stay here?", "Quem vai ficar aqui?"],
      ["Is it going to snow tomorrow?", "Vai nevar amanhã?"]
    ],
    [
      ["How is the weather today?", "Como está o tempo hoje?"],
      ["It's sunny.", "Está ensolarado."],
      ["It's foggy.", "Está nebuloso."],
      ["It's rainy.", "Está chuvoso."],
      ["It's cloudy.", "Está nublado."]
    ]
  ]
},
  {
  title: "Practice Sentences",
  columns: [
    [
      ["We did many things today.", ""],
      ["What are you going to do tonight?", ""],
      ["Why didn't you do that?", ""],
      ["What can I do for you?", ""],
      ["What are they doing here?", ""]
    ],
    [
      ["Are you going to the mall too?", ""],
      ["Is she going to talk to us?", ""],
      ["Are they going to help you?", ""],
      ["Is anybody going to do it?", ""],
      ["What are you going to do on Friday?", ""]
    ]
  ]
},
{
  title: "Practice Sentences",
  columns: [
    [
      ["Where are you going to put it?", ""],
      ["They put her in a good school.", ""],
      ["Put your shoes on, please.", ""],
      ["She put her coat on.", ""],
      ["Can I put it here?", ""]
    ],
    [
      ["How much did you pay for it?", ""],
      ["I paid twenty dollars for it.", ""],
      ["Can you pay for it now?", ""],
      ["She pays all her bills.", ""],
      ["Who paid for the meal?", ""]
    ]
  ]
},
{
  title: "Practice Sentences",
  columns: [
    [
      ["It's a great idea.", ""],
      ["Can I access the internet here?", ""],
      ["She takes two showers a day.", ""],
      ["Did you access the internet today?", ""]
    ],
    [
      ["I have to go to bed now.", ""],
      ["He finally arrived.", ""],
      ["How much money does she make?", ""],
      ["Can you do me a favor?", ""]
    ]
  ]
},
{
  title: "Practice Sentences",
  columns: [
    [
      ["How is the weather today?", ""],
      ["It's sunny.", ""],
      ["It's not rainy.", ""],
      ["It's foggy.", ""]
    ],
    [
      ["Is it cloudy today?", ""],
      ["It's not snowy this week.", ""],
      ["It's snowing a lot.", ""],
      ["Is it raining there?", ""]
    ]
  ]
},
 {
  title: "Verbs",
  columns: [
    [["to do, did", "fazer"]],
    [["to pay, paid", "pagar"]],
    [["to put, put", "pôr, colocar"]],
    [["going to", "futuro"]]
  ]
},
  {
  title: "Vocabulary",
  columns: [
    [
      ["internet", "internet"],
      ["virus", "vírus"],
      ["paper", "jornal, papel"],
      ["newsstand", "banca de jornais"],
      ["nightstand", "criado mudo"],
      ["ready", "pronto"],
      ["Brazilian", "brasileiro"],
      ["American", "americano"],
      ["slow", "lento, devagar"],
      ["same", "mesmo"]
    ],
    [
      ["on", "sobre, em cima"],
      ["floor", "chão, piso"],
      ["weather", "tempo (clima)"],
      ["snow", "neve"],
      ["rain", "chuva"],
      ["fog", "neblina"],
      ["cloud", "nuvem"],
      ["sun", "sol"],
      ["beautiful", "bonito"],
      ["forgetful", "esquecido"]
    ]
  ]
},
 {
  title: "Expressions",
  columns: [
    [
      ["to go to bed", "ir dormir, deitar-se"],
      ["to access the internet", "acessar a internet"]
    ],
    [
      ["great", "ótimo"],
      ["finally", "finalmente"]
    ]
  ]
},
  {
  title: "Grammar",
  columns: [
    [
      ["I'm going to a party tomorrow.", "Eu vou a uma festa amanhã."],
      ["I'm not going to the movies tonight.", "Eu não vou ao cinema hoje à noite."],
      ["Are you going to the mall now?", "Você vai ao shopping agora?"],
      ["What are you going to do now?", "O que você vai fazer agora?"],
      ["Why are you going to do this?", "Por que você vai fazer isto?"],
      ["Who is going to stay here?", "Quem vai ficar aqui?"],
      ["Is it going to snow tomorrow?", "Vai nevar amanhã?"]
    ],
    [
      ["How is the weather today?", "Como está o tempo hoje?"],
      ["It's sunny.", "Está ensolarado."],
      ["It's foggy.", "Está nebuloso."],
      ["It's rainy.", "Está chuvoso."],
      ["It's cloudy.", "Está nublado."]
    ]
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
