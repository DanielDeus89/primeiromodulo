const lessonTitle = "Lesson 43";
const currentVideoId = "wz_6xmgeBn8";

const timeRanges = [
  { start: 12, end: 130 },
  { start: 130 + 10, end: 280 },
  { start: 280 + 10, end: 421 },
  { start: 421 + 10, end: 569 }, //We liked the game.
  { start: 569 + 10, end: 723 }, //I didn't like that.
  { start: 723 + 10, end: 868 },//Did you go downtown?
  { start: 868 + 10, end: 1009 },//Didn't she go?
  { start: 1009 + 10, end: 1257 }, //Verbs
  { start: 1257 + 10, end: 1937 },//Vocabulary
  { start: 1937 + 10, end: 2153 },//Expressions
  { start: 2153 + 10, end: 2694 },//Grammar
  { start: 2694 + 10, end: 2743 },
];

const lessonCards = [
{
  "title": "Input 43",
  "columns": [
    [
      ["I take.", "Eu levo."],
       ["I go.", "Eu vou."],
            ["I talk.", "Eu converso."],
            ["I like.", "Eu gosto."],
       ["I know.", "Eu conheço, sei."]
    ],
    [
      ["I took.", "Eu levei."],
      ["I went.", "Eu fui."],
      ["I talked.", "Eu conversei."],
      ["I liked.", "Eu gostei."],
      ["I knew.", "Eu conheci, sabia."]

    ]
  ]
},
{
  "title": "Input 43",
  "columns": [
    [
      ["I went downtown.", "Eu fui ao centro da cidade."],
      ["I didn't go home.", "Eu não fui para casa."],
      ["Did you go to school?", "Você foi à escola?"]
    ],
    [
      ["I talked to Mary.", "Eu conversei com Mary."],
      ["I didn't talk to David.", "Eu não conversei com David."],
      ["Did you talk to Sally?", "Você conversou com Sally?"]
    ]
  ]
},
{
  "title": "Input 43",
  "columns": [
    [
      ["I knew it.", "Eu sabia."],
      ["I didn't know this.", "Eu não sabia disso."],
      ["Did you know that?", "Você sabia daquilo?"]
    ],
    [
      ["I took the car.", "Eu levei o carro."],
      ["I didn't take the books.", "Eu não levei os livros."],
      ["Did you take the kids?", "Você levou as crianças?"]
    ]
  ]
},
{
  "title": "Input 43",
  "columns": [
    [
      ["We liked the game.", "Nós gostamos do jogo."],
      ["I didn't like the movie.", "Eu não gostei do filme."],
      ["Did you like the show?", "Você gostou do show?"]
    ],
    [
      ["They liked the class.", "Eles gostaram da aula."],
      ["We went by car.", "Nós fomos de carro."],
      ["She took the bus.", "Ela tomou o ônibus."]
    ]
  ]
},
{
  "title": "Input 43",
  "columns": [
    [
      ["I didn't like that.", "Eu não gostei daquilo."],
      ["She didn't talk to Anne.", "Ela não conversou com a Anne."],
      ["He didn't go there.", "Ele não foi lá."]
    ],
    [
      ["We didn't know about it.", "Nós não sabíamos sobre isso."],
      ["It didn't start yet.", "Ainda não começou."],
      ["They didn't take the kids.", "Eles não levaram as crianças."]
    ]
  ]
},
{
  "title": "Input 43",
  "columns": [
    [
      ["Did you go downtown?", "Você foi ao centro?"],
      ["Did she like the book?", "Ela gostou do livro?"],
      ["Did they go on Saturday?", "Eles foram no sábado?"]
    ],
    [
      ["Did he talk to you?", "Ele conversou com você?"],
      ["Did you know that?", "Você sabia daquilo?"],
      ["Did they take the kids?", "Eles levaram as crianças?"]
    ]
  ]
},
{
  "title": "Input 43",
  "columns": [
    [
      ["Didn't she go?", "Ela não foi?"],
      ["Didn't they take you home?", "Eles não levaram você para casa?"],
      ["Didn't you talk to Kevin?", "Você não falou com Kevin?"]
    ],
    [
      ["Didn't you know Rachel?", "Você não conhecia Rachel?"],
      ["Didn't he like the course?", "Ele não gostou do curso?"],
      ["Didn't Mike take you?", "O Mike não te levou?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to take", "levar"],
      ["to like", "gostar"],
      ["to go", "ir"],
      ["to know", "conhecer, saber"],
      ["to talk", "conversar"]
    ],
    [
      ["took", "levou"],
      ["liked", "gostou"],
      ["went", "foi"],
      ["knew", "conheceu, soube"],
      ["talked", "conversou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["food", "comida"],
      ["rice", "arroz"],
      ["beans", "feijão"],
      ["salad", "salada"],
      ["French fries", "batatas fritas"],
      ["potato", "batata"],
      ["pasta", "massa"],
      ["steak", "bife"]
    ],
    [
      ["baked", "assado"],
      ["grilled", "grelhado"],
      ["cooked", "cozido"],
      ["dessert", "sobremesa"],
      ["sausage", "salsicha"],
      ["roll", "pãozinho"],
      ["oatmeal", "aveia"],
      ["sweetener", "adoçante"]
    ],
    [
      ["birthday", "aniversário"],
      ["pineapple", "abacaxi"],
      ["grape", "uva"],
      ["pear", "pera"],
      ["strawberry", "morango"],
      ["cake", "bolo"],
      ["pie", "torta"],
      ["piece", "pedaço"]
    ],
    [
      ["all", "todo"],
      ["ice", "gelo"],
      ["movie", "filme"],
      ["last", "último"],
      ["yesterday", "ontem"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["a little", "um pouco, pouco"],
      ["a lot", "muito"],
      ["a lot of", "muito, muitos"]
    ],
    [
      ["rare", "mal passado"],
      ["medium", "ao ponto"],
      ["well done", "bem passado"]
    ],
    [
      ["brown sugar", "açúcar mascavo"],
      ["chocolate chips", "gotas de chocolate"]
    ],
    [
      ["scrambled eggs", "ovos mexidos"],
      ["boiled eggs", "ovos cozidos"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["They talked a lot.", "Eles conversaram muito."],
      ["You knew that.", "Você sabia disso."],
      ["We went to class.", "Nós fomos para a aula."],
      ["I didn't like the game.", "Eu não gostei do jogo."],
      ["He didn't want to talk.", "Ele não quis conversar."],
      ["They didn't take the test.", "Eles não fizeram o teste."]
    ],
    [
      ["Did you go alone?", "Você foi sozinho?"],
      ["Did she talk to you?", "Ela conversou com você?"],
      ["Did they like the course?", "Eles gostaram do curso?"],
      ["Didn't you know that?", "Você não sabia disso?"],
      ["Didn't she take you?", "Ela não levou você?"],
      ["Didn't they go there yesterday?", "Eles não foram lá ontem?"]
    ],
    [
      ["Law school", "faculdade de Direito"],
      ["bank manager", "gerente de banco"],
      ["office manager", "gerente administrativo"],
      ["office assistant", "assistente administrativo"],
      ["hospital assistant", "assistente hospitalar"],
      ["soccer field", "campo de futebol"],
      ["baseball field", "campo de beisebol"],
      ["volleyball court", "quadra de vôlei"],
      ["tennis court", "quadra de tênis"]
    ]
  ]
},
  {
    title: "Answer the questions:",
    type: "listening",
    segments: [
      { text: "", start: 2706, end: 2714 },
      { text: "", start: 2714, end: 2722 },
      { text: "", start: 2722, end: 2729 },
      { text: "", start: 2729, end: 2736 },
      { text: "", start: 2736, end: 2743 }
    ]
  }  
];