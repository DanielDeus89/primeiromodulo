const lessonTitle = "Lesson 39";
const currentVideoId = "Fg1bY6Alsdc";

const timeRanges = [
  { start: 10, end: 177 }, //0
  { start: 187, end: 436 }, //1
  { start: 450, end: 638 }, //2
  { start: 638, end: 903 }, //3
  { start: 903, end: 1165 }, //Verbs
  { start: 1165, end: 1819 }, //Vocabulary
  { start: 1819, end: 2014 }, //Expressions
  { start: 2020, end: 2627 },  //Grammar
  { start: 2627, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Simple Present – Verbs",
  "columns": [
    [
      ["I open.", "Eu abro."],
      ["We open.", "Nós abrimos."]
    ],
    [
      ["I close.", "Eu fecho."],
      ["They close.", "Eles fecham."]
    ],
    [
      ["I live.", "Eu moro, vivo."],
      ["We live.", "Nós moramos, vivemos."]
    ],
    [
      ["I visit.", "Eu visito."],
      ["They visit.", "Eles visitam."]
    ]
  ]
},
{
  "title": "Simple Present – Open & Close",
  "columns": [
    [
      ["We open our drugstore early.", "Nós abrimos nossa farmácia cedo."],
      ["They don't open the windows at night.", "Eles não abrem as janelas à noite."],
      ["Do we have enough time?", "Nós temos tempo suficiente?"],
      ["Don't they open the store on weekends?", "Eles não abrem a loja nos finais de semana?"]
    ],
    [
      ["They close their store late.", "Eles fecham a loja deles tarde."],
      ["We don't close the windows.", "Nós não fechamos as janelas."],
      ["Do they close their office late?", "Eles fecham o escritório deles tarde?"],
      ["Why don't we go now?", "Por que não vamos agora?"]
    ]
  ]
},
{
  "title": "Simple Present – Live & Visit",
  "columns": [
    [
      ["We live in a big country.", "Nós moramos em um país grande."],
      ["They don't live near the airport.", "Eles não moram perto do aeroporto."],
      ["Do we have to go there?", "Nós temos que ir lá?"],
      ["Don't they live here?", "Eles não moram aqui?"]
    ],
    [
      ["They visit their relatives every month.", "Eles visitam seus parentes todo mês."],
      ["We don't want to visit that city.", "Nós não queremos visitar aquela cidade."],
      ["Do they visit you every week?", "Eles visitam você toda semana?"],
      ["Don't they want to visit the museum?", "Eles não querem visitar o museu?"]
    ]
  ]
},
{
  "title": "Simple Present – Time & Routine",
  "columns": [
    [
      ["What time do they get up?", "A que horas eles se levantam?"],
      ["They usually get up at 6 o'clock.", "Eles geralmente se levantam às 6 horas."],
      ["What time do your kids go to bed?", "A que horas seus filhos vão dormir?"],
      ["They usually go to bed at 9 p.m.", "Eles geralmente vão dormir às 9 da noite."],
      ["What time do you usually have breakfast?", "A que horas você normalmente toma café da manhã?"],
      ["We have breakfast very early.", "Nós tomamos café da manhã bem cedo."]
    ],
    [
      ["What time does the store open?", "A que horas a loja abre?"],
      ["It opens at 10 o'clock.", "Abre às 10 horas."],
      ["What time do you go to work?", "A que horas você vai para o trabalho?"],
      ["We go to work at 7:25.", "Nós vamos para o trabalho às 7:25."],
      ["What time do they go home?", "A que horas eles vão para casa?"],
      ["They go home late at night.", "Eles vão para casa tarde da noite."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to open", "abrir"]
    ],
    [
      ["to close", "fechar"]
    ],
    [
      ["to live", "morar, viver"]
    ],
    [
      ["to visit", "visitar"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["door", "porta"],
      ["window", "janela"],
      ["drugstore", "farmácia"],
      ["company", "companhia"],
      ["office", "escritório"],
      ["city", "cidade"],
      ["state", "estado"],
      ["farm", "fazenda"],
      ["beach", "praia"],
      ["museum", "museu"],
      ["snack bar", "lanchonete"]
    ],
    [
      ["country", "país, interior"],
      ["river", "rio"],
      ["airport", "aeroporto"],
      ["freeway", "rodovia"],
      ["park", "parque"],
      ["corner", "esquina"],
      ["bridge", "ponte"],
      ["neighbor", "vizinho"],
      ["relatives", "parentes"],
      ["until", "até"],
      ["by", "até"]
    ],
    [
      ["more", "mais"],
      ["near", "perto"],
      ["far", "longe"],
      ["from", "de"],
      ["noon", "meio-dia"],
      ["midnight", "meia-noite"],
      ["early", "cedo"],
      ["late", "tarde"],
      ["usually", "geralmente, normalmente"],
      ["then", "então, depois, daí"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["What time is it?", "Que horas são?"],
      ["to get up", "levantar-se"]
    ],
    [
      ["to go to bed", "ir dormir"],
      ["to have breakfast", "tomar café da manhã"]
    ],
    [
      ["to have lunch", "almoçar"],
      ["to have dinner", "jantar"]
    ],
    [
      ["email box", "caixa de email"],
      ["chat room", "sala de bate-papo"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["It's one o'clock.", "É uma hora."],
      ["It's four fifteen.", "São quatro e quinze."],
      ["It's nine twenty-five.", "São nove e vinte e cinco."],
      ["It's five thirty.", "São cinco e meia."],
      ["It's ten to four.", "São quatro menos dez."],
      ["It's seven-o-five.", "São sete e cinco."],
      ["It's a quarter after three.", "São três e quinze."],
      ["It's half past ten.", "São dez e meia."],
      ["It's a quarter to six.", "São seis menos quinze."],
      ["a.m.", "0–12h"],
      ["p.m.", "12–24h"]
    ],
    [
      ["I", "eu"],
      ["you", "você"],
      ["he", "ele"],
      ["she", "ela"],
      ["it", "ele, ela (neutro)"],
      ["we", "nós"],
      ["you", "vocês"],
      ["they", "eles, elas"]
    ],
    [
      ["We go to school at 7 o'clock.", "Nós vamos à escola às 7 horas."],
      ["They study until 11 o'clock.", "Eles estudam até às 11 horas."],
      ["We have lunch at noon.", "Nós almoçamos ao meio-dia."],
      ["We need to be there by midnight.", "Nós precisamos estar lá até a meia-noite."]
    ]
  ]
},
{
  "title": "Listening - Answer the Questions",
  "type": "listening",
  "segments": [
    {
       "start": 2640,
      "end": 2643
    },
    {
       "start": 2643,
      "end": 2649
    },
    {
       "start": 2649,
      "end": 2655
    },
    {
       "start": 2655,
      "end": 2660
    },
    {
       "start": 2660,
      "end": 2665
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
