const lessonTitle = "Lesson 68";
const currentVideoId = "Vhwc65-vfoU";

const timeRanges = [
  { start: 4, end: 42 }, //https://youtu.be/jd6IWqKNI6M?t=18
  { start: 42, end: 82 }, //https://youtu.be/Vhwc65-vfoU?t=82
  { start: 82, end: 118 }, //https://youtu.be/Vhwc65-vfoU?t=120
  { start: 4, end: 42 }, //https://youtu.be/jd6IWqKNI6M?t=18
  { start: 42, end: 82 }, //https://youtu.be/Vhwc65-vfoU?t=82
  { start: 82, end: 118 }, //https://youtu.be/Vhwc65-vfoU?t=120
  { start: 245, end: 355 }, //https://youtu.be/Vhwc65-vfoU?t=247 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 355, end: 413 }, //https://youtu.be/Vhwc65-vfoU?t=413 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 413, end: 546 }, //https://youtu.be/Vhwc65-vfoU?t=546 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 546, end: 596 }, //https://youtu.be/Vhwc65-vfoU?t=596 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 596, end: 717 }, //https://youtu.be/Vhwc65-vfoU?t=717 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 717, end: 761 }, //https://youtu.be/Vhwc65-vfoU?t=761 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 761, end: 857 }, //https://youtu.be/Vhwc65-vfoU?t=857 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 857, end: 972 }, //https://youtu.be/Vhwc65-vfoU?t=972 https://youtu.be/Vhwc65-vfoU?t=355
  { start: 1000, end: 1039 }, //https://youtu.be/Vhwc65-vfoU?t=991 https://youtu.be/Vhwc65-vfoU?t=355 https://youtu.be/Vhwc65-vfoU?t=1000
  { start: 1048, end: 99999 }, //https://youtu.be/Vhwc65-vfoU?t=991 https://youtu.be/Vhwc65-vfoU?t=355 https://youtu.be/Vhwc65-vfoU?t=1000
  { start: 4, end: 42 }, //https://youtu.be/jd6IWqKNI6M?t=18
  { start: 42, end: 82 }, //https://youtu.be/Vhwc65-vfoU?t=82
  { start: 82, end: 118 }, //https://youtu.be/Vhwc65-vfoU?t=120



];

const lessonCards = [
  {
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Is he thinking about traveling to another country?", ""],
      ["Are you thinking about traveling to another country?", ""],
      ["Yes, I am. I'm thinking about traveling to another country.", ""],
      ["Yes, he is. He's thinking about traveling to another country.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Isn't she interested in learning another language?", ""],
      ["Aren't you interested in learning another language?", ""],
      ["No, I'm not. I'm not interested in learning another language.", ""],
      ["No, she's not. She isn't interested in learning another language.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
      ["What time does he leave home every day?", ""],
      ["What time do you leave home every day?", ""],
      ["I usually leave home at 7:30 a.m.", ""],
      ["He usually leaves home at 7:30 a.m.", ""]
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
    title: "Ask your Friend",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Ask your Friend",
    columns: [
      [ 
      ]
    ]
  },
  {
  "title": "Culture - Camping",
  "columns": [
    [
      ["In the United States many people love to go camping, especially the boys.", "", 1003, 1010], //https://youtu.be/Vhwc65-vfoU?t=1009
      ["They like to camp in forests, near lakes, mountains and sometimes in the snow.", "", 1010, 1017], //https://youtu.be/Vhwc65-vfoU?t=1016
      ["At night they build a campfire and tell stories.", "", 1016, 1021], //https://youtu.be/Vhwc65-vfoU?t=1020
      ["They also like to eat marshmallows, play games and watch the stars.", "", 1020, 1027], //https://youtu.be/Vhwc65-vfoU?t=1026
      ["In the daytime they like to go fishing or hiking.", "", 1026, 1031], //https://youtu.be/Vhwc65-vfoU?t=1031
      ["Americans really love being around nature while having fun with their friends and family.", "", 1031, 1039] //https://youtu.be/Vhwc65-vfoU?t=1039
    ]
  ]
},

  {
  "title": "Discussion - Camping",
  "type": "listening",
  "segments": [
    { "text": "1. Where do American boys go camping?", "start": 1048, "end": 1052 }, // https://youtu.be/Vhwc65-vfoU?t=1051
    { "text": "2. What do they do when they go camping?", "start": 1052, "end": 1056 }, // https://youtu.be/Vhwc65-vfoU?t=1056
    { "text": "3. Tell me about the last time you went camping.", "start": 1056, "end": 1060 }, // https://youtu.be/Vhwc65-vfoU?t=1060
    { "text": "4. What campsites do you know?", "start": 1060, "end": 1063 }, // https://youtu.be/Vhwc65-vfoU?t=1063
    { "text": "5. What things can you do while camping?", "start": 1063, "end": 1067 } // https://youtu.be/Vhwc65-vfoU?t=1067
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
