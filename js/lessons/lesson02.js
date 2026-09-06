const lessonTitle = "Lesson 02";
const currentVideoId = "RINF6CDh1_0";

const timeRanges = [
  { start: 11, end: 246 }, //0
  { start: 256, end: 418 }, //1
  { start: 428, end: 665 }, //2
  { start: 675, end: 765 }, //3
  { start: 775, end: 900 }, //Verbs
  { start: 910, end: 1472 }, //Vocabulary
  { start: 1482, end: 1605 }, //Expressions
  { start: 1615, end: 2125 },  //Grammar
  { start: 2135, end: 99999 },  //Listening
];

const lessonCards = [
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I speak.", "Eu falo."],
      ["You speak.", "Você fala."],
      ["I speak English.", "Eu falo inglês."],
      ["You speak Spanish.", "Você fala espanhol."],
      ["I speak Portuguese.", "Eu falo português."],
      ["You speak French.", "Você fala francês."]
    ],
    [
      ["I study.", "Eu estudo."],
      ["You study.", "Você estuda."],
      ["I study English.", "Eu estudo inglês."],
      ["You study Spanish.", "Você estuda espanhol."],
      ["I study Portuguese.", "Eu estudo português."],
      ["You study French.", "Você estuda francês."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I speak with my friend.", "Eu falo com meu amigo."],
      ["I speak with my brother.", "Eu falo com meu irmão."],
      ["You speak with your father.", "Você fala com seu pai."]
    ],
    [
      ["I study with my sister.", "Eu estudo com minha irmã."],
      ["I study with my friend.", "Eu estudo com meu amigo."],
      ["You study with your mother.", "Você estuda com sua mãe."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I speak English with my son.", "Eu falo inglês com meu filho."],
      ["I speak Portuguese with my daughter.", "Eu falo português com minha filha."],
      ["You speak French with your child.", "Você fala francês com seu filho."],
      ["You speak English with your daughter.", "Você fala inglês com sua filha."]
    ],
    [
      ["I study Spanish with my sister.", "Eu estudo espanhol com minha irmã."],
      ["I study French with my children.", "Eu estudo francês com meus filhos."],
      ["You study Portuguese with your father.", "Você estuda português com seu pai."],
      ["You study English with your mother.", "Você estuda inglês com sua mãe."]
    ]
  ]
},
{
  "title": "Practice Sentences",
  "columns": [
    [
      ["I don't speak French.", "Eu não falo francês."],
      ["I don't study with my sister.", "Eu não estudo com minha irmã."],
      ["I don't speak Spanish with my brother.", "Eu não falo espanhol com meu irmão."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to speak", "falar"]
    ],
    [
      ["to study", "estudar"]
    ]
  ]
},
 {
  "title": "Vocabulary",
  "columns": [
    [
      ["father", "pai"],
      ["mother", "mãe"],
      ["brother", "irmão"],
      ["sister", "irmã"],
      ["child", "criança"],
      ["daughter", "filha"]     
    ],    
    [
      ["son", "filho"],
      ["children", "crianças, filhos"],
      ["friend", "amigo, amiga"],
      ["my", "meu, minha"],
      ["your", "seu, sua"]
    ],
    [
      ["with", "com"],
      ["Portuguese", "português"],
      ["English", "inglês"],
      ["French", "francês"],
      ["Spanish", "espanhol"]
    ],
      [
    ["of", "de"],
      ["a", "um, uma"],
      ["cup", "xícara"],
      ["glass", "copo"],
      ["now", "agora"],
      ["today", "hoje"]
    ]
  ]
},
  {
  "title": "Expressions",
  "columns": [
    [
      ["good morning", "bom dia"],
      ["good afternoon", "boa tarde"]
    ],
    [
      ["good evening", "boa noite (chegada)"],
      ["good night", "boa noite (saída)"]
    ]
  ]
},
 {
  "title": "Grammar",
  "columns": [
    [
      ["I drink.", "Eu bebo."],
      ["I don't drink.", "Eu não bebo."],
      ["I eat.", "Eu como."],
      ["I don't eat.", "Eu não como."]
    ],
    [
      ["I study.", "Eu estudo."],
      ["I don't study.", "Eu não estudo."],
      ["I speak.", "Eu falo."],
      ["I don't speak.", "Eu não falo."]
    ],
    [
      ["I speak with you.", "Eu falo com você."],
      ["I don't speak with you.", "Eu não falo com você."],
      ["I drink a glass of milk.", "Eu bebo um copo de leite."],
      ["I don't drink a cup of coffee.", "Eu não bebo uma xícara de café."]
    ]
  ]
},
 {
  "title": "Listening",
  "type": "listening",
  "segments": [
    {
      "text": "1. I don't speak Portuguese with my mother.",
      "start": 2137,
      "end": 2144
    },
    {
      "text": "2. I study French with my friends.",
      "start": 2144,
      "end": 2150
    },
    {
      "text": "3. I don't speak Spanish with my father.",
      "start": 2150,
      "end": 2156
    },
    {
      "text": "4. I don't drink coffee and milk in the morning.",
      "start": 2156,
      "end": 2163
    },
    {
      "text": "5. I don't eat cheese and I don't drink milk.",
      "start": 2163,
      "end": 2173
    }
  ]
}

  
];

const lessonCards = [


  // ====================================================
  // CARD 01
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "I cook.",
          "Eu cozinho."
        ],

        [
          "She cooks.",
          "Ela cozinha."
        ],

        [
          "I sometimes cook.",
          "Eu às vezes cozinho."
        ]

      ],


      [

        [
          "I visit.",
          "Eu visito."
        ],

        [
          "He visits.",
          "Ele visita."
        ],

        [
          "I visit Jane every week.",
          "Eu visito a Jane toda semana."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 02
  //
  // INÍCIO NO PDC:
  // Do they like to cook?
  // When do you visit your friends?
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "Do they like to cook?",
          "Eles gostam de cozinhar?"
        ],

        [
          "They like to cook.",
          "Eles gostam de cozinhar."
        ],

        [
          "We don't like to cook.",
          "Nós não gostamos de cozinhar."
        ]

      ],


      [

        [
          "When do you visit your friends?",
          "Quando você visita seus amigos?"
        ],

        [
          "I visit my friends on weekends.",
          "Eu visito meus amigos nos fins de semana."
        ],

        [
          "I visit my friends every day.",
          "Eu visito meus amigos todos os dias."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 03
  //
  // INÍCIO NO PDC:
  // Do you know how to cook?
  // When do you visit your relatives?
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "Do you know how to cook?",
          "Você sabe cozinhar?"
        ],

        [
          "I know how to cook.",
          "Eu sei cozinhar."
        ],

        [
          "We don't know how to cook.",
          "Nós não sabemos cozinhar."
        ]

      ],


      [

        [
          "When do you visit your relatives?",
          "Quando você visita seus parentes?"
        ],

        [
          "I visit my relatives on Christmas.",
          "Eu visito meus parentes no Natal."
        ],

        [
          "I visit my relatives on Easter.",
          "Eu visito meus parentes na Páscoa."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 04
  //
  // INÍCIO NO PDC:
  // She cooks very well.
  // She doesn't play soccer.
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "She cooks very well.",
          "Ela cozinha muito bem."
        ],

        [
          "He writes very well.",
          "Ele escreve muito bem."
        ],

        [
          "She speaks very well.",
          "Ela fala muito bem."
        ]

      ],


      [

        [
          "She doesn't play soccer.",
          "Ela não joga futebol."
        ],

        [
          "He doesn't live here.",
          "Ele não mora aqui."
        ],

        [
          "She doesn't work.",
          "Ela não trabalha."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 05
  //
  // INÍCIO NO PDC:
  // Does he read every day?
  // Does she cook on weekends?
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "Does he read every day?",
          "Ele lê todos os dias?"
        ],

        [
          "Does she help you?",
          "Ela ajuda você?"
        ]

      ],


      [

        [
          "Does she cook on weekends?",
          "Ela cozinha nos fins de semana?"
        ],

        [
          "Does he know this?",
          "Ele sabe isto?"
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 06
  //
  // INÍCIO NO PDC:
  // I work a lot.
  // We have a lot of books.
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "I work a lot.",
          "Eu trabalho muito."
        ]

      ],


      [

        [
          "We have a lot of books.",
          "Nós temos muitos livros."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 07
  // VERBS
  // ====================================================

  {

    title: "Verbs",

    columns: [

      [

        [
          "to cook",
          "cozinhar"
        ]

      ],


      [

        [
          "to visit",
          "visitar"
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 08
  // VOCABULARY
  // ====================================================

  {

    title: "Vocabulary",

    columns: [

      [

        [
          "man",
          "homem"
        ],

        [
          "woman",
          "mulher"
        ],

        [
          "uncle",
          "tio"
        ],

        [
          "aunt",
          "tia"
        ],

        [
          "test",
          "teste, prova"
        ],

        [
          "job",
          "emprego, serviço"
        ],

        [
          "secretary",
          "secretária"
        ]

      ],


      [

        [
          "cook",
          "cozinheiro"
        ],

        [
          "drugstore",
          "farmácia"
        ],

        [
          "post office",
          "correio"
        ],

        [
          "gas station",
          "posto de gasolina"
        ],

        [
          "state",
          "estado"
        ],

        [
          "country",
          "país, interior"
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 09
  // EXPRESSIONS
  // ====================================================

  {

    title: "Expressions",

    columns: [

      [

        [
          "a lot",
          "muito, bastante"
        ]

      ],


      [

        [
          "a lot of",
          "muito, muitos"
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 10
  // GRAMMAR
  // ====================================================

  {

    title: "Grammar",

    columns: [

      [

        [
          "She knows how to cook.",
          "Ela sabe cozinhar."
        ],

        [
          "They know how to speak English.",
          "Eles sabem falar inglês."
        ],

        [
          "He doesn't know how to play soccer.",
          "Ele não sabe jogar futebol."
        ],

        [
          "We don't know how to play chess.",
          "Nós não sabemos jogar xadrez."
        ]

      ],


      [

        [
          "Do you cook for me?",
          "Você cozinha para mim?"
        ],

        [
          "Does he cook for you?",
          "Ele cozinha para você?"
        ],

        [
          "I study a lot.",
          "Eu estudo muito."
        ],

        [
          "I have a lot of friends.",
          "Eu tenho muitos amigos."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 11
  // LISTENING
  // ====================================================

  {

    title: "Listening",

    type: "listening",

    segments: [

      {

        text:
          "1. That old man likes to cook a lot.",

        start: 2673,

        end: 2678

      },


      {

        text:
          "2. The secretary has a lot of books at home.",

        start: 2678,

        end: 2684

      },


      {

        text:
          "3. Does that boy study Spanish here?",

        start: 2684,

        end: 2690

      },


      {

        text:
          "4. I have to go to the post office now.",

        start: 2690,

        end: 2695

      },


      {

        text:
          "5. Does he know how to play the violin?",

        start: 2695,

        end: 2703

      }

    ]

  }

];



// ======================================================
// ======================================================
//
// PAINEL DO PROFESSOR
//
// ESTE CONTEÚDO NÃO SERÁ MOSTRADO
// NA TELA PRINCIPAL DA AULA.
//
// professor.html irá utilizar este objeto.
//
// ======================================================
// ======================================================

const teacherPractice = {


  // ====================================================
  // VERBS
  //
  // EXERCÍCIO ORAL DO PROFESSOR
  // ====================================================

  verbs: [

    "Eu cozinho / Nós",

    "Eu visito / Eles",

    "Eu venho / Ele",

    "Ele cozinha",

    "Ela visita",

    "Eu não cozinho / visito",

    "Ela não cozinha / visita",

    "Eles não jogam / Nós / Ela",

    "Você cozinha? / visita",

    "Ele cozinha? / Ele",

    "Eles começam? / vocês",

    "Ele quer ficar / estudar / comer",

    "Eles não entendem / jogam / sabem",

    "Vocês têm que falar? / ficar / cozinhar",

    "Nós precisamos trabalhar / estudar"

  ],



  // ====================================================
  // VOCABULARY
  //
  // FRASES PARA O PROFESSOR TREINAR
  // COM O ALUNO
  // ====================================================

  vocabulary: [

    "Eu visito meus pais no natal / na páscoa / nas férias",

    "Eu gosto de cozinhar / não / Ela",

    "Você sabe cozinhar? / ler / escrever",

    "Ele não mora aqui / lá / no interior",

    "Eu quero falar com aquele homem / mulher / criança",

    "Eu preciso visitar meus parentes no próximo fim de semana / primos / avós",

    "Eu tenho que trabalhar com meu tio no escritório / minha tia / a secretária",

    "Eu quero falar com aquela secretária / meu tio / tia",

    "Nós precisamos estudar para o teste / quero / tenho",

    "Ele precisa de um emprego de manhã / à tarde / à noite",

    "Quero falar com o gerente agora / amanhã de manhã",

    "Nós abrimos a farmácia às 7h / 9:30h / 7h45",

    "Eles moram no Estado de Nova Iorque / Ohio / Alabama",

    "Vocês gostam de morar neste país? / trabalhar / estudar",

    "Ele trabalha na farmácia / no posto de gasolina / no correio"

  ],



  // ====================================================
  // EXPRESSIONS
  // ====================================================

  expressions: [

    "Eu gosto muito dos meus pais / avós / parentes",

    "Eu gosto de ler muitos livros / revistas / jornais",

    "Ela estuda muito / trabalha / lê",

    "Tenho muitas provas esta semana / Ele / Nós",

    "Nós temos muitos vizinhos / parentes / amigos",

    "Ele tem muitos amigos? / primos / parentes"

  ],



  // ====================================================
  // GRAMMAR
  // ====================================================

  grammar: [

    "Eu gosto de visitar meus parentes em Miami / Los Angeles / São Francisco",

    "Ele cozinha muito bem / todos os dias / nos finais de semana",

    "Eu sei jogar futebol / vôlei / xadrez",

    "Ele sabe tocar violão muito bem / violino / piano",

    "Eu conheço seu irmão muito bem / tio / primo",

    "Ela fecha a janela à noite / porta / loja",

    "O gato gosta de comer peixe / carne / frango",

    "Ela ajuda as crianças na escola / em casa / A secretária",

    "Minha mãe sabe cozinhar muito bem / tia / avó",

    "Eu tenho um bom emprego na loja / no correio / no posto de gasolina",

    "Como você está hoje? / Estou muito bem, obrigado / Não estou muito bem",

    "Nós temos muitos amigos nos EUA / França / neste país",

    "Eu moro na cidade de Boston / São Paulo / Rio de Janeiro",

    "Do you cook for your family?",

    "Você cozinha para sua família? / filhos / marido",

    "Eu quero cozinhar para meus pais / filhos / amigos"

  ],



  // ====================================================
  // LISTENING
  //
  // PODEMOS EXIBIR TAMBÉM NO PAINEL
  // DO PROFESSOR PARA ELE SABER
  // O QUE VEM NO FINAL DA AULA.
  // ====================================================

  listening: [

    "That old man likes to cook a lot.",

    "The secretary has a lot of books at home.",

    "Does that boy study Spanish here?",

    "I have to go to the post office now.",

    "Does he know how to play the violin?"

  ]

};