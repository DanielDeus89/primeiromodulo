const lessonTitle = "Lesson 55";
const currentVideoId = "-zftAhX2E_M";

const timeRanges = [
  { start: 10, end: 129 },
  { start: 129 + 10, end: 335 },
  { start: 335 + 10, end: 571 },
  { start: 571 + 10, end: 702 }, //We liked the game. 330 571
  { start: 702 + 10, end: 911 }, //I didn't like that. 
  { start: 911 + 10, end: 1170 },//Did you go downtown?
  { start: 1170 + 10, end: 1839 },//Didn't she go?
  { start: 1839 + 10, end: 2018 }, //Verbs
  { start: 2018 + 10, end: 2455 },//Vocabulary
  { start: 2455 + 10, end: 2502 }
];

const lessonCards = [
{
  "title": "Input 55",
  "columns": [
    [
      ["I live.", "Eu moro, vivo."],
      ["I understand.", "Eu entendo."],
      ["I open.", "Eu abro."],
      ["I close.", "Eu fecho."],
      ["I would.", "Condicional."]
    ],
    [
      ["I lived.", "Eu morei, vivi."],
      ["I understood.", "Eu entendi."],
      ["I opened.", "Eu abri."],
      ["I closed.", "Eu fechei."]
    ]
  ]
},
{
  "title": "Input 55",
  "columns": [
    [
      ["I closed the store at 6 p.m.", "Eu fechei a loja às 6 h."],
      ["We didn't understand the exercise.", "Nós não entendemos o exercício."],
      ["Did you understand the film?", "Você entendeu o filme?"],
      ["Didn't he live by himself?", "Ele não morou sozinho?"]
    ],
    [
      ["She lived in France for many years.", "Ela morou na França por muitos anos."],
      ["They didn't open it yet.", "Eles não abriram ainda."],
      ["Did you close the room?", "Você fechou a sala?"],
      ["Didn't she understand the class?", "Ela não entendeu a aula?"]
    ]
  ]
},
{
  "title": "Input 55",
  "columns": [
    [
      ["Did you start working out?", "Você começou a fazer exercícios?"],
      ["We didn't start playing the game yet.", "Nós não começamos a jogar o jogo ainda."],
      ["Did you finish studying your lessons?", "Você terminou de estudar suas lições?"],
      ["I finished studying an hour ago.", "Eu terminei de estudar há uma hora."]
    ],
    [
      ["Did she start working at the hospital?", "Ela começou a trabalhar no hospital?"],
      ["She started working here this week.", "Ela começou a trabalhar aqui esta semana."],
      ["Did he finish writing the book?", "Ele terminou de escrever o livro?"],
      ["He didn't finish it yet.", "Ele não terminou ainda."]
    ]
  ]
},
{
  "title": "Input 55",
  "columns": [
    [
      ["Aren't you working full time?", "Você não está trabalhando período integral?"],
      ["Isn't he reading this book?", "Ele não está lendo este livro?"]
    ],
    [
      ["Aren't the kids studying math?", "As crianças não estão estudando matemática?"],
      ["Aren't we going there?", "Não estamos indo lá?"]
    ]
  ]
},
{
  "title": "Input 55",
  "columns": [
    [
      ["Would you like to go now?", "Você gostaria de ir agora?"],
      ["I would like to talk to you.", "Eu gostaria de conversar com você."],
      ["I wouldn't like to talk to her.", "Eu não gostaria de conversar com ela."],
      ["Would you like to talk to me?", "Você gostaria de conversar comigo?"]
    ],
    [
      ["I wouldn't like to live here.", "Eu não gostaria de morar aqui."],
      ["I wouldn't like to go at night.", "Eu não gostaria de ir à noite."],
      ["I would like to talk to him.", "Eu gostaria de conversar com ele."],
      ["I would like to start today.", "Eu gostaria de começar hoje."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to live", "morar, viver"],
      ["to close", "fechar"],
      ["to understand", "entender"],
      ["to open", "abrir"]
    ],
    [
      ["lived", "morou, viveu"],
      ["closed", "fechou"],
      ["understood", "entendeu"],
      ["opened", "abriu"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["exercise", "exercício"],
      ["film", "filme"],
      ["concert", "concerto, show"],
      ["play", "peça de teatro"],
      ["theater", "teatro"],
      ["pilot", "piloto"],
      ["driver", "motorista"],
      ["accident", "acidente"],
      ["truck", "caminhão"],
      ["garage", "garagem"],
      ["room", "sala"],
      ["bathroom", "banheiro"],
      ["living room", "sala de estar"]
    ],
    [
      ["dining room", "sala de jantar"],
      ["fireplace", "lareira"],
      ["wood", "madeira"],
      ["expensive", "caro"],
      ["cheap", "barato"],
      ["difficult", "difícil"],
      ["easy", "fácil"],
      ["simple", "simples"],
      ["complicated", "complicado"],
      ["smart", "esperto"],
      ["word", "palavra"],
      ["secret", "segredo"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["too much", "demais"],
      ["too little", "muito pouco"],
      ["too late", "tarde demais"]
    ],
    [
      ["congratulations", "parabéns"],
      ["awesome", "impressionante"],
      ["good job", "bom trabalho"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He started working.", "Ele começou a trabalhar."],
      ["I started playing.", "Eu comecei a jogar."],
      ["She wants to start writing.", "Ela quer começar a escrever."],
      ["He finished reading.", "Ele terminou de ler."],
      ["They finished eating.", "Eles terminaram de comer."]
    ],
    [
      ["Aren't you working on weekends?", "Você não está trabalhando nos finais de semana?"],
      ["Isn't she going to the mall?", "Ela não está indo ao shopping?"],
      ["Aren't they studying for the test?", "Eles não estão estudando para o teste?"],
      ["Aren't they helping you?", "Eles não estão te ajudando?"]
    ]
  ]
},
  {
    title: "Listening: Change intou interrogative:",
    type: "listening",
    segments: [
      { text: "", start: 2468, end: 2473 },
      { text: "", start: 2473, end: 2480 },
      { text: "", start: 2480, end: 2487 },
      { text: "", start: 2487, end: 2494 },
      { text: "", start: 2494, end: 2502 }
    ]
  }  
];