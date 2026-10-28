const lessonTitle = "Lesson 103";
const currentVideoId = "AUdCVqzeuKU";

const timeRanges = [
  { start: 0, end: 30 }, //Verbs
  { start: 33, end: 77 }, //Vocabulary
  { start: 80, end: 104 }, //Expressions
  { start: 107, end: 144 }, //Grammar
  { start: 150, end: 172 }, //Frases 1
  { start: 172, end: 197 }, //Frases 1
  { start: 197, end: 223 }, //Fr2
  { start: 223, end: 245 }, //Fr2
  { start: 245, end: 271 }, //Fr3
  { start: 271, end: 299 }, //Fr3
  { start: 299, end: 326 }, //Verbs
  { start: 326, end: 351 }, //vac
  { start: 351, end: 592 }, //exp
  { start: 595, end: 868  }, //Gramm  
  { start: 873, end: 1004  }, //Gramm  
  { start: 1004, end: 1243  }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to say", "dizer"],
      ["to tell", "contar"],
      ["to notice", "perceber"],
      ["to feel", "sentir"]
    ],
    [
      ["said", "disse"],
      ["told", "contou"],
      ["noticed", "percebeu"],
      ["felt", "sentiu"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["overseas", "exterior"],
      ["abroad", "exterior"],
      ["probably", "provavelmente"],
      ["probability", "probabilidade"],
      ["excited", "empolgado"],
      ["nervous", "nervoso"],
      ["besides", "além do mais"]
    ],
    [
      ["grade", "nota"],
      ["voice", "voz"],
      ["upon", "em"],
      ["whenever", "a qualquer hora"],
      ["whoever", "seja quem for"],
      ["whatever", "qualquer coisa"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["instead of", "ao invés de"],
      ["on time", "na hora"],
      ["in time", "a tempo"]
    ],
    [
      ["my goodness", "minha nossa"],
      ["to back up", "afastar-se, apoiar"],
      ["to forward", "encaminhar"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He said he would help us.", "Ele disse que nos ajudaria."],
      ["She told me she would talk to you.", "Ela me contou que falaria com você."],
      ["They said they were coming today.", "Eles disseram que estavam vindo hoje."],
      ["He told me he loved her.", "Ele me contou que a amava."],
      ["She said she was excited about her wedding.", "Ela disse que estava empolgada por seu casamento."],
      ["I told you I was nervous.", "Eu te contei que estava nervosa."]
    ]
  ]
},
{
  "title": "Input 103",
  "columns": [
    [
      ["Actually, I didn't say that.", "Na verdade, eu não disse isso."],
      ["He only said good things about you.", "Ele só disse coisas boas sobre você."],
      ["She would never say that.", "Ela nunca diria isso."],
      ["What were they saying?", "O que eles estavam dizendo?"]
    ]
  ]
},
{
  "title": "Input 103",
  "columns": [
    [
      ["Didn't you notice anything different?", "Você não percebeu nada diferente?"],
      ["She noticed I was nervous.", "Ela percebeu que eu estava nervoso."],
      ["I didn't notice her new dress.", "Eu não percebi o vestido novo dela."],
      ["Did you notice what happened?", "Você percebeu o que aconteceu?"]
    ]
  ]
},

{
  "title": "Input 103",
  "columns": [
    [
      ["I told you it was going to rain.", "Eu te disse que ia chover."],
      ["Would you like to tell me anything?", "Você gostaria de me contar alguma coisa?"],
      ["Can you tell me how to get there?", "Você pode me dizer como chegar lá?"],
      ["She didn't tell us anything.", "Ela não nos contou nada."]
    ]
  ]
},{
  "title": "Input 103",
  "columns": [
    [
      ["Mary isn't feeling well.", "Mary não está se sentindo bem."],
      ["He's feeling better now.", "Ele está se sentindo melhor agora."],
      ["Are you feeling fine?", "Você está se sentindo bem?"],
      ["How was she feeling?", "Como ela estava se sentindo?"]
    ]
  ]
},
{
  "title": "Input 103",
  "columns": [
    [
      ["You must arrive on time.", "Você deve chegar na hora."],
      ["She traveled overseas instead.", "Ela viajou para o exterior em vez disso."],
      ["Can you back up a little, please?", "Você pode recuar um pouco, por favor?"],
      ["I'll back up right away.", "Eu vou recuar imediatamente."]
    ]
  ]
},
{
  "title": "Input 103",
  "columns": [
    [
      ["I woke up in time to go.", "Eu acordei a tempo de ir."],
      ["My goodness, they are not here yet.", "Minha nossa, eles ainda não estão aqui."],
      ["Did you forward it to me?", "Você encaminhou isso para mim?"],
      ["I'll forward it right now.", "Eu vou encaminhar isso agora mesmo."]
    ]
  ]
},
{
  "title": "Input 103",
  "columns": [
    [
      ["He said he was excited about it.", "Ele disse que estava empolgado com isso."],
      ["She said she called you.", "Ela disse que ligou para você."],
      ["They said they would arrive on time.", "Eles disseram que chegariam na hora."],
      ["She said it was right.", "Ela disse que estava certo."]
    ]
  ]
},{
  "title": "Input 103",
  "columns": [

    [
      ["She told me she wasn't very happy.", "Ela me contou que não estava muito feliz."],
      ["I told you they were here.", "Eu te disse que eles estavam aqui."],
      ["He told me to back up.", "Ele me disse para recuar."],
      ["I told them not to worry.", "Eu disse a eles para não se preocuparem."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to say", "dizer"],
      ["to tell", "contar"],
      ["to notice", "perceber"],
      ["to feel", "sentir"]
    ],
    [
      ["said", "disse"],
      ["told", "contou"],
      ["noticed", "percebeu"],
      ["felt", "sentiu"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["overseas", "exterior"],
      ["abroad", "exterior"],
      ["probably", "provavelmente"],
      ["probability", "probabilidade"],
      ["excited", "empolgado"],
      ["nervous", "nervoso"],
      ["besides", "além do mais"]
    ],
    [
      ["grade", "nota"],
      ["voice", "voz"],
      ["upon", "em"],
      ["whenever", "a qualquer hora"],
      ["whoever", "seja quem for"],
      ["whatever", "qualquer coisa"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["instead of", "ao invés de"],
      ["on time", "na hora"],
      ["in time", "a tempo"]
    ],
    [
      ["my goodness", "minha nossa"],
      ["to back up", "afastar-se, apoiar"],
      ["to forward", "encaminhar"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He said he would help us.", "Ele disse que nos ajudaria."],
      ["She told me she would talk to you.", "Ela me contou que falaria com você."],
      ["They said they were coming today.", "Eles disseram que estavam vindo hoje."],
      ["He told me he loved her.", "Ele me contou que a amava."],
      ["She said she was excited about her wedding.", "Ela disse que estava empolgada por seu casamento."],
      ["I told you I was nervous.", "Eu te contei que estava nervosa."]
    ]
  ]
},
];
