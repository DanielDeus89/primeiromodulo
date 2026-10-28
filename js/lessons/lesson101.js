const lessonTitle = "Lesson 101";
const currentVideoId = "0nnEJq2mXlk";

const timeRanges = [
  { start: 0, end: 33 }, //Verbs
  { start: 36, end: 117 }, //Vocabulary
  { start: 120, end: 144 }, //Expressions
  { start: 146, end: 191 }, //Grammar
  { start: 195, end: 241 }, //Frases 1
  { start: 241, end: 290 }, //Fr2
  { start: 290, end: 315 }, //Fr3
  { start: 315, end: 378 }, //Verbs
  { start: 380, end: 630 }, //vac
  { start: 630, end: 933 }, //exp
  { start: 935, end: 1054  }, //Gramm  
  { start: 1058, end: 999999  }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to smile", "sorrir"],
      ["to laugh", "rir"],
      ["to worry", "preocupar-se"],
      ["to declare", "declarar"]
    ],
    [
      ["smiled", "sorriu"],
      ["laughed", "riu"],
      ["worried", "preocupou-se"],
      ["declared", "declarou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["president", "presidente"],
      ["governor", "governador"],
      ["mayor", "prefeito"],
      ["democrat", "democrata"],
      ["republican", "republicano"],
      ["politician", "político"],
      ["political", "político"],
      ["speech", "discurso"]
    ],   
    [
 
       ["campaign", "campanha"],
      ["party", "partido"],
      ["crowd", "multidão"],
      ["pride", "orgulho"],
      ["proud", "orgulhoso"],
      ["aggressive", "agressivo"],
      ["naughty", "levado"]
    ],
    [
      ["drunk", "bêbado"],
      ["the following", "o seguinte"],
      ["service", "serviço"],
      ["customs", "alfândega"],
      ["visa", "visto"],
      ["nut", "noz"],
      ["doubt", "dúvida"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["student visa", "visto de estudante"],
      ["to be proud of", "estar orgulhoso de"],
      ["in addition to", "além de"]
    ],
    [
      ["to land", "pousar"],
      ["to take off", "decolar"],
      ["to start with", "para começar"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["Let's go.", "Vamos."],
      ["Let's not go.", "Não vamos."],
      ["Let's do it.", "Vamos fazer."],
      ["Let's not do it.", "Não vamos fazer."],
      ["Shall we go?", "Vamos?"],
      ["Shall we dance?", "Vamos dançar?"],
      ["Shall we do it?", "Vamos fazer isto?"]
    ],
    [
      ["They called us before leaving.", "Eles nos ligaram antes de partir."],
      ["She emailed me after arriving home.", "Ela me enviou um email depois de chegar em casa."]
    ]
  ]
},
{
  "title": "Input 101",
  "columns": [
    [
      ["We laughed when we saw him.", "Nós rimos quando o vimos."],
      ["She smiled when she saw us.", "Ela sorriu quando nos viu."],
      ["Didn't you smile at him?", "Você não sorriu para ele?"],
      ["Some people don't know how to smile.", "Algumas pessoas não sabem como sorrir."]
    ],
    [
      ["You shouldn't worry about it.", "Você não deveria se preocupar com isso."],
      ["Are you worried about them?", "Você está preocupado com eles?"],
      ["She worries a lot about her future.", "Ela se preocupa muito com o futuro dela."],
      ["Was he worried about his bills?", "Ele estava preocupado com suas contas?"]
    ]
  ]
},
{
  "title": "Input 101",
  "columns": [
    [
      ["She laughs at anything.", "Ela ri de qualquer coisa."],
      ["We laughed a lot together.", "Nós rimos muito juntos."],
      ["We couldn't stop laughing.", "Nós não conseguíamos parar de rir."],
      ["They made us laugh.", "Eles nos fizeram rir."]
    ],
    [
      ["Didn't you have anything to declare?", "Você não tinha nada para declarar?"],
      ["What did the president declare?", "O que o presidente declarou?"],
      ["They declared everything at customs.", "Eles declararam tudo na alfândega."],
      ["She had nothing to declare.", "Ela não tinha nada para declarar."]
    ]
  ]
},
{
  "title": "Input 101",
  "columns": [
    [
      ["The plane should land anytime.", "O avião deve pousar a qualquer momento."],
      ["We took off at 9 o'clock sharp.", "Nós decolamos exatamente às 9 horas."]
    ],
    [
      ["Let's finish it now.", "Vamos terminar isso agora."],
      ["Let's not worry too much.", "Não vamos nos preocupar demais."]
    ]
  ]
},
{
  "title": "Input 101",
  "columns": [
    [
      ["Her parents are so proud of her.", "Os pais dela têm muito orgulho dela."],
      ["I'm proud of you.", "Tenho orgulho de você."],
      ["Didn't you get your student visa?", "Você não conseguiu seu visto de estudante?"],
      ["I'm always afraid of landing and taking off.", "Eu sempre tenho medo de pousar e decolar."],
      ["Didn't you study before taking the test?", "Você não estudou antes de fazer a prova?"]
    ],
    [
      ["When shall we go?", "Quando vamos?"],
      ["Where shall we dance?", "Onde vamos dançar?"],
      ["What shall we do?", "O que vamos fazer?"],
      ["Let's not start now.", "Não vamos começar agora."],
      ["She called me before traveling.", "Ela me ligou antes de viajar."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to smile", "sorrir"],
      ["to laugh", "rir"],
      ["to worry", "preocupar-se"],
      ["to declare", "declarar"]
    ],
    [
      ["smiled", "sorriu"],
      ["laughed", "riu"],
      ["worried", "preocupou-se"],
      ["declared", "declarou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["president", "presidente"],
      ["governor", "governador"],
      ["mayor", "prefeito"],
      ["democrat", "democrata"],
      ["republican", "republicano"],
      ["politician", "político"],
      ["political", "político"],
      ["speech", "discurso"]
    ],   
    [
 
       ["campaign", "campanha"],
      ["party", "partido"],
      ["crowd", "multidão"],
      ["pride", "orgulho"],
      ["proud", "orgulhoso"],
      ["aggressive", "agressivo"],
      ["naughty", "levado"]
    ],
    [
      ["drunk", "bêbado"],
      ["the following", "o seguinte"],
      ["service", "serviço"],
      ["customs", "alfândega"],
      ["visa", "visto"],
      ["nut", "noz"],
      ["doubt", "dúvida"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["student visa", "visto de estudante"],
      ["to be proud of", "estar orgulhoso de"],
      ["in addition to", "além de"]
    ],
    [
      ["to land", "pousar"],
      ["to take off", "decolar"],
      ["to start with", "para começar"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["Let's go.", "Vamos."],
      ["Let's not go.", "Não vamos."],
      ["Let's do it.", "Vamos fazer."],
      ["Let's not do it.", "Não vamos fazer."],
      ["Shall we go?", "Vamos?"],
      ["Shall we dance?", "Vamos dançar?"],
      ["Shall we do it?", "Vamos fazer isto?"]
    ],
    [
      ["They called us before leaving.", "Eles nos ligaram antes de partir."],
      ["She emailed me after arriving home.", "Ela me enviou um email depois de chegar em casa."]
    ]
  ]
},
];
