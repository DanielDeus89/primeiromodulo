const lessonTitle = "Lesson 49";
const currentVideoId = "uGRcNpy-9pM";

const timeRanges = [
  { start: 10, end: 123 },
  { start: 123 + 10, end: 308 },
  { start: 307 + 10, end: 435 },
  { start: 434 + 10, end: 561 }, //We liked the game.
  { start: 567 + 10, end: 697 }, //I didn't like that.
  { start: 697 + 10, end: 758 },//Did you go downtown?
  { start: 757 + 10, end: 979 },//Didn't she go?
  { start: 979 + 10, end: 1504 }, //Verbs
  { start: 1504 + 10, end: 1681 },//Vocabulary
  { start: 1681 + 10, end: 2240 },//Expressions
  { start: 2239 + 10, end: 9999999 },//Grammar
  { start: 2313 + 10, end: 9999999 },
];

const lessonCards = [
{
  "title": "Input 49",
  "columns": [
    [
      ["I do.", "Eu faço."],
      ["I want.", "Eu quero."],
      ["I try.", "Eu tento."],
      ["I start.", "Eu começo."],
      ["I wait.", "Eu espero."]
    ],
    [
      ["I did.", "Eu fiz."],
      ["I wanted.", "Eu quis."],
      ["I tried.", "Eu tentei."],
      ["I started.", "Eu comecei."],
      ["I waited.", "Eu esperei."]
    ]
  ]
},
{
  "title": "Input 49",
  "columns": [
    [
      ["He wanted to talk to you.", "Ele queria conversar com você."],
      ["They didn't do their homework.", "Eles não fizeram suas lições de casa."],
      ["Did she wait for them?", "Ela esperou por eles?"],
      ["Didn't you try the cake?", "Você não experimentou o bolo?"]
    ],
    [
      ["I started in April.", "Eu comecei em abril."],
      ["He didn't want to go.", "Ele não queria ir."],
      ["Did she try that dress on?", "Ela provou aquele vestido?"],
      ["Didn't you do it?", "Você não fez isso?"]
    ]
  ]
},
{
  "title": "Input 49",
  "columns": [
    [
      ["I am a teacher.", "Eu sou uma professora."],
      ["He is hungry.", "Ele está com fome."],
      ["We are in a hurry.", "Estamos com pressa."]
    ],
    [
      ["My name is Mary.", "Meu nome é Mary."],
      ["My cousin is very nice.", "Minha prima é muito legal."],
      ["They are in a hurry to start the game.", "Eles estão com pressa para começar o jogo."]
    ]
  ]
},
{
  "title": "Input 49",
  "columns": [
    [
      ["I am not tired now.", "Eu não estou cansado agora."],
      ["He is not upset with his girlfriend.", "Ele não está chateado com sua namorada."],
      ["She is not at the bakery.", "Ela não está na padaria."]
    ],
    [
      ["I am not busy today.", "Eu não estou ocupado hoje."],
      ["We are not near the gas station.", "Nós não estamos perto do posto de gasolina."],
      ["They are not far from here.", "Eles não estão longe daqui."]
    ]
  ]
},
{
  "title": "Input 49",
  "columns": [
    [
      ["Are you busy?", "Você está ocupado?"],
      ["Are we late?", "Nós estamos atrasados?"],
      ["Are they rich?", "Eles são ricos?"]
    ],
    [
      ["Are you alone?", "Você está sozinho?"],
      ["Is he a dentist?", "Ele é um dentista?"],
      ["Is she happy?", "Ela está feliz?"]
    ]
  ]
},
{
  "title": "Input 49",
  "columns": [
    [
      ["It's early.", "É cedo."]
    ],
    [
      ["Is it late?", "É tarde?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to do", "fazer"],
      ["to start", "começar"],
      ["to want", "querer"],
      ["to wait", "esperar"],
      ["to try", "tentar"]
    ],
    [
      ["did", "fez"],
      ["started", "começou"],
      ["wanted", "quis"],
      ["waited", "esperou"],
      ["tried", "tentou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["dad", "pai"],
      ["mom", "mãe"],
      ["cousin", "primo, prima"],
      ["furniture", "mobília"],
      ["television", "televisão"],
      ["blinds", "persiana"],
      ["flower", "flor"],
      ["present", "presente"]

  
    ],   [
        ["sandwich", "sanduíche"],
      ["ice cream", "sorvete"],
      ["popsicle", "picolé"],
      ["clothes", "roupas"],
      ["skirt", "saia"],
      ["dress", "vestido"],
      ["blouse", "blusa"],
      ["pants", "calça"]
    ],
    [
      ["shirt", "camisa"],
      ["shoes", "sapatos"],
      ["toy", "brinquedo"],
      ["Christmas", "Natal"],
      ["almost", "quase"],
      ["everything", "tudo"],
      ["happy", "feliz"],
      ["sad", "triste"]

      
    ],    [
     ["bored", "entediado"],
      ["name", "nome"],
      ["nickname", "apelido"],
      ["last name", "sobrenome"],
      ["clock", "relógio"],
      ["watch", "relógio de pulso"],
      ["ticket", "passagem, bilhete"],
      ["nice", "bom, bonito, legal"]
    ],
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to be hungry", "estar com fome"],
      ["to be thirsty", "estar com sede"],
      ["to be in a hurry", "estar com pressa"],
      ["to be quiet", "estar quieto"]
    ],
    [
      ["to be online", "estar online"],
      ["to be cool", "ficar calmo"],
      ["sold out", "esgotado, vendido"],
      ["full name", "nome completo"]
    ]
  ]
},
{
  "title": "Grammar: to be - ser, estar",
  "columns": [
    [
      ["I am.", "Eu sou, estou."],
      ["You are.", "Você é, está."],
      ["He is.", "Ele é, está."],
      ["She is.", "Ela é, está."],
      ["It is.", "É, está. (neutro)"],
      ["We are.", "Nós somos, estamos."],
      ["You are.", "Vocês são, estão."],
      ["They are.", "Eles são, estão."]
    ],
    [
      ["I'm not.", "Eu não sou, não estou."],
      ["You're not.", "Você não é, não está."],
      ["He's not.", "Ele não é, não está."],
      ["She's not.", "Ela não é, não está."],
      ["It's not.", "Não é, não está. (neutro)"],
      ["We're not.", "Nós não somos, não estamos."],
      ["You're not.", "Vocês não são, não estão."],
      ["They're not.", "Eles não são, não estão."]
    ],
    [
      ["Am I?", "Eu sou, estou?"],
      ["Are you?", "Você é, está?"],
      ["Is he?", "Ele é, está?"],
      ["Is she?", "Ela é, está?"],
      ["Is it?", "É, está?"],
      ["Are we?", "Nós somos, estamos?"],
      ["Are you?", "Vocês são, estão?"],
      ["Are they?", "Eles são, estão?"]
    ]
  ]
},
  {
    title: "Listening: Answer the Questions",
    type: "listening",
    segments: [
      { text: "", start: 2256, end: 2263 },
      { text: "", start: 2263, end: 2266 },
      { text: "", start: 2266, end: 2273 },
      { text: "", start: 2273, end: 2280 },
      { text: "", start: 2280, end: 2280 }
    ]
  }  
];