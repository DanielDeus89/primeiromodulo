const lessonTitle = "Lesson 79";
const currentVideoId = "9NBVtWSwTZw";

const timeRanges = [
  { start: 0, end: 30 }, //Verbs
  { start: 30, end: 101 }, //Vocabulary
  { start: 101, end: 119 }, //exp
  { start: 119, end: 210 }, //Grammar
  { start: 210, end: 255 }, //Frases 1
  { start: 255, end: 303 }, //Fr2
  { start: 303, end: 373 }, //Fr3
  { start: 373, end: 394 }, //Fr4
  { start: 394, end: 589 }, //Verbs
  { start: 589, end: 900 }, //vac
  { start: 900, end: 1002 }, //exp
  { start: 1002, end: 9999 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to run, ran", "correr, administrar"]
    ],
    [
      ["to stop, stopped", "parar"]
    ],
    [
      ["to save, saved", "salvar, economizar, poupar"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["sink", "pia"],
      ["salt", "sal"],
      ["salt shaker", "saleiro"],
      ["pepper", "pimenta"],
      ["pepper shaker", "pimenteiro"],
      ["light bulb", "lâmpada"],
      ["lamp", "abajur"],
      ["candle", "vela"],
      ["movie theater", "cinema"],
      ["half", "meio, metade"]
    ],
    [
      ["bell", "sino"],
      ["doorbell", "campainha"],
      ["sunglasses", "óculos de sol"],
      ["place", "lugar"],
      ["online", "conectado"],
      ["offline", "desconectado"],
      ["monitor", "monitor"],
      ["slim monitor", "monitor de tela fina"],
      ["mouse", "mouse"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["half a dollar", "meio dólar"]
    ],
    [
      ["pizza place", "pizzaria"]
    ],
    [
      ["to go jogging", "fazer 'cooper'"]
    ],
    [
      ["leftovers", "sobras"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["This is my passport.", "Este é meu passaporte."],
      ["This is your ring.", "Este é seu anel."],
      ["This is his camera.", "Esta é sua câmera."],
      ["This is her purse.", "Esta é sua bolsa."],
      ["This is our dog.", "Este é nosso cachorro."],
      ["These are their magazines.", "Estas são suas revistas."],

      ["",""],[""," "],

      ["She stopped eating red meat.", "Ela parou de comer carne vermelha."],
      ["She stopped working to study only.", "Ela parou de trabalhar para somente estudar."]
    ],
    [
      ["This passport is mine.", "Este passaporte é meu."],
      ["This ring is yours.", "Este anel é seu."],
      ["This camera is his.", "Esta câmera é dele."],
      ["This purse is hers.", "Esta bolsa é dela."],
      ["This dog is ours.", "Este cachorro é nosso."],
      ["These magazines are theirs.", "Estas revistas são deles."],
            ["",""],[""," "]

    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["We ran in the rain.",""],
      ["Did you run yesterday morning?",""],
      ["They didn't run to the classroom.",""],
      ["Who runs his business?",""]
    ],
    [
      ["The doctor saved his life.",""],
      ["He didn't save his money.",""],
      ["Did you save a seat for me?",""],
      ["Didn't you save the leftovers?",""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["She didn't stop working.",""],
      ["He didn't stop it to work.",""],
      ["Did you stop running every day?",""],
      ["Didn't she stop thinking about it?",""]
    ],
    [
      ["It's only half a dollar.",""],
      ["How long does it take?",""],
      ["It will take half an hour.",""],
      ["She went jogging this morning.",""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["These are my sunglasses.",""],
      ["This is her wallet.",""],
      ["This is your DVD.",""],
      ["Those are their books.",""],
      ["This is his briefcase.",""],
      ["These are our shoes.",""]
    ],
    [
      ["These sunglasses are mine.",""],
      ["This wallet is hers.",""],
      ["That DVD is yours.",""],
      ["Those books are theirs.",""],
      ["This briefcase is his.",""],
      ["These shoes are ours.",""]
    ]
  ]
},
{
  "title": "Phrases - Card",
  "columns": [
    [
      ["Who's online now?",""],
      ["Jane is online.",""]
    ],
    [
      ["Did you save your text?",""],
      ["I will save it now.",""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to run, ran", "correr, administrar"]
    ],
    [
      ["to stop, stopped", "parar"]
    ],
    [
      ["to save, saved", "salvar, economizar, poupar"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["sink", "pia"],
      ["salt", "sal"],
      ["salt shaker", "saleiro"],
      ["pepper", "pimenta"],
      ["pepper shaker", "pimenteiro"],
      ["light bulb", "lâmpada"],
      ["lamp", "abajur"],
      ["candle", "vela"],
      ["movie theater", "cinema"],
      ["half", "meio, metade"]
    ],
    [
      ["bell", "sino"],
      ["doorbell", "campainha"],
      ["sunglasses", "óculos de sol"],
      ["place", "lugar"],
      ["online", "conectado"],
      ["offline", "desconectado"],
      ["monitor", "monitor"],
      ["slim monitor", "monitor de tela fina"],
      ["mouse", "mouse"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["half a dollar", "meio dólar"]
    ],
    [
      ["pizza place", "pizzaria"]
    ],
    [
      ["to go jogging", "fazer 'cooper'"]
    ],
    [
      ["leftovers", "sobras"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["This is my passport.", "Este é meu passaporte."],
      ["This is your ring.", "Este é seu anel."],
      ["This is his camera.", "Esta é sua câmera."],
      ["This is her purse.", "Esta é sua bolsa."],
      ["This is our dog.", "Este é nosso cachorro."],
      ["These are their magazines.", "Estas são suas revistas."],

      ["",""],[""," "],

      ["She stopped eating red meat.", "Ela parou de comer carne vermelha."],
      ["She stopped working to study only.", "Ela parou de trabalhar para somente estudar."]
    ],
    [
      ["This passport is mine.", "Este passaporte é meu."],
      ["This ring is yours.", "Este anel é seu."],
      ["This camera is his.", "Esta câmera é dele."],
      ["This purse is hers.", "Esta bolsa é dela."],
      ["This dog is ours.", "Este cachorro é nosso."],
      ["These magazines are theirs.", "Estas revistas são deles."],
            ["",""],[""," "]

    ]
  ]
},

];
