const lessonTitle = "Lesson 73";
const currentVideoId = "Q9eIX3bjKQs";

const timeRanges = [
  { start: 9, end: 30 }, //https://youtu.be/Q9eIX3bjKQs?t=30
  { start: 30, end: 93 }, //https://youtu.be/Q9eIX3bjKQs?t=93
  { start: 93, end: 123 }, //https://youtu.be/Q9eIX3bjKQs?t=123
  { start: 123, end: 210 }, //https://youtu.be/Q9eIX3bjKQs?t=210
  { start: 210, end: 256 }, //https://youtu.be/Q9eIX3bjKQs?t=256
  { start: 256, end: 299 }, //https://youtu.be/Q9eIX3bjKQs?t=299
  { start: 299, end: 347 }, //https://youtu.be/Q9eIX3bjKQs?t=347
  { start: 347, end: 392 }, //https://youtu.be/Q9eIX3bjKQs?t=392
  { start: 399, end: 640 }, //https://youtu.be/Q9eIX3bjKQs?t=640
  { start: 648, end: 898 }, //https://youtu.be/Q9eIX3bjKQs?t=898
  { start: 905, end: 996 }, //https://youtu.be/Q9eIX3bjKQs?t=996
  { start: 1001, end: 1349 }, //https://youtu.be/Q9eIX3bjKQs?t=1350
 
 
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [["to walk, walked", "caminhar, andar"]],
    [["to invite, invited", "convidar"]],
    [["to call, called", "telefonar para, chamar"]],
    [["will", "futuro"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["phone", "telefone"],
      ["phone book", "lista telefônica"],
      ["phone booth", "cabine telefônica"],
      ["fever", "febre"],
      ["ad", "anúncio"]
    ],
    [
      ["public", "público"],
      ["private", "privado, particular"],
      ["pair", "par"],
      ["building", "edifício"],
      ["square", "praça"]
    ],
    [
      ["belt", "cinto"],
      ["buckle", "fivela"],
      ["solution", "solução"],
      ["brand", "marca"],
      ["through", "através de, por"]
    ]
  ]
}
,
{
  "title": "Expressions",
  "columns": [
    [
      ["to take a walk", "dar um passeio, dar uma volta (a pé)"],
      ["to go for a walk", "dar um passeio, dar uma volta (a pé)"],
      ["to go for a ride", "dar um passeio, dar uma volta (carro, moto, bicicleta)"]
    ],
    [
      ["What's the matter?", "O que há?, Qual é o problema?"],
      ["pay phone", "telefone público, orelhão"],
      ["to put on", "vestir, colocar, calçar"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["My brother's birthday.", "O aniversário do meu irmão."],
      ["Charles' birthday.", "O aniversário do Charles."],
      ["Jane and Paul's office.", "O escritório de Jane e Paul."],
      ["Mary's and Peter's cars.", "Os carros de Mary e Peter."],
      ["", " "],
      ["I will - I'll", ""],
      ["I will not - I won't", " "],
      ["", " "],
      ["father-in-law", "sogro"],
      ["mother-in-law", "sogra"],
      ["brother-in-law", "cunhado "]
    ],
    [
      ["When will you visit us?", "Quando você nos visitará?"],
      ["They won't finish it today.", "Eles não terminarão isto hoje."],
      ["Why won't you go there with me?", "Por que você não irá lá comigo?"],
      ["He'll be here in two hours.", "Ele estará aqui em duas horas."],
      ["", " "],
      ["", " "],
      ["", " "],
      ["", " "],
      ["sister-in-law", "cunhada"],
      ["son-in-law", "genro"],
      ["daughter-in-law", "nora "]
    ]
  ]
},

{
  "title": "Phrases",
  "columns": [
    [
      ["We walked together on the beach.", ""],
      ["Did you walk to the mall?", ""],
      ["She didn't walk home.", ""],
      ["They walk in the park every day.", ""]
    ],
    [
      ["I'll call you tomorrow.", ""],
      ["He called us from his cell phone.", ""],
      ["Didn't she call you?", ""],
      ["They didn't call the doctor.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["I'd like to invite him to the party.", ""],
      ["Did they invite you to go to the concert?", ""],
      ["Why didn't you invite her?", ""],
      ["They didn't invite us to go with them.", ""]
    ],
    [
      ["Will you come with us?", ""],
      ["It will start next month.", ""],
      ["It will be great.", ""],
      ["She won't come soon.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["Do you want to take a walk with us?", ""],
      ["We went for a ride downtown.", ""],
      ["Did you go for a walk yesterday?", ""],
      ["Take a look at this.", ""]
    ],
    [
      ["They have to put on their shirts.", ""],
      ["You have to put your shirt on.", ""],
      ["He took his shoes off.", ""],
      ["He took off his shoes.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["Whose car is this?", ""],
      ["It's Justin's.", ""],
      ["This car is my brother's.", ""],
      ["These are Tim's books.", ""]
    ],
    [
      ["I'll visit my in-laws today.", ""],
      ["Did you invite your mother-in-law?", ""],
      ["My son-in-law brought it to me.", ""],
      ["His sister-in-law is very pretty.", ""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [["to walk, walked", "caminhar, andar"]],
    [["to invite, invited", "convidar"]],
    [["to call, called", "telefonar para, chamar"]],
    [["will", "futuro"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["phone", "telefone"],
      ["phone book", "lista telefônica"],
      ["phone booth", "cabine telefônica"],
      ["fever", "febre"],
      ["ad", "anúncio"]
    ],
    [
      ["public", "público"],
      ["private", "privado, particular"],
      ["pair", "par"],
      ["building", "edifício"],
      ["square", "praça"]
    ],
    [
      ["belt", "cinto"],
      ["buckle", "fivela"],
      ["solution", "solução"],
      ["brand", "marca"],
      ["through", "através de, por"]
    ]
  ]
}
,
{
  "title": "Expressions",
  "columns": [
    [
      ["to take a walk", "dar um passeio, dar uma volta (a pé)"],
      ["to go for a walk", "dar um passeio, dar uma volta (a pé)"],
      ["to go for a ride", "dar um passeio, dar uma volta (carro, moto, bicicleta)"]
    ],
    [
      ["What's the matter?", "O que há?, Qual é o problema?"],
      ["pay phone", "telefone público, orelhão"],
      ["to put on", "vestir, colocar, calçar"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["My brother's birthday.", "O aniversário do meu irmão."],
      ["Charles' birthday.", "O aniversário do Charles."],
      ["Jane and Paul's office.", "O escritório de Jane e Paul."],
      ["Mary's and Peter's cars.", "Os carros de Mary e Peter."],
      ["", " "],
      ["I will - I'll", ""],
      ["I will not - I won't", " "],
      ["", " "],
      ["father-in-law", "sogro"],
      ["mother-in-law", "sogra"],
      ["brother-in-law", "cunhado "]
    ],
    [
      ["When will you visit us?", "Quando você nos visitará?"],
      ["They won't finish it today.", "Eles não terminarão isto hoje."],
      ["Why won't you go there with me?", "Por que você não irá lá comigo?"],
      ["He'll be here in two hours.", "Ele estará aqui em duas horas."],
      ["", " "],
      ["", " "],
      ["", " "],
      ["", " "],
      ["sister-in-law", "cunhada"],
      ["son-in-law", "genro"],
      ["daughter-in-law", "nora "]
    ]
  ]
}



];
