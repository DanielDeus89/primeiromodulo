const lessonTitle = "Lesson 33";
const currentVideoId = "qIct-BD7vgo";

const timeRanges = [
  { start: 10, end: 169 },
  { start: 169 + 10, end: 481 },
  { start: 481 + 10, end: 657 },
  { start: 657 + 10, end: 849 },
  { start: 849 + 10, end: 948 },
  { start: 948 + 10, end: 1220 },
  { start: 1220 + 10, end: 1822 },
  { start: 1822 + 10, end: 2065 },
  { start: 2065 + 10, end: 2767 },
  { start: 2767 + 10, end: 2812 }
];

const lessonCards = [
{
  "title": "Input 33",
  "columns": [
    [
      ["I like.", "Eu gosto."],
      ["I go.", "Eu vou."],
      ["I help.", "Eu ajudo."],
      ["I sleep.", "Eu durmo."]
    ],
    [
      ["He likes.", "Ele gosta."],
      ["He goes.", "Ele vai."],
      ["He helps.", "Ele ajuda."],
      ["He sleeps.", "Ele dorme."]
    ]
  ]
},
{
  "title": "Input 33",
  "columns": [
    [
      ["I like baseball very much.", "Eu gosto muito de beisebol."],
      ["He likes games very much.", "Ele gosta muito de jogos."],
      ["She likes my roommate very much.", "Ela gosta muito do meu colega de quarto."],
      ["He likes my teacher very much.", "Ele gosta muito do meu professor."]
    ],
    [
      ["I like to work.", "Eu gosto de trabalhar."],
      ["He likes to study.", "Ele gosta de estudar."],
      ["She likes to help.", "Ela gosta de ajudar."],
      ["He likes to sleep.", "Ele gosta de dormir."]
    ],
    [
      ["I don't like to play baseball.", "Eu não gosto de jogar beisebol."],
      ["He doesn't like to play hockey.", "Ele não gosta de jogar hóquei."],
      ["She doesn't like to play the keyboard.", "Ela não gosta de tocar teclado."],
      ["He doesn't like to play the guitar.", "Ele não gosta de tocar violão."]
    ]
  ]
},
{
  "title": "Input 33",
  "columns": [
    [
      ["I want to go to the movies.", "Eu quero ir ao cinema."],
      ["She likes to go to the park.", "Ela gosta de ir ao parque."],
      ["He needs to go to the restroom.", "Ele precisa ir ao banheiro."],
      ["She wants to go to school.", "Ela quer ir à escola."],
      ["He needs to go home.", "Ele precisa ir para casa."],
      ["She likes to go downtown.", "Ela gosta de ir ao centro."]
    ]
  ]
},
{
  "title": "Input 33",
  "columns": [
    [
      ["I work at the convenience store.", "Eu trabalho na loja de conveniência."],
      ["She works at a store.", "Ela trabalha em um mercado."],
      ["He works at school.", "Ele trabalha na escola."],
      ["She works at the toy store.", "Ela trabalha na loja de brinquedos."],
      ["She works at home.", "Ela trabalha em casa."],
      ["He works downtown.", "Ele trabalha no centro."]
    ]
  ]
},
{
  "title": "Input 33",
  "columns": [
    [
      ["Doesn't he work on weekends?", "Ele não trabalha nos fins de semana?"],
      ["Doesn't she play in the playground?", "Ela não brinca no parquinho?"],
      ["Doesn't he help you?", "Ele não te ajuda?"]
    ]
  ]
},

{
  "title": "Verbs",
  "columns": [
    [
      ["to like", "gostar (de)"],
      ["to go", "ir"]
    ],
    [
      ["to help", "ajudar"],
      ["to sleep", "dormir"]
    ]
  ]
},

{
  "title": "Vocabulary",
  "columns": [
    [
      ["movies", "cinema"],
      ["school", "escola"],
      ["store", "mercado, loja"],
      ["house", "casa"],
      ["home", "lar"],
      ["church", "igreja"],
      ["downtown", "centro"],
      ["playground", "parquinho"]
    ],
    [
      ["restroom", "banheiro"],
      ["men's room", "banheiro masculino"],
      ["ladies' room", "banheiro feminino"],
      ["teacher", "professor"],
      ["manager", "gerente"],
      ["hot", "quente"],
      ["cold", "frio"],
      ["iced", "gelado"]
    ],
    [
      ["alone", "sozinho"],
      ["to", "para, a"],
      ["the", "o, a, os, as"],
      ["to the", "ao, à"],
      ["in", "em"],
      ["in the", "no, na"],
      ["convenience store", "loja de conveniência"],
      ["roommate", "colega de quarto"]
    ],
    [
      ["at", "em"],
      ["or", "ou"]
    ]
  ]
},

{
  "title": "Expressions",
  "columns": [
    [
      ["very much", "muito"],
      ["with me", "comigo"],
      ["weekend", "fim de semana"],
      ["What about you?", "E você?"],
      ["see you later", "até logo"],
      ["see you tomorrow", "até amanhã"]
    ],
    [
      ["see you", "até"],
      ["so long", "até logo"]
    ]
  ]
},

{
  "title": "Grammar",
  "columns": [
    [
      ["I like to go to the movies.", "Gosto de ir ao cinema."],
      ["He needs to go to the store.", "Ele precisa ir ao mercado."],
      ["I want to go to school.", "Quero ir à escola."],
      ["She likes to go to church.", "Ela gosta de ir à igreja."],
      ["I want to go home.", "Eu quero ir para casa."],
      ["He needs to go downtown.", "Ele precisa ir ao centro."],
      ["She drinks cold milk in the morning.", "Ela bebe leite frio de manhã."],
      ["He doesn't like hot chocolate.", "Ele não gosta de chocolate quente."],
      ["Does she like ice cream?", "Ela gosta de sorvete?"]
    ],
    [
      ["Doesn't he help you?", "Ele não ajuda você?"],
      ["Days of the week (on)", "Dias da semana (no)"],
      ["Sunday", "domingo"],
      ["Monday", "segunda-feira"],
      ["Tuesday", "terça-feira"],
      ["Wednesday", "quarta-feira"],
      ["Thursday", "quinta-feira"],
      ["Friday", "sexta-feira"],
      ["Saturday", "sábado"]
    ]
  ]
},


  {
    title: "Listening",
    type: "listening",
    segments: [
      { text: "", start: 2781, end: 2786 },
      { text: "", start: 2786, end: 2792 },
      { text: "", start: 2792, end: 2798 },
      { text: "", start: 2798, end: 2805 },
      { text: "", start: 2805, end: 2812 }
    ]
  }  
];