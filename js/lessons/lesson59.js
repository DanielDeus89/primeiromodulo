const lessonTitle = "Lesson 59";
const currentVideoId = "7Yu8x7frC7I";

const timeRanges = [
  { start: 10, end: 106 },
  { start: 106 + 10, end: 273 },
  { start: 273 + 10, end: 512 },
  { start: 512 + 10, end: 636 }, //We liked the game. 330 571
  { start: 636 + 10, end: 761 }, //I didn't like that. 
  { start: 761 + 10, end: 836 },//Did you go downtown?
  { start: 836 + 10, end: 1040 },//Didn't she go?
  { start: 1040 + 10, end: 1592 }, //Verbs
  { start: 1592 + 10, end: 1791 }, //Verbs
  { start: 1791 + 10, end: 2119 }, //Verbs
  { start: 2119 + 10, end: 2164 } //Verbs
];

const lessonCards = [

{
  "title": "Input 59",
  "columns": [
    [
      ["I buy.", "Eu compro."],
      ["I sell.", "Eu vendo."],
      ["I need.", "Eu preciso."],
      ["I wash.", "Eu lavo."]
    ],
    [
      ["I bought.", "Eu comprei."],
      ["I sold.", "Eu vendi."],
      ["I needed.", "Eu precisei."],
      ["I washed.", "Eu lavei."]
    ]
  ]
},

{
  "title": "Input 59",
  "columns": [
    [
      ["He bought a new car last week.", "Ele comprou um carro novo semana passada."],
      ["Did they take the dog to the veterinarian?", "Eles levaram o cachorro ao veterinário?"],
      ["Did the kids wash their hands?", "As crianças lavaram suas mãos?"]
    ],
    [
      ["They sold their apartment.", "Eles venderam seu apartamento."],
      ["He learned it very fast.", "Ele aprendeu muito rápido."],
      ["Did she need any help?", "Ela precisou de alguma ajuda?"]
    ]
  ]
},

{
  "title": "Input 59",
  "columns": [
    [
      ["I always take my children with me.", "Eu sempre levo meus filhos comigo."],
      ["He takes the bus to the office.", "Ele pega o ônibus para o escritório."],
      ["She took notes during the course.", "Ela tomou notas durante o curso."],
      ["It didn't take too much time.", "Não levou muito tempo."],
      ["Did you take any medicine?", "Você tomou algum remédio?"]
    ],
    [
      ["I learn many things at Wizard.", "Eu aprendo muitas coisas na Wizard."],
      ["He learns languages by himself.", "Ele aprende idiomas sozinho."],
      ["She learned how to do it.", "Ela aprendeu a fazer isto."],
      ["I would like to learn how to drive.", "Eu gostaria de aprender a dirigir."],
      ["Did they learn this from you?", "Eles aprenderam isto com você?"]
    ]
  ]
},
{
  "title": "Input 59",
  "columns": [
    [
      ["She is talking to somebody.", "Ela está conversando com alguém."],
      ["They bought it for somebody.", "Eles compraram isto para alguém."]
     ],
    [
      ["He isn't talking to anybody.", "Ele não está falando com ninguém."],
      ["We didn't see anybody yesterday.", "Nós não vimos ninguém ontem."]
     ]
  ]
},
{
  "title": "Input 59",
  "columns": [
    [
       ["Is anybody coming to class next week?", "Alguém virá à aula semana que vem?"],
      ["Did anybody take him there?", "Alguém o levou lá?"]
     ],
    [
       ["Isn't anybody coming here?", "Ninguém virá aqui?"],
      ["Didn't they talk to anybody?", "Eles não conversaram com ninguém?"]
     ]
  ]
},{
  "title": "Input 59",
  "columns": [
    [
      ["She knows nobody in the city.", "Ela não conhece ninguém nesta cidade."]
    ],
    [
      ["Nobody likes to go there.", "Ninguém gosta de ir lá."]
    ]
  ]
},

{
  "title": "Verbs",
  "columns": [
    [
      ["to buy", "comprar"],
      ["to sell", "vender"],
      ["to need", "precisar"],
      ["to wash", "lavar"]
    ],
    [
      ["bought", "comprou"],
      ["sold", "vendeu"],
      ["needed", "precisou"],
      ["washed", "lavou"]
    ]
  ]
},

{
  "title": "Vocabulary",
  "columns": [
    [
      ["veterinarian", "veterinário"],
      ["station", "estação"],
      ["classroom", "sala de aula"],
      ["lesson", "aula, lição"],
      ["note", "anotação"],
      ["document", "documento"]

    ],    [
      ["dictionary", "dicionário"],
      ["information", "informação"],
      ["language", "idioma"],
      ["coat", "casaco"],
      ["uniform", "uniforme"],
      ["pajamas", "pijama"],
      ["T-shirt", "camiseta"]
    ],
    [
      ["cat", "gato"],
      ["dog", "cachorro"],
      ["horse", "cavalo"],
      ["fruit", "fruta"],
      ["candy", "doce"],
      ["pill", "comprimido"]
    ],    [
      ["medicine", "remédio"],
      ["gift", "presente"],
      ["shower", "chuveiro"],
      ["hand", "mão"],
      ["face", "rosto"],
      ["hair", "cabelo"]
    ]
  ]
},

{
  "title": "Expressions",
  "columns": [
    [
      ["a day", "por dia"],
      ["a week", "por semana"],
      ["a month", "por mês"],
      ["a year", "por ano"],
      ["once", "uma vez"],
      ["twice", "duas vezes"]
    ],
    [
      ["three times", "três vezes"],
      ["to take a shower", "tomar banho"],
      ["gift certificate", "vale-presente"],
      ["somebody", "alguém"],
      ["anybody", "alguém, ninguém"],
      ["nobody", "ninguém"]
    ]
  ]
},

{
  "title": "Grammar",
  "columns": [
    [
      ["I need to talk to somebody.", "Eu preciso falar com alguém."],
      ["They don't want to help anybody.", "Eles não querem ajudar ninguém."],
      ["Do they know anybody from Spain?", "Eles conhecem alguém da Espanha?"]
    ],
    [
      ["Why isn't anybody here?", "Por que ninguém está aqui?"],
      ["Nobody is home.", "Ninguém está em casa."]
    ]
  ]
},
{
    title: "Listening: Write a question:",
    type: "listening",
    segments: [
      { text: "", start: 2135, end: 2139 },
      { text: "", start: 2139, end: 2144 },
      { text: "", start: 2144, end: 2151 },
      { text: "", start: 2151, end: 2159 },
      { text: "", start: 2159, end: 2164 }
    ]
  }  
];