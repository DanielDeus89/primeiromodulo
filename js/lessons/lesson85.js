const lessonTitle = "Lesson 85";
const currentVideoId = "3c980kpIyr0";

const timeRanges = [
  { start: 0, end: 13 }, //Verbs
  { start: 13, end: 79 }, //Vocabulary
  { start: 79, end: 100 }, //exp 
  { start: 100, end: 152 }, //Grammar
  { start: 152, end: 228 }, //Frases 1
  { start: 228, end: 302 }, //Fr2
  { start: 302, end: 332 }, //Fr3
  { start: 332, end: 499 }, //Verbs
  { start: 499, end: 802 }, //vac
  { start: 802, end: 889 }, //exp
  { start: 889, end: 1157 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["must", "dever, ter que"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["bookcase", "estante"],
      ["shelf", "prateleira"],
      ["bench", "banco, assento"],
      ["stool", "banquinho"],
      ["teapot", "bule de chá"],
      ["apron", "avental"],
      ["saucer", "pires"],
      ["faucet", "torneira"],
      ["comfort", "conforto"],
      ["comfortable", "confortável"]
    ],
    [
      ["attic", "sótão"],
      ["roof", "telhado"],
      ["ceiling", "teto"],
      ["cellar", "porão, adega"],
      ["basement", "subsolo, porão"],
      ["star", "estrela"],
      ["sky", "céu"],
      ["heaven", "céu, paraíso"],
      ["rocket", "foguete"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["first floor", "primeiro andar"],
      ["ground floor", "térreo"]
    ],
    [
      ["it won't help", "não adiantará"],
      ["two story house", "sobrado"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["They must do it.", "Eles devem fazê-lo."],
      ["She must be right.", "Ela deve estar certa."]
    ],
    [
      ["It mustn't be comfortable.", "Isto não deve ser confortável."],
      ["She must not travel today.", "Ela não deve viajar hoje."]
    ],
    [
      ["Must we do that?", "Nós devemos fazer aquilo?"],
      ["Must we leave now?", "Nós devemos partir agora?"],
      ["Must we lock the car?", "Nós devemos trancar o carro?"],
      ["Must we forget it?", "Nós devemos esquecer isto?"]
    ]
  ]
},
{
  "title": "Phrases - Must / Mustn't",
  "columns": [
    [
      ["We must be there by 10 a.m.", "Nós devemos estar lá às 10 da manhã."],
      ["It must be good.", "Isto deve ser bom."],
      ["He must be here anytime now.", "Ele deve estar aqui a qualquer momento."],
      ["She must come soon.", "Ela deve vir em breve."],
      ["We must help her.", "Nós devemos ajudá-la."],
      ["They must be near here.", "Eles devem estar perto daqui."]
    ],
    [
      ["We must not think about it.", "Nós não devemos pensar sobre isso."],
      ["It must not be wrong.", "Isto não deve estar errado."],
      ["She must not drink and drive.", "Ela não deve beber e dirigir."],
      ["He must not exercise at night.", "Ele não deve se exercitar à noite."],
      ["We must not take this plane.", "Nós não devemos pegar este avião."],
      ["They must not take too much money.", "Eles não devem levar muito dinheiro."]
    ]
  ]
},
{
  "title": "Phrases - Must / Mustn't",
  "columns": [
    [
      ["Must it start now?", "Isso deve começar agora?"],
      ["Must it be ready?", "Isso deve estar pronto?"],
      ["Must he invite them?", "Ele deve convidá-los?"],
      ["Must she pay in cash?", "Ela deve pagar em dinheiro?"],
      ["Must they stay until she arrives?", "Eles devem ficar até ela chegar?"],
      ["Must we work this holiday?", "Nós devemos trabalhar neste feriado?"]
    ],
    [
      ["Must I be at the meeting?", "Eu devo estar na reunião?"],
      ["Must it be different?", "Isso deve ser diferente?"],
      ["Must she be here?", "Ela deve estar aqui?"],
      ["Must he pay for this?", "Ele deve pagar por isso?"],
      ["Must we make the speech?", "Nós devemos fazer o discurso?"],
      ["Must they start it now?", "Eles devem começar agora?"]
    ]
  ]
},
{
  "title": "Phrases - Must / Mustn't",
  "columns": [
    [
      ["Will this help?", "Isso vai ajudar?"],
      ["It won't help.", "Isso não vai ajudar."],
      ["It won't work.", "Isso não vai funcionar."]
    ],
    [
      ["They bought a two story house.", "Eles compraram um sobrado."],
      ["She lives in the basement.", "Ela mora no porão."],
      ["He lives on the first floor.", "Ele mora no primeiro andar."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["must", "dever, ter que"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["bookcase", "estante"],
      ["shelf", "prateleira"],
      ["bench", "banco, assento"],
      ["stool", "banquinho"],
      ["teapot", "bule de chá"],
      ["apron", "avental"],
      ["saucer", "pires"],
      ["faucet", "torneira"],
      ["comfort", "conforto"],
      ["comfortable", "confortável"]
    ],
    [
      ["attic", "sótão"],
      ["roof", "telhado"],
      ["ceiling", "teto"],
      ["cellar", "porão, adega"],
      ["basement", "subsolo, porão"],
      ["star", "estrela"],
      ["sky", "céu"],
      ["heaven", "céu, paraíso"],
      ["rocket", "foguete"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["first floor", "primeiro andar"],
      ["ground floor", "térreo"]
    ],
    [
      ["it won't help", "não adiantará"],
      ["two story house", "sobrado"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["They must do it.", "Eles devem fazê-lo."],
      ["She must be right.", "Ela deve estar certa."]
    ],
    [
      ["It mustn't be comfortable.", "Isto não deve ser confortável."],
      ["She must not travel today.", "Ela não deve viajar hoje."]
    ],
    [
      ["Must we do that?", "Nós devemos fazer aquilo?"],
      ["Must we leave now?", "Nós devemos partir agora?"],
      ["Must we lock the car?", "Nós devemos trancar o carro?"],
      ["Must we forget it?", "Nós devemos esquecer isto?"]
    ]
  ]
},
];
