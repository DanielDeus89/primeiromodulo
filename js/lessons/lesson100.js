const lessonTitle = "Lesson 100";
const currentVideoId = "dA7GGms7y4E";

const timeRanges = [
  { start: 0, end: 77 }, //Practice
  { start: 82, end: 152 }, //2
  { start: 160, end: 390 }, 
  { start: 403, end: 481 }, //Change into
  { start: 480 + 10, end: 637 }, //Practice
  { start: 637 + 5, end: 727 }, //Change
  { start: 727 + 10, end: 874 }, //Practice
  { start: 874, end: 974 }, //Answer Into - or +
  { start: 1062, end: 1134 }, //Practice aqui
  { start: 1134, end: 999999 }

];

const lessonCards = [
{
  "title": "Fluency in Pairs",
  "columns": [
    [
      ["<strong>I didn't get the job I wanted.</strong> (soon)", ""],
      ["<strong>It's a pity you didn't get the job you wanted.</strong>", ""],
      ["<strong>I hope you can get a job soon.</strong>", ""],
      ["", " "],

      ["I didn't do very well on the test. (next time)", ""],
      ["{{It's a pity you didn't do very well on the test.}}", ""],
      ["{{I hope you do better next time.}}", ""],
      ["", " "],

      ["She didn't get the visa to the States. (some time in the future)", ""],
      ["{{It's a pity she didn't get the visa to the States.}}", ""],
      ["{{I hope she can get the visa some time in the future.}}", ""],
      ["", " "],

      ["They won't be able to visit us anymore. (next time)", ""],
      ["{{It's a pity they won't be able to visit us anymore.}}", ""],
      ["{{I hope they can visit us next time.}}", ""],
      ["", " "],

      ["She won't be with us today. (tomorrow)", ""],
      ["{{It's a pity she won't be with us today.}}", ""],
      ["{{I hope she can be with us tomorrow.}}", ""],
      ["", " "],

      ["He won't be able to come back. (in the future)", ""],
      ["{{It's a pity he won't be able to come back.}}", ""],
      ["{{I hope he can come back in the future.}}", ""]
    ]
  ]
},
{
  "title": "Fluency in Pairs",
  "columns": [
    [
      ["<strong>I hope I can get that promotion.</strong>", ""],
      ["<strong>I'm sure you will get that promotion.</strong>", ""],
      ["<strong>That's what I hope.</strong>", ""],
      ["", " "],

      ["I hope to have enough money to go to New Zealand.", ""],
      ["{{I'm sure you will have enough money to go to New Zealand.}}", ""],
      ["{{That's what I hope.}}", ""],
      ["", " "],

      ["I hope to become a great doctor.", ""],
      ["{{I'm sure you will become a great doctor.}}", ""],
      ["{{That's what I hope.}}", ""],
      ["", " "],

      ["I'd like to get an iPod on my birthday.", ""],
      ["{{I'm sure you will get an iPod on your birthday.}}", ""],
      ["{{That's what I hope.}}", ""],
      ["", " "],

      ["I'd like to go to college in the United States.", ""],
      ["{{I'm sure you will go to college in the United States.}}", ""],
      ["{{That's what I hope.}}", ""],
      ["", " "],

      ["I'd like to meet the president at the conference.", ""],
      ["{{I'm sure you will meet the president at the conference.}}", ""],
      ["{{That's what I hope.}}", ""]
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
     title: "Change into past according to the model",
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
    title: "Change into past according to the model",
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
    title: "Answer the questions according to the model",
    columns: [
      [
      ]
    ]
  },
{
  "title": "Speak Right - Pronunciation",
  "columns": [
    [
      ["better", "melhor"],
      ["letter", "carta"],
      ["matter", "assunto / matéria"],
      ["butter", "manteiga"],
      ["bitter", "amargo"],
      ["litter", "lixo"],
      ["twitter", "Twitter (rede social)"],
      ["later", "mais tarde"],
      ["writer", "escritor"],
      ["waiter", "garçom"]
    ],
    [
      ["winter", "inverno"],
      ["printer", "impressora"],
      ["twenty", "vinte"],
      ["seventy", "setenta"],
      ["plenty", "bastante / muito"],
      ["wanted", "queria / procurado"],
      ["rented", "alugado / alugou"],
      ["painted", "pintado / pintou"],
      ["invented", "inventado / inventou"],
      ["intended", "pretendido / pretendia"]
    ]
  ]
},
{
  "title": "Listening & Comprehension - Reputation",
  "type": "listening",
  "columns": [
    [
      ["{{Reputation}} is the opinion {{people have}} about you based on the choices you have made.", "", 1066, 1072],
      ["When those choices are morally correct, it will be said of you {{that you are a person}} of integrity.", "", 1072, 1080],
      ["You {{can't}} buy integrity with money.", "", 1080, 1083],
      ["You can't buy honesty {{with money}}.", "", 1083, 1086],
      ["You can't buy a reputation with money.", "", 1086, 1089],
      ["You don't gain a good reputation instantly.", "", 1089, 1093],
      ["You get it day by day, month by month, and {{year by year}}.", "", 1093, 1099],
      ["You get it decision by decision - individual choices you have made about your attitudes and actions.", "", 1099, 1109],
      ["If you want to be a person of integrity, follow these three rules:", "", 1109, 1114],
      ["Keep your word.", "", 1114, 1116],
      ["Show respect toward others.", "", 1116, 1119],
      ["Live by a high moral standard.", "", 1119, 1123],
      ["Finally, {{you'll never}} get a reputation with what you intend to do, only with what you have already done.", "", 1123, 1134]
    ]
  ]
},
{
  title: "Listening & Answer",
  type: "listening",
  segments: [
    { text: " ", start: 1138, end: 1144 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: " ", start: 1144, end: 1153 }, //https://youtu.be/yeAbAUL7BWs?t=222
    { text: " ", start: 1153, end: 1161 }, //https://youtu.be/yeAbAUL7BWs?t=229
    { text: " ", start: 1161, end: 1170 }, // https://youtu.be/yeAbAUL7BWs?t=237
    { text: " ", start: 1170, end: 1182 } //https://youtu.be/yeAbAUL7BWs?t=241 
  ]
}
];

