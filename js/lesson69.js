const lessonTitle = "Lesson 69";
const currentVideoId = "KbIi8l64Bzc";

const timeRanges = [
  { start: 9, end: 27 }, 
  { start: 27, end: 114 }, //https://youtu.be/KbIi8l64Bzc?t=114
  { start: 114, end: 143 }, //https://youtu.be/KbIi8l64Bzc?t=143
  { start: 143, end: 169 }, //https://youtu.be/KbIi8l64Bzc?t=169 
  { start: 169, end: 221 },  //https://youtu.be/KbIi8l64Bzc?t=221
  { start: 221, end: 353 }, //https://youtu.be/KbIi8l64Bzc?t=353
  { start: 353, end: 394 },  //https://youtu.be/KbIi8l64Bzc?t=394
  { start: 394, end: 442 }, //https://youtu.be/KbIi8l64Bzc?t=442
  { start: 442, end: 484 }, //https://youtu.be/KbIi8l64Bzc?t=484
  { start: 484, end: 506 }, //https://youtu.be/KbIi8l64Bzc?t=506 https://youtu.be/KbIi8l64Bzc?t=513
  { start: 512, end: 689 }, //https://youtu.be/KbIi8l64Bzc?t=689
  { start: 698, end: 966 }, //https://youtu.be/KbIi8l64Bzc?t=697 https://youtu.be/KbIi8l64Bzc?t=966 https://youtu.be/KbIi8l64Bzc?t=974
  { start: 974, end: 1115 }, //https://youtu.be/KbIi8l64Bzc?t=974 https://youtu.be/KbIi8l64Bzc?t=1115
  { start: 1120, end: 1138 },  //https://youtu.be/KbIi8l64Bzc?t=1120 https://youtu.be/KbIi8l64Bzc?t=1138
  { start: 1138, end: 1186 },  //https://youtu.be/KbIi8l64Bzc?t=1120 https://youtu.be/KbIi8l64Bzc?t=1186
  { start: 1186, end: 9999 },  //https://youtu.be/KbIi8l64Bzc?t=1120 https://youtu.be/KbIi8l64Bzc?t=1186

];

const lessonCards = [
{
  title: "Verbs",
  columns: [
    [["to look, looked", "olhar, parecer"]],
    [["to see, saw", "ver"]],
    [["to give, gave", "dar"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["clean", "limpo"],
      ["dirty", "sujo"],
      ["empty", "vazio"],
      ["full", "cheio"],
      ["right", "certo"],
      ["wrong", "errado"]
    ],
    [
      ["ring", "anel"],
      ["kiss", "beijo"],
      ["hug", "abraço"],
      ["young", "jovem"],
      ["youth", "juventude"],
      ["teenager", "jovem, adolescente"]
    ],
    [
      ["adolescent", "adolescente"],
      ["adult", "adulto"],
      ["inside", "dentro"],
      ["outside", "fora"],
      ["towel", "toalha"]
    ],
    [
      ["soap", "sabonete, sabão"],
      ["cracker", "biscoito salgado"],
      ["napkin", "guardanapo"],
      ["electricity bill", "conta de luz"],
      ["program", "programa"]
    ]
  ]
},

  {
  "title": "Expressions",
  "columns": [
    [
      ["I see", "Eu entendo"],
      ["I'm afraid", "Tenho medo, receio"]
    ],
        [
      ["electricity", "eletricidade"],
      ["MSN", "messenger"]
    ],
        [
      ["Mp3", "Mp3"],
      ["actually", "na verdade"]
    ]
  ]
},
  
  {
  "title": "Gramma",
  "columns": [
    [
      ["I gave her the soap.", "Eu dei a ela o sabonete."],
        ["I gave the soap to her.", "Eu dei o sabonete para ela."],
        ["Can you give it back to me?", "Você pode me dar isto de volta?"],
        ["She gave me a hug.", "Ela me deu um abraço."]
    ]
  ]
},  

{
  "title": "Colors",
  "columns": [
    [
      ["blue", "azul"],
      ["red", "vermelho"],
      ["green", "verde"],
      ["yellow", "amarelo"]
    ],
    [
      ["orange", "laranja"],
      ["black", "preto"],
      ["white", "branco"],
      ["gray", "cinza"]
    ],
    [
      ["brown", "marrom"],
      ["purple", "roxo"],
      ["pink", "cor-de-rosa"]
    ],
    [
      ["silver", "prateado"],
      ["gold", "dourado"]
    ]
  ]
},

{
  "title": "Ordinal Numbers",
  "columns": [
    [
      ["1st", "first"],
      ["2nd", "second"],
      ["3rd", "third"],
      ["4th", "fourth"],
      ["5th", "fifth"],
      ["6th", "sixth"],
      ["7th", "seventh"],
      ["8th", "eighth"],
      ["9th", "ninth"],
      ["10th", "tenth"]
    ],
    [
      ["11th", "eleventh"],
      ["12th", "twelfth"],
      ["13th", "thirteenth"],
      ["14th", "fourteenth"],
      ["15th", "fifteenth"],
      ["16th", "sixteenth"],
      ["17th", "seventeenth"],
      ["18th", "eighteenth"],
      ["19th", "nineteenth"],
      ["20th", "twentieth"]
    ],
    [
      ["21st", "twenty-first"],
      ["22nd", "twenty-second"],
      ["30th", "thirtieth"],
      ["40th", "fortieth"],
      ["50th", "fiftieth"],
      ["60th", "sixtieth"],
      ["70th", "seventieth"],
      ["80th", "eightieth"],
      ["90th", "ninetieth"],
      ["100th", "one hundredth"]
    ]
  ]
}, 



{
  "title": "Phrases",
  "columns": [
    [
      ["He looks like her.", ""],
      ["They look very happy.", ""],
      ["She looks pretty.", ""],
      ["Look at him.", ""]
    ],
    [
      ["They gave us nothing.", ""],
      ["How much did you give them?", ""],
      ["We didn't give them anything.", ""],
      ["He didn't give me a hug.", ""]
    ]
  ]
},

{
  "title": "Phrases",
  "columns": [
    [
      ["Did you see what I saw?", ""],
      ["Did you see my pen?", ""],
      ["We saw them at the party.", ""],
      ["I didn't see it yet.", ""]
    ],
    [
      ["I'm afraid he's not here.", ""],
      ["How much was your electricity bill?", ""],
      ["Actually, we're not going.", ""],
      ["What's your MSN?", ""]
    ]
  ]
},
  {
  "title": "Phrases",
  "columns": [
    [
      ["She bought a red dress.", ""],
      ["He had a silver car.", ""],
      ["They live at the White House.", ""],
      ["He brought me a purple shirt.", ""]
    ],
    [
      ["She has a black skirt.", ""],
      ["He bought new brown shoes.", ""],
      ["He had a red motorcycle.", ""],
      ["She has a gray blouse.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["What's the first day of the week?", ""],
      ["It's Sunday.", ""]
    ],
    [
      ["What's the tenth month of the year?", ""],
      ["It's October.", ""]
    ]
  ]
},

{
  title: "Verbs",
  columns: [
    [["to look, looked", "olhar, parecer"]],
    [["to see, saw", "ver"]],
    [["to give, gave", "dar"]]
  ]
},

{
  "title": "Vocabulary",
  "columns": [
    [
      ["clean", "limpo"],
      ["dirty", "sujo"],
      ["empty", "vazio"],
      ["full", "cheio"],
      ["right", "certo"],
      ["wrong", "errado"]
    ],
    [
      ["ring", "anel"],
      ["kiss", "beijo"],
      ["hug", "abraço"],
      ["young", "jovem"],
      ["youth", "juventude"],
      ["teenager", "jovem, adolescente"]
    ],
    [
      ["adolescent", "adolescente"],
      ["adult", "adulto"],
      ["inside", "dentro"],
      ["outside", "fora"],
      ["towel", "toalha"]
    ],
    [
      ["soap", "sabonete, sabão"],
      ["cracker", "biscoito salgado"],
      ["napkin", "guardanapo"],
      ["electricity bill", "conta de luz"],
      ["program", "programa"]
    ]
  ]
},

  {
  "title": "Expressions",
  "columns": [
    [
      ["I see", "Eu entendo"],
      ["I'm afraid", "Tenho medo, receio"]
    ],
        [
      ["electricity", "eletricidade"],
      ["MSN", "messenger"]
    ],
        [
      ["Mp3", "Mp3"],
      ["actually", "na verdade"]
    ]
  ]
},
  

  {
  "title": "Gramma",
  "columns": [
    [
      ["I gave her the soap.", "Eu dei a ela o sabonete."],
        ["I gave the soap to her.", "Eu dei o sabonete para ela."],
        ["Can you give it back to me?", "Você pode me dar isto de volta?"],
        ["She gave me a hug.", "Ela me deu um abraço."]
    ]
  ]
},  

{
  "title": "Colors",
  "columns": [
    [
      ["blue", "azul"],
      ["red", "vermelho"],
      ["green", "verde"],
      ["yellow", "amarelo"]
    ],
    [
      ["orange", "laranja"],
      ["black", "preto"],
      ["white", "branco"],
      ["gray", "cinza"]
    ],
    [
      ["brown", "marrom"],
      ["purple", "roxo"],
      ["pink", "cor-de-rosa"]
    ],
    [
      ["silver", "prateado"],
      ["gold", "dourado"]
    ]
  ]
},

{
  "title": "Ordinal Numbers",
  "columns": [
    [
      ["1st", "first"],
      ["2nd", "second"],
      ["3rd", "third"],
      ["4th", "fourth"],
      ["5th", "fifth"],
      ["6th", "sixth"],
      ["7th", "seventh"],
      ["8th", "eighth"],
      ["9th", "ninth"],
      ["10th", "tenth"]
    ],
    [
      ["11th", "eleventh"],
      ["12th", "twelfth"],
      ["13th", "thirteenth"],
      ["14th", "fourteenth"],
      ["15th", "fifteenth"],
      ["16th", "sixteenth"],
      ["17th", "seventeenth"],
      ["18th", "eighteenth"],
      ["19th", "nineteenth"],
      ["20th", "twentieth"]
    ],
    [
      ["21st", "twenty-first"],
      ["22nd", "twenty-second"],
      ["30th", "thirtieth"],
      ["40th", "fortieth"],
      ["50th", "fiftieth"],
      ["60th", "sixtieth"],
      ["70th", "seventieth"],
      ["80th", "eightieth"],
      ["90th", "ninetieth"],
      ["100th", "one hundredth"]
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
