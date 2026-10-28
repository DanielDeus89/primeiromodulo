const lessonTitle = "Lesson 80";
const currentVideoId = "Juk-ggobe5Q";

const timeRanges = [

  { start: 0, end: 28 }, 
  { start: 28, end: 57 }, 
  { start: 57, end: 88 }, 
  { start: 97, end: 119 }, 
  { start: 120, end: 147 }, 
  { start: 147, end: 179 }, 
  { start: 179, end: 322 }, //Practice
  { start: 322, end: 372 }, //Change Into - or +
  { start: 372, end: 495 }, //Practice
  { start: 495, end: 546 }, //Change into interrogative
  { start: 546, end: 672 }, //Practice
  { start: 672, end: 720 }, //Short Answers
  { start: 727, end: 818 }, //"Ask your Friend
  { start: 818, end: 944 }, //"Make Questions
  { start: 944, end: 965 }, //"Conversation in Trio 1
  { start: 964, end: 977 }, //"Conversation in Trio 2
  { start: 977, end: 991 }, //"Conversation in Trio 3
  { start: 991, end: 1032 }, //"Speak Right - Pronunciation
  { start: 1032, end: 1069 }, //"Ask your Friend
  { start: 1032, end: 1069 }, //"Ask your Friend
  { start: 1083, end: 1141 }, //"Ask your Friend
  { start: 1141, end: 1163 }, //"Ask your Friend
  { start: 1163, end: 1180 }, //"Listening 1
  { start: 1180, end: 1191 }, //"Listening 2
  { start: 1191, end: 1202 }, //"Listening 3
  { start: 1202, end: 1211 }, //"Listening 4
  { start: 1211, end: 1220 }, //"Listening 5
  { start: 1220, end: 99999 }, //"Ask your Friend
 
 


];

const lessonCards = [



 {
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Did she save a seat for us?", ""],
      ["Did you save a seat for us?", ""],
      ["Yes, I did. I saved a seat for you.", ""],
      ["Yes, she did. She saved a seat for us.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Are these his sunglasses?", ""],
      ["Are these your sunglasses?", ""],
      ["No, they aren't. These are not my sunglasses.", ""],
      ["No, they aren't. These are not his sunglasses.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [
      ["Why did she stop running at the park?", ""],
      ["Why did you stop running at the park?", ""],
      ["I stopped running because now I have to work overtime.", ""],
      ["She had to stop running because now she has to work overtime.", ""]
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},  
   {
   title: "Practice",
    columns: [
      [ 
      ]
    ]
  },
  {
     title: "Change Into - or +",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Practice",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Change into interrogative",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Practice",
    columns: [
      [
      ]
    ]
  },
  {
    title: "Short Answers",
    columns: [
      [
      ]
    ]
  },
{
  "title": "Ask your Friend",
  "columns": [
    [
      ["If he / she prefers to take a walk or to go swimming.", ""],
      ["If he / she is taking some medicine.", ""],
      ["If he / she knows how many states there are in the United States.", ""],
      ["If he / she knows how many countries there are in South America.", ""],
      ["If he / she does the laundry at his / her house.", ""],
      ["If he / she knows anybody who lives in another country.", ""],
      ["How often he / she accesses his / her Facebook account.", ""],
      ["If he / she usually saves the leftovers.", ""],
      ["How often he / she goes to the movie theater.", ""],
      ["What his / her favorite pizza place is.", ""]
    ]
  ]
},
{
  "title": "Make Questions",
  "columns": [
    [
    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Conversation in Trio",
  "columns": [
    [

    ]
  ]
},
{
  "title": "Speak Right - Pronunciation",
  "columns": [
    [
      ["it", "isso / ele / ela (para coisas)"],
      ["live", "viver / morar"],
      ["hit", "bater / atingir"],
      ["sick", "doente"],
      ["ship", "navio"],
      ["sit", "sentar"],
      ["fit", "caber / ajustar / em forma"],
      ["still", "ainda / imóvel / quieto"],
      ["pick", "pegar / escolher"],
      ["lip", "lábio"]
    ],
    [
      ["eat", "comer"],
      ["leave", "partir / deixar"],
      ["heat", "calor / aquecer"],
      ["seek", "procurar / buscar"],
      ["sheep", "ovelha"],
      ["seat", "assento / sentar"],
      ["feet", "pés"],
      ["steal", "roubar"],
      ["peek", "espiar"],
      ["leap", "pular / saltar"]
    ]
  ]
},
{
  "title": "Dialogue & Role Play - Let's Study!",
  "columns": [
    [
      ["Monica:", "", 1036, 1039],
      ["Jennifer:", "", 1039, 1041],
      ["Monica:", "", 1041, 1044],
      ["Jennifer:", "", 1044, 1047],
      ["Monica:", "", 1047, 1049],
      ["Jennifer:", "", 1049, 1052],
      ["Monica:", "", 1051, 1055],
      ["Jennifer:", "", 1055, 1057],
      ["Monica:", "", 1056, 1060],
      ["Jennifer:", "",1059, 1061],
      ["Monica:", "", 1060, 1065],
      ["Jennifer:", "", 1064, 1067],
      ["Monica:", "", 1067, 1069]
    ]
  ]
},
{
  "title": "Dialogue & Role Play - Let's Study!",
  "columns": [
    [
      ["Monica: Jennifer, come to the mall with me.", "", 1036, 1039],
      ["Jennifer: I can't. I have to study.", "", 1039, 1041],
      ["Monica: Come with me now and you can study later.", "", 1041, 1044],
      ["Jennifer: I need to finish my homework for the test tomorrow.", "", 1044, 1047],
      ["Monica: Is there a test tomorrow?", "", 1047, 1049],
      ["Jennifer: Yes, we have an English test tomorrow.", "", 1049, 1052],
      ["Monica: I didn't know we had a test. I should study as well.", "", 1051, 1055],
      ["Jennifer: Would you like to study with me?", "", 1055, 1057],
      ["Monica: I think so. What are you studying now?", "", 1056, 1060],
      ["Jennifer: Spelling.", "",1059, 1061],
      ["Monica: Let me get my books. I will return in an hour. Ok?", "", 1060, 1065],
      ["Jennifer: That sounds good. See you in an hour.", "", 1064, 1067],
      ["Monica: See you in an hour then.", "", 1067, 1069]
    ]
  ]
},
{
  "title": "Listening & Comprehension - Laughter is a therapy",
  "type": "listening",
  "columns": [
    [
      ["Laughter is a universal language.", "", 1089, 1092],,

      ["It's so contagious that you can be in a country where you don't speak the language, and if you start laughing, probably people around you will start laughing too.", "", 1092, 1103],

      ["Why does it feel so good to laugh?", "", 1103, 1106],

      ["{{Every time you laugh}} your body produces a substance called \"endorphin\".", "", 1106, 1111],

      ["This substance makes you feel good.", "", 1111, 1114],

      ["{{If you are}} in a bad mood, you will automatically feel better.", "", 1114, 1119],

      ["So, laughter is a natural antidepressant.", "", 1119, 1122],

      ["{{Don't stop}} your laughter. Laugh a lot each day.", "", 1122, 1127],

      ["It's a great remedy for your health.", "", 1126, 1130],

      ["Laughter {{can help you}} deal with disappointment, frustration or despair.", "", 1130, 1136],

      ["Laughter is contagious. Laughter is a therapy.", "", 1136, 1141]
    ]
  ]
},


{
  "title": "Listen and Answer",
  "type": "listening",
  "segments": [
    { "text": " ", "start": 1141, "end": 1145 },  
    { "text": " ", "start": 1145, "end": 1150 },  
    { "text": " ", "start": 1150, "end": 1154 },  
    { "text": " ", "start": 1154, "end": 1157 },  
    { "text": " ", "start": 1157, "end": 1161 }  
  ]
},
{
  "title": "Listening",
  "columns": [
    [
      ["1. ", ""],
      ["a) She forgot to take the kids to school.", ""],
      ["b) She forgot to pay the bill.", ""],
      ["c) She forgot to buy some food.", ""]
    ]
  ]
},
{
  "title": "Listening",
  "columns": [
    [
      ["2. ", ""],
      ["a) They should give a 20% tip.", ""],
      ["b) They should give a 5% tip.", ""],
      ["c) They should give a 10% tip.", ""]
    ]
  ]
},
{
  "title": "Listening",
  "columns": [
    [
      ["3. ", ""],
      ["a) She needs to talk to the marketing department.", ""],
      ["b) She needs to talk to her boss.", ""],
      ["c) She needs to talk to the IT department.", ""]
    ]
  ]
},
{
  "title": "Listening",
  "columns": [
    [
      ["4. ", ""],
      ["a) She wants to buy a new computer.", ""],
      ["b) She wants to change her internet provider.", ""],
      ["c) She wants to sell her laptop.", ""]
    ]
  ]
},
{
  "title": "Listening",
  "columns": [
    [
      ["5. ", ""],
      ["a) He left his wallet at home.", ""],
      ["b) He left his glasses at home.", ""],
      ["c) He left his sunglasses at home.", ""]
    ]
  ]
},
{
  "title": "Listen and Answer",
  "type": "listening",
  "segments": [
    { "text": " ", "start": 1225, "end": 1229 },  
    { "text": " ", "start": 1229, "end": 1233 },  
    { "text": " ", "start": 1233, "end": 1236 },  
    { "text": " ", "start": 1236, "end": 1240 },  
    { "text": " ", "start": 1240, "end": 1245 }  
  ]
}

];
