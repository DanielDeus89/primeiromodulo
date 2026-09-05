const lessonTitle = "Lesson 14";
const currentVideoId = "cNYkXKdpGmk";

const timeRanges = [
  { start: 14, end: 39 }, //0
  { start: 39, end: 72 }, //0
  { start: 90, end: 205 }, //0Conversation
  { start: 215, end: 288 }, //0Fixacão
  { start: 298, end: 332 }, //0Passe para o Negativo
  { start: 342, end: 427 }, //0Fixacão
  { start: 437, end: 469  }, //0Passe para o Afirmativo
  { start: 479, end: 568 }, //0Fixacão
  { start: 578, end: 625 }, //0Passe para o Interrogativo
  { start: 635, end: 727 }, //0Fixacão
  { start: 737, end: 802 }, //0
  { start: 812, end: 1099 }, //0Questions
  { start: 1109, end: 1535 }, //REsponda
  { start: 1540, end: 1572 }, //0
  { start: 1582, end: 1610 }, //0
];

const lessonCards = [
{
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["I need to buy new pants.", " "],
      ["I don't need to buy new pants.", " "],
      ["Do you need to buy new pants?", ""],

      ["", " "],
      ["house", " "],
      ["apartment", " "],
      ["dress", ""],
      ["shirt", " "],
      ["pants", " "],
      ["blouse", ""],
      ["coat", " "],
      ["T-shirt", ""]
    ]
  ]
},
{
  "title": "Make your own Senteces",
  "columns": [
  ]
},
{
  "title": "Conversation",
  "type": "conversation",
  "columns": [
    [
      ["Do you need to buy a coat?", " "],
      ["Yes, I do. I need to buy a new coat.", ""],
      ["", " "],

      ["Do you want to sell your bicycle?", " "],
      ["No, I don't. I don't want to sell my bicycle.", ""],
      ["", " "],

      ["Do you want to buy a shirt for your brother?", ""],
      ["Yes, I do. I want to buy a shirt and some pants, too.", " "],
      ["", " "],

      ["Do you need to work downtown today?", ""],
      ["No, I don't. I don't need to work downtown today.", ""]
    ]
  ]
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Afirmativo", 
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Negativo", 
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Interrogativo ",
  "columns": []  
},
{
  "title": "Fixacão", //aqui
  "columns": []  
},
{
  "title": "Passe para o Negativo", 
  "columns": []  
},
{
  "title": "Questions",
  "columns": [
    [
      ["Do you buy some ice cream every day?", ""],
      ["Do you have a cat at home?", ""],
      ["What do you want to buy now?", ""],
      ["Do you drink milk at night?", ""],
      ["Do you want to study at my house?", ""],
      ["When do you go to the movies?", ""],
      ["Do you like to buy books?", ""],
      ["What cars do you like?", ""],
      ["Do you sometimes buy books for your children?", ""],
      ["Do you speak English with your boss every day?", ""],
      ["Where do you like to go on weekends?", ""],
      ["When do you want to speak with me?", ""]
    ]
  ]
},
{
  "title": "Responda",
  "type": "listening",
  "segments": [
   
  ]
},
{
  title: "Listening & Comprehension",
  type: "listening",
  segments: [
    { text: " ", start: 1545, end: 1550 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: " ", start: 1550, end: 1556 }, //https://youtu.be/yeAbAUL7BWs?t=222
    { text: " ", start: 1556, end: 1561 }, //https://youtu.be/yeAbAUL7BWs?t=229
    { text: " ", start: 1561, end: 1568 }, // https://youtu.be/yeAbAUL7BWs?t=237
    { text: " ", start: 1568, end: 1572 } //https://youtu.be/yeAbAUL7BWs?t=241 
  ]
},
{
  "title": "Culture - Columbus Day",
  "columns": [
    [
      ["\"In 1492 Columbus sailed the ocean blue.\"", "\"Em 1492 Colombo navegou o oceano azul.\"", 1588, 1593],
      ["American children learn this line at school", "As crianças americanas aprendem esta frase na escola", 1593, 1596],
      ["when they study the discovery of America.", "quando eles estudam o descobrimento da América.", 1596, 1599],
      ["Christopher Columbus was looking for a route", "Cristóvão Colombo estava procurando uma rota", 1599, 1603],
      ["to India when he discovered America.", "para a Índia quando ele descobriu a América.", 1603, 1606],
      ["For this reason Native Americans are called Indians.", "Por esta razão os nativos americanos são chamados de índios.", 1606, 1610]
    ]
  ]
}
];
