const lessonTitle = "Lesson 20";
const currentVideoId = "Ns6bmXyKRwo";

const timeRanges = [
  { start: 10, end: 50 }, //0
  { start: 55, end: 69 }, //0
  { start: 85, end: 173 }, //Conversation
  { start: 173, end: 248 }, //Conversation
  { start: 248 + 10, end: 349 }, //Fixacão
  { start: 349 + 10, end: 395 }, //Passe para o Negativo
  { start: 395 + 10, end: 483 }, //Fixacão
  { start: 483 + 10, end: 533  }, //Passe para o Afirmativo
  { start: 533 + 10, end: 627 }, //Fixacão
  { start: 627 + 10, end: 672 }, //Passe para o Interrogativo
  { start: 672 + 10, end: 782 }, //Fixacão
  { start: 782 + 10, end: 836 }, //
  { start: 836 + 10, end: 1195 }, //Questions
  { start: 1195 + 10, end: 1548 }, //REsponda
  { start: 1548 + 10, end: 1607 }, //
  { start: 1607 + 5, end: 1641 }, //
];

const lessonCards = [
{
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
      ["I like to eat apple pie.", ""],
      ["I don't like to eat apple pie.", ""],
      ["Do you like to eat apple pie?", ""],

      ["", " "],

      ["cake", ""],
      ["popcorn", ""],
      ["cookies", ""],
      ["chocolate", ""],
      ["French fries", ""],
      ["chicken", ""],
      ["vegetables", ""],
      ["pasta", ""],
      ["fish", ""]
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
      ["Do you want cold or hot milk?", ""],
      ["I want to drink cold milk and he wants hot milk, please.", ""],
      ["", " "],

      ["Do you have a cat or a dog in your house?", ""],
      ["I have one cat and two dogs. My sister has a fish.", ""],
      ["", " "],

      ["How many books about dogs do you have at home?", ""],
      ["I have about five books. My father likes to read very much.", ""],
      ["", " "],

      ["What do you want to buy downtown?", ""],
      ["I want to buy a coat for my daughter. She needs it for tomorrow.", ""]
    ]
  ]
},
{
  "title": "Conversation",
  "type": "conversation",
  "columns": [
    [
      
    ]
  ]
},
{
  "title": "Fixacão - 1",
  "columns": []  
},
{
  "title": "Passe para o Negativo - 6", 
  "columns": []  
},
{
  "title": "Fixacão - 11",
  "columns": []  
},
{
  "title": "Passe para o Interrogativo - 16", 
  "columns": []  
},
{
  "title": "Fixacão - 21",
  "columns": []  
},
{
  "title": "Passe para o afirmativo - 26",
  "columns": []  
},
{
  "title": "Fixacão - 31", //aqui
  "columns": []  
},
{
  "title": "Passe para o Interrogativo - 36", 
  "columns": []  
},
{
  "title": "Questions",
  "columns": [
    [
      ["How many brothers and sisters do you have?", ""],
      ["Do you have to work or study English tonight?", ""],
      ["Do you sometimes sleep in the afternoon?", ""],
      ["What magazines do you like to read?", ""],
      ["What time do you go to school?", ""],
      ["What do you want to eat now?", ""],
      ["What do you prefer to eat?", ""],
      ["Do you want some cookies?", ""],
      ["Do you have many books?", ""],
      ["Do you need to buy new shoes?", ""],
      ["What time do you go to bed every day?", ""],
      ["Where do you want to go tonight?", ""]
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
    { text: " ", start: 1562, end: 1567 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: " ", start: 1567, end: 1575 }, //https://youtu.be/yeAbAUL7BWs?t=222
    { text: " ", start: 1575, end: 1585 }, //https://youtu.be/yeAbAUL7BWs?t=229
    { text: " ", start: 1585, end: 1597 }, // https://youtu.be/yeAbAUL7BWs?t=237
    { text: " ", start: 1597, end: 1607 } //https://youtu.be/yeAbAUL7BWs?t=241 
  ]
},
{
  "title": "Culture - Easter",
  "columns": [
    [
      ["Easter is usually celebrated in April.", "A Páscoa é geralmente celebrada em abril."],
      ["Many families paint eggs,", "Muitas famílias pintam ovos,"],
      ["have Easter egg hunts,", "fazem caça aos ovos de páscoa,"],
      ["and go to church on this day.", "e vão à igreja neste dia."],
      ["Kids believe that", "As crianças acreditam que"],
      ["the Easter bunny brings chocolate", "o coelho da páscoa traz chocolate,"],
      ["and other presents on Easter morning.", "e outros presentes na manhã de páscoa."]
    ]
  ]
},

];


