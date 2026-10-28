const lessonTitle = "Lesson 75";
const currentVideoId = "oGzTrgNp9kI";

const timeRanges = [
  { start: 9, end: 30 }, //https://youtu.be/Q9eIX3bjKQs?t=30
  { start: 30, end: 122 }, //https://youtu.be/Q9eIX3bjKQs?t=93
  { start: 123, end: 149 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 149, end: 202 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 202, end: 256 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 256, end: 305 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 305, end: 358 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 358, end: 409 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 415, end: 655 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 665, end: 979 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 988, end: 1105 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 1111, end: 9999 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    
      [["to ask, asked", "perguntar, pedir"],
      ["to lock, locked", "trancar"]],
      [["to answer, answered", "responder"],
      ["to stand up, stood up", "levantar-se, ficar em pé"]]
    
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["employee", "empregado"],
      ["employer", "empregador"],
      ["porter", "carregador"],
      ["butcher", "açougueiro"],
      ["milkman", "leiteiro"],
      ["suitcase", "mala"],
      ["briefcase", "pasta"],
      ["backpack", "mochila"]
    ],
    [
      ["question", "pergunta"],
      ["answer", "resposta"],
      ["gate", "portão"],
      ["picture", "fotografia, gravura"],
      ["camera", "máquina fotográfica"],
      ["album", "álbum"],
      ["key", "chave"],
      ["key chain", "chaveiro"]
    ],
    [
      ["lock", "fechadura"],
      ["locksmith", "chaveiro (quem faz chaves)"],
      ["padlock", "cadeado"],
      ["seat", "assento, lugar"],
      ["text", "texto"],
      ["certainly", "certamente"],
      ["digital", "digital"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to take pictures", "tirar foto, fotografar"],
      ["to answer the phone", "atender ao telefone"]
    ],
    [
      ["fortunately", "felizmente"],
      ["unfortunately", "infelizmente"],
      ["on the other hand", "por outro lado"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["There is a meeting after lunch.", "Há uma reunião após o almoço."],
      ["There isn't an answer yet.", "Não há uma resposta ainda."],
      ["Is there any message for me?", "Há alguma mensagem para mim?"],
      ["Isn't there a show tonight?", "Não há um show hoje à noite?"]
    ],
    [
      ["There was a party yesterday.", "Houve uma festa ontem."],
      ["There wasn't any water.", "Não havia água."],
      ["Was there anybody there?", "Havia alguém lá?"],
      ["Wasn't there any information?", "Não havia nenhuma informação?"]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["We asked him many things.", ""],
      ["Who asked you to do that?", ""],
      ["Didn't you ask him anything?", ""],
      ["They didn't ask us anything.", ""],
    
    
      ["Can you answer the phone, please?", ""],
      ["Nobody answered the phone.", ""],
      ["She answered all the questions.", ""],
      ["Didn't you answer her email?", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["She locked herself in the bathroom.", ""],
      ["We didn't lock it.", ""],
      ["Can you lock the car for me, please?", ""],
      ["Why didn't he lock his briefcase?", ""],
   
      ["We stood up when the president arrived.", ""],
      ["Why didn't they stand up?", ""],
      ["Who stood up first?", ""],
      ["Can you stand up, please?", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["Can you take a picture for us?", ""],
      ["Do you like taking pictures?", ""],
      ["We took a lot of pictures.", ""],
      ["They didn't take any pictures.", ""],
  
      ["Fortunately, he knew all the answers.", ""],
      ["Unfortunately, we didn't arrive on time.", ""],
      ["Do you have many emails to answer?", ""],
      ["He usually doesn't answer his emails.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["There is enough room here.", ""],
      ["There isn't a camera in my backpack.", ""],
      ["Is there anything to do now?", ""],
      ["Isn't there anything to eat?", ""],
   
      ["There was a message for you.", ""],
      ["There wasn't another way.", ""],
      ["Was there anybody outside?", ""],
      ["Wasn't there anybody home?", ""]
    ]
  ]
},

{
  "title": "Verbs",
  "columns": [
    
      [["to ask, asked", "perguntar, pedir"],
      ["to lock, locked", "trancar"]],
      [["to answer, answered", "responder"],
      ["to stand up, stood up", "levantar-se, ficar em pé"]]
    
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["employee", "empregado"],
      ["employer", "empregador"],
      ["porter", "carregador"],
      ["butcher", "açougueiro"],
      ["milkman", "leiteiro"],
      ["suitcase", "mala"],
      ["briefcase", "pasta"],
      ["backpack", "mochila"]
    ],
    [
      ["question", "pergunta"],
      ["answer", "resposta"],
      ["gate", "portão"],
      ["picture", "fotografia, gravura"],
      ["camera", "máquina fotográfica"],
      ["album", "álbum"],
      ["key", "chave"],
      ["key chain", "chaveiro"]
    ],
    [
      ["lock", "fechadura"],
      ["locksmith", "chaveiro (quem faz chaves)"],
      ["padlock", "cadeado"],
      ["seat", "assento, lugar"],
      ["text", "texto"],
      ["certainly", "certamente"],
      ["digital", "digital"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to take pictures", "tirar foto, fotografar"],
      ["to answer the phone", "atender ao telefone"]
    ],
    [
      ["fortunately", "felizmente"],
      ["unfortunately", "infelizmente"],
      ["on the other hand", "por outro lado"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["There is a meeting after lunch.", "Há uma reunião após o almoço."],
      ["There isn't an answer yet.", "Não há uma resposta ainda."],
      ["Is there any message for me?", "Há alguma mensagem para mim?"],
      ["Isn't there a show tonight?", "Não há um show hoje à noite?"]
    ],
    [
      ["There was a party yesterday.", "Houve uma festa ontem."],
      ["There wasn't any water.", "Não havia água."],
      ["Was there anybody there?", "Havia alguém lá?"],
      ["Wasn't there any information?", "Não havia nenhuma informação?"]
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
