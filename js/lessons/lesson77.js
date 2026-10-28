const lessonTitle = "Lesson 77";
const currentVideoId = "denJRCQCCdc";

const timeRanges = [
  { start: 9, end: 30 }, //https://youtu.be/Q9eIX3bjKQs?t=30
  { start: 30, end: 101 }, //https://youtu.be/Q9eIX3bjKQs?t=93
  { start: 101, end: 133 }, //https://youtu.be/y-eoZboyPRk?t=133
  { start: 133, end: 212 }, //Grammar
  { start: 212, end: 260 }, //Frases 1
  { start: 260, end: 312 }, //Fr2
  { start: 312, end: 367 }, //Fr3
  { start: 373, end: 619 }, //Fr4
  { start: 628, end: 836 }, //vac
  { start: 846, end: 964 }, //exp
  { start: 979, end: 9999 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to love, loved", "amar, adorar"],
      ["to dance, danced", "dançar"]
    ],
    [
      ["to send, sent", "enviar"],
      ["to watch, watched", "assistir"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["jello", "gelatina"],
      ["pudding", "pudim"],
      ["toaster", "torradeira"],
      ["jar", "pote"],
      ["channel", "canal"]
    ],
    [
      ["TV set", "aparelho de TV"],
      ["live", "ao vivo"],
      ["medicine cabinet", "armarinho do banheiro"],
      ["aspirin", "aspirina"],
      ["dental floss", "fio dental"]
    ],
    [
      ["Q-tip", "cotonete"],
      ["razor", "aparelho de barbear"],
      ["toothbrush", "escova de dente"],
      ["shaving cream", "creme de barbear"],
      ["nurse", "enfermeira"],
      ["cartoon", "desenho animado"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to fall in love with", "apaixonar-se por"],
      ["to send back", "devolver"]
    ],
    [
      ["watch out", "cuidado"],
      ["take it easy", "calma"]
    ],
    [
      ["dishwasher", "lava louças"],
      ["amusement park", "parque de diversão"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["There are many books on the table.", "Há muitos livros sobre a mesa."],
      ["There aren't any nice movies to watch.", "Não há filmes legais para assistir."],
      ["Are there a lot of students in your class?", "Há muitos alunos na sua aula?"],
      ["Aren't there any tips?", "Não há nenhuma dica?"],

      ["",""],
      ["He's as smart as she is.", "Ele é tão esperto quanto ela é."],
      ["He's as intelligent as her.", "Ele é tão inteligente quanto ela."]
    ],
    [
      ["There were many people here.", "Havia muitas pessoas aqui."],
      ["There wasn't any news.", "Não havia nenhuma notícia."],
      ["Were there a lot of cars in the parking lot?", "Havia muitos carros no estacionamento?"],
      ["Weren't there many people in the show?", "Não havia muitas pessoas no show?"],

            ["",""],

      ["He can read as fast as me.", "Ele pode ler tão rápido quanto eu."],
      ["He can read as fast as I can.", "Ele pode ler tão rápido quanto eu posso."]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["She loved her trip to France.", ""],
      ["He loves his car.", ""],
      ["I think he didn't love her.", ""],
      ["We loved the show.", ""],
      
      ["Would you like to dance with me?", ""],
      ["Can you dance the waltz?", ""],
      ["We danced all night long.", ""],
      ["Why don't you invite her to dance?", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["I sent her an email two days ago.", ""],
      ["Did she send you all her documents?", ""],
      ["They didn't send us anything.", ""],
      ["Didn't he send you an email?", ""],
      
      ["We watched a beautiful movie together.", ""],
      ["Did you watch the game on TV?", ""],
      ["Didn't you watch the concert live?", ""],
      ["They didn't watch the play.", ""]
    ]
  ]
},
{
  "title": "Phrases",
  "columns": [
    [
      ["There are many things to send them.", ""],
      ["There aren't many foreigners there.", ""],
      ["Are there interesting movies to watch?", ""],
      ["Aren't there places to visit near here?", ""],
      
      ["There were many things to do in London.", ""],
      ["There weren't any good channels to watch.", ""],
      ["Were there many things to buy?", ""],
      ["Weren't there any cheap things there?", ""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to love, loved", "amar, adorar"],
      ["to dance, danced", "dançar"]
    ],
    [
      ["to send, sent", "enviar"],
      ["to watch, watched", "assistir"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["jello", "gelatina"],
      ["pudding", "pudim"],
      ["toaster", "torradeira"],
      ["jar", "pote"],
      ["channel", "canal"],
      ["TV set", "aparelho de TV"],
      ["live", "ao vivo"],
      ["medicine cabinet", "armarinho do banheiro"],
      ["aspirin", "aspirina"]
    ],
    [
      ["dental floss", "fio dental"],
      ["Q-tip", "cotonete"],
      ["razor", "aparelho de barbear"],
      ["toothbrush", "escova de dente"],
      ["shaving cream", "creme de barbear"],
      ["nurse", "enfermeira"],
      ["cartoon", "desenho animado"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to fall in love with", "apaixonar-se por"],
      ["to send back", "devolver"]
    ],
    [
      ["watch out", "cuidado"],
      ["take it easy", "calma"]
    ],
    [
      ["dishwasher", "lava louças"],
      ["amusement park", "parque de diversão"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["There are many books on the table.", "Há muitos livros sobre a mesa."],
      ["There aren't any nice movies to watch.", "Não há filmes legais para assistir."],
      ["Are there a lot of students in your class?", "Há muitos alunos na sua aula?"],
      ["Aren't there any tips?", "Não há nenhuma dica?"],
      ["He's as smart as she is.", "Ele é tão esperto quanto ela é."],
      ["He's as intelligent as her.", "Ele é tão inteligente quanto ela."]
    ],
    [
      ["There were many people here.", "Havia muitas pessoas aqui."],
      ["There wasn't any news.", "Não havia nenhuma notícia."],
      ["Were there a lot of cars in the parking lot?", "Havia muitos carros no estacionamento?"],
      ["Weren't there many people in the show?", "Não havia muitas pessoas no show?"],
      ["He can read as fast as me.", "Ele pode ler tão rápido quanto eu."],
      ["He can read as fast as I can.", "Ele pode ler tão rápido quanto eu posso."]
    ]
  ]
},


];
