const lessonTitle = "Lesson 45";
const currentVideoId = "EmoqeP6OUOc";

const timeRanges = [
  { start: 10, end: 146 },
  { start: 146 + 10, end: 304 },
  { start: 304 + 10, end: 475 },
  { start: 474 + 10, end: 624 }, //We liked the game.
  { start: 624 + 10, end: 787 }, //I didn't like that.
  { start: 787 + 10, end: 942 },//Did you go downtown?
  { start: 942 + 10, end: 1122 },//Didn't she go?
  { start: 1122 + 10, end: 1366 }, //Verbs
  { start: 1366 + 10, end: 1958 },//Vocabulary
  { start: 1958 + 10, end: 2162 },//Expressions
  { start: 2162 + 10, end: 2614 },//Grammar
  { start: 2614 + 10, end: 99999 },
];

const lessonCards = [
{
  "title": "Input 45",
  "columns": [
    [
      ["I work.", "Eu trabalho."],
      ["I study.", "Eu estudo."],
      ["I play.", "Eu brinco, jogo, toco."],
      ["I sleep.", "Eu durmo."],
      ["I travel.", "Eu viajo."]
    ],
    [
      ["I worked.", "Eu trabalhei."],
      ["I studied.", "Eu estudei."],
      ["I played.", "Eu brinquei, joguei, toquei."],
      ["I slept.", "Eu dormi."],
      ["I traveled.", "Eu viajei."]
    ]
  ]
},
{
  "title": "Input 45",
  "columns": [
    [
      ["He worked a lot today.", "Ele trabalhou muito hoje."],
      ["They didn't work yesterday.", "Eles não trabalharam ontem."],
      ["Did she work today?", "Ela trabalhou hoje?"]
    ],
    [
      ["He played volleyball.", "Ele jogou vôlei."],
      ["I didn't play the violin.", "Eu não toquei violino."],
      ["Did she play checkers?", "Ela jogou damas?"]
    ]
  ]
},
{
  "title": "Input 45",
  "columns": [
    [
      ["We slept a little last night.", "Nós dormimos um pouco na noite passada."],
      ["I didn't sleep a lot.", "Eu não dormi muito."],
      ["Did he sleep at home?", "Ele dormiu em casa?"]
    ],
    [
      ["They traveled to the USA.", "Eles viajaram para os Estados Unidos."],
      ["I didn't travel last year.", "Eu não viajei no ano passado."],
      ["Did you travel to New York?", "Você viajou para Nova York?"]
    ]
  ]
},
{
  "title": "Input 45",
  "columns": [
    [
      ["We studied all day long.", "Nós estudamos o dia todo."],
      ["I didn't study a lot.", "Eu não estudei muito."],
      ["Did they study at home?", "Eles estudaram em casa?"]
    ],
    [
      ["They played tennis.", "Eles jogaram tênis."],
      ["I slept well last night.", "Eu dormi bem na noite passada."],
      ["We worked with them.", "Nós trabalhamos com eles."]
    ]
  ]
},
{
  "title": "Input 45",
  "columns": [
    [
      ["She didn't work with me.", "Ela não trabalhou comigo."],
      ["He didn't study Law.", "Ele não estudou Direito."],
      ["We didn't travel with them.", "Nós não viajamos com eles."]
    ],
    [
      ["They didn't work with us.", "Eles não trabalharam conosco."],
      ["He didn't sleep here.", "Ele não dormiu aqui."],
      ["I didn't take him with me.", "Eu não o levei comigo."]
    ]
  ]
},
{
  "title": "Input 45",
  "columns": [
    [
      ["Did you work with her?", "Você trabalhou com ela?"],
      ["Did she study math?", "Ela estudou matemática?"],
      ["Did you sleep there?", "Você dormiu lá?"]
    ],
    [
      ["Did they play last night?", "Eles jogaram na noite passada?"],
      ["Did you study with them?", "Você estudou com eles?"],
      ["Did they travel once again?", "Eles viajaram mais uma vez?"]
    ]
  ]
},
{
  "title": "Input 45",
  "columns": [
    [
      ["Didn't you study last semester?", "Você não estudou no semestre passado?"],
      ["Didn't she travel on her vacation?", "Ela não viajou nas suas férias?"],
      ["Didn't they work with you?", "Eles não trabalharam com você?"]
    ],
    [
      ["Didn't he study Chinese?", "Ele não estudou chinês?"],
      ["Didn't he play soccer at school?", "Ele não jogou futebol na escola?"],
      ["Didn't you sleep at home?", "Você não dormiu em casa?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["to work", "trabalhar"],
      ["to sleep", "dormir"],
      ["to study", "estudar"],
      ["to travel", "viajar"],
      ["to play", "jogar, tocar, brincar"]
    ],
    [
      ["worked", "trabalhou"],
      ["slept", "dormiu"],
      ["studied", "estudou"],
      ["traveled", "viajou"],
      ["played", "jogou, tocou, brincou"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["dentist", "dentista"],
      ["doctor", "médico"],
      ["lawyer", "advogado"],
      ["engineer", "engenheiro"],
      ["secretary", "secretária"],
      ["assistant", "assistente"],
      ["police officer", "policial"],
      ["mechanic", "mecânico"]
  
    ], [
     ["business", "negócio, comércio"],
      ["businessman", "executivo"],
      ["businesswoman", "executiva"],
      ["administration", "administração"],
      ["Law", "lei, Direito"],
      ["hospital", "hospital"],
      ["restaurant", "restaurante"]
    ],
    [
      ["factory", "fábrica"],
      ["flute", "flauta"],
      ["violin", "violino"],
      ["field", "campo"],
      ["court", "quadra"],
      ["tennis", "tênis"],
      ["basketball", "basquete"]
    ],
        [
       ["volleyball", "vôlei"],
      ["checkers", "jogo de damas"],
      ["soon", "logo, em breve"],
      ["later", "depois, mais tarde"],
      ["during", "durante"],
      ["again", "de novo, novamente, outra vez"],
      ["who", "quem"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["once again", "mais uma vez"],
      ["all day long", "o dia todo"],
      ["all night long", "a noite toda"],
      ["to work out", "exercitar-se"]
    ],
    [
      ["dentist's office", "consultório odontológico"],
      ["doctor's office", "consultório médico"],
      ["How do you spell your name?", "Como se escreve seu nome?"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["me / She wants to take me to Miami.", ""],
      ["you / I need to visit you tomorrow.", ""],
      ["him  / She likes to cook for him.", ""],
      ["her  / I have to say this to her.", ""],
      ["it   / I need to wash it.", ""],
      ["us   / They like to help us.", ""],
      ["you  / I want to write to you.", ""],
      ["them / She needs to talk to them.", ""]
    ],
    [
      ["Who wants to go with me?", "Quem quer ir comigo?"],
      ["Who plays the flute in your family?", "Quem toca flauta em sua família?"],
      ["Who spoke in the meeting?", "Quem falou na reunião?"],
      ["Who ate the toast?", "Quem comeu a torrada?"]
    ]
  ]
},
  {
    title: "Write a question:",
    type: "listening",
    segments: [
      { text: "", start: 2629, end: 2637 },
      { text: "", start: 2637, end: 2644 },
      { text: "", start: 2644, end: 2652 },
      { text: "", start: 2652, end: 2660 },
      { text: "", start: 2660, end: 2668 }
    ]
  }  
];