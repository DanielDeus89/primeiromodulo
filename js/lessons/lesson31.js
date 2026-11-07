const lessonTitle = "Lesson 31";
const currentVideoId = "Lns7yXy6NUg";

const timeRanges = [
  { start: 10, end: 177 },
  { start: 177 + 10, end: 425 },
  { start: 425 + 10, end: 605 },
  { start: 605 + 10, end: 788 },
  { start: 788 + 10, end: 974 },
  { start: 974 + 10, end: 1237 },
  { start: 1237 + 10, end: 1941 },
  { start: 1941 + 10, end: 2179 },
  { start: 2179 + 10, end: 2727 },
  { start: 2727 + 10, end: 2776 }
];

const lessonCards = [
{
  "title": "Input 31",
  "columns": [
    [
      ["I drink.", "Eu bebo."],
      ["I eat.", "Eu como."],
      ["I speak.", "Eu falo."],
      ["I talk.", "Eu converso."],
      ["I need.", "Eu preciso."]
    ],
    [
      ["He drinks.", "Ele bebe."],
      ["He eats.", "Ele come."],
      ["He speaks.", "Ele fala."],
      ["He talks.", "Ele conversa."],
      ["He needs.", "Ele precisa."]
    ]
  ]
},
{
  "title": "Input 31",
  "columns": [
    [
      ["I speak Chinese.", "Eu falo chinês."],
      ["I drink soft drink.", "Eu bebo refrigerante."],
      ["I eat pancakes.", "Eu como panquecas."],
      ["I speak Italian at home.", "Eu falo italiano em casa."]
    ],
    [
      ["He speaks Japanese.", "Ele fala japonês."],
      ["She drinks green tea.", "Ela bebe chá verde."],
      ["He eats cereal.", "Ele come cereal."],
      ["She speaks Spanish at work.", "Ela fala espanhol no trabalho."]
    ]
  ]
},
{
  "title": "Input 31",
  "columns": [
    [
      ["I don't speak French.", "Eu não falo francês."],
      ["I don't drink chocolate milk.", "Eu não bebo leite com chocolate."],
      ["I don't eat cereal for breakfast.", "Eu não como cereal no café da manhã."]
    ],
    [
      ["He doesn't speak German.", "Ele não fala alemão."],
      ["She doesn't drink tea with milk.", "Ela não bebe chá com leite."],
      ["He doesn't eat toast with peanut butter.", "Ele não come torrada com creme de amendoim."]
    ]
  ]
},
{
  "title": "Input 31",
  "columns": [
    [
      ["Do you speak Spanish?", "Você fala espanhol?"],
      ["Do you drink hot chocolate?", "Você bebe chocolate quente?"],
      ["Do you eat peanut butter?", "Você come creme de amendoim?"]
    ],
    [
      ["Does he speak English?", "Ele fala inglês?"],
      ["Does she drink cold tea?", "Ela bebe chá frio?"],
      ["Does he eat toast with jelly?", "Ele come torrada com geleia?"]
    ]
  ]
},
{
  "title": "Input 31",
  "columns": [
    [
      ["I talk to you.", "Eu converso com você."],
      ["He doesn't talk to Sally.", "Ele não conversa com a Sally."],
      ["She talks a lot.", "Ela conversa muito."]
    ],
    [
      ["Do you need to talk to me?", "Você precisa conversar comigo?"],
      ["Does he need to talk to you?", "Ele precisa conversar com você?"],
      ["Does she need to talk to me?", "Ela precisa conversar comigo?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to drink", "beber, tomar"],
      ["to eat", "comer"],
      ["to speak", "falar"]
    ],
    [
      ["to talk", "conversar"],
      ["to need", "precisar (de)"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["English", "inglês"],
      ["Portuguese", "português"],
      ["Chinese", "chinês"],
      ["Japanese", "japonês"],
      ["Italian", "italiano"],
      ["German", "alemão"],
      ["French", "francês"],
      ["Spanish", "espanhol"],
      ["brother", "irmão"],
      ["sister", "irmã"]
    ],
    [
      ["father", "pai"],
      ["mother", "mãe"],
      ["parents", "pais"],
      ["coffee", "café"],
      ["milk", "leite"],
      ["chocolate", "chocolate"],
      ["tea", "chá"],
      ["water", "água"],
      ["juice", "suco"],
      ["soda", "refrigerante"]
    ],
    [
      ["soft drink", "refrigerante"],
      ["green tea", "chá verde"],
      ["fish", "peixe"],
      ["meat", "carne"],
      ["pancakes", "panquecas"],
      ["syrup", "calda"],
      ["cereal", "cereal"],
      ["toast", "torrada"],
      ["jam", "geleia"],
      ["jelly", "geleia"]
    ],
    [
      ["peanut butter", "creme de amendoim"],
      ["now", "agora"],
      ["today", "hoje"],
      ["only", "só, somente"],
      ["with", "com"],
      ["and", "e"],
      ["I", "eu"],
      ["you", "você"],
      ["my", "meu"],
      ["your", "seu"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["thank you", "obrigado"],
      ["thanks", "obrigado"],
      ["you're welcome", "de nada"],
      ["please", "por favor"]
    ],
    [
      ["in the morning", "de manhã"],
      ["in the afternoon", "à tarde"],
      ["in the evening", "à noite"],
      ["at night", "à noite"],
      ["every day", "todos os dias"]
    ]
  ]
},

{
  "title": "Grammar",
  "columns": [
    [
      ["I need.", "Eu preciso."],
      ["You speak.", "Você fala."],
      ["He drinks.", "Ele bebe."],
      ["She eats.", "Ela come."],
      ["He talks.", "Ele conversa."],
      ["I don't need.", "Eu não preciso."],
      ["You don't speak.", "Você não fala."],
      ["He doesn't drink.", "Ele não bebe."],
      ["She doesn't eat.", "Ela não come."],
      ["He doesn't talk.", "Ele não conversa."]
    ],
    [
      ["Do you need?", "Você precisa?"],
      ["Do you speak?", "Você fala?"],
      ["Does he drink?", "Ele bebe?"],
      ["Does she eat?", "Ela come?"],
      ["Doesn't he talk?", "Ele não conversa?"],
      ["I need to speak English.", "Eu preciso falar inglês."],
      ["I need to talk to you.", "Eu preciso conversar com você."]
    ]
  ]
},

  {
    title: "Listening",
    type: "listening",
    segments: [
      { text: "", start: 2743, end: 2747 },
      { text: "", start: 2747, end: 2754 },
      { text: "", start: 2754, end: 2760 },
      { text: "", start: 2760, end: 2767 },
      { text: "", start: 2767, end: 2776 }
    ]
  }  
];