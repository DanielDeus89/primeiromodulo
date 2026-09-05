// ======================================================
// LESSON 01
// ======================================================

const lessonTitle = "Lesson 01";

const currentVideoId = "MThQbrCO0kQ";



// ======================================================
// INTERVALOS DO VÍDEO POR CARD
// ======================================================

const timeRanges = [

  { start: 11, end: 202 },

  { start: 205, end: 364 },

  { start: 374, end: 567 },

  { start: 582, end: 681 },

  { start: 690, end: 1167 },

  { start: 1175, end: 1371 },

  { start: 1380, end: 1614 },

  { start: 1614, end: 99999 }

];



// ======================================================
// CONTEÚDO DA TELA PRINCIPAL
// CONTEÚDO QUE O ALUNO VÊ
// ======================================================

const lessonCards = [


  // ====================================================
  // CARD 01
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        ["I drink.", "Eu bebo."],

        ["You drink.", "Você bebe."],

        ["I drink water.", "Eu bebo água."],

        ["You drink juice.", "Você bebe suco."],

        ["I drink coffee.", "Eu bebo café."],

        ["You drink milk.", "Você bebe leite."]

      ],


      [

        ["I eat.", "Eu como."],

        ["You eat.", "Você come."],

        ["I eat bread.", "Eu como pão."],

        ["You eat cheese.", "Você come queijo."],

        ["I eat fish.", "Eu como peixe."],

        ["You eat meat.", "Você come carne."]

      ]

    ]

  },



  // ====================================================
  // CARD 02
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "I drink coffee and milk.",
          "Eu bebo café e leite."
        ],

        [
          "I drink water and juice.",
          "Eu bebo água e suco."
        ],

        [
          "I drink tea and soda.",
          "Eu bebo chá e refrigerante."
        ]

      ],


      [

        [
          "I eat bread and ham.",
          "Eu como pão e presunto."
        ],

        [
          "I eat bread and cheese.",
          "Eu como pão e queijo."
        ],

        [
          "I eat fish and meat.",
          "Eu como peixe e carne."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 03
  // ====================================================

  {

    title: "Practice Sentences",

    columns: [

      [

        [
          "I eat bread and I drink milk.",
          "Eu como pão e bebo leite."
        ],

        [
          "I eat cheese and I drink tea.",
          "Eu como queijo e bebo chá."
        ],

        [
          "I eat fish and I drink soda.",
          "Eu como peixe e bebo refrigerante."
        ]

      ],


      [

        [
          "I eat cheese and you eat ham.",
          "Eu como queijo e você come presunto."
        ],

        [
          "I drink milk and you drink coffee.",
          "Eu bebo leite e você bebe café."
        ],

        [
          "I eat bread and you eat cheese.",
          "Eu como pão e você come queijo."
        ]

      ]

    ]

  },



  // ====================================================
  // CARD 04
  // VERBS
  // ====================================================

  {

    title: "Verbs",

    columns: [

      [

        ["to drink", "beber"]

      ],

      [

        ["to eat", "comer"]

      ]

    ]

  },



  // ====================================================
  // CARD 05
  // VOCABULARY
  // ====================================================

  {

    title: "Vocabulary",

    columns: [

      [

        ["coffee", "café"],

        ["tea", "chá"],

        ["milk", "leite"],

        ["juice", "suco"],

        ["water", "água"],

        ["soda", "refrigerante"],

        ["fish", "peixe"]

      ],


      [

        ["meat", "carne"],

        ["cheese", "queijo"],

        ["ham", "presunto"],

        ["bread", "pão"],

        ["and", "e"],

        ["I", "eu"],

        ["you", "você"]

      ]

    ]

  },



  // ====================================================
  // CARD 06
  // EXPRESSIONS
  // ====================================================

  {

    title: "Expressions",

    columns: [

      [

        ["thank you", "obrigado"],

        ["thanks", "obrigado"],

        ["please", "por favor"],

        ["hi", "oi"],

        ["hello", "olá"],

        ["goodbye", "tchau"]

      ]

    ]

  },



  // ====================================================
  // CARD 07
  // GRAMMAR
  // ====================================================

  {

    title: "Grammar",

    columns: [

      [

        ["I drink", "Eu bebo"],

        ["I eat", "Eu como"]

      ],


      [

        ["You drink", "Você bebe"],

        ["You eat", "Você come"]

      ]

    ]

  },



  // ====================================================
  // CARD 08
  // LISTENING
  // ====================================================

  {

    title: "Listening",

    type: "listening",

    segments: [

      {

        text:
          "1. I drink coffee and milk",

        start: 1620,

        end: 1625

      },


      {

        text:
          "2. You eat bread and cheese",

        start: 1625,

        end: 1631

      },


      {

        text:
          "3. You eat fish and you drink soda.",

        start: 1631,

        end: 1638

      },


      {

        text:
          "4. I drink juice and I eat bread and ham.",

        start: 1638,

        end: 1646

      },


      {

        text:
          "5. I eat bread and meat.",

        start: 1646,

        end: 1653

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

    "Beber",

    "I drink",

    "Eu bebo",

    "Você bebe",

    "Comer",

    "I eat",

    "Eu como",

    "Você come",

    "Beber",

    "Comer"

  ],



  // ====================================================
  // VOCABULARY
  //
  // FRASES PARA O PROFESSOR TREINAR
  // COM O ALUNO
  // ====================================================

  vocabulary: [

    "Eu bebo leite / café / suco",

    "Você bebe suco / refrigerante / água",

    "Eu como presunto / peixe / carne",

    "Você come carne / pão / queijo",

    "Eu bebo café e leite / água e chá / suco e refrigerante",

    "Você bebe água e leite / chá e café / suco e refrigerante",

    "Eu como pão e queijo / queijo e presunto / peixe e carne",

    "Você come presunto e queijo / carne e peixe / pão e presunto",

    "Eu como pão / carne / peixe",

    "Eu bebo suco / leite / café",

    "Eu bebo café e como pão / você",

    "Você come presunto / queijo / carne",

    "Eu bebo suco / leite / chá",

    "Eu como peixe / pão / carne",

    "Você bebe refrigerante / água / suco"

  ],



  // ====================================================
  // EXPRESSIONS
  // ====================================================

  expressions: [

    "Eu bebo água, obrigado / por favor / suco",

    "Por favor, eu como pão / presunto / carne",

    "Eu bebo suco / leite / café",

    "Eu bebo suco e como carne / peixe / presunto",

    "Eu bebo café e como pão e queijo, obrigado / por favor",

    "Oi / Olá / Obrigada"

  ],



  // ====================================================
  // GRAMMAR
  // ====================================================

  grammar: [

    "Beber / eu bebo / você bebe",

    "Comer / eu como / você come",

    "Eu bebo água / suco / leite / refrigerante",

    "Você bebe refrigerante / café / suco",

    "Eu como peixe e carne / pão e queijo / pão e presunto",

    "Você come pão e presunto / pão e queijo / peixe e carne",

    "Eu bebo suco e água / café e leite / refrigerante e chá",

    "Eu como pão / presunto / peixe",

    "Você come peixe / carne / queijo",

    "Obrigado / por favor / tchau"

  ],



  // ====================================================
  // LISTENING
  //
  // PODEMOS EXIBIR TAMBÉM NO PAINEL
  // DO PROFESSOR PARA ELE SABER
  // O QUE VEM NO FINAL DA AULA.
  // ====================================================

  listening: [

    "I drink coffee and milk.",

    "You eat bread and cheese.",

    "You eat fish and you drink soda.",

    "I drink juice and I eat bread and ham.",

    "I eat bread and meat."

  ]

};