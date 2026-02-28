const lessonTitle = "Lesson 37";
const currentVideoId = "Xlt8XOx8FLI";

const timeRanges = [
  { start: 11, end: 128 }, //0
  { start: 140, end: 253 }, //1
  { start: 264, end: 414 }, //2
  { start: 422, end: 588 }, //3
  { start: 599, end: 799 }, //4
  { start: 810, end: 895 }, //5
  { start: 895, end: 1120 }, //Verbs
  { start: 1130, end: 1804 }, //Vocabulary
  { start: 1814, end: 2000 }, //Expressions
  { start: 2010, end: 2684 },  //Grammar
  { start: 2694, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Simple Present – I / He",
  "columns": [
    [
      ["I prefer.", "Eu prefiro."],
      ["He prefers.", "Ele prefere."]
    ],
    [
      ["I know.", "Eu sei, conheço."],
      ["He knows.", "Ele sabe, conhece."]
    ],
    [
      ["I read.", "Eu leio."],
      ["He reads.", "Ele lê."]
    ],
    [
      ["I write.", "Eu escrevo."],
      ["He writes.", "Ele escreve."]
    ]
  ]
},
{
  "title": "Simple Present – Prefer",
  "columns": [
    [
      ["She prefers to go alone.", "Ela prefere ir sozinha."],
      ["He prefers to study at night.", "Ele prefere estudar à noite."]
    ],
    [
      ["He prefers English to German.", "Ele prefere inglês a alemão."],
      ["She prefers a house to an apartment.", "Ela prefere uma casa a um apartamento."]
    ]
  ]
},
{
  "title": "Simple Present – Know",
  "columns": [
    [
      ["Does she know where I work?", "Ela sabe onde eu trabalho?"],
      ["Does he know my boss?", "Ele conhece meu chefe?"],
      ["Does she know how to play the piano?", "Ela sabe tocar piano?"]
    ],
    [
      ["She doesn't know where you work.", "Ela não sabe onde você trabalha."],
      ["He doesn't know my family.", "Ele não conhece minha família."],
      ["She knows how to play the keyboard.", "Ela sabe tocar teclado."]
    ]
  ]
},
{
  "title": "Simple Present – Read & Write",
  "columns": [
    [
      ["She reads to her children every night.", "Ela lê para seus filhos todas as noites."],
      ["He doesn't read to his daughter.", "Ele não lê para sua filha."],
      ["Does he know how to read?", "Ele sabe ler?"]
    ],
    [
      ["He likes to write to his friends.", "Ele gosta de escrever a seus amigos."],
      ["She writes emails to her students.", "Ela escreve emails para seus alunos."],
      ["Does he write to his parents every month?", "Ele escreve para seus pais todo mês?"]
    ]
  ]
},
{
  "title": "Simple Present – Review",
  "columns": [
    [
      ["She knows a lot.", "Ela sabe muito."],
      ["My sister doesn't read magazines.", "Minha irmã não lê revistas."],
      ["Does your father like to write?", "Seu pai gosta de escrever?"],
      ["Doesn't your friend like to read?", "Seu amigo não gosta de ler?"]
    ],
    [
      ["Ann goes to school alone.", "Ann vai à escola sozinha."],
      ["Paul doesn't know French.", "Paul não sabe francês."],
      ["Does Mike want to read this book?", "Mike quer ler este livro?"],
      ["Doesn't Mary prefer to write an email?", "Mary não prefere escrever um email?"]
    ]
  ]
},
{
  "title": "Simple Present – It",
  "columns": [
    [
      ["It works.", "Funciona."],
      ["It doesn't work.", "Não funciona."]
    ],
    [
      ["Does it work?", "Funciona?"],
      ["Doesn't it work?", "Não funciona?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to prefer", "preferir"]
    ],
    [
      ["to know", "saber, conhecer"]
    ],
    [
      ["to read", "ler"]
    ],
    [
      ["to write", "escrever"]
    ]
  ]
},
 {
  "title": "Vocabulary",
  "columns": [
    [
      ["how", "como"],
      ["as", "como"],
      ["boss", "chefe"],
      ["waiter", "garçom"],
      ["waitress", "garçonete"],
      ["newspaper", "jornal"],
      ["magazine", "revista"],
      ["letter", "carta"],
      ["mail", "correio, correspondência"],
      ["post office", "correio (agência)"],
      ["postcard", "cartão postal"],
      ["card", "cartão"]
    ],
    [
      ["postman", "carteiro"],
      ["mailman", "carteiro"],
      ["apartment", "apartamento"],
      ["here", "aqui"],
      ["there", "lá"],
      ["month", "mês"],
      ["animal", "animal"],
      ["chicken", "frango"],
      ["pork", "carne de porco"],
      ["turkey", "peru"],
      ["Thanksgiving", "ação de graças"],
      ["holiday", "feriado"]
    ],
    [
      ["bike", "bicicleta"],
      ["bicycle", "bicicleta"],
      ["motorcycle", "motocicleta"],
      ["why", "por que (pergunta)"],
      ["because", "porque (resposta)"],
      ["kind", "tipo"],
      ["his", "seu, dele"],
      ["her", "seu, dela"],
      ["at", "arroba"],
      ["dot com", "ponto com"]
    ]
  ]
},
  {
  "title": "Expressions",
  "columns": [
    [
      ["this morning", "hoje de manhã"],
      ["this afternoon", "hoje à tarde"]
    ],
    [
      ["tonight", "hoje à noite"],
      ["tomorrow morning", "amanhã de manhã"]
    ],
    [
      ["tomorrow night", "amanhã à noite"],
      ["by mail", "pelo correio"]
    ],
    [
      ["to work", "funcionar"],
      ["email account", "conta de email"]
    ]
  ]
},
 {
  "title": "Grammar",
  "columns": [
    [
      ["He reads to his children.", "Ele lê para os filhos dele."],
      ["She writes to her friends.", "Ela escreve para os amigos dela."],
      ["She plays with her kids.", "Ela brinca com os filhos dela."],
      ["He reads his magazine.", "Ele lê sua revista."],
      ["He understands that ...", "Ele entende que ..."],
      ["She knows that ...", "Ela sabe que ..."]
    ],
    [
      ["He knows how to speak French.", "Ele sabe falar francês."],
      ["He knows how to go there.", "Ele sabe ir lá."],
      ["She prefers a car to a motorcycle.", "Ela prefere um carro a uma motocicleta."],
      ["I prefer milk to tea.", "Eu prefiro leite a chá."],
      ["Why does he study English?", "Por que ele estuda inglês?"],
      ["Because he wants to go to the USA.", "Porque ele quer ir aos EUA."]
    ],
    [
      ["It helps.", "Ajuda."],
      ["It doesn't help.", "Não ajuda."],
      ["Does it help?", "Ajuda?"],
      ["Doesn't it help?", "Não ajuda?"]
    ]
  ]
},
 {
  "title": "Listening - Answer the questions",
  "type": "listening",
  "segments": [
    {
      "start": 2696,
      "end": 2703
    },
    {
      "start": 2704,
      "end": 2707
    },
    {
      "start": 2707,
      "end": 2712
    },
    {
      "start": 2712,
      "end": 2716
    },
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
