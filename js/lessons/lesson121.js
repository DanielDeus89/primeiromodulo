const lessonTitle = "Lesson 121";
const currentVideoId = "xr7LqK4ZHKg";

const timeRanges = [
  { start: 0, end: 33 }, //0
  { start: 33, end: 82 }, //1
  { start: 82, end: 97 }, //2
  { start: 97, end: 143 }, //3
  { start: 143, end: 188 }, //Verbs
  { start: 188, end: 239 }, //Vocabulary
  { start: 239, end: 288 }, //Expressions
  { start: 288, end: 332 },  //Grammar
  { start: 332, end: 362 },  //Listening
  { start: 362, end: 412 },  //Listening
  { start: 412, end: 426 },  //Listening
  { start: 426, end: 473 },  //Listening
  { start: 473, end: 661 },  //Listening
  { start: 673, end: 803 }, //Listening
 
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["to please", "agradar"],
      ["to bet", "apostar"],
      ["to seem", "parecer"],
      ["to expect", "esperar"]
    ],
    [
      ["pleased", "agradou"],
      ["bet", "apostou"],
      ["seemed", "pareceu"],
      ["expected", "esperou"]
    ],
     [
      [" ", " "],
      ["bet", "apostado"],
      [" ", " "],
      [" ", " "]
    ],  
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["quick", "rápido"],
      ["serious", "sério"],
      ["exam", "prova"],
      ["examination", "exame"],
      ["up", "para cima"],
      ["down", "para baixo"],
      ["escalator", "escada rolante"],
      ["artist", "artista"],
      ["gallery", "galeria"],
      ["birth", "nascimento"],
      ["citizen", "cidadão"],
      ["possible", "possível"],
      ["possibility", "possibilidade"]
    ],
    [
      ["lottery", "loteria"],
      ["minimum wage", "salário mínimo"],
      ["currency", "moeda"],
      ["official", "oficial"],
      ["rate", "taxa"],
      ["disappointed", "decepcionado"],
      ["disappointment", "decepção"],
      ["future", "futuro"],
      ["generation", "geração"],
      ["interview", "entrevista"],
      ["interviewer", "entrevistador"],
      ["button", "botão"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["right now", "agora mesmo"],
      ["to be born", "nascer"],
      ["of course", "é claro"]
    ],
    [
      ["a little bit", "um pouco"],
      ["up to now", "até agora"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["Weren't you expecting somebody?", "Você não estava esperando alguém?"],
      ["She was interested in buying a bigger car.", "Ela estava interessada em comprar um carro maior."],
      ["It wasn't a very good idea.", "Não foi uma ideia muito boa."],
      ["Was there anybody you knew at the museum?", "Havia alguém que você conhecia no museu?"],
      ["Weren't there any leftovers?", "Não havia sobras?"],
      ["I wish it were warmer today.", "Eu gostaria que estivesse mais quente hoje."],
      ["How was your interview?", "Como foi sua entrevista?"],
      ["It wasn't a difficult exam.", "Não foi uma prova difícil."]
    ]
  ]
},
{
  "title": "Input 121",
  "columns": [
    [
      ["They are pleased with us.", "Eles estão satisfeitos conosco."],
      ["They were pleased with it.", "Eles ficaram satisfeitos com isso."],
      ["I did everything to please her.", "Eu fiz de tudo para agradá-la."],
      ["He likes to please his guests.", "Ele gosta de agradar seus convidados."]
    ],
    [
      ["I bet he won't be there.", "Aposto que ele não estará lá."],
      ["She wishes she could bet on it.", "Ela gostaria de poder apostar nisso."],
      ["Would you bet on him?", "Você apostaria nele?"],
      ["I bet she is not coming today.", "Aposto que ela não vem hoje."]
    ]
  ]
},
{
  "title": "Input 121",
  "columns": [
    [
      ["It seems to be the same.", "Parece ser o mesmo."],
      ["They seemed very scared.", "Eles pareciam muito assustados."],
      ["It seems like it's going to snow.", "Parece que vai nevar."],
      ["It didn't seem dangerous.", "Não parecia perigoso."]
    ],
    [
      ["They are expecting a lot of people.", "Eles estão esperando muitas pessoas."],
      ["He expects to get a job very soon.", "Ele espera conseguir um emprego muito em breve."],
      ["It was easier than I expected.", "Foi mais fácil do que eu esperava."],
      ["It didn't work as well as we expected.", "Não funcionou tão bem quanto esperávamos."]
    ]
  ]
},
{
  "title": "Input 121",
  "columns": [
    [
      ["What's the minimum wage in China?", "Qual é o salário mínimo na China?"],
      ["When will the interview be?", "Quando será a entrevista?"],
      ["When was your baby born?", "Quando seu bebê nasceu?"],
      ["Of course she had insurance.", "É claro que ela tinha seguro."],
      ["We shouldn't expect him to come.", "Não deveríamos esperar que ele venha."],
      ["I don't think he's an American citizen.", "Eu não acho que ele seja um cidadão americano."],
      ["What's the possibility of it raining today?", "Qual é a possibilidade de chover hoje?"],
      ["He works at a gallery, doesn't he?", "Ele trabalha em uma galeria, não trabalha?"]
    ]
  ]
},
{
  "title": "Input 121",
  "columns": [
    [
      ["They were in a hurry to leave.", "Eles estavam com pressa para sair."],
      ["That car was bigger than yours.", "Aquele carro era maior que o seu."],
      ["Wasn't the escalator working?", "A escada rolante não estava funcionando?"],
      ["It was early when she arrived.", "Era cedo quando ela chegou."]
    ],
    [
      ["It was a little bit hot.", "Estava um pouco quente."],
      ["Who were you expecting?", "Quem você estava esperando?"],
      ["She was expecting a baby girl.", "Ela estava esperando uma menina."],
      ["They expect too much.", "Eles esperam demais."]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to please", "agradar"],
      ["to bet", "apostar"],
      ["to seem", "parecer"],
      ["to expect", "esperar"]
    ],
    [
      ["pleased", "agradou"],
      ["bet", "apostou"],
      ["seemed", "pareceu"],
      ["expected", "esperou"]
    ],
     [
      [" ", " "],
      ["bet", "apostado"],
      [" ", " "],
      [" ", " "]
    ],  
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["quick", "rápido"],
      ["serious", "sério"],
      ["exam", "prova"],
      ["examination", "exame"],
      ["up", "para cima"],
      ["down", "para baixo"],
      ["escalator", "escada rolante"],
      ["artist", "artista"],
      ["gallery", "galeria"],
      ["birth", "nascimento"],
      ["citizen", "cidadão"],
      ["possible", "possível"],
      ["possibility", "possibilidade"]
    ],
    [
      ["lottery", "loteria"],
      ["minimum wage", "salário mínimo"],
      ["currency", "moeda"],
      ["official", "oficial"],
      ["rate", "taxa"],
      ["disappointed", "decepcionado"],
      ["disappointment", "decepção"],
      ["future", "futuro"],
      ["generation", "geração"],
      ["interview", "entrevista"],
      ["interviewer", "entrevistador"],
      ["button", "botão"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["right now", "agora mesmo"],
      ["to be born", "nascer"],
      ["of course", "é claro"]
    ],
    [
      ["a little bit", "um pouco"],
      ["up to now", "até agora"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["Weren't you expecting somebody?", "Você não estava esperando alguém?"],
      ["She was interested in buying a bigger car.", "Ela estava interessada em comprar um carro maior."],
      ["It wasn't a very good idea.", "Não foi uma ideia muito boa."],
      ["Was there anybody you knew at the museum?", "Havia alguém que você conhecia no museu?"],
      ["Weren't there any leftovers?", "Não havia sobras?"],
      ["I wish it were warmer today.", "Eu gostaria que estivesse mais quente hoje."],
      ["How was your interview?", "Como foi sua entrevista?"],
      ["It wasn't a difficult exam.", "Não foi uma prova difícil."]
    ]
  ]
},
{
  "title": "Change the sentences according to the model",
  "columns": [
   
  ]
},
{
  "title": "Change the sentences according to the model",
  "columns": [
   
  ]
}

  
];


