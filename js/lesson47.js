const lessonTitle = "Lesson 47";
const currentVideoId = "gV-YvBkl8kk";

const timeRanges = [
  { start: 10, end: 132 },
  { start: 132 + 10, end: 269 },
  { start: 269 + 10, end: 421 },
  { start: 421 + 10, end: 590 }, //We liked the game.
  { start: 590 + 10, end: 741 }, //I didn't like that.
  { start: 740 + 10, end: 852 },//Did you go downtown?
  { start: 852 + 10, end: 983 },//Didn't she go?
  { start: 983 + 10, end: 1200 }, //Verbs
  { start: 1200 + 0, end: 1691 },//Vocabulary
  { start: 1691 + 10, end: 1839 },//Expressions
  { start: 1839 + 5, end: 2314 },//Grammar
  { start: 2314 + 10, end: 2358 },
];

const lessonCards = [
{
  "title": "Input 47",
  "columns": [
    [
      ["I read", "Eu leio"],
      ["I write", "Eu escrevo"],
      ["I say", "Eu digo"],
      ["I stay", "Eu fico"],
      ["I learn", "Eu aprendo"]
    ],
    [
      ["I read", "Eu li"],
      ["I wrote", "Eu escrevi"],
      ["I said", "Eu disse"],
      ["I stayed", "Eu fiquei"],
      ["I learned", "EU aprendi"]
    ]
  ]
},
{
  "title": "Input 47",
  "columns": [
    [
      ["She read the book.", "Ela leu o livro."],
      ["I didn't read it.", "Eu não li isso."],
      ["Did you read his email?", "Você leu o email dele?"]
    ],
    [
      ["I wrote those cards.", "Eu escrevi aqueles cartões."],
      ["He didn't write to me.", "Ele não me escreveu."],
      ["Did you write to him?", "Você escreveu para ele?"]
    ]
  ]
},
{
  "title": "Input 47",
  "columns": [
    [
      ["We stayed until lunch.", "Nós ficamos até o almoço."],
      ["They didn't stay at the party.", "Eles não ficaram na festa."],
      ["Did he stay alone?", "Ele ficou sozinho?"]
    ],
    [
      ["I learned how to play the drums fast.", "Eu aprendi a tocar bateria rápido."],
      ["Didn't you learn how to speak Spanish yet?", "Você não aprendeu a falar espanhol ainda?"],
      ["I learned a lot from my English teacher.", "Eu aprendi muito com minha professora de inglês."]
    ]
  ]
},
{
  "title": "Input 47",
  "columns": [
    [
      ["She learned Spanish in Spain.", "Ela aprendeu espanhol na Espanha."],
      ["He wrote me a beautiful letter.", "Ele me escreveu uma linda carta."],
      ["I read the newspaper this morning.", "Eu li o jornal esta manhã."]
    ],
    [
      ["He didn't say this to her.", "Ele não disse isso para ela."],
      ["We didn't learn this expression yet.", "Nós não aprendemos essa expressão ainda."],
      ["They didn't stay after the party.", "Eles não ficaram depois da festa."]
    ]
  ]
},
{
  "title": "Input 47",
  "columns": [
    [
      ["Did you read my email?", "Você leu meu email?"],
      ["Did you write to her?", "Você escreveu para ela?"],
      ["Did they learn Italian?", "Eles aprenderam italiano?"]
    ],
    [
      ["Didn't they stay here with you?", "Eles não ficaram aqui com você?"],
      ["Didn't you learn it during the class?", "Você não aprendeu isso durante a aula?"],
      ["Didn't you read my email?", "Você não leu meu email?"]
    ]
  ]
},
{
  "title": "Input 47",
  "columns": [
    [
      ["I have some friends in Europe.", "Eu tenho alguns amigos na Europa."],
      ["They studied with some friends.", "Eles estudaram com alguns amigos."],
    ],
    [
      ["She doesn't play any instruments.", "Ela não toca nenhum instrumento."],
      ["We didn't have any cookies.", "Nós não comemos nenhum biscoito."],
    ]
  ]
},
{
  "title": "Input 47",
  "columns": [
    [
      ["Do you know any foreigners in this city?", "Você conhece algum estrangeiro nesta cidade?"],
      ["Did they have any time?", "Eles tinham algum tempo?"]
    ],
    [
      ["Didn't she have any money with her?", "Ela não tinha nenhum dinheiro com ela?"],
      ["Didn't they buy any books?", "Eles não compraram nenhum livro?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to read", "ler"],
      ["to stay", "ficar"],
      ["to write", "escrever"],
      ["to learn", "aprender"],
      ["to say", "dizer"]
    ],
    [
      ["read", "leu"],
      ["stayed", "ficou"],
      ["wrote", "escreveu"],
      ["learned", "aprendeu"],
      ["said", "disse"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["customer", "freguês"],
      ["price", "preço"],
      ["cards", "cartas, baralho"],
      ["chess", "xadrez"],
      ["just", "só, apenas"],
      ["slowly", "devagar, lentamente"]
      
    ],    
    [
      ["quickly", "rapidamente"],
      ["fast", "rápido"],
      ["too", "também"],
      ["also", "também"],
      ["short", "curto"],
      ["long", "longo"],
      ["electric guitar", "guitarra"]
    ],
    [
      ["drums", "bateria"],
      ["party", "festa"],
      ["leisure", "lazer"],
      ["kitchen", "cozinha"],
      ["bedroom", "quarto"],
      ["mall", "shopping"]

    ],
     [
      ["library", "biblioteca"],
      ["gas station", "posto de gasolina"],
      ["supermarket", "supermercado"],
      ["bakery", "padaria"],
      ["grocery store", "mercearia"],
      ["snack bar", "lanchonete"],
      ["line", "fila"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["some", "algum"],
      ["any", "algum, nenhum"],
      ["me too", "eu também"]
    ],
    [
      ["overtime", "hora extra"],
      ["to take a nap", "tirar um cochilo"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["I have some books.", "Eu tenho alguns livros."],
      ["Do you have any books?", "Você tem alguns livros?"],
      ["I don't have any books.", "Eu não tenho nenhum livro."],
      ["He studies English and also French.", "Ele estuda inglês e francês também."],
      ["He studies English, too.", "Ele estuda inglês também."]
    ],
    [
      ["I want to learn how to cook.", "Eu quero aprender a cozinhar."],
      ["I learn English from my teacher.", "Eu aprendo inglês com meu professor."]
    ],
    [
      ["Months of the year (in)", ""],
      ["January", ""],
      ["February", ""],
      ["March", ""],
      ["April", ""],
      ["May", ""],
      ["June", ""],
      ["July", ""],
      ["August", ""],
      ["September", ""],
      ["October", ""],
      ["November", ""],
      ["December", ""]
    ]
  ]
},
{
    title: "Change into negative:",
    type: "listening",
    segments: [
      { text: "", start: 2330, end: 2334 },
      { text: "", start: 2334, end: 2339 },
      { text: "", start: 2339, end: 2346 },
      { text: "", start: 2346, end: 2352 },
      { text: "", start: 2352, end: 2358 }
    ]
  }  
];