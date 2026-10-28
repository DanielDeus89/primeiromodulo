const lessonTitle = "Lesson 65";
const currentVideoId = "3RCfIIqTZT8";

const timeRanges = [
  { start: 9, end: 26 },
  { start: 26, end: 89 },
  { start: 89, end: 110 },  // Expressões
  { start: 110, end: 163 }, // Grammar
  { start: 163, end: 178 }, // Grammar
  { start: 178, end: 227 }, // Grammar
  { start: 227, end: 278 }, // Practice Sentences 1
  { start: 278, end: 333 }, // Practice Sentences 2 - https://youtu.be/3RCfIIqTZT8?t=332
  { start: 333, end: 366 }, // Practice Sentences 3 - https://youtu.be/3RCfIIqTZT8?t=366
  { start: 366, end: 400 }, // Practice Sentences 4 - https://youtu.be/3RCfIIqTZT8?t=400
  { start: 400, end: 436 }, // Practice Sentences 5 - https://youtu.be/3RCfIIqTZT8?t=436
  { start: 436, end: 611 }, // Verbs 2 - https://youtu.be/3RCfIIqTZT8?t=611 
  { start: 611, end: 837 }, // Vocab 2 - https://youtu.be/3RCfIIqTZT8?t=837
  { start: 837, end: 938 },// Expre 2 - https://youtu.be/3RCfIIqTZT8?t=938
  { start: 938, end: 1312 } // gram2 - https://youtu.be/3RCfIIqTZT8?t=1312
];

const lessonCards = [
  {
    title: "Verbs",
    columns: [
      [["to take, took", "levar, tomar"]],
      [["to clean, cleaned", "limpar"]],
      [["to use, used", "usar"]]
    ]
  },
  {
    title: "Vocabulary",
    columns: [
      [
        ["sleeve", "manga (de roupa)"],
        ["collar", "colarinho, gola"],
        ["glasses", "óculos"],
        ["flavor", "sabor"],
        ["vanilla", "baunilha, creme"],
        ["garden", "jardim"],
        ["gardener", "jardineiro"],
        ["idea", "ideia"],
        ["experience", "experiência"],
        ["different", "diferente"]
      ],
      [
        ["gentleman", "cavalheiro"],
        ["lady", "senhora, dama"],
        ["college", "faculdade"],
        ["university", "universidade"],
        ["student", "aluno"],
        ["hat", "chapéu"],
        ["sock", "meia"],
        ["tooth", "dente"],
        ["foot", "pé"]
      ]
    ]
  },
  {
    title: "Expressões",
    columns: [
      [["as you know", "como você sabe"], ["to take off", "tirar"]],
      [["hurry up", "depressa"], ["garden party", "festa ao ar livre"]],
      [["to hurry", "apressar-se"]]
    ]
  },
  {
    title: "Grammar",
    columns: [
      [["I was", ""], ["He was", ""], ["She was", ""], ["It was", ""]],
      [["I wasn't", ""], ["He wasn't", ""], ["She wasn't", ""], ["It wasn't", ""]],
      [["Was I?", ""], ["Was he?", ""], ["Was she?", ""], ["Was it?", ""]],
      [["Wasn't I?", ""], ["Wasn't he?", ""], ["Wasn't she?", ""], ["Wasn't it?", ""]]
    ]
  },
  {
    title: "Grammar",
    columns: [
      [
        ["Mr. (mister)", "senhor"],
        ["Mrs. (misses)", "senhora"],
        ["Ms. (miss)", "senhora / senhorita"],
        ["Ma'am (madam)", "madame, senhora"],
        ["Sir", "senhor"]
      ]
    ]
  },
  {
    title: "Singular and Plural",
    columns: [
      [
        ["one person", ""],
        ["one child", ""],
        ["one man", ""],
        ["one woman", ""],
        ["one lady", ""],
        ["one foot", ""],
        ["one tooth", ""],
        ["one box", ""]
      ],
      [
        ["two people", ""],
        ["two children", ""],
        ["two men", ""],
        ["two women", ""],
        ["two ladies", ""],
        ["two feet", ""],
        ["two teeth", ""],
        ["two boxes", ""]
      ]
    ]
  },
  {
    title: "Practice Sentences",
    columns: [
      [
        ["He took me home.", ""],
        ["They didn't take him.", ""],
        ["Did anybody take her there?", ""],
        ["Take your shoes off.", ""],
        ["Who took her?", ""]
      ],
      [
        ["Did you take a shower?", ""],
        ["What course are you taking?", ""],
        ["Can you take a picture, please?", ""],
        ["Can you take a look at it?", ""],
        ["Did you take the kids to school?", ""]
      ]
    ]
  },
  {
    title: "Practice Sentences",
    columns: [
      [
        ["Who cleaned the kitchen?", ""],
        ["I already cleaned my room.", ""],
        ["Did they already clean the car?", ""],
        ["She cleaned the house herself.", ""],
        ["Aren't you going to clean it?", ""]
      ],
      [
        ["She used my computer.", ""],
        ["They didn't use the internet.", ""],
        ["She uses her iPod every day.", ""],
        ["Who used it?", ""],
        ["Can I use your cell?", ""]
      ]
    ]
  },
  {
    title: "Practice Sentences",
    columns: [
      [
        ["As you know, it wasn't good.", ""],
        ["Don't take your coat off.", ""],
        ["Who took the books off of here?", ""]
      ],
      [
        ["Hurry up, we have to go.", ""],
        ["We need to hurry.", ""],
        ["I love garden parties.", ""]
      ]
    ]
  },
  {
    title: "Practice Sentences",
    columns: [
      [
        ["I was broke.", ""],
        ["He was here.", ""],
        ["She was hungry.", ""],
        ["It was right.", ""]
      ],
      [
        ["Was I wrong?", ""],
        ["Was she sick?", ""],
        ["Was he there?", ""],
        ["Was it different?", ""]
      ]
    ]
  },
  {
    title: "Grammar Practice",
    columns: [
      [
        ["I wasn't busy.", ""],
        ["He wasn't ready.", ""],
        ["It wasn't good.", ""],
        ["She wasn't well.", ""]
      ],
      [
        ["Wasn't I right?", ""],
        ["Wasn't he home?", ""],
        ["Wasn't she late?", ""],
        ["Wasn't it easy?", ""]
      ]
    ]
  },
  {
    title: "Verbs",
    columns: [
      [["to take, took", "levar, tomar"]],
      [["to clean, cleaned", "limpar"]],
      [["to use, used", "usar"]]
    ]
  },
   {
    title: "Vocabulary",
    columns: [
      [
        ["sleeve", "manga (de roupa)"],
        ["collar", "colarinho, gola"],
        ["glasses", "óculos"],
        ["flavor", "sabor"],
        ["vanilla", "baunilha, creme"],
        ["garden", "jardim"],
        ["gardener", "jardineiro"],
        ["idea", "ideia"],
        ["experience", "experiência"],
        ["different", "diferente"]
      ],
      [
        ["gentleman", "cavalheiro"],
        ["lady", "senhora, dama"],
        ["college", "faculdade"],
        ["university", "universidade"],
        ["student", "aluno"],
        ["hat", "chapéu"],
        ["sock", "meia"],
        ["tooth", "dente"],
        ["foot", "pé"]
      ]
    ]
  },
  {
    title: "Expressões",
    columns: [
      [["as you know", "como você sabe"], ["to take off", "tirar"]],
      [["hurry up", "depressa"], ["garden party", "festa ao ar livre"]],
      [["to hurry", "apressar-se"]]
    ]
  },

{
  title: "Grammar",
  columns: [
    // Linha 1: 4 colunas com verbos
    [
      ["I was", ""],
      ["He was", ""],
      ["She was", ""],
      ["It was", ""]
    ],
    [
      ["I wasn't", ""],
      ["He wasn't", ""],
      ["She wasn't", ""],
      ["It wasn't", ""]
    ],
    [
      ["Was I?", ""],
      ["Was he?", ""],
      ["Was she?", ""],
      ["Was it?", ""]
    ],
    [
      ["Wasn't I?", ""],
      ["Wasn't he?", ""],
      ["Wasn't she?", ""],
      ["Wasn't it?", ""]
    ],

    // Linha 2: abaixo, lado a lado

    // Coluna 1: Títulos formais
    [
      ["Mr. (mister)", "senhor"],
      ["Mrs. (misses)", "senhora"],
      ["Ms. (miss)", "senhora / senhorita"],
      ["Ma'am (madam)", "madame, senhora"],
      ["Sir", "senhor"]
    ],

    // Coluna 2: Singular
    [
      ["one person", ""],
      ["one child", ""],
      ["one man", ""],
      ["one woman", ""],
      ["one lady", ""],
      ["one foot", ""],
      ["one tooth", ""],
      ["one box", ""]
    ],

    // Coluna 3: Plural
    [
      ["two people", ""],
      ["two children", ""],
      ["two men", ""],
      ["two women", ""],
      ["two ladies", ""],
      ["two feet", ""],
      ["two teeth", ""],
      ["two boxes", ""]
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
