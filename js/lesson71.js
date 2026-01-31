const lessonTitle = "Lesson 71";
const currentVideoId = "0psS3jEloVA";

const timeRanges = [
  { start: 9, end: 27 }, 
  { start: 27, end: 97 }, //https://youtu.be/0psS3jEloVA?t=97
  { start: 97, end: 120 }, // https://youtu.be/0psS3jEloVA?t=120
  { start: 120, end: 151 }, // https://youtu.be/0psS3jEloVA?t=151
  { start: 151, end: 178 }, //https://youtu.be/0psS3jEloVA?t=178
  { start: 178, end: 207 }, //https://youtu.be/0psS3jEloVA?t=207
  { start: 207, end: 250 }, //https://youtu.be/0psS3jEloVA?t=250
  { start: 250, end: 294 }, //https://youtu.be/0psS3jEloVA?t=294
  { start: 294, end: 343 }, //https://youtu.be/0psS3jEloVA?t=343
  { start: 343, end: 365 }, //https://youtu.be/0psS3jEloVA?t=365
  { start: 365, end: 548 }, //https://youtu.be/0psS3jEloVA?t=548
  { start: 548, end: 827 }, //https://youtu.be/0psS3jEloVA?t=827
  { start: 827, end: 944 }, //https://youtu.be/0psS3jEloVA?t=944
  { start: 944, end: 9999 }, //https://youtu.be/0psS3jEloVA?t=944
 
];

const lessonCards = [
{
  title: "Verbs",
  columns: [
    [["to arrive, arrived", "chegar"]],
    [["to forget, forgot", "esquecer-se de"]],
    [["to remember, remembered", "lembrar-se de"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["light", "luz, claro"],
      ["dark", "escuro"],
      ["way", "caminho"],
      ["road", "estrada"],
      ["few", "pouco"],
      ["boring", "chato"],
      ["purse", "bolsa"]
    ],
    [
      ["government", "governo"],
      ["president", "presidente"],
      ["which", "qual"],
      ["wallet", "carteira de dinheiro"],
      ["interesting", "interessante"],
      ["stubborn", "teimoso"],
      ["patient", "paciente"]
    ],
    [
      ["impatient", "impaciente"],
      ["opinion", "opinião"],
      ["passport", "passaporte"],
      ["tip", "gorjeta"],
      ["provider", "provedor"],
      ["password", "senha"]
    ]
  ]
},

{
  "title": "Expressions",
  "columns": [
    [
      ["to go out", "sair, passear"],
      ["of course", "claro"]
    ],
    [
      ["of course not", "claro que não"],
      ["driver's license", "carteira de motorista"]
    ],
    [
      ["no way", "de jeito nenhum"],
      ["forget it", "esqueça, deixe para lá"]
    ]
  ]
},

{
  "title": "Grammar",
  "columns": [
    [
      ["My birthday is in May.", "Meu aniversário é em maio."],
      ["Isn't your birthday in July?", "Seu aniversário não é em julho?"],
      ["We're going to France in December.", "Nós vamos à França em dezembro."],
      ["My birthday is on June 21st.", "Meu aniversário é em 21 de junho."],
      ["His birthday is on March 2nd.", "O aniversário dele é em 2 de março."] 
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["Did you forget doing the laundry?", "Você se esqueceu de ter lavado as roupas?"],
      ["He always forgets to take the dog outside.", "Ele sempre se esquece de levar o cachorro para fora."],
      ["I remember bringing the homework last class.", "Eu me lembro de ter trazido a tarefa na aula passada."],
      ["Don't you remember studying it last semester?", "Você não se lembra de ter estudado isto no semestre passado?"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["'06", "2006"],
      ["'08", "2008"],
      ["In 2015", "em 2015"],
      ["In May", "em maio"],
      ["On February 2nd", "em 2 de fevereiro"],
      ["On November 15th 2009", "em 15 de novembro de 2009"]
    ]
  ]
},

{
  "title": "Phrases",
  "columns": [
    [
      ["They arrived very late at the party.", ""],
      ["Did the president arrive from the trip?", ""],
      ["He didn't arrive in time.", ""],
      ["We arrived home this morning.", ""]
    ],
    [
      ["I forgot her birthday.", ""],
      ["Did you forget your passport?", ""],
      ["I didn't forget his phone number.", ""],
      ["How did I forget it?", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["She remembered both messages.", ""],
      ["Do you remember the password?", ""],
      ["They didn't remember the way.", ""],
      ["Do you remember his cell number?", ""]
    ],
    [
      ["Do you want to go out tonight?", ""],
      ["Did you already get your driver's license?", ""],
      ["Forget it, I can do it.", ""],
      ["No way, you can't go alone.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["When is your birthday?", ""],
      ["Isn't your birthday in February?", ""],
      ["I'm going there in October.", ""],
      ["They went to the U.S. in January.", ""]
    ],
    [
      ["It's on September 4th.", ""],
      ["It was on June 15th '07.", ""],
      ["My birthday is on April 26th.", ""],
      ["It starts on March 12th.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["What's the first month of the year?", ""],
      ["It's January.", ""]
    ],
    [
      ["What's the last month of the year?", ""],
      ["It's December.", ""]
    ]
  ]
},


{
  title: "Verbs",
  columns: [
    [["to arrive, arrived", "chegar"]],
    [["to forget, forgot", "esquecer-se de"]],
    [["to remember, remembered", "lembrar-se de"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["light", "luz, claro"],
      ["dark", "escuro"],
      ["way", "caminho"],
      ["road", "estrada"],
      ["few", "pouco"],
      ["boring", "chato"],
      ["purse", "bolsa"]
    ],
    [
      ["government", "governo"],
      ["president", "presidente"],
      ["which", "qual"],
      ["wallet", "carteira de dinheiro"],
      ["interesting", "interessante"],
      ["stubborn", "teimoso"],
      ["patient", "paciente"]
    ],
    [
      ["impatient", "impaciente"],
      ["opinion", "opinião"],
      ["passport", "passaporte"],
      ["tip", "gorjeta"],
      ["provider", "provedor"],
      ["password", "senha"]
    ]
  ]
},

{
  "title": "Expressions",
  "columns": [
    [
      ["to go out", "sair, passear"],
      ["of course", "claro"]
    ],
    [
      ["of course not", "claro que não"],
      ["driver's license", "carteira de motorista"]
    ],
    [
      ["no way", "de jeito nenhum"],
      ["forget it", "esqueça, deixe para lá"]
    ]
  ]
},


{
  "title": "Grammar",
  "columns": [
    [
      ["My birthday is in May.", "Meu aniversário é em maio."],
      ["Isn't your birthday in July?", "Seu aniversário não é em julho?"],
      ["We're going to France in December.", "Nós vamos à França em dezembro."],
      ["My birthday is on June 21st.", "Meu aniversário é em 21 de junho."],
      ["His birthday is on March 2nd.", "O aniversário dele é em 2 de março."] ,
      ["Did you forget doing the laundry?", "Você se esqueceu de ter lavado as roupas?"],
      ["He always forgets to take the dog outside.", "Ele sempre se esquece de levar o cachorro para fora."],
      ["I remember bringing the homework last class.", "Eu me lembro de ter trazido a tarefa na aula passada."],
      ["Don't you remember studying it last semester?", "Você não se lembra de ter estudado isto no semestre passado?"]
    ],
    [
      ,
      ["'06", "2006"],
      ["'08", "2008"],
      ["In 2015", "em 2015"],
      ["In May", "em maio"],
      ["On February 2nd", "em 2 de fevereiro"],
      ["On November 15th 2009", "em 15 de novembro de 2009"]
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
