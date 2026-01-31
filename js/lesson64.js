const lessonTitle = "Lesson 64";
const currentVideoId = "5cjwxlUvieY";

const timeRanges = [
  { start: 0, end: 15 },
  { start: 15, end: 28 },
  { start: 28, end: 40 },
  { start: 40, end: 96 }, //https://youtu.be/yeAbAUL7BWs?t=93
  { start: 96, end: 150 }, //https://youtu.be/yeAbAUL7BWs?t=150
  { start: 150, end: 214 }, //https://youtu.be/yeAbAUL7BWs?t=213
  { start: 215, end: 244 }, //https://youtu.be/yeAbAUL7BWs?t=214
  { start: 244, end: 259 }, //https://youtu.be/yeAbAUL7BWs?t=258
  { start: 259, end: 268 }, //https://youtu.be/yeAbAUL7BWs?t=268  
  { start: 268, end: 283 }, //https://youtu.be/yeAbAUL7BWs?t=283
  { start: 283, end: 301 }, //https://youtu.be/yeAbAUL7BWs?t=300
  { start: 301, end: 315 }, //https://youtu.be/yeAbAUL7BWs?t=214  https://youtu.be/yeAbAUL7BWs?t=212
  { start: 315, end: 338 }, //https://youtu.be/yeAbAUL7BWs?t=338
  { start: 338, end: 535 }, //https://youtu.be/yeAbAUL7BWs?t=535
  { start: 535, end: 632 }, //https://youtu.be/yeAbAUL7BWs?t=632
  { start: 632, end: 677 }, //https://youtu.be/yeAbAUL7BWs?t=677
  { start: 677, end: 790 }, //https://youtu.be/yeAbAUL7BWs?t=790 https://youtu.be/yeAbAUL7BWs?t=852
  { start: 790, end: 844 }, //https://youtu.be/yeAbAUL7BWs?t=844
  { start: 852, end: 964 }, //https://youtu.be/yeAbAUL7BWs?t=964
  { start: 964, end: 1005 }, //https://youtu.be/yeAbAUL7BWs?t=1005
  { start: 1012, end: 1071 }, //https://youtu.be/yeAbAUL7BWs?t=1014 / https://youtu.be/yeAbAUL7BWs?t=1071
  { start: 1095, end: 1174 }, //https://youtu.be/yeAbAUL7BWs?t=1014 / https://youtu.be/yeAbAUL7BWs?t=1174   
  { start: 1217, end: 1264 }, //https://youtu.be/yeAbAUL7BWs?t=1218 //https://youtu.be/yeAbAUL7BWs?t=1264
  { start: 1274, end: 1382 }, //https://youtu.be/yeAbAUL7BWs?t=1274 //https://youtu.be/yeAbAUL7BWs?t=1382

];

const lessonCards = [
  {
    title: "Conversation in Trio",
    columns: [
      [
        ["Is she 37 years old?", "", 10, 13],
        ["Are you 37 years old?", ""],
        ["No, I'm not. I'm 40 years old.", ""],
        ["No, she isn't. She's 40 years old.", ""]
      ]
    ]
  },
  {
    title: "Conversation in Trio",
    columns: [
      [
        ["Did he check his emails this morning?", ""],
        ["Did you check your emails this morning?", ""],
        ["No, I didn't. I didn't check my emails this morning.", ""],
        ["No, he didn't. He didn't check his emails this morning.", ""]
      ]
    ]
  },
  {
    title: "Conversation in Trio",
    columns: [
      [
        ["When did she start learning English?", ""],
        ["When did you start learning English?", ""],
        ["I started learning English in 2009.", ""],
        ["She started learning English in 2009.", ""]
      ]
    ]
  },
  {
    title: "Speak Right - Pronunciation",
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
        ["weather", ""],
        ["", ""],
        ["the apple", ""],
        ["the car", ""]
      ]
    ]
  },
  {
  title: "Dialogue & Role Play - How is the weather?",
  columns: [
    [
      ["Mr. Mark: Hi, Anne. Hot day, isn't it?", "", 102, 105], //https://youtu.be/yeAbAUL7BWs?t=102 https://youtu.be/yeAbAUL7BWs?t=104
      ["Anne: It's really hot today.", "", 105, 107],
      ["Mr. Mark: Hey, Anne. I'm going to the USA on my vacation.", "", 107, 111],
      ["Mr. Mark: How's the weather there at this time of the year?", "", 111, 114],   //https://youtu.be/yeAbAUL7BWs?t=113
      ["Anne: Well, Mr. Mark, now it's winter there and it snows a lot in some states.", "", 114, 119],  //https://youtu.be/yeAbAUL7BWs?t=118
      ["Anne: By the way, what states will you visit?", "", 119, 122],  //https://youtu.be/yeAbAUL7BWs?t=121
      ["Mr. Mark: I'll visit the state of Florida and then I'll go to New York for a business meeting.","", 122, 128],  //https://youtu.be/yeAbAUL7BWs?t=127
      ["Anne: Oh, I see. In New York it's very cold now and maybe it's snowing there.","", 127, 134],  //https://youtu.be/yeAbAUL7BWs?t=133
      ["Anne: But in Florida it's only a little chilly. You won't have to wear a heavy coat, only a light sweater.", "", 133, 140],  //https://youtu.be/yeAbAUL7BWs?t=140
      ["Mr. Mark: Thanks for the tips Anne.", "", 140, 142],  //https://youtu.be/yeAbAUL7BWs?t=141
      ["Anne: You're welcome. I hope you have a great time in the States.","", 142, 146],  //https://youtu.be/yeAbAUL7BWs?t=146
      ["Mr. Mark: I'll talk to you soon. Goodbye.", "", 145, 148],  //https://youtu.be/yeAbAUL7BWs?t=148
      ["Anne: OK. See you.", "", 148, 150]
    ]
  ]
  },{
  title: "Dialogue & Role Play - How is the weather?",
  columns: [
    [
      ["Mr. Mark:  ", "", 102, 105], //https://youtu.be/yeAbAUL7BWs?t=102 https://youtu.be/yeAbAUL7BWs?t=104
      ["Anne:  ", "", 105, 107],
      ["Mr. Mark:  ", "", 107, 111],
      ["Mr. Mark:  ", "", 111, 114],   //https://youtu.be/yeAbAUL7BWs?t=113
      ["Anne: ", "", 114, 119],  //https://youtu.be/yeAbAUL7BWs?t=118
      ["Anne:  ", "", 119, 122],  //https://youtu.be/yeAbAUL7BWs?t=121
      ["Mr. Mark:  ","", 122, 128],  //https://youtu.be/yeAbAUL7BWs?t=127
      ["Anne:  ","", 127, 134],  //https://youtu.be/yeAbAUL7BWs?t=133
      ["Anne: ", "", 133, 140],  //https://youtu.be/yeAbAUL7BWs?t=140
      ["Mr. Mark: ", "", 140, 142],  //https://youtu.be/yeAbAUL7BWs?t=141
      ["Anne:","", 142, 146],  //https://youtu.be/yeAbAUL7BWs?t=146
      ["Mr. Mark: ", "", 145, 148],  //https://youtu.be/yeAbAUL7BWs?t=148
      ["Anne: ", "", 148, 150]
    ]
  ]
  },
  {
    title: "Listening & Comprehension - Think BIG",
    type: "fill-in-the-blanks",
    columns: [
      [
        ["Champions ____ win ____ ____ ____ ____. ____ plan ____ ____.", "", 155, 160], //https://youtu.be/yeAbAUL7BWs?t=159
        ["They ____ begin ____ competition ____ ____ ____ in mind: winning.", "", 160, 165], //https://youtu.be/yeAbAUL7BWs?t=165
        ["Even ____ ____ statistics ____ against ____, ____ still believe they ____ win ____ ____.", "", 165, 171], //https://youtu.be/yeAbAUL7BWs?t=172
        ["Champions win big __________ dream big.", "", 171, 176], //https://youtu.be/yeAbAUL7BWs?t=175
        ["So winning begins in your mind.", "", 175, 178], //https://youtu.be/yeAbAUL7BWs?t=178
        ["If you __________ see __________ as a champion, you have a great chance of winning.", "", 178, 183], //https://youtu.be/yeAbAUL7BWs?t=183
        ["Your attitude makes all the difference.", "", 183, 187], //https://youtu.be/yeAbAUL7BWs?t=186
        ["Apply this principle to other areas of __________ life.", "", 187, 191], //https://youtu.be/yeAbAUL7BWs?t=190
        ["__________ think of your future, think big.", "", 190, 194], //https://youtu.be/yeAbAUL7BWs?t=194
        ["Never settle for second best.", "", 194, 197], //https://youtu.be/yeAbAUL7BWs?t=196
        ["Decide to __________ at your highest level of achievement.", "", 197, 204], //https://youtu.be/yeAbAUL7BWs?t=203
        ["If you __________ see it in your mind, you can achieve it.", "", 204, 208], //https://youtu.be/yeAbAUL7BWs?t=208
        ["If you want big achievements, you must have big dreams.", "", 208, 214], //
      ]
    ]
  },
  {
    title: "Listening & Comprehension",
    type: "listening",
    segments: [
      { text: "1. Do champions win games by accident?", start: 214, end: 219 }, //https://youtu.be/yeAbAUL7BWs?t=217
      { text: "2. What do champions do before a competition?", start: 219, end: 223 }, //https://youtu.be/yeAbAUL7BWs?t=222
      { text: "3. How do champions begin a competition?", start: 223, end: 230 }, //https://youtu.be/yeAbAUL7BWs?t=229
      { text: "4. What happens if the statistics are against them?", start: 230, end: 237 }, // https://youtu.be/yeAbAUL7BWs?t=237
      { text: "5. What is a big dream that you have for yourself?", start: 237, end: 244 } //https://youtu.be/yeAbAUL7BWs?t=241 
    ]
  },
  {
    title: "Listening - Question 1",
    columns: [
      [
        ["a) They went to California.", ""],
        ["b) They went to New York.", ""],
        ["c) They went to Florida.", ""]
      ]
    ]
  },
  {
    title: "Listening - Question 2",
    columns: [
      [
        ["a) She's reading about the weather.", ""],
        ["b) She's talking about the weather.", ""],
        ["c) She's watching the weather forecast.", ""]
      ]
    ]
  },
  {
    title: "Listening - Question 3",
    columns: [
      [
        ["a) He'd like to go to the park.", ""],
        ["b) He'd like to go to the beach.", ""],
        ["c) He'd like to go to the movies.", ""]
      ]
    ]
  },
  {
    title: "Listening - Question 4",
    columns: [
      [
        ["a) They're going to have bread and juice.", ""],
        ["b) They're going to have some cereal.", ""],
        ["c) They're going to have some cake.", ""]
      ]
    ]
  },
  {
    title: "Listening - Question 5",
    columns: [
      [
        ["a) He does his homework every other day.", ""],
        ["b) He does his homework on weekends.", ""],
        ["c) He does his homework right after class.", ""]
      ]
    ]
  },
  {
    title: "Listen and Write",
    type: "listening",
    segments: [
      { text: "1. I hope the weather is fine tomorrow.", start: 315, end: 321 }, //https://youtu.be/yeAbAUL7BWs?t=321
      { text: "2. Nobody is going to the movie tonight.", start: 321, end: 325}, //https://youtu.be/yeAbAUL7BWs?t=324
      { text: "3. He only accesses the internet on weekends.", start: 325, end: 329 }, //https://youtu.be/yeAbAUL7BWs?t=328
      { text: "4. I don’t know how much he paid for his car.", start: 329, end: 334 }, //https://youtu.be/yeAbAUL7BWs?t=333
      { text: "5. It’s not raining today.", start: 334, end: 337 } //https://youtu.be/yeAbAUL7BWs?t=337
    ]
  },
  {
    title: "Conversation in Trio",
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
    title: "Ask your Friend - 1 Repeat",
    columns: [
      [ 
      ]
    ]
  },
         {
    title: "Ask your Friend - 2 Ask",
    columns: [
      [ 
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
