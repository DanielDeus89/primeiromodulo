const lessonTitle = "Lesson 95";
const currentVideoId = "BoqjTsKMm6U";

const timeRanges = [
  { start: 0, end: 35 }, //Verbs
  { start: 35, end: 89 }, //Vocabulary
  { start: 89, end: 127 }, //Expressions
  { start: 127, end: 235 }, //Grammar
  { start: 235, end: 285 }, //Frases 1
  { start: 285, end: 332 }, //Fr2
  { start: 332, end: 391 }, //Fr3
  { start: 391, end: 451 }, //Verbs
  { start: 451, end: 737 }, //vac
  { start: 737, end: 980 }, //exp
  { start: 980, end: 1183  }, //Gramm  
  { start: 1183, end: 99999  }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [["to happen, happened", "acontecer"]],
    [["to meet, met", "conhecer, encontrar"]],
    [["to become, became, become", "tornar-se"]],
    [["to correct, corrected", "corrigir"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["supervisor", "supervisor"],
      ["machine", "máquina"],
      ["statement", "declaração"],
      ["angry", "zangado"],
      ["funny", "engraçado"]
    ],
    [
      ["reaction", "reação"],
      ["round", "redondo"],
      ["square", "quadrado"],
      ["triangular", "triangular"],
      ["wood", "madeira"]
    ],
    [
      ["wool", "lã"],
      ["plastic", "plástico"],
      ["fabric", "tecido"],
      ["plan", "plano"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to be glad", "estar feliz"],
      ["to be pleased", "estar satisfeito"],
      ["to get angry", "ficar zangado"],
      ["to apply for", "inscrever-se"]
    ],
    [
      ["to go on strike", "entrar em greve"],
      ["by chance", "por acaso"],
      ["to print", "imprimir"],
      ["out of", "sem"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["She teaches English, doesn't she?", "Ela ensina inglês, não ensina?"],
      ["Yes, she does.", "Sim, ela ensina."],
      ["It snows here during winter, doesn't it?", "Neva aqui durante o inverno, não neva?"],
      ["Yes, it does.", "Sim, neva."],
      ["They don't watch movies in English, do they?", "Eles não assistem filmes em inglês, assistem?"],
      ["No, they don't.", "Não, eles não assistem."],
      ["We don't have to send it by tomorrow, do we?", "Nós não temos que enviar isto até amanhã, temos?"],
      ["No, we don't.", "Não, nós não temos."]
    ],
    [
      ["It didn't bother you, did it?", "Isto não te incomodou, incomodou?"],
      ["No, it didn't.", "Não, isto não incomodou."],
      ["They got very pleased, didn't they?", "Eles ficaram muito satisfeitos, não ficaram?"],
      ["Yes, they did.", "Sim, eles ficaram."],
      ["She had a good reaction, didn't she?", "Ela teve uma boa reação, não teve?"],
      ["Yes, she did.", "Sim, ela teve."],
      ["You didn't fill out the forms, did you?", "Você não preencheu os formulários, preencheu?"],
      ["Yes, I did.", "Sim, eu preenchi."]
    ]
  ]
},
{
  "title": "Input 95",
  "columns": [
    [
      ["I met him by chance.", ""],
      ["Would you like to meet him?", ""],
      ["When should we meet them?", ""],
      ["Didn't you meet her yet?", ""]
    ],
    [
      ["Who corrected it?", ""],
      ["She corrected our homework.", ""],
      ["Who's going to correct this?", ""],
      ["They corrected it already.", ""]
    ]
  ]
},
{
  "title": "Input 95",
  "columns": [
    [
      ["Something happened to him.", ""],
      ["What happened to him?", ""],
      ["This could happen again.", ""],
      ["Could this happen to her?", ""]
    ],
    [
      ["We became best friends.", ""],
      ["I'd like to become a member.", ""],
      ["They became our clients.", ""],
      ["He became rich.", ""]
    ]
  ]
},
{
  "title": "Input 95",
  "columns": [
    [
      ["He wants a new plan, doesn't he?", ""],
      ["We have an appointment, don't we?", ""],
      ["She sends you emails, doesn't she?", ""],
      ["They love traveling, don't they?", ""]
    ],
    [
      ["You met him, didn't you?", ""],
      ["She tried it again, didn't she?", ""],
      ["He saw her, didn't he?", ""],
      ["She printed it out, didn't she?", ""]
    ]
  ]
},
{
  "title": "Input 95",
  "columns": [
    [
      ["You don't have to leave at noon, do you?", ""],
      ["It doesn't work anymore, does it?", ""],
      ["He doesn't work as a supervisor, does he?", ""],
      ["They don't believe it, do they?", ""]
    ],
    [
      ["They didn't go on strike, did they?", ""],
      ["They didn't know about it, did they?", ""],
      ["He got very angry, didn't he?", ""],
      ["She applied for a new position, didn't she?", ""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [["to happen, happened", "acontecer"]],
    [["to meet, met", "conhecer, encontrar"]],
    [["to become, became, become", "tornar-se"]],
    [["to correct, corrected", "corrigir"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["supervisor", "supervisor"],
      ["machine", "máquina"],
      ["statement", "declaração"],
      ["angry", "zangado"],
      ["funny", "engraçado"]
    ],
    [
      ["reaction", "reação"],
      ["round", "redondo"],
      ["square", "quadrado"],
      ["triangular", "triangular"],
      ["wood", "madeira"]
    ],
    [
      ["wool", "lã"],
      ["plastic", "plástico"],
      ["fabric", "tecido"],
      ["plan", "plano"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to be glad", "estar feliz"],
      ["to be pleased", "estar satisfeito"],
      ["to get angry", "ficar zangado"],
      ["to apply for", "inscrever-se"]
    ],
    [
      ["to go on strike", "entrar em greve"],
      ["by chance", "por acaso"],
      ["to print", "imprimir"],
      ["out of", "sem"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["She teaches English, doesn't she?", "Ela ensina inglês, não ensina?"],
      ["Yes, she does.", "Sim, ela ensina."],
      ["It snows here during winter, doesn't it?", "Neva aqui durante o inverno, não neva?"],
      ["Yes, it does.", "Sim, neva."],
      ["They don't watch movies in English, do they?", "Eles não assistem filmes em inglês, assistem?"],
      ["No, they don't.", "Não, eles não assistem."],
      ["We don't have to send it by tomorrow, do we?", "Nós não temos que enviar isto até amanhã, temos?"],
      ["No, we don't.", "Não, nós não temos."]
    ],
    [
      ["It didn't bother you, did it?", "Isto não te incomodou, incomodou?"],
      ["No, it didn't.", "Não, isto não incomodou."],
      ["They got very pleased, didn't they?", "Eles ficaram muito satisfeitos, não ficaram?"],
      ["Yes, they did.", "Sim, eles ficaram."],
      ["She had a good reaction, didn't she?", "Ela teve uma boa reação, não teve?"],
      ["Yes, she did.", "Sim, ela teve."],
      ["You didn't fill out the forms, did you?", "Você não preencheu os formulários, preencheu?"],
      ["Yes, I did.", "Sim, eu preenchi."]
    ]
  ]
},
];
