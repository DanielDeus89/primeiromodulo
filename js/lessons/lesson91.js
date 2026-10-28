const lessonTitle = "Lesson 91";
const currentVideoId = "oz51KUA_2Ok";

const timeRanges = [
  { start: 0, end: 32 }, //Verbs
  { start: 32, end: 90 }, //Vocabulary
  { start: 90, end: 140 }, //Expressions
  { start: 140, end: 187 }, //Grammar
  { start: 187, end: 237 }, //Frases 1
  { start: 237, end: 282 }, //Fr2
  { start: 282, end: 343 }, //Fr3
  { start: 343, end: 419 }, //Verbs
  { start: 419, end: 651 }, //vac
  { start: 651, end: 923 }, //exp
  { start: 923, end: 1106  }, //Gramm  
  { start: 1106, end: 1354  }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [["to marry, married", "casar-se"]],
    [["to try, tried", "tentar"]],
    [["to believe, believed", "acreditar"]],
    [["to begin, began, begun", "iniciar, começar"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["between", "entre"],
      ["among", "entre"],
      ["appointment", "compromisso"],
      ["headache", "dor de cabeça"],
      ["toothache", "dor de dente"],
      ["stomachache", "dor de estômago"],
      ["pill", "pílula"],
      ["hard", "duro, difícil"],
      ["address", "endereço"]
    ],
    [
      ["quality", "qualidade"],
      ["beginning", "início"],
      ["end", "fim"],
      ["marriage", "casamento"],
      ["wedding", "cerimônia de casamento"],
      ["hint", "dica"],
      ["real", "real, de verdade"],
      ["really", "realmente"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["marital status", "estado civil"],
      ["medical check-up", "check-up"],
      ["It's too bad", "que pena"],
      ["zip code", "CEP"],
      ["to underline a word", "sublinhar uma palavra"],
      ["to delete", "deletar"]
    ],
    [
      ["nickname", "apelido"],
      ["full name", "nome completo"],
      ["middle name", "nome do meio"],
      ["last name", "sobrenome"],
      ["maiden name", "nome de solteiro"],
      ["to get married", "casar-se"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["We're going to watch it.", "Nós vamos assistir isto."],
      ["He's going to help her.", "Ele vai ajudá-la."],
      ["She's not going to believe me.", "Ela não vai acreditar em mim."],
      ["I'm not going to work tomorrow.", "Eu não vou trabalhar amanhã."],
      ["Are they going to arrive late?", "Eles vão chegar tarde?"],
      ["Is it going to work?", "Vai funcionar?"]
    ],
    [
      ["Isn't it going to begin now?", "Não vai começar agora?"],
      ["Aren't they going to get married?", "Eles não vão se casar?"]
    ]
  ]
},
{
  "title": "Input 91",
  "columns": [
    [
      ["He married her two years ago.", ""],
      ["When are you going to marry Kate?", ""],
      ["They didn't get married yet.", ""],
      ["When are they going to get married?", ""]
    ],
    [
      ["I can't believe this.", ""],
      ["You're not going to believe it.", ""],
      ["Should we believe her?", ""],
      ["Don't believe in him.", ""]
    ]
  ]
},
{
  "title": "Input 91",
  "columns": [
    [
      ["I tried to answer it.", ""],
      ["Are you going to try again?", ""],
      ["She didn't try the T-shirt on.", ""],
      ["Did you try this new recipe?", ""]
    ],
    [
      ["It began two hours ago.", ""],
      ["Must we begin it now?", ""],
      ["They didn't begin it yet.", ""],
      ["Isn't it going to begin now?", ""]
    ]
  ]
},
{
  "title": "Input 91",
  "columns": [
    [
      ["Where are you going now?", ""],
      ["Are you going to try it?", ""],
      ["What are you going to do?", ""],
      ["Is it going to rain?", ""],
      ["Is he going to call us?", ""]
    ],
    [
      ["Weren't you going to travel?", ""],
      ["Wasn't he going to stay here?", ""],
      ["Aren't you going to take it?", ""],
      ["Aren't they going with us?", ""],
      ["Weren't they going to stay?", ""]
    ]
  ]
},
{
  "title": "Input 91",
  "columns": [
    [
      ["It's going to end soon.", ""],
      ["We're going to a wedding today.", ""],
      ["She's going to bring it later.", ""],
      ["They're not going to believe us.", ""],
      ["I'm going to begin.", ""],
      ["He's going to marry her.", ""]
    ],
    [
      ["She isn't going to bring it.", ""],
      ["He isn't going to talk to us.", ""],
      ["I'm not going to give you any hint.", ""],
      ["She isn't going to get a medical check-up.", ""],
      ["They weren't going to be here.", ""],
      ["She's going to get married.", ""]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [["to marry, married", "casar-se"]],
    [["to try, tried", "tentar"]],
    [["to believe, believed", "acreditar"]],
    [["to begin, began, begun", "iniciar, começar"]]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["between", "entre"],
      ["among", "entre"],
      ["appointment", "compromisso"],
      ["headache", "dor de cabeça"],
      ["toothache", "dor de dente"],
      ["stomachache", "dor de estômago"],
      ["pill", "pílula"],
      ["hard", "duro, difícil"],
      ["address", "endereço"]
    ],
    [
      ["quality", "qualidade"],
      ["beginning", "início"],
      ["end", "fim"],
      ["marriage", "casamento"],
      ["wedding", "cerimônia de casamento"],
      ["hint", "dica"],
      ["real", "real, de verdade"],
      ["really", "realmente"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["marital status", "estado civil"],
      ["medical check-up", "check-up"],
      ["It's too bad", "que pena"],
      ["zip code", "CEP"],
      ["to underline a word", "sublinhar uma palavra"],
      ["to delete", "deletar"]
    ],
    [
      ["nickname", "apelido"],
      ["full name", "nome completo"],
      ["middle name", "nome do meio"],
      ["last name", "sobrenome"],
      ["maiden name", "nome de solteiro"],
      ["to get married", "casar-se"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["We're going to watch it.", "Nós vamos assistir isto."],
      ["He's going to help her.", "Ele vai ajudá-la."],
      ["She's not going to believe me.", "Ela não vai acreditar em mim."],
      ["I'm not going to work tomorrow.", "Eu não vou trabalhar amanhã."],
      ["Are they going to arrive late?", "Eles vão chegar tarde?"],
      ["Is it going to work?", "Vai funcionar?"]
    ],
    [
      ["Isn't it going to begin now?", "Não vai começar agora?"],
      ["Aren't they going to get married?", "Eles não vão se casar?"]
    ]
  ]
}
];
