const lessonTitle = "Lesson 66";
const currentVideoId = "jd6IWqKNI6M";

const timeRanges = [
  { start: 0, end: 18 }, //https://youtu.be/jd6IWqKNI6M?t=18
  { start: 18, end: 33 }, //https://youtu.be/jd6IWqKNI6M?t=34
  { start: 33, end: 51 }, //https://youtu.be/jd6IWqKNI6M?t=51
  { start: 51, end: 66 }, //https://youtu.be/jd6IWqKNI6M?t=65
  { start: 66, end: 80 }, //https://youtu.be/jd6IWqKNI6M?t=80
  { start: 80, end: 96 }, //https://youtu.be/jd6IWqKNI6M?t=96
  { start: 96, end: 113 }, //https://youtu.be/jd6IWqKNI6M?t=113 https://youtu.be/jd6IWqKNI6M?t=112
  { start: 124, end: 238 }, //https://youtu.be/jd6IWqKNI6M?t=123 https://youtu.be/jd6IWqKNI6M?t=238
  { start: 238, end: 289 }, //https://youtu.be/jd6IWqKNI6M?t=288
  { start: 289, end: 424 }, //https://youtu.be/yeAbAUL7BWs?t=283 https://youtu.be/jd6IWqKNI6M?t=424
  { start: 424, end: 473 },  //https://youtu.be/jd6IWqKNI6M?t=424 https://youtu.be/jd6IWqKNI6M?t=473
  { start: 473, end: 584 },  //https://youtu.be/jd6IWqKNI6M?t=584
  { start: 584, end: 624 },  //https://youtu.be/jd6IWqKNI6M?t=624
  { start: 631, end: 827 },  //https://youtu.be/jd6IWqKNI6M?t=631 //https://youtu.be/jd6IWqKNI6M?t=827
  { start: 835, end: 902 },  //https://youtu.be/jd6IWqKNI6M?t=835 https://youtu.be/jd6IWqKNI6M?t=902
  { start: 907, end: 919 },  //https://youtu.be/jd6IWqKNI6M?t=909 https://youtu.be/jd6IWqKNI6M?t=918
  { start: 919, end: 970 },  //https://youtu.be/jd6IWqKNI6M?t=970
  { start: 980, end: 9999 }, //https://youtu.be/jd6IWqKNI6M?t=980

];

const lessonCards = [
 {
    title: "Listening - Question 1",
    columns: [
      [
      ["img", "../images/66_1.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  },
  {
    title: "Listening - Question 2",
    columns: [
      [
        ["img", "../images/66_2.png"],
        ["a)", "", 18, 33],
        ["b)", "", 4, 17],
        ["c)", "", 4, 17]
      ]
    ]
  },
  {
    title: "Listening - Question 3",
    columns: [
      [
        ["img", "../images/66_3.png"],
        ["a)", "", 33, 17],
        ["b)", "", 4, 17],
        ["c)", "", 4, 17]
      ]
    ]
  },
  {
    title: "Listening - Question 4",
    columns: [
      [
        ["img", "../images/66_4.png"],
        ["a)", "", 33, 17],
        ["b)", "", 4, 17],
        ["c)", "", 4, 17]
      ]
    ]
  },
  {
    title: "Listening - Question 5",
  columns: [
    [
      ["img", "../images/66_5.png"],
      ["a)", "", 33, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
    ]
  ]
  },
  {
    title: "Listening - Question 6",
    columns: [
      [
        ["img", "../images/66_6.png"],
        ["a)", "", 33, 17],
        ["b)", "", 4, 17],
        ["c)", "", 4, 17]
      ]
    ]
  },
  {
    title: "Listen and Answer",
    type: "listening",
    segments: [
      { text: "1. Can you sing?", start: 101, end: 103 }, //https://youtu.be/yeAbAUL7BWs?t=217
      { text: "2. How old are you?", start: 103, end: 105 }, //https://youtu.be/yeAbAUL7BWs?t=222
      { text: "3. Where were you yesterday?", start: 105, end: 107 }, //https://youtu.be/yeAbAUL7BWs?t=229
      { text: "4. How often do you clean your house?", start: 108, end: 110 }, // https://youtu.be/yeAbAUL7BWs?t=237
      { text: "5. Are you going to college now?", start: 110, end: 113 } //https://youtu.be/yeAbAUL7BWs?t=241 
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
  "title": "Questions",
  "columns": [
    [
      ["When was the last time he/she cleaned his/her house?","" ],
      ["Where was he/she last weekend?" ,""],
      ["Was he/she late for class today?" ,""],
      ["Where is he/she going after class?" ,""],
      ["When was the last time he/she traveled?","" ],
    
      ["When was the last time he/she used a computer?","" ],
      ["What did he/she do before class today?","" ],
      ["Is he/she in a hurry today?","" ],
      ["Does he/she have a garden at home?" ,""],
      ["Does anybody in his/her family speak English?","" ]
    ]
  ]
},
,
  {
    title: "Answer the Questions",
    columns: [
      [ 
      ]
    ]
  },
    {
    title: "Web Talk",
    columns: [
      [ 
        ["What's your Facebook profile name?", ""],
        ["It's John Allen Smith.", ""],
      ]
    ]
  },
    {
    title: "Speak Right - Pronunciation - Review",
    columns: [
      [
        ["thanks", ""],
        ["thousand", ""],
        ["think", ""],
        ["nothing", ""],
        ["math", ""],
        ["health", ""],
        ["faith", ""],
        ["with", ""],
        ["thought", ""],
        ["bath", ""]
      ],
      [
        ["the", ""],
        ["they", ""],
        ["this", ""],
        ["that", ""],
        ["those", ""],
        ["other", ""],
        ["mother", ""],
        ["father", ""],
        ["there", ""],
        ["weather", ""]
      ]
    ]
  },
    {
  title: "Dialogue & Role Play - How is the weather?",
  columns: [
    [
      ["Mr. Mark:", "", 980, 989], //https://youtu.be/jd6IWqKNI6M?t=980
      ["Anne:", "", 989, 991],
      ["Mr. Mark:", "", 992, 998], // 4
      ["Mr. Mark: ", "", 998, 1001],   //3
      ["Anne:", "", 1008, 1014],  //https://youtu.be/jd6IWqKNI6M?t=1014 https://youtu.be/jd6IWqKNI6M?t=1051
      ["Anne:", "", 1014, 1017],  //3
      ["Mr. Mark:","", 1024, 1032],  //6
      ["Anne: ","", 1038, 1045],  //7
      ["Anne:", "", 1045, 1052],  //7 https://youtu.be/jd6IWqKNI6M?t=1064
      ["Mr. Mark:", "", 1064, 1067],  //2
      ["Anne:","", 1067, 1074],  //4 https://youtu.be/jd6IWqKNI6M?t=1079
      ["Mr. Mark:", "", 1077, 1081],  //3
      ["Anne: ", "", 1083, 1085]
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
