// ======================================================
// EXERCISE 01
// ======================================================

const exerciseTitle = "Exercise 01";

const exerciseLesson = "01";



// ======================================================
// CONFIGURAÇÃO
// ======================================================

const exerciseConfig = {

  lesson:
    "01",

  title:
    "Exercise 01",

  totalSections:
    4,

  allowRetry:
    true,

  showScore:
    true

};



// ======================================================
// EXERCÍCIOS
// ======================================================

const lessonExercises = [


  // ====================================================
  // BLOCO 01
  // COMPLETE
  // ====================================================

  {

    id:
      "complete",

    type:
      "complete",

    title:
      "Complete",

    instructions:
      "Complete as frases.",

    correctionMode:
      "mixed",

    questions: [


      // ==================================================
      // QUESTÃO 01
      // ==================================================

      {

        id:
          "complete-01",

        number:
          1,

        prompt:
          "I ______ coffee and milk.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "drink"

            ]

          }

        ]

      },



      // ==================================================
      // QUESTÃO 02
      // ==================================================

      {

        id:
          "complete-02",

        number:
          2,

        prompt:
          "I ______ fish. Thank you.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "eat"

            ]

          }

        ]

      },



      // ==================================================
      // QUESTÃO 03
      // ==================================================

      {

        id:
          "complete-03",

        number:
          3,

        prompt:
          "I drink ______, please.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "coffee",

              "tea",

              "milk",

              "juice",

              "water",

              "soda"

            ]

          }

        ],

        flexibleAnswer:
          true

      },



      // ==================================================
      // QUESTÃO 04
      // ==================================================

      {

        id:
          "complete-04",

        number:
          4,

        prompt:
          "I eat ______, please.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "fish",

              "meat",

              "cheese",

              "ham",

              "bread"

            ]

          }

        ],

        flexibleAnswer:
          true

      },



      // ==================================================
      // QUESTÃO 05
      // ==================================================

      {

        id:
          "complete-05",

        number:
          5,

        prompt:
          "I drink ______ and ______.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "coffee",

              "tea",

              "milk",

              "juice",

              "water",

              "soda"

            ]

          },


          {

            id:
              "field-2",

            acceptedAnswers: [

              "coffee",

              "tea",

              "milk",

              "juice",

              "water",

              "soda"

            ]

          }

        ],

        flexibleAnswer:
          true

      },



      // ==================================================
      // QUESTÃO 06
      // ==================================================

      {

        id:
          "complete-06",

        number:
          6,

        prompt:
          "I eat ______ and cheese.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "fish",

              "meat",

              "ham",

              "bread"

            ]

          }

        ],

        flexibleAnswer:
          true

      },



      // ==================================================
      // QUESTÃO 07
      // ==================================================

      {

        id:
          "complete-07",

        number:
          7,

        prompt:
          "Please, I ______ meat, thank you.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "eat"

            ]

          }

        ]

      },



      // ==================================================
      // QUESTÃO 08
      // ==================================================

      {

        id:
          "complete-08",

        number:
          8,

        prompt:
          "Please, I ______ ham, thanks.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "eat"

            ]

          }

        ]

      },



      // ==================================================
      // QUESTÃO 09
      // ==================================================

      {

        id:
          "complete-09",

        number:
          9,

        prompt:
          "______ eat ______.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "I",

              "You"

            ]

          },


          {

            id:
              "field-2",

            acceptedAnswers: [

              "fish",

              "meat",

              "cheese",

              "ham",

              "bread"

            ]

          }

        ],

        flexibleAnswer:
          true

      },



      // ==================================================
      // QUESTÃO 10
      // ==================================================

      {

        id:
          "complete-10",

        number:
          10,

        prompt:
          "______ drink ______.",

        fields: [

          {

            id:
              "field-1",

            acceptedAnswers: [

              "I",

              "You"

            ]

          },


          {

            id:
              "field-2",

            acceptedAnswers: [

              "coffee",

              "tea",

              "milk",

              "juice",

              "water",

              "soda"

            ]

          }

        ],

        flexibleAnswer:
          true

      }

    ]

  },



  // ====================================================
  // BLOCO 02
  // SUBSTITUTION PRACTICE
  // ====================================================

  {

    id:
      "substitution",

    type:
      "substitution",

    title:
      "Substitution Practice",

    instructions:
      "Faça a substituição e escreva a nova frase.",

    correctionMode:
      "manual",

    questions: [


      {

        id:
          "substitution-01",

        number:
          1,

        prompt:
          "I drink milk and coffee. / I eat cheese.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-02",

        number:
          2,

        prompt:
          "I eat fish and meat.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-03",

        number:
          3,

        prompt:
          "I drink milk and I eat bread and ham.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-04",

        number:
          4,

        prompt:
          "I eat meat. / I drink milk.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-05",

        number:
          5,

        prompt:
          "I drink juice, please.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-06",

        number:
          6,

        prompt:
          "I drink soda and I eat bread and ham.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-07",

        number:
          7,

        prompt:
          "I eat fish and I drink soda.",

        answerType:
          "textarea",

        manualReview:
          true

      },


      {

        id:
          "substitution-08",

        number:
          8,

        prompt:
          "I drink coffee and milk.",

        answerType:
          "textarea",

        manualReview:
          true

      }

    ]

  },



  // ====================================================
  // BLOCO 03
  // WRITTEN PRACTICE
  // ====================================================

  {

    id:
      "written",

    type:
      "written",

    title:
      "Written Practice",

    instructions:
      "Escreva em inglês.",

    correctionMode:
      "flexible",

    questions: [


      // ==================================================
      // QUESTÃO 01
      // ==================================================

      {

        id:
          "written-01",

        number:
          1,

        prompt:
          "Eu bebo / Eu como / Comer / Beber",

        answerType:
          "textarea",

        expectedParts: [

          "I drink",

          "I eat",

          "to eat",

          "to drink"

        ],

        acceptedAnswers: [

          "I drink / I eat / to eat / to drink",

          "I drink. / I eat. / to eat / to drink"

        ]

      },



      // ==================================================
      // QUESTÃO 02
      // ==================================================

      {

        id:
          "written-02",

        number:
          2,

        prompt:
          "Eu bebo suco. / Eu como carne. / Obrigado.",

        answerType:
          "textarea",

        expectedParts: [

          "I drink juice.",

          "I eat meat.",

          "Thank you."

        ],

        acceptedAnswers: [

          "I drink juice. / I eat meat. / Thank you.",

          "I drink juice / I eat meat / Thank you"

        ]

      },



      // ==================================================
      // QUESTÃO 03
      // ==================================================

      {

        id:
          "written-03",

        number:
          3,

        prompt:
          "Eu como peixe e bebo água.",

        answerType:
          "text",

        acceptedAnswers: [

          "I eat fish and I drink water.",

          "I eat fish and drink water."

        ]

      },



      // ==================================================
      // QUESTÃO 04
      // ==================================================

      {

        id:
          "written-04",

        number:
          4,

        prompt:
          "Oi / Eu bebo café. / Por favor.",

        answerType:
          "textarea",

        expectedParts: [

          "Hi",

          "I drink coffee.",

          "Please."

        ],

        acceptedAnswers: [

          "Hi / I drink coffee. / Please.",

          "Hi / I drink coffee / Please",

          "Hello / I drink coffee. / Please."

        ]

      },



      // ==================================================
      // QUESTÃO 05
      // ==================================================

      {

        id:
          "written-05",

        number:
          5,

        prompt:
          "Olá / Eu como pão e queijo.",

        answerType:
          "textarea",

        expectedParts: [

          "Hello",

          "I eat bread and cheese."

        ],

        acceptedAnswers: [

          "Hello / I eat bread and cheese.",

          "Hello / I eat bread and cheese",

          "Hi / I eat bread and cheese."

        ]

      },



      // ==================================================
      // QUESTÃO 06
      // ==================================================

      {

        id:
          "written-06",

        number:
          6,

        prompt:
          "Você come presunto e bebe água.",

        answerType:
          "text",

        acceptedAnswers: [

          "You eat ham and you drink water.",

          "You eat ham and drink water."

        ]

      },



      // ==================================================
      // QUESTÃO 07
      // ==================================================

      {

        id:
          "written-07",

        number:
          7,

        prompt:
          "Você bebe café e leite e eu como pão com queijo.",

        answerType:
          "text",

        acceptedAnswers: [

          "You drink coffee and milk and I eat bread and cheese.",

          "You drink coffee and milk, and I eat bread and cheese."

        ],

        flexibleAnswer:
          true

      },



      // ==================================================
      // QUESTÃO 08
      // ==================================================

      {

        id:
          "written-08",

        number:
          8,

        prompt:
          "Eu como pão, presunto e queijo. / Obrigado.",

        answerType:
          "textarea",

        expectedParts: [

          "I eat bread, ham and cheese.",

          "Thank you."

        ],

        acceptedAnswers: [

          "I eat bread, ham and cheese. / Thank you.",

          "I eat bread, ham and cheese / Thank you",

          "I eat bread, ham, and cheese. / Thank you."

        ]

      }

    ]

  },



  // ====================================================
  // BLOCO 04
  // LISTENING
  // ====================================================

  {

    id:
      "listening",

    type:
      "listening",

    title:
      "Listening",

    instructions:
      "Ouça e escreva o que você entendeu.",

    correctionMode:
      "manual",

    questions: [


      // ==================================================
      // LISTENING 01
      // ==================================================

      {

        id:
          "listening-01",

        number:
          1,

        audio: {

          start:
            1620,

          end:
            1625

        },

        answerType:
          "textarea",

        manualReview:
          true

      },



      // ==================================================
      // LISTENING 02
      // ==================================================

      {

        id:
          "listening-02",

        number:
          2,

        audio: {

          start:
            1625,

          end:
            1631

        },

        answerType:
          "textarea",

        manualReview:
          true

      },



      // ==================================================
      // LISTENING 03
      // ==================================================

      {

        id:
          "listening-03",

        number:
          3,

        audio: {

          start:
            1631,

          end:
            1638

        },

        answerType:
          "textarea",

        manualReview:
          true

      },



      // ==================================================
      // LISTENING 04
      // ==================================================

      {

        id:
          "listening-04",

        number:
          4,

        audio: {

          start:
            1638,

          end:
            1646

        },

        answerType:
          "textarea",

        manualReview:
          true

      }

    ]

  }


];



// ======================================================
// MAPA DAS SEÇÕES
// ======================================================

const exerciseSections = {

  complete:
    lessonExercises[0],

  substitution:
    lessonExercises[1],

  written:
    lessonExercises[2],

  listening:
    lessonExercises[3]

};



// ======================================================
// DEBUG
// ======================================================

function getExercise01State() {

  return {

    lesson:
      exerciseLesson,

    title:
      exerciseTitle,

    sections:
      lessonExercises.length,

    completeQuestions:
      exerciseSections.complete.questions.length,

    substitutionQuestions:
      exerciseSections.substitution.questions.length,

    writtenQuestions:
      exerciseSections.written.questions.length,

    listeningQuestions:
      exerciseSections.listening.questions.length

  };

}