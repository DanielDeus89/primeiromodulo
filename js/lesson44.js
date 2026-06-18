const lessonTitle = "Lesson 44";
const currentVideoId = "Mem95xoyq4I";

const timeRanges = [
  { start: 12, end: 43 }, //0
  { start: 43, end: 73 }, //0
  { start: 143 + 10, end: 266 }, //Conversation
  { start: 266 + 10, end: 347 }, //Fixacão
  { start: 346 + 10, end: 389 }, //Passe para o Negativo
  { start: 389 + 10, end: 471 }, //Fixacão
  { start: 471 + 10, end: 525  }, //Passe para o Afirmativo
  { start: 524 + 10, end: 612 }, //Fixacão
  { start: 612 + 10, end: 654 }, //Passe para o Interrogativo
  { start: 654 + 10, end: 753 }, //Fixacão
  { start: 753 + 10, end: 799 + 1 }, //
  { start: 799 + 10, end: 941 }, //Questions
  { start: 941 + 10, end: 1027 }, //REsponda
  { start: 1062 + 10, end: 1104 }, //REsponda
  { start: 1104 + 10, end: 1152 }, //
];

const lessonCards = [
{
  "title": "Speak Right Now",
  "type": "speak",
  "columns": [
    [
    ]
  ]
},
{
  "title": "Make your own Senteces",
  "columns": [
  ]
},
{
  "title": "Conversation in Trio",
  "type": "conversation",
  "columns": [
    [
      ["Did She take the kids to the game?", ""],
      ["Did you take the kids to the game?", ""],
      ["Yes, I did. I took the kids to the game.", ""],
      ["Yes, She did. She took the kids to the game.", ""],
      ["", " "],

      ["Didn't he like the dessert?", ""],
      ["Didn't you like the dessert?", ""],
      ["No, I didn't. I didn't like the dessert.", ""],
      ["No, he didn't. He didn't like the dessert.", ""],
      ["", " "],

      ["Where did she go after school?", ""],
      ["Where did you go after school?", ""],
      ["I went to the movies after school.", ""],
      ["She went to the movies after school.", ""]
    ]
  ]
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Negativo", 
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Afirmativo", 
  "columns": []  
},
{
  "title": "Fixacão",
  "columns": []  
},
{
  "title": "Passe para o Interrogativo ",
  "columns": []  
},
{
  "title": "Fixacão", //aqui
  "columns": []  
},
{
  "title": "Answer the Questions", 
  "columns": []  
},
{
  "title": "Questions",
  "columns": [
    [
      ["Did she go to the bank this morning?", ""],
      ["What time did he have lunch yesterday?", ""],
      ["What did she eat for breakfast yesterday?", ""],
      ["Where does he like to go with his / her friends?", ""],
      ["Didn't she know it?", ""],
      ["How many cousins does he have?", ""],
      ["What time does her English class start?", ""],
      ["Does he like his steak rare?", ""],
      ["Does she eat scrambled eggs for breakfast?", ""],
      ["Did he take his friend to the mall?", ""]
    ]
  ]
},
{
  "title": "Responda",
  "type": "listening",
  "segments": [
   
  ]
},
{
  title: "Listening / Change into affirmative:",
  type: "listening",
  segments: [
    { text: " ", start: 1073, end: 1082 }, //https://youtu.be/yeAbAUL7BWs?t=217
    { text: " ", start: 1082, end: 1088 }, //https://youtu.be/yeAbAUL7BWs?t=222
    { text: " ", start: 1088, end: 1093 }, //https://youtu.be/yeAbAUL7BWs?t=229
    { text: " ", start: 1093, end: 1098 }, // https://youtu.be/yeAbAUL7BWs?t=237
    { text: " ", start: 1098, end: 1104 } //https://youtu.be/yeAbAUL7BWs?t=241 
  ]
},
{
  "title": "Culture - Saint Patrick's Day",
  "columns": [
    [
      ["Saint Patrick was a {{very}} popular leader in Ireland {{because}} he brought Christianity to {{that}} country.", "", 1117, 1126],
      ["Americans usually wear green on {{this}} day because Saint Patrick used a “Three Leaf-Clover” to teach the people {{about}} the Trinity.", "", 1126, 1137],
      ["In Chicago, Philadelphia, New York and {{other}} US cities, Americans like to go to big parades {{with}} their families and {{friends}}.", "", 1136, 1146],
      ["They also like to go to {{church}} on Saint Patrick’s Day to {{thank}} this Saint.", "", 1146, 1152]
    ]
  ]
}
];
