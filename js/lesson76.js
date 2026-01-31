const lessonTitle = "Lesson 76";
const currentVideoId = "PPc3fnhPLKg";

const timeRanges = [

  { start: 5, end: 35 }, 
  { start: 35, end: 75 },  
  { start: 75, end: 116 },  
  { start: 128, end: 157 },
  { start: 157, end: 196 },
  { start: 196, end: 238 }, 
  { start: 249, end: 389 },
  { start: 389, end: 445 },
  { start: 445, end: 586 },
  { start: 586, end: 642 },
  { start: 642, end: 781 },
  { start: 781, end: 834 },
  { start: 846, end: 938 },
  { start: 938, end: 1058 },
  { start: 128, end: 157 },
  { start: 157, end: 196 },
  { start: 196, end: 238 },   
  { start: 1110, end: 1153 },
  { start: 1153, end: 1178 },
  { start: 1188, end: 1243 },
  { start: 1241, end: 9999999999 },

];

const lessonCards = [
 {
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Does he know if there was a game last night?", ""],
      ["Do you know if there was a game last night?", ""],
      ["There wasn't a game last night.", ""],
      ["He said there wasn't a game last night.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Did she answer all her emails yesterday?", ""],
      ["Did you answer all your emails yesterday?", ""],
      ["Yes, I did. I answered all my emails yesterday.", ""],
      ["Yes, she did. She answered all her emails yesterday.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Is there anybody who speaks English in his home?", ""],
      ["Is there anybody who speaks English in your home?", ""],
      ["Yes, there is. My dad speaks English at home.", ""],
      ["Yes, there is. His dad speaks English at home.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
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
  "title": "Ask your Friend",
  "columns": [
    [
      ["If there is a test today.", ""],
      ["If he / she usually answers his / her emails on the same day.", ""],
      ["If digital cameras are expensive nowadays.", ""],
      ["If he / she has a digital camera.", ""],
      ["If there is a hospital near his / her house.", ""],
      ["What he / she did last night.", ""],
      ["If there is a library in his / her school.", ""],
      ["If he / she usually asks the teacher many questions.", ""],
      ["If he / she travels more for leisure or on business.", ""],
      ["If he / she likes to take pictures.", ""]
    ]
  ]
},
  {
    title: "Now Answer the Following Questions",
    columns: [
      [ 
      ]
    ]
  },

{
  "title": "Conversation in Trio",
  "columns": [
    [
  
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
  
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
 
    ]
  ]
}, 
{
  "title": "Shopping in America",
  "columns": [
    [
      ["Department stores are found in many cities in the United States.", "", 1113, 1118],
      ["They don't specialize in selling one particular product.", "",1118,1121],
      ["You can find almost anything there from furniture to appliances, from clothes to jewelry.", "",1121,1128],
      ["Some of the most famous department stores in the USA are Macy's, J.C. Penny and Sears.", "",1128,1136],
      ["Most people love visiting department stores because of all the innovative ideas and new products they offer.", "",1136,1144],
      ["Most department stores in America have a big sale the day after Thanksgiving Day called Black Friday.", "",1144,1153]
    ]
  ]
},
{
  "title": "Discussion",
  "columns": [
    [
      ["1", "",1153,1158],
      ["2", "",1158,1162],
      ["3", "",1162,1167],
      ["4", "",1167,1174],
      ["5", "",1174,1178]
    ]
  ]
},
{
  "title": "Listening & Comprehension - Generosity",
  "columns": [
    [
      ["If someone asks you: __________________ pairs of pants do you have?", "", 1188, 1197],
      ["How many shirts or t-shirts ________________________?", "", 1197, 1201],
      ["How many dresses or skirts do you have?", "", 1201, 1204],
      ["How _______________________ answer these questions?", "", 1204, 1207],
      ["Now, two more questions:", "", 1207, 1209],
      ["What clothes haven't you not worn in the ________________________?", "", 1209, 1214],
      ["What do you plan to do with all _________________________ clothes?", "", 1214, 1217],
      ["Here's an idea for you: take all the clothes you don't wear ________________________, even a shirt you really like, then choose someone or an organization and give all these clothes to ________________________ them more than you do.", "", 1217, 1234],
      ["This will make you feel ________________________ better and certainly will make the other individual happy.", "", 1234, 1243]
    ]
  ]
},
{
  "title": "Listening",
  "type": "listening",
  "segments": [
    { "text": "How many pairs of pants do you have that you don’t wear anymore?", "start": 1241, "end": 1246 },
    { "text": "How many shirts or T-shirts do you have that you don’t wear anymore?", "start": 1246, "end": 1252 },
    { "text": "How many dresses or skirts do you have that you don’t wear anymore?", "start": 1252, "end": 1258 },
    { "text": "Do you have a lot of clothes that you don’t wear regularly?", "start": 1258, "end": 1264 },
    { "text": "Do you usually give your clothes to other people?", "start": 1264, "end": 1268 }
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
