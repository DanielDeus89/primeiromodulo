const lessonTitle = "Lesson 51";
const currentVideoId = "z4J_KjAswf8";

const timeRanges = [
  { start: 10, end: 106 },
  { start: 106, end: 287 },
  { start: 287, end: 470 },
  { start: 470, end: 543 }, //We liked the game.
  { start: 543, end: 623 }, //I didn't like that.
  { start: 629, end: 816 },//Did you go downtown?
  { start: 816, end: 1408 },//Didn't she go?
  { start: 1408, end: 1580 }, //Verbs
  { start: 1580, end: 2037 },//Vocabulary
  { start: 2037, end: 2070 }
];

const lessonCards = [
{
  "title": "Input 51",
  "columns": [
    [
      ["I finish.", "Eu termino."],
      ["I come.", "Eu venho."],
      ["I drink.", "Eu bebo."],
      ["I eat.", "Eu como."],
      ["I can.", "Eu posso."]
    ],
    [
      ["I finished.", "Eu terminei."],
      ["I came.", "Eu vim."],
      ["I drank.", "Eu bebi."],
      ["I ate.", "Eu comi."]
    ]
  ]
},
{
  "title": "Input 51",
  "columns": [
    [
      ["I ate bread for breakfast.", "Eu comi pão no café da manhã."],
      ["I didn't drink coffee for breakfast.", "Eu não tomei café no café da manhã."],
      ["Did you come together?", "Vocês vieram juntos?"],
      ["Didn't they come to the party?", "Eles não vieram para a festa?"]
    ],
    [
      ["I came to class early.", "Eu vim para a aula cedo."],
      ["I didn't finish it.", "Eu não terminei isto."],
      ["Did she eat her meal?", "Ela comeu sua refeição?"],
      ["Didn't he finish the test yet?", "Ele não terminou o teste ainda?"]
    ]
  ]
},
{
  "title": "Input 51",
  "columns": [
    [
      ["Are you a journalist?", "Você é um jornalista?"],
      ["He is a writer.", "Ele é um escritor."],
      ["Is she married?", "Ela é casada?"],
      ["He is not my boyfriend.", "Ele não é meu namorado."],
      ["Is it healthy?", "É saudável?"]
    ],
    [
      ["I did it by myself.", "Eu fiz isso sozinha."],
      ["Did you study by yourself?", "Você estudou sozinho?"],
      ["Did he go by himself?", "Ele foi sozinho?"],
      ["She didn't make the cake by herself.", "Ela não fez o bolo sozinha."],
      ["They learned it by themselves.", "Eles aprenderam sozinhos."]
    ]
  ]
},
{
  "title": "Input 51",
  "columns": [
    [
      ["I can go with you.", "Eu posso ir com você."],
      ["Can you help me?", "Você pode me ajudar?"]
    ],
    [
      ["What can I do for you?", "O que eu posso fazer por você?"],
      ["When can you go with me?", "Quando você pode ir comigo?"]
    ]
  ]
},
{
  "title": "Input 51",
  "columns": [
    [
      ["What time can you go downtown with me?", "A que horas você pode ir ao centro comigo?"],
      ["He can't talk now.", "Ele não pode falar agora."],
      ["When can we start?", "Quando nós podemos começar?"],
      ["Who can read this?", "Quem pode ler isto?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to finish", "terminar"],
      ["to eat", "comer"],
      ["to come", "vir"],
      ["can", "poder"],
      ["to drink", "beber"]
    ],
    [
      ["finished", "terminou"],
      ["ate", "comeu"],
      ["came", "veio"],
      ["drank", "bebeu"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["boyfriend", "namorado"],
      ["girlfriend", "namorada"],
      ["man", "homem"],
      ["woman", "mulher"],
      ["single", "solteiro"],
      ["married", "casado"],
      ["rich", "rico"],
      ["poor", "pobre"],
      ["meal", "refeição"],
      ["light", "leve, claro"],
      ["news", "notícia"]
    ],    
    [
      ["story", "história"],
      ["novel", "romance"],
      ["detective", "detetive"],
      ["journalist", "jornalista"],
      ["writer", "escritor"],
      ["executive", "executivo"],
      ["pretty", "bonita"],
      ["glad", "contente, alegre"],
      ["upset", "chateado"],
      ["busy", "ocupado"],
      ["tired", "cansado"]
    ],
    [
      ["wise", "sábio"],
      ["sick", "doente"],
      ["healthy", "saudável"],
      ["together", "juntos"],
      ["whole", "todo, inteiro"],
      ["couch", "sofá"],
      ["help", "ajuda"],
      ["problem", "problema"],
      ["check", "cheque"],
      ["checkbook", "talão de cheques"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["this time", "desta vez"],
      ["first time", "primeira vez"],
      ["part-time", "meio período"],
      ["full-time", "período integral"]
    ],
    [
      ["conference room", "sala de reuniões"],
      ["conference call", "conferência telefônica"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["Aren't you?", "Você não é, não está?"],
      ["Isn't he?", "Ele não é, não está?"],
      ["Isn't she?", "Ela não é, não está?"],
      ["Isn't it?", "Não é, não está?"],
      ["Aren't we?", "Nós não somos? Não estamos?"],
      ["Aren't you?", "Vocês não são? Não estão?"],
      ["Aren't they?", "Eles não são? Não estão?"],
      [" ", " "],

      ["I can speak German.", "Eu posso falar alemão."],
      ["I can't play any instrument.", "Eu não consigo tocar nenhum instrumento."],
      ["Can you come at seven?", "Você pode vir às sete?"]


    ],
    [
      ["by myself", "sozinho"],
      ["by yourself", "sozinho"],
      ["by himself", "sozinho"],
      ["by herself", "sozinha"],
      ["by itself", "sozinho"],
      ["by ourselves", "sozinhos"],
      ["by yourselves", "sozinhos"],
      ["by themselves", "sozinhos"]


    ]
  ]
},
  {
    title: "Listening: Answer the Questions",
    type: "listening",
    segments: [
      { text: "", start: 2043, end: 2046 },
      { text: "", start: 2046, end: 2052 },
      { text: "", start: 2052, end: 2057 },
      { text: "", start: 2057, end: 2062 },
      { text: "", start: 2062, end: 2070 }
    ]
  }  
];