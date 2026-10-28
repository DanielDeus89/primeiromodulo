const lessonTitle = "Lesson 99";
const currentVideoId = "nSsrdFfuvng";

const timeRanges = [
  { start: 0, end: 31 }, //Verbs
  { start: 34, end: 87 }, //Vocabulary
  { start: 87, end: 122 }, //Expressions
  { start: 122, end: 186 }, //Grammar
  { start: 186, end: 237 }, //Frases 1
  { start: 237, end: 284 }, //Fr2
  { start: 284, end: 332 }, //Fr3
  { start: 332, end: 385 }, //Verbs
  { start: 395, end: 641 }, //vac
  { start: 641, end: 945 }, //exp
  { start: 945, end: 1088  }, //Gramm  
  { start: 1088, end: 1410  }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to listen", "escutar"],
      ["to hear", "ouvir"],
      ["to hope", "esperar"],
      ["to turn", "virar"]
    ],
    [
      ["listened", "escutou"],
      ["heard", "ouviu"],
      ["hoped", "esperou"],
      ["turned", "virou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["anxious", "ansioso"],
      ["anxiously", "ansiosamente"],
      ["semester", "semestre"],
      ["bilingual", "bilíngue"],
      ["trilingual", "trilíngue"],
      ["salary", "salário"],
      ["raise", "aumento"],
      ["hope", "esperança"]
    ],
    [
      ["hopefully", "esperançosamente"],
      ["easily", "facilmente"],
      ["difficulty", "dificuldade"],
      ["trouble", "problema"],
      ["free", "livre, grátis"],
      ["even", "par"],
      ["odd", "ímpar"],
      ["New Zealand", "Nova Zelândia"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to come back", "voltar"],
      ["to go back", "voltar a"],
      ["to turn out", "tornar-se"],
      ["to turn on", "ligar"],
      ["to turn off", "desligar"]
    ],
    [
      ["basically", "basicamente"],
      ["I hope not", "espero que não"],
      ["I hope so", "espero que sim"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["She couldn't find a dress anywhere.", "Ela não conseguia achar um vestido em lugar nenhum."],
      ["It must be somewhere near here.", "Deve ser em algum lugar perto daqui."],
      ["I see them nowhere.", "Eu não os vejo em lugar algum."],
      ["There are kids everywhere.", "Há crianças por toda parte."],
      ["He's able to speak three languages.", "Ele está apto a falar três línguas."],
      ["Isn't he able to do this job?", "Ele não está apto para fazer este serviço?"]
    ],
    [
      ["We could go now, couldn't we?", "Nós poderíamos ir agora, não poderíamos?"],
      ["She can do it easily, can't she?", "Ela pode fazê-lo facilmente, não pode?"],
      ["You should talk to him, shouldn't you?", "Você deveria conversar com ele, não deveria?"],
      ["They shouldn't listen to him, should they?", "Eles não deveriam ouvi-lo, deveriam?"]
    ]
  ]
},
{
  "title": "Input 99",
  "columns": [
    [
      ["She shouldn't listen to this song.", "Ela não deveria escutar esta música."],
      ["Aren't you listening to them?", "Você não está escutando eles?"],
      ["Hopefully, she'll listen to us.", "Esperançosamente, ela nos escutará."],
      ["Did you listen to what he said?", "Você escutou o que ele disse?"]
    ],
    [
      ["I hope it turns out ok.", "Espero que dê tudo certo."],
      ["I hope it doesn't rain tomorrow.", "Espero que não chova amanhã."],
      ["She hopes not to go back there again.", "Ela espera não voltar lá novamente."],
      ["We hope it really works out.", "Esperamos que realmente dê certo."]
    ]
  ]
},
{
  "title": "Input 99",
  "columns": [
    [
      ["We can't hear it very well.", "Nós não conseguimos ouvir isso muito bem."],
      ["Can you hear me now?", "Você consegue me ouvir agora?"],
      ["Where did you hear that?", "Onde você ouviu isso?"],
      ["We heard they are fine.", "Nós ouvimos que eles estão bem."]
    ],
    [
      ["You can turn right now.", "Você pode virar à direita agora."],
      ["Could you turn it on?", "Você poderia ligá-lo?"],
      ["Did you turn it off?", "Você desligou isso?"],
      ["Turn right after the light.", "Vire à direita depois do semáforo."]
    ]
  ]
},
{
  "title": "Input 99",
  "columns": [
    [
      ["When will he come back?", "Quando ele voltará?"],
      ["Would you like to go back to Asia?", "Você gostaria de voltar para a Ásia?"],
      ["It finally turned out to be right.", "No final, acabou dando certo."],
      ["Who turned the lights off?", "Quem apagou as luzes?"]
    ],
    [
      ["Are they able to do it?", "Eles são capazes de fazer isso?"],
      ["She isn't able to hear.", "Ela não consegue ouvir."],
      ["He's unable to drive now.", "Ele está impossibilitado de dirigir agora."],
      ["Weren't they able to come?", "Eles não conseguiram vir?"]
    ]
  ]
},
{
  "title": "Input 99",
  "columns": [
    [
      ["There are nice stores everywhere.", "Há lojas boas por toda parte."],
      ["There is nowhere to go now.", "Não há para onde ir agora."],
      ["They must be somewhere here.", "Eles devem estar em algum lugar por aqui."],
      ["If you speak English you can go anywhere.", "Se você fala inglês, pode ir a qualquer lugar."]
    ],
    [
      ["They can do it, can't they?", "Eles conseguem fazer isso, não conseguem?"],
      ["They could go anywhere, couldn't they?", "Eles poderiam ir a qualquer lugar, não poderiam?"],
      ["We should stay, shouldn't we?", "Nós deveríamos ficar, não deveríamos?"],
      ["It should be here, shouldn't it?", "Deveria estar aqui, não deveria?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to listen", "escutar"],
      ["to hear", "ouvir"],
      ["to hope", "esperar"],
      ["to turn", "virar"]
    ],
    [
      ["listened", "escutou"],
      ["heard", "ouviu"],
      ["hoped", "esperou"],
      ["turned", "virou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["anxious", "ansioso"],
      ["anxiously", "ansiosamente"],
      ["semester", "semestre"],
      ["bilingual", "bilíngue"],
      ["trilingual", "trilíngue"],
      ["salary", "salário"],
      ["raise", "aumento"],
      ["hope", "esperança"]
    ],
    [
      ["hopefully", "esperançosamente"],
      ["easily", "facilmente"],
      ["difficulty", "dificuldade"],
      ["trouble", "problema"],
      ["free", "livre, grátis"],
      ["even", "par"],
      ["odd", "ímpar"],
      ["New Zealand", "Nova Zelândia"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to come back", "voltar"],
      ["to go back", "voltar a"],
      ["to turn out", "tornar-se"],
      ["to turn on", "ligar"],
      ["to turn off", "desligar"]
    ],
    [
      ["basically", "basicamente"],
      ["I hope not", "espero que não"],
      ["I hope so", "espero que sim"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["She couldn't find a dress anywhere.", "Ela não conseguia achar um vestido em lugar nenhum."],
      ["It must be somewhere near here.", "Deve ser em algum lugar perto daqui."],
      ["I see them nowhere.", "Eu não os vejo em lugar algum."],
      ["There are kids everywhere.", "Há crianças por toda parte."],
      ["He's able to speak three languages.", "Ele está apto a falar três línguas."],
      ["Isn't he able to do this job?", "Ele não está apto para fazer este serviço?"]
    ],
    [
      ["We could go now, couldn't we?", "Nós poderíamos ir agora, não poderíamos?"],
      ["She can do it easily, can't she?", "Ela pode fazê-lo facilmente, não pode?"],
      ["You should talk to him, shouldn't you?", "Você deveria conversar com ele, não deveria?"],
      ["They shouldn't listen to him, should they?", "Eles não deveriam ouvi-lo, deveriam?"]
    ]
  ]
},
];
