const lessonTitle = "Lesson 89";
const currentVideoId = "kOQDUkAq63g";

const timeRanges = [
  { start: 0, end: 21 }, //Verbs
  { start: 21, end: 106 }, //Vocabulary
  { start: 106, end: 144 }, //Expressions
  { start: 144, end: 249 }, //Grammar
  { start: 249, end: 315 }, //Frases 1
  { start: 315, end: 376 }, //Fr2
  { start: 376, end: 424 }, //Fr3
  { start: 424, end: 610 }, //Verbs
  { start: 610, end: 942 }, //vac
  { start: 942, end: 1084 }, //exp
  { start: 1084, end: 1453  }, //Gramm  
];

const lessonCards = [
{
  title: "Verbs",
  columns: [
    [["must", "dever, ter que"]],
    [["should", "deveria"]],
    [["could", "poderia"]],
    [["would", "condicional"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["tablecloth", "toalha de mesa"],
      ["mug", "caneca"],
      ["straw", "canudo"],
      ["toothpick", "palito de dente"],
      ["toothpick holder", "paliteiro"],
      ["coffee table", "mesa de centro"],
      ["spoon", "colher"],
      ["fork", "garfo"],
      ["knife", "faca"],
      ["silverware", "talheres, faqueiro"],
      ["can opener", "abridor de lata"],
      ["radio", "rádio"]
    ],
    [
      ["gas tank", "tanque de gasolina"],
      ["trunk", "porta-malas, baú"],
      ["brake", "freio"],
      ["accelerator", "acelerador"],
      ["clutch", "embreagem"],
      ["wheel", "roda"],
      ["steering wheel", "volante"],
      ["tire", "pneu"],
      ["spare tire", "estepe"],
      ["garbage can", "lata de lixo"],
      ["moment", "momento"]
    ]
  ]
},
{
  title: "Expressions",
  columns: [
    [
      ["to set the table", "arrumar a mesa"],
      ["It's over", "acabou"]
    ],
    [
      ["I'm sure", "tenho certeza"],
      ["to take a look", "dar uma olhada"]
    ],
    [
      ["wait a moment", "espere um momento"],
      ["It's up to you", "depende de você"]
    ],
    [
      ["over the internet", "pela internet"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He must stay here until noon.", "Ele deve ficar aqui até meio dia."],
      ["They must go there right now.", "Eles devem ir lá agora mesmo."],
      ["Must she travel this week?", "Ela deve viajar esta semana?"],
      ["Must we send it back?", "Nós devemos enviar isto de volta?"],
      ["Why should she stay there?", "Por que ela deveria ficar lá?"],
      ["We should visit him this weekend.", "Nós deveríamos visitá-lo este fim de semana."],
      ["You shouldn't go away anymore.", "Você não deveria mais ir embora."],
      ["Shouldn't we invite them?", "Nós não deveríamos convidá-los?"]
    ],
    [
      ["We could take the train.", "Nós poderíamos pegar o trem."],
      ["She couldn't go without us.", "Ela não poderia ir sem nós."],
      ["Could you wait a moment?", "Você poderia esperar um momento?"],
      ["Couldn't you come over now?", "Você não poderia vir aqui agora?"],
      ["Would you date over the internet?", "Você namoraria pela internet?"],
      ["I wouldn't travel by myself.", "Eu não viajaria sozinho."],
      ["Wouldn't you sing at the party?", "Você não cantaria na festa?"],
      ["We would wait for you here.", "Nós esperaríamos por você aqui."]
    ]
  ]
},
{
  "title": "Input 89",
  "columns": [
    [
      ["We all must clean the house.", ""],
      ["We must not make noise.", ""],
      ["Must we work overtime?", ""],
      ["Must you finish it tonight?", ""],
      ["Why must you do it?", ""]
    ],
    [
      ["Shouldn't she save some money?", ""],
      ["They should arrive any minute.", ""],
      ["He should be happy now.", ""],
      ["Should I buy new tires?", ""],
      ["When should we start?", ""]
    ]
  ]
},
{
  "title": "Input 89",
  "columns": [
    [
      ["She could help us.", ""],
      ["Couldn't you live by yourself?", ""],
      ["Could I have a spoon, please?", ""],
      ["What could I do for you?", ""],
      ["He couldn't be there now.", ""]
    ],
    [
      ["Would you fire him?", ""],
      ["Wouldn't you forget it?", ""],
      ["Where would you work at?", ""],
      ["I'd like to see it now.", ""],
      ["I wouldn't buy this coffee table.", ""]
    ]
  ]
},
{
  "title": "Input 89",
  "columns": [
    [
      ["Can you set the table, please?", ""],
      ["I'm sure you can do it.", ""],
      ["I bought it over the internet.", ""],
      ["Can you wait a moment, please?", ""]
    ],
    [
      ["Can I take a look at it?", ""],
      ["Would you set the table for dinner?", ""],
      ["It's up to you if you come or not.", ""],
      ["Class is over.", ""]
    ]
  ]
},
{
  title: "Verbs",
  columns: [
    [["must", "dever, ter que"]],
    [["should", "deveria"]],
    [["could", "poderia"]],
    [["would", "condicional"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["tablecloth", "toalha de mesa"],
      ["mug", "caneca"],
      ["straw", "canudo"],
      ["toothpick", "palito de dente"],
      ["toothpick holder", "paliteiro"],
      ["coffee table", "mesa de centro"],
      ["spoon", "colher"],
      ["fork", "garfo"],
      ["knife", "faca"],
      ["silverware", "talheres, faqueiro"],
      ["can opener", "abridor de lata"],
      ["radio", "rádio"]
    ],
    [
      ["gas tank", "tanque de gasolina"],
      ["trunk", "porta-malas, baú"],
      ["brake", "freio"],
      ["accelerator", "acelerador"],
      ["clutch", "embreagem"],
      ["wheel", "roda"],
      ["steering wheel", "volante"],
      ["tire", "pneu"],
      ["spare tire", "estepe"],
      ["garbage can", "lata de lixo"],
      ["moment", "momento"]
    ]
  ]
},
{
  title: "Expressions",
  columns: [
    [
      ["to set the table", "arrumar a mesa"],
      ["It's over", "acabou"]
    ],
    [
      ["I'm sure", "tenho certeza"],
      ["to take a look", "dar uma olhada"]
    ],
    [
      ["wait a moment", "espere um momento"],
      ["It's up to you", "depende de você"]
    ],
    [
      ["over the internet", "pela internet"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He must stay here until noon.", "Ele deve ficar aqui até meio dia."],
      ["They must go there right now.", "Eles devem ir lá agora mesmo."],
      ["Must she travel this week?", "Ela deve viajar esta semana?"],
      ["Must we send it back?", "Nós devemos enviar isto de volta?"],
      ["Why should she stay there?", "Por que ela deveria ficar lá?"],
      ["We should visit him this weekend.", "Nós deveríamos visitá-lo este fim de semana."],
      ["You shouldn't go away anymore.", "Você não deveria mais ir embora."],
      ["Shouldn't we invite them?", "Nós não deveríamos convidá-los?"]
    ],
    [
      ["We could take the train.", "Nós poderíamos pegar o trem."],
      ["She couldn't go without us.", "Ela não poderia ir sem nós."],
      ["Could you wait a moment?", "Você poderia esperar um momento?"],
      ["Couldn't you come over now?", "Você não poderia vir aqui agora?"],
      ["Would you date over the internet?", "Você namoraria pela internet?"],
      ["I wouldn't travel by myself.", "Eu não viajaria sozinho."],
      ["Wouldn't you sing at the party?", "Você não cantaria na festa?"],
      ["We would wait for you here.", "Nós esperaríamos por você aqui."]
    ]
  ]
}
];
