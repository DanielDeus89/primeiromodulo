const lessonTitle = "Lesson 97";
const currentVideoId = "Tet0fXUbpXc";

const timeRanges = [
  { start: 0, end: 34 }, //Verbs
  { start: 34, end: 125 }, //Vocabulary
  { start: 125, end: 151 }, //Expressions
  { start: 151, end: 195 }, //Grammar
  { start: 195, end: 250 }, //Frases 1
  { start: 250, end: 299 }, //Fr2
  { start: 299, end: 352 }, //Fr3
  { start: 352, end: 403 }, //Verbs
  { start: 403, end: 667 }, //vac
  { start: 667, end: 1044 }, //exp
  { start: 1044, end: 1202  }, //Gramm  
  { start: 1202, end: 1454  }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to find", "encontrar"],
      ["to lose", "perder"],
      ["to wake up", "acordar"],
      ["to prepare", "preparar"]
    ],
    [
      ["found", "encontrou"],
      ["lost", "perdeu"],
      ["woke up", "acordou"],
      ["prepared", "preparou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["fight", "briga"],
      ["several", "vários"],
      ["couple", "casal"],
      ["soap opera", "novela"],
      ["upset", "chateado, zangado"],
      ["mad", "bravo, furioso"],
      ["pillow", "travesseiro"],
      ["pillowcase", "fronha"],
      ["sheet", "lençol"],
      ["blanket", "cobertor"],
      ["reservation", "reserva"],
      ["credit card", "cartão de crédito"]
    ],
    [
      ["first class", "primeira classe"],
      ["coach fare", "classe econômica"],
      ["British", "Britânico"],
      ["economy", "economia"],
      ["paw", "pata"],
      ["tail", "rabo"],
      ["feather", "pena"],
      ["skin", "pele"],
      ["fur", "pêlo"],
      ["furry", "peludo"],
      ["jaw", "mandíbula"],
      ["wild", "selvagem"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to find out", "descobrir"],
      ["to look for", "procurar por"],
      ["however", "entretanto"]
    ],
    [
      ["by the way", "a propósito"],
      ["each other", "um ao outro"],
      ["in the meantime", "enquanto isso"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["She is Chinese, isn't she?", "Ela é chinesa, não é?"],
      ["You aren't upset, are you?", "Você não está chateado, está?"],
      ["You were thinking about leaving, weren't you?", "Você estava pensando em partir, não estava?"],
      ["They weren't coming with us, were they?", "Eles não estavam vindo conosco, estavam?"],
      ["It wasn't very interesting, was it?", "Não era muito interessante, era?"],
      ["His birthday was last month, wasn't it?", "O aniversário dele foi no mês passado, não foi?"]
    ]
  ]
},
{
  "title": "Input 97",
  "columns": [
    [
      ["I can't find my credit card.", "Eu não consigo encontrar meu cartão de crédito."],
      ["Didn't they find a solution?", "Eles não encontraram uma solução?"],
      ["Did you find out what happened?", "Você descobriu o que aconteceu?"],
      ["She found it very difficult.", "Ela achou isso muito difícil."]
    ],
    [
      ["Could you wake me up at 6 a.m.?", "Você poderia me acordar às 6 h?"],
      ["She wakes up late on weekends.", "Ela acorda tarde nos fins de semana."],
      ["I woke up at 7 a.m. this morning.", "Eu acordei às 7 h hoje de manhã."],
      ["Can you wake us up early tomorrow?", "Você pode nos acordar cedo amanhã?"]
    ]
  ]
},
{
  "title": "Input 97",
  "columns": [
    [
      ["He lost his iPod yesterday.", "Ele perdeu o iPod dele ontem."],
      ["She can't lose her job now.", "Ela não pode perder o emprego dela agora."],
      ["Did they lose their reservation?", "Eles perderam a reserva deles?"],
      ["Didn't you lose your passport?", "Você não perdeu seu passaporte?"]
    ],
    [
      ["What did they prepare for us?", "O que eles prepararam para nós?"],
      ["She prepared a delicious meal.", "Ela preparou uma refeição deliciosa."],
      ["Are you going to prepare dinner for them?", "Você vai preparar o jantar para eles?"],
      ["Are they better prepared now?", "Eles estão mais preparados agora?"]
    ]
  ]
},
{
  "title": "Input 97",
  "columns": [
    [
      ["You are looking at him, aren't you?", "Você está olhando para ele, não está?"],
      ["It's a little wild, isn't it?", "É um pouco selvagem, não é?"],
      ["He's on the phone, isn't he?", "Ele está ao telefone, não está?"],
      ["They're glad to be here, aren't they?", "Eles estão felizes por estar aqui, não estão?"]
    ],
    [
      ["It was raining a lot, wasn't it?", "Estava chovendo muito, não estava?"],
      ["You were coming with us, weren't you?", "Você estava vindo conosco, não estava?"],
      ["She was lost, wasn't she?", "Ela estava perdida, não estava?"],
      ["They were traveling, weren't they?", "Eles estavam viajando, não estavam?"]
    ]
  ]
},
{
  "title": "Input 97",
  "columns": [
    [
      ["She isn't married, is she?", "Ela não é casada, é?"],
      ["He isn't single, is he?", "Ele não é solteiro, é?"],
      ["They aren't in love, are they?", "Eles não estão apaixonados, estão?"],
      ["He isn't answering the phone, is he?", "Ele não está atendendo o telefone, está?"]
    ],
    [
      ["They weren't home, were they?", "Eles não estavam em casa, estavam?"],
      ["He wasn't well, was he?", "Ele não estava bem, estava?"],
      ["It wasn't funny, was it?", "Não foi engraçado, foi?"],
      ["They weren't sure about it, were they?", "Eles não tinham certeza sobre isso, tinham?"]
    ]
  ]
},

{
  "title": "Verbs",
  "columns": [
    [
      ["to find", "encontrar"],
      ["to lose", "perder"],
      ["to wake up", "acordar"],
      ["to prepare", "preparar"]
    ],
    [
      ["found", "encontrou"],
      ["lost", "perdeu"],
      ["woke up", "acordou"],
      ["prepared", "preparou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["fight", "briga"],
      ["several", "vários"],
      ["couple", "casal"],
      ["soap opera", "novela"],
      ["upset", "chateado, zangado"],
      ["mad", "bravo, furioso"],
      ["pillow", "travesseiro"],
      ["pillowcase", "fronha"],
      ["sheet", "lençol"],
      ["blanket", "cobertor"],
      ["reservation", "reserva"],
      ["credit card", "cartão de crédito"]
    ],
    [
      ["first class", "primeira classe"],
      ["coach fare", "classe econômica"],
      ["British", "Britânico"],
      ["economy", "economia"],
      ["paw", "pata"],
      ["tail", "rabo"],
      ["feather", "pena"],
      ["skin", "pele"],
      ["fur", "pêlo"],
      ["furry", "peludo"],
      ["jaw", "mandíbula"],
      ["wild", "selvagem"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to find out", "descobrir"],
      ["to look for", "procurar por"],
      ["however", "entretanto"]
    ],
    [
      ["by the way", "a propósito"],
      ["each other", "um ao outro"],
      ["in the meantime", "enquanto isso"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["She is Chinese, isn't she?", "Ela é chinesa, não é?"],
      ["You aren't upset, are you?", "Você não está chateado, está?"],
      ["You were thinking about leaving, weren't you?", "Você estava pensando em partir, não estava?"],
      ["They weren't coming with us, were they?", "Eles não estavam vindo conosco, estavam?"],
      ["It wasn't very interesting, was it?", "Não era muito interessante, era?"],
      ["His birthday was last month, wasn't it?", "O aniversário dele foi no mês passado, não foi?"]
    ]
  ]
},
];
