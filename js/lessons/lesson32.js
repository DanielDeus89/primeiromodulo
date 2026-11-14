const lessonTitle = "Lesson 32";
const currentVideoId = "EeMOgR3kd2o";

const timeRanges = [
  { start: 10, end: 167 }, //0
  { start: 167 + 10, end: 488 }, //0
  { start: 488 + 10, end: 754 }, //Conversation
  { start: 754 + 10, end: 894 }, //Conversation
  { start: 894 + 10, end: 1032 }, //Fixacão
  { start: 1032 + 10, end: 1390 }, //Passe para o Negativo
  { start: 1390 + 10, end: 2244 }, //Fixacão
  { start: 2244 + 10, end: 2530  }, //Passe para o Afirmativo
  { start: 2528 + 10, end: 3330 }, //Fixacão
  { start: 3329 + 10, end: 3382 } //Passe para o Interrogativo
];

const lessonCards = [

{
  "title": "Input 32",
  "columns": [
    [
      ["I want.", "Eu quero."],
      ["I work.", "Eu trabalho."],
      ["I study.", "Eu estudo."],
      ["I play.", "Eu brinco, jogo, toco."]
    ],
    [
      ["She wants.", "Ela quer."],
      ["She works.", "Ela trabalha."],
      ["She studies.", "Ela estuda."],
      ["She plays.", "Ela brinca, joga, toca."]
    ]
  ]
},
{
  "title": "Input 32",
  "columns": [
    [
      ["I work only in the morning.", "Eu trabalho somente de manhã."],
      ["I play with my nephew.", "Eu brinco com meu sobrinho."],
      ["I need to work the day after tomorrow.", "Eu preciso trabalhar depois de amanhã."],
      ["I don't want to play this game.", "Eu não quero jogar este jogo."],
      ["I don't need to study history.", "Eu não preciso estudar história."]
    ],
    [
      ["He studies only in the afternoon.", "Ele estuda somente à tarde."],
      ["She plays with my niece.", "Ela brinca com minha sobrinha."],
      ["He needs to study math.", "Ele precisa estudar matemática."],
      ["She doesn't need to study at night.", "Ela não precisa estudar à noite."],
      ["He doesn't need to work today.", "Ele não precisa trabalhar hoje."]
    ]
  ]
},

{
  "title": "Input 32",
  "columns": [
    [
      ["Do you work?", "Você trabalha?"],
      ["Does he play baseball?", "Ele joga beisebol?"],
      ["Does she study geography?", "Ela estuda geografia?"]
    ],
    [
      ["Where do you work?", "Onde você trabalha?"],
      ["Where does he play golf?", "Onde ele joga golfe?"],
      ["Where does she study English?", "Onde ela estuda inglês?"]
    ],
    [
      ["When do you work?", "Quando você trabalha?"],
      ["When does he play hockey?", "Quando ele joga hóquei?"],
      ["When does she study Japanese?", "Quando ela estuda japonês?"]
    ]
  ]
},
{
  "title": "Input 32",
  "columns": [
    [
      ["What do you want to play?", "O que você quer jogar?"],
      ["When do you want to study?", "Quando você quer estudar?"],
    ],
    [
      ["What does he need to study?", "O que ele precisa estudar?"],
      ["Where does he want to eat?", "Onde ele quer comer?"]
    ]
  ]
},

{
  "title": "Input 32",
  "columns": [
    [
      ["Don't you study in the morning?", "Você não estuda de manhã?"],
      ["Don't you want to talk now?", "Você não quer conversar agora?"]
    ],
    [
      ["Doesn't he play soccer?", "Ele não joga futebol?"],
      ["Doesn't she play an instrument?", "Ela não toca um instrumento?"]
    ]
  ]
},


{
  "title": "Verbs",
  "columns": [
    [
      ["to want", "querer"],
      ["to work", "trabalhar"]
    ],
    [
      ["to study", "estudar"],
      ["to play", "brincar, jogar, tocar"]
    ]
  ]
},

{
  "title": "Vocabulary",
  "columns": [
    [
      ["son", "filho"],
      ["daughter", "filha"],
      ["children", "crianças, filhos"],
      ["sibling", "irmão, irmã"],
      ["uncle", "tio"],
      ["aunt", "tia"],
      ["nephew", "sobrinho"],
      ["niece", "sobrinha"],
      ["boy", "menino"],
      ["girl", "menina"],
      ["donut", "rosquinha"],
      ["egg", "ovo"]
    ],
    [
      ["bread", "pão"],
      ["cheese", "queijo"],
      ["ham", "presunto"],
      ["slice", "fatia"],
      ["of", "de"],
      ["cup", "xícara"],
      ["mug", "caneca"],
      ["glass", "copo"],
      ["bowl", "tigela"],
      ["a", "um, uma"],
      ["an", "um, uma"],
      ["apple", "maçã"]
    ],
    [
      ["orange", "laranja"],
      ["but", "mas"],
      ["tomorrow", "amanhã"],
      ["week", "semana"],
      ["what", "o que, qual"],
      ["where", "onde, aonde"],
      ["when", "quando"],
      ["yes", "sim"],
      ["no", "não"],
      ["math", "matemática"],
      ["geography", "geografia"]
    ],
    [
      ["history", "história"],
      ["science", "ciências"],
      ["hockey", "hóquei"],
      ["golf", "golfe"],
      ["baseball", "beisebol"],
      ["soccer", "futebol"],
      ["game", "jogo"],
      ["instrument", "instrumento"],
      ["piano", "piano"],
      ["guitar", "violão"],
      ["keyboard", "teclado"]
    ]
  ]
},

{
  "title": "Expressions",
  "columns": [
    [
      ["good morning", "bom dia"],
      ["good afternoon", "boa tarde"],
      ["good evening", "boa noite"],
      ["good night", "boa noite"],
      ["sorry", "desculpe"],
      ["excuse me", "desculpe, com licença, não entendi"]
    ],
    [
      ["hi", "oi"],
      ["hello", "olá"],
      ["bye-bye", "tchau"],
      ["goodbye", "tchau"],
      ["the day after tomorrow", "depois de amanhã"]
    ]
  ]
},

{
  "title": "Grammar",
  "columns": [
    [
      ["How are you?", "Como vai você?"],
      ["I'm fine, thanks.", "Estou bem, obrigado."],
      ["I'm not doing very well.", "Não estou muito bem."],
      ["I'm ok.", "Estou bem."],
      ["What do you want?", "O que você quer?"],
      ["Where does he work?", "Onde ele trabalha?"],
      ["When does she play?", "Quando ela brinca?"],
      ["Don't you work?", "Você não trabalha?"],
      ["Doesn't he study?", "Ele não estuda?"]
    ],
    [
      ["a cup", "uma xícara"],
      ["a donut", "uma rosquinha"],
      ["a glass", "um copo"],
      ["a boy", "um menino"],
      ["a class", "uma aula"],
      ["an egg", "um ovo"],
      ["an apple", "uma maçã"],
      ["an instrument", "um instrumento"],
      ["an orange", "uma laranja"]
    ]
  ]
},


{
  title: "Listening: Answer the questions:",
  type: "listening",
  segments: [
    { text: " ", start: 3346, end: 3353 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: " ", start: 3353, end: 3360 }, //https://youtu.be/yeAbAUL7BWs?t=242
    { text: " ", start: 3360, end: 3368 }, //https://youtu.be/yeAbAUL7BWs?t=249
    { text: " ", start: 3368, end: 3375 }, // https://youtu.be/yeAbAUL7BWs?t=237
    { text: " ", start: 3375, end: 3382 } //https://youtu.be/yeAbAUL7BWs?t=241 
  ]
},
];


