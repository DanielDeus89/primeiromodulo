const lessonTitle = "Lesson 53";
const currentVideoId = "HXkbBr5fXtY";

const timeRanges = [
  { start: 10, end: 108 },
  { start: 108, end: 321 },
  { start: 321, end: 568 },
  { start: 568, end: 971 }, //We liked the game. 330 571
  { start: 971, end: 1024 }, //I didn't like that. 
  { start: 1029, end: 1296 },//Did you go downtown?
  { start: 1304, end: 2307 },//Didn't she go?
  { start: 2313, end: 2558 }, //Verbs
  { start: 2576, end: 3326 },//Vocabulary
  { start: 3335, end: 3365 }
];

const lessonCards = [
{
  "title": "Input 53",
  "columns": [
    [
      ["I have.", "Eu tenho."],
      ["I speak.", "Eu falo."],
      ["I visit.", "Eu visito."],
      ["I help.", "Eu ajudo."],
      ["I drive.", "Eu dirijo."]
    ],
    [
      ["I had.", "Eu tive."],
      ["I spoke.", "Eu falei."],
      ["I visited.", "Eu visitei."],
      ["I helped.", "Eu ajudei."],
      ["I drove.", "Eu dirigi."]
    ]
  ]
},
{
  "title": "Input 53",
  "columns": [
    [
      ["I visited him yesterday.", "Eu o visitei ontem."],
      ["He didn't help me.", "Ele não me ajudou."],
      ["Did you speak English with him?", "Você falou inglês com ele?"],
      ["Didn't you visit your parents on Sunday?", "Você não visitou seus pais no domingo?"]
    ],
    [
      ["She drove from Miami to Orlando.", "Ela dirigiu de Miami a Orlando."],
      ["They didn't have much time.", "Eles não tiveram muito tempo."],
      ["Didn't you help them?", "Você não os ajudou?"],
      ["Didn't he have to work yesterday?", "Ele não teve que trabalhar ontem?"]
    ]
  ]
},
{
  "title": "Input 53",
  "columns": [
    [
      ["He had something to say to you.", "Ele tinha algo a dizer para você."],
      ["Did you have anything to read?", "Você tinha alguma coisa para ler?"],
      ["I didn't have anything to study today.", "Não tive nada para estudar hoje."],
      ["She wanted nothing from the drugstore.", "Ela não queria nada da farmácia."]
    ],
    [
      ["She has something to say.", "Ela tem algo para dizer."],
      ["Does he have anything to do now?", "Ele tem algo para fazer agora?"],
      ["She didn't eat anything last night.", "Ela não comeu nada na noite passada."],
      ["He said nothing at the meeting.", "Ele não disse nada na reunião."]
    ]
  ]
},
{
  "title": "Input 53",
  "columns": [
    [
      ["I am living here now.", "Estou morando aqui agora."],
      ["She is doing her homework.", "Ela está fazendo sua lição de casa."],
      ["He is having a sandwich at the snack bar.", "Ele está comendo um sanduíche na lanchonete."],
      ["The class is starting now.", "A aula está começando agora."],
      ["We are driving home now.", "Nós estamos dirigindo para casa agora."],
      ["Are they buying new furniture?", "Eles estão comprando mobília nova?"]
    ],
    [
      ["I am not sleeping well.", "Eu não estou dormindo bem."],
      ["Are you studying by yourself?", "Você está estudando sozinho?"],
      ["She is not going with the kids.", "Ela não está indo com as crianças."],
      ["It is not working anymore.", "Não está funcionando mais."],
      ["We aren't writing a novel.", "Nós não estamos escrevendo um romance."],
      ["Are they selling the house?", "Eles estão vendendo a casa?"]
    ]
  ]
},
{
  "title": "Input 53",
  "columns": [
    [
            ["She doesn't know if he is married.", "Ela não sabe se ele é casado."]

    ],
    [
            ["I don't know if they are coming.", "Eu não sei se eles estão vindo."]

    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to have", "ter"],
      ["to help", "ajudar"],
      ["to speak", "falar"],
      ["to drive", "dirigir"],
      ["to visit", "visitar"]
    ],
    [
      ["had", "teve"],
      ["helped", "ajudou"],
      ["spoke", "falou"],
      ["drove", "dirigiu"],
      ["visited", "visitou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["bottle", "garrafa"],
      ["can", "lata"],
      ["straw", "canudo"],
      ["box", "caixa"],
      ["package", "pacote"],
      ["bag", "saco, sacola"],
      ["peach", "pêssego"],
      ["cookie", "bolacha"],
      ["address", "endereço"],
      ["block", "quadra, quarteirão"],
      ["middle", "meio"],
      ["street", "rua"],
      ["road", "estrada"]
    ],
    [
      ["already", "já"],
      ["ago", "atrás"],
      ["while", "enquanto"],
      ["hour", "hora"],
      ["if", "se"],
      ["own", "próprio"],
      ["owner", "proprietário, dono"],
      ["people", "pessoas"],
      ["foreign", "estrangeiro"],
      ["foreigner", "estrangeiro"],
      ["kid", "criança"],
      ["grandpa", "vovô"],
      ["grandma", "vovó"]
    ],
    [
      ["grandfather", "avô"],
      ["grandmother", "avó"],
      ["grandparents", "avós"],
      ["grandson", "neto"],
      ["granddaughter", "neta"],
      ["grandchildren", "netos"],
      ["health", "saúde"],
      ["continent", "continente"],
      ["Asia", "Ásia"],
      ["Africa", "África"],
      ["North America", "América do Norte"],
      ["South America", "América do Sul"],
      ["Antarctica", "Antártica"]
    ],
    [
      ["Europe", "Europa"],
      ["Australia", "Austrália"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["something", "alguma coisa, algo"],
      ["anything", "alguma coisa, nada"],
      ["nothing", "nada"],
      ["anymore", "não mais"]
    ],
    [
      ["so", "então, por isso, tão"],
      ["so far", "até agora"],
      ["close to", "perto de"],
      ["right now", "agora mesmo"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["I'm studying.", "Eu estou estudando."],
      ["You're sleeping.", "Você está dormindo."],
      ["He's helping.", "Ele está ajudando."],
      ["She's writing.", "Ela está escrevendo."],
      ["It's starting.", "Está começando."],
      ["We're going.", "Nós estamos indo."],
      ["You're finishing.", "Vocês estão terminando."],
      ["They're closing.", "Eles estão fechando."]
    ],
    [
      ["I'm not studying.", "Eu não estou estudando."],
      ["You're not sleeping.", "Você não está dormindo."],
      ["He's not helping.", "Ele não está ajudando."],
      ["She's not writing.", "Ela não está escrevendo."],
      ["It's not starting.", "Não está começando."],
      ["We're not going.", "Nós não estamos indo."],
      ["You're not finishing.", "Vocês não estão terminando."],
      ["They're not closing.", "Eles não estão fechando."]
    ],
    [
      ["Am I studying?", "Eu estou estudando?"],
      ["Are you sleeping?", "Você está dormindo?"],
      ["Is he helping?", "Ele está ajudando?"],
      ["Is she writing?", "Ela está escrevendo?"],
      ["Is it starting?", "Está começando?"],
      ["Are we going?", "Nós estamos indo?"],
      ["Are you finishing?", "Vocês estão terminando?"],
      ["Are they closing?", "Eles estão fechando?"]
    ],
    [
      ["I have something.", "Eu tenho alguma coisa."],
      ["Do you have anything?", "Você tem alguma coisa?"],
      ["I don't have anything.", "Não tenho nada."],
      ["I have nothing.", "Não tenho nada."],
      ["I like to read anything.", "Eu gosto de ler qualquer coisa."],
      ["I don't live there anymore.", "Eu não moro mais lá."]
    ]
  ]
},
  {
    title: "Listening: Change intou interrogative:",
    type: "listening",
    segments: [
      { text: "", start: 3341, end: 3346 },
      { text: "", start: 3346, end: 3353 },
      { text: "", start: 3353, end: 3359 },
      { text: "", start: 3359, end: 3365 }
    ]
  }  
];