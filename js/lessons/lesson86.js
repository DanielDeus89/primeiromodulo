const lessonTitle = "Lesson 86";
const currentVideoId = "aW0EHcfhK64";

const timeRanges = [

  { start: 8, end: 127 }, //Practice
  { start: 127, end: 182 }, //Change Into - or +
  { start: 182, end: 320 }, //Practice
  { start: 320, end: 373 }, //Change into interrogative
  { start: 373, end: 518 }, //Practice
  { start: 518, end: 570 }, //Short Answers
  { start: 570, end: 717 }, //Questions in Trio
  { start: 728, end: 805 }, 
  { start: 816, end: 831 }, 
  { start: 831, end: 999 }, //Listening to the Conversation 1
  { start: 846, end: 999 }, //2
  { start: 858, end: 999 }, //3
  { start: 866, end: 999 }, //4
  { start: 873, end: 999 }, //5
  { start: 884, end: 999 }, //10

 


];

const lessonCards = [
{
   title: "Practice",
    columns: [
      [ 
      ]
    ]
},
{
   title: "Change Into - or +",
    columns: [
      [ 
      ]
    ]
},
{
    title: "Practice",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Change into interrogative",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Practice",
    columns: [
      [
      ]
    ]
  },
   {
    title: "Short Answers",
    columns: [
      [
      ]
    ]
  },
{
  "title": "Questions in Trio",
  "columns": [
    [
      ["Why should he / she study Chinese?", ""],
      ["Does he / she live in a two story house?", ""],
      ["Must he / she work next holiday?", ""],
      ["Does he / she know many foreigners who live in this city?", ""],
      ["What will he / she do for Christmas? ", ""],
      ["When will he / she see his / her parents?", ""],
      ["When is his / her birthday?", ""],
      ["Won't he / she also study Japanese?", ""],
      ["Won't he / she learn another language after he / she is fluent in English?", ""]
    ]
  ]
},
  {
  "title": "Answer The Following Questions",
  "columns": [
    [
    ]
  ]
}, 
  {
  "title": "Web Talk",
  "columns": [
    [
      ["Do you guys have a wireless connection in your office?", ""],
      ["Yes, we do.", ""]
    ]
  ]
}, 
{
  title: "Listening to the Conversation",
  type: "listening",
  segments: [
    { text: "", start: 837, end: 841 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 841, end: 844 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 844, end: 846 }, //https://youtu.be/yeAbAUL7BWs?t=217  
  ]
},
{
  title: "Listening to the Conversation 2",
  type: "listening",
  segments: [
    { text: "", start: 846, end: 850 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 850, end: 856 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 856, end: 858 }, //https://youtu.be/yeAbAUL7BWs?t=217  
  ]
},
,
{
  title: "Listening to the Conversation 3",
  type: "listening",
  segments: [
    { text: "", start: 858, end: 861 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 861, end: 865 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 864, end: 866 }, //https://youtu.be/yeAbAUL7BWs?t=217  
  ]
},
{
  title: "Listening to the Conversation 4",
  type: "listening",
  segments: [
    { text: "", start: 866, end: 871 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 870, end: 873 }, //https://youtu.be/yeAbAUL7BWs?t=217
  ]
},
{
  title: "Listening to the Conversation 5",
  type: "listening",
  segments: [
    { text: "", start: 873, end: 876 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 875, end: 878 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 877, end: 881 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 880, end: 884 }, //https://youtu.be/yeAbAUL7BWs?t=217
  ]
},
{
  title: "Listening",
  type: "listening",
  segments: [
    { text: "", start: 888, end: 891 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 891, end: 894 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 894, end: 897 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 897, end: 901 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: "", start: 901, end: 905 }, //https://youtu.be/yeAbAUL7BWs?t=217
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
