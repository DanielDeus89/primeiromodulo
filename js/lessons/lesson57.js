const lessonTitle = "Lesson 57";
const currentVideoId = "jv7RT7Fofpk";

const timeRanges = [
  { start: 10, end: 115 },
  { start: 115 + 10, end: 520 },
  { start: 520 + 10, end: 828 },
  { start: 828 + 10, end: 1075 }, //We liked the game. 330 571
  { start: 1075 + 10, end: 1301 }, //I didn't like that. 
  { start: 1301 + 10, end: 1876 },//Did you go downtown?
  { start: 1876 + 10, end: 2099 },//Didn't she go?
  { start: 2099 + 10, end: 2558 }, //Verbs
  { start: 2558 + 10, end: 2609 }
];

const lessonCards = [
{
  "title": "Input 57",
  "columns": [
    [
      ["I prefer.", "Eu prefiro."],
      ["I cook.", "Eu cozinho."],
      ["I make.", "Eu faço."],
      ["I pay.", "Eu pago."]
    ],
    [
      ["I preferred.", "Eu preferi."],
      ["I cooked.", "Eu cozinhei."],
      ["I made.", "Eu fiz."],
      ["I paid.", "Eu paguei."]
    ]
  ]
},
{
  "title": "Input 57",
  "columns": [
    [
      ["She made a special dish for him.", "Ela fez um prato especial para ele."],
      ["He didn't make any mistakes on the test.", "Ele não cometeu nenhum erro na prova."],
      ["She made breakfast before work.", "Ela fez o café da manhã antes do trabalho."],
      ["It made a lot of noise.", "Fez muito barulho."],
      ["We made a speech at the meeting.", "Nós fizemos um discurso na reunião."],
      ["They made a lot of money this year.", "Eles ganharam muito dinheiro este ano."]
    ],
    [
      ["I didn't make a cake this week.", "Eu não fiz um bolo esta semana."],
      ["He didn't make any plans.", "Ele não fez nenhum plano."],
      ["She didn't make the bed.", "Ela não arrumou a cama."],
      ["It didn't make any sense.", "Não fez nenhum sentido."],
      ["She didn't make a cake.", "Ela não fez um bolo."],
      ["Didn't she make that phone call?", "Ela não fez aquela ligação?"]
    ]
  ]
},
{
  "title": "Input 57",
  "columns": [
    [
      ["She did a good job at the factory.", "Ela fez um bom trabalho na fábrica."],
      ["He did a big favor for his boss.", "Ele fez um grande favor a seu chefe."],
      ["She did many things before lunch.", "Ela fez muitas coisas antes do almoço."],
      ["Did you do the cleaning?", "Você fez a limpeza?"],
      ["She doesn't like to do the housework.", "Ela não gosta de fazer o trabalho de casa."]
    ],
    [
      ["He didn't do overtime this month.", "Ele não fez hora extra este mês."],
      ["He didn't do the shopping.", "Ele não fez as compras."],
      ["She didn't do anything so far.", "Ela não fez nada até agora."],
      ["I would like to make a phone call.", "Eu gostaria de fazer uma ligação."],
      ["He finished doing his homework.", "Ele terminou de fazer sua tarefa."]
    ]
  ]
},
{
  "title": "Input 57",
  "columns": [
    [
      ["She cooked his favorite dish.", "Ela cozinhou o prato favorito dele."],
      ["She makes me happy.", "Ela me faz feliz."],
      ["Didn't you pay it?", "Você não pagou isso?"],
      ["It makes sense.", "Faz sentido."]
    ],
    [
      ["He came to do the translation.", "Ele veio para fazer a tradução."],
      ["He cooked a special meal.", "Ele cozinhou uma refeição especial."],
      ["Didn't she make any friends?", "Ela não fez nenhum amigo?"],
      ["She preferred a house to an apartment.", "Ela preferiu uma casa a um apartamento."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to prefer", "preferir"],
      ["to make", "fazer"],
      ["to cook", "cozinhar"],
      ["to pay", "pagar"]
    ],
    [
      ["preferred", "preferiu"],
      ["made", "fez"],
      ["cooked", "cozinhou"],
      ["paid", "pagou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["bed", "cama"],
      ["mistake", "erro, engano"],
      ["noise", "barulho"],
      ["speech", "discurso"],
      ["plan", "plano"],
      ["sense", "sentido, senso"]
    ],    [

      ["cleaning", "limpeza"],
      ["favor", "favor"],
      ["housework", "faxina"],
      ["translation", "tradução"],
      ["dish", "prato"],
      ["maid", "empregada"]
    ],
    [
      ["housekeeper", "governanta"],
      ["cook", "cozinheiro"],
      ["barbecue", "churrasco"],
      ["recipe", "receita"],
      ["salt", "sal"],
      ["sugar", "açúcar"]
    ]  ,  [
 
      ["favorite", "favorito"],
      ["delicious", "delicioso"],
      ["special", "especial"],
      ["less", "menos"],
      ["calorie", "caloria"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to make money", "ganhar dinheiro"],
      ["to make a phone call", "telefonar"],
      ["to do the laundry", "lavar roupas"],
      ["to do the dishes", "lavar louças"]
    ],
    [
      ["to do a backup", "fazer um backup"],
      ["sometimes", "às vezes"],
      ["cell phone", "celular"],
      ["cereal bar", "barra de cereal"]
    ]
  ]
},

{
  "title": "Grammar",
  "columns": [
    [
      ["to make", "fazer"],
      ["the bed", "arrumar a cama"],
      ["a mistake", "cometer um erro"],
      ["a speech", "fazer um discurso"],
      ["a plan", "fazer um plano"],
      ["noise", "fazer barulho"],
      ["sense", "fazer sentido"],
      ["breakfast", "preparar o café da manhã"],
      ["friends", "fazer amigos"]
    ],
    [
      ["to do", "fazer"],
      ["the cleaning", "fazer a limpeza"],
      ["the housework", "fazer as tarefas domésticas"],
      ["the shopping", "fazer as compras"],
      ["a favor", "fazer um favor"],
      ["a good job", "fazer um bom trabalho"],
      ["a translation", "fazer uma tradução"],
      ["something", "fazer alguma coisa"],
      ["overtime", "fazer hora extra"]
    ]
  ]
},

  {
    title: "Listening: Write a question:",
    type: "listening",
    segments: [
      { text: "", start: 2573, end: 2576 },
      { text: "", start: 2576, end: 2585 },
      { text: "", start: 2585, end: 2594 },
      { text: "", start: 2594, end: 2603 },
      { text: "", start: 2603, end: 2609 }
    ]
  }  
];