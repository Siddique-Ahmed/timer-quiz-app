/*
###############################################################################################
                                LOGIN TO LOGOUT 
#############################################################################################
*/
let logout = document.querySelector(".logout");
let logoutpopup = document.querySelector(".logoutPopUp");
let noBtn = document.querySelector("#btnNO");
let yesBtn = document.querySelector("#btnYES");
let loader = document.querySelector(".quizloader");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  logoutperson();
});
function logoutperson() {
  if ((logoutpopup.style.display = "none")) {
    logoutpopup.style.display = "flex";
  }

  noBtn.addEventListener("click", () => {
    logoutpopup.style.display = "none";
  });
  yesBtn.addEventListener("click", () => {
    loader.style.display = "flex";

    logoutpopup.style.display = "none";
    setTimeout(() => {
      loader.style.display = "none";
      document.location.href = "../login page/loginpage.html";
    }, 1500);
  });
}
/*
###############################################################################################
                              START QUIZ 
#############################################################################################
*/
let start = document.querySelector("#start");
let selectPage = document.querySelector(".selectBox");
let startPage = document.querySelector(".startbox");

start.addEventListener("click", (e) => {
  e.preventDefault();
  selectBox();
});

function selectBox() {
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    selectPage.style.display = "flex";
    startPage.style.display = "none";
  }, 2000);
}

/*
###############################################################################################
                             SELECT QUIZ SECTION
#############################################################################################
*/

// ############ SECTIONS BUTTONS ################ \\
let gk = document.querySelector("#gk");
let iq = document.querySelector("#iq");
let math = document.querySelector("#math");
let isl = document.querySelector("#isl");
let urdu = document.querySelector("#urdu");
let eng = document.querySelector("#eng");
let pk = document.querySelector("#pk");
let cs = document.querySelector("#cs");
let bio = document.querySelector("#bio");
let che = document.querySelector("#che");
let phy = document.querySelector("#phy");

// ############ SECTOINS PAGE ################ \\
let generalKnowledge = document.querySelector("#gksection");
let intellegenceQuitent = document.querySelector("#iqsection");
let mathquiz = document.querySelector("#mathsection");
let islamiyat = document.querySelector("#islsection");
let urduquiz = document.querySelector("#urdusection");
let english = document.querySelector("#engsection");
let pakStudies = document.querySelector("#paksection");
let computerSCience = document.querySelector("#cssection");
let biology = document.querySelector("#biosection");
let chemistry = document.querySelector("#chesection");
let physics = document.querySelector("#physection");

// ############ gk click ################ \\
gk.addEventListener("click", (e) => {
  e.preventDefault();
  gksection();
});

// ############ iq click ################ \\
iq.addEventListener("click", (e) => {
  e.preventDefault();
  iqsection();
});

// ############ math click ################ \\
math.addEventListener("click", (e) => {
  e.preventDefault();
  mathsection();
});

// ############ urdu click ################ \\
urdu.addEventListener("click", (e) => {
  e.preventDefault();
  urdusection();
});

// ############ isl click ################ \\
isl.addEventListener("click", (e) => {
  e.preventDefault();
  islsection();
});

// ############ cs click ################ \\
cs.addEventListener("click", (e) => {
  e.preventDefault();
  cssection();
});

// ############ eng click ################ \\
eng.addEventListener("click", (e) => {
  e.preventDefault();
  engsection();
});

// ############ pk click ################ \\pk
pk.addEventListener("click", (e) => {
  e.preventDefault();
  pksection();
});

// ############ bio click ################ \\bio
bio.addEventListener("click", (e) => {
  e.preventDefault();
  biosection();
});

// ############ che click ################ \\
che.addEventListener("click", (e) => {
  e.preventDefault();
  chesection();
});

// ############ phy click ################ \\
phy.addEventListener("click", (e) => {
  e.preventDefault();
  physection();
});

// ############ gk function ################ \\
function gksection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    generalKnowledge.style.display = "flex";
  }, 2000);
}

// ############ iq function ################ \\
function iqsection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    intellegenceQuitent.style.display = "flex";
  }, 2000);
}

// ############ math function ################ \\
function mathsection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    mathquiz.style.display = "flex";
  }, 2000);
}

// ############ urdu function ################ \\
function urdusection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    urduquiz.style.display = "flex";
  }, 2000);
}

// ############ pak studies function ################ \\
function pksection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    pakStudies.style.display = "flex";
  }, 2000);
}

// ############ isl function ################ \\
function islsection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    islamiyat.style.display = "flex";
  }, 2000);
}

// ############ english function ################ \\
function engsection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    english.style.display = "flex";
  }, 2000);
}

// ############ computer science function ################ \\
function cssection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    computerSCience.style.display = "flex";
  }, 2000);
}

// ############ biology function ################ \\
function biosection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    biology.style.display = "flex";
  }, 2000);
}

// ############ chemistry function ################ \\
function chesection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    chemistry.style.display = "flex";
  }, 2000);
}

// ############ physics function ################ \\
function physection() {
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    physics.style.display = "flex";
  }, 2000);
}
/*
##############################################################################################################################################################################################
                          QUESTION ANSWER SECTION
##############################################################################################################################################################################################*/
/*
###############################################################################################
                            GENERAL KNOWLEDGE QUESTION ANSWER
###############################################################################################*/
const generalKnowledgeQuiz = [
  {
    question: "What is the capital of France?",
    option1: "Paris",
    option2: "London",
    option3: "Berlin",
    option4: "Madrid",
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    option1: "William Shakespeare",
    option2: "Charles Dickens",
    option3: "Mark Twain",
    option4: "Jane Austen",
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    option1: "Earth",
    option2: "Mars",
    option3: "Jupiter",
    option4: "Saturn",
    answer: "Jupiter",
  },
  {
    question: "Who was the first President of the United States?",
    option1: "Abraham Lincoln",
    option2: "George Washington",
    option3: "Thomas Jefferson",
    option4: "John Adams",
    answer: "George Washington",
  },
  {
    question: "What is the chemical symbol for water?",
    option1: "O2",
    option2: "H2O",
    option3: "CO2",
    option4: "NaCl",
    answer: "H2O",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    option1: "Gold",
    option2: "Iron",
    option3: "Diamond",
    option4: "Platinum",
    answer: "Diamond",
  },
  {
    question: "Who painted the Mona Lisa?",
    option1: "Pablo Picasso",
    option2: "Vincent van Gogh",
    option3: "Leonardo da Vinci",
    option4: "Claude Monet",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest country in the world?",
    option1: "Monaco",
    option2: "Vatican City",
    option3: "San Marino",
    option4: "Liechtenstein",
    answer: "Vatican City",
  },
  {
    question: "Who discovered penicillin?",
    option1: "Marie Curie",
    option2: "Albert Einstein",
    option3: "Alexander Fleming",
    option4: "Isaac Newton",
    answer: "Alexander Fleming",
  },
  {
    question: "What is the longest river in the world?",
    option1: "Amazon River",
    option2: "Nile River",
    option3: "Yangtze River",
    option4: "Mississippi River",
    answer: "Nile River",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    option1: "Alan Turing",
    option2: "Bill Gates",
    option3: "Charles Babbage",
    option4: "Steve Jobs",
    answer: "Charles Babbage",
  },
  {
    question: "What is the speed of light?",
    option1: "Approximately 300,000 kilometers per second",
    option2: "Approximately 150,000 kilometers per second",
    option3: "Approximately 100,000 kilometers per second",
    option4: "Approximately 50,000 kilometers per second",
    answer: "Approximately 300,000 kilometers per second",
  },
  {
    question: "Who was the first man to walk on the moon?",
    option1: "Neil Armstrong",
    option2: "Buzz Aldrin",
    option3: "Yuri Gagarin",
    option4: "Michael Collins",
    answer: "Neil Armstrong",
  },
  {
    question: "What is the tallest mountain in the world?",
    option1: "K2",
    option2: "Kangchenjunga",
    option3: "Mount Everest",
    option4: "Lhotse",
    answer: "Mount Everest",
  },
  {
    question: "What is the currency of Japan?",
    option1: "Yuan",
    option2: "Yen",
    option3: "Won",
    option4: "Rupee",
    answer: "Yen",
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    option1: "Emily Brontë",
    option2: "Charlotte Brontë",
    option3: "Jane Austen",
    option4: "Mary Shelley",
    answer: "Jane Austen",
  },
  {
    question: "What is the main ingredient in traditional Japanese sushi?",
    option1: "Rice",
    option2: "Noodles",
    option3: "Bread",
    option4: "Potatoes",
    answer: "Rice",
  },
  {
    question: "Who developed the theory of relativity?",
    option1: "Isaac Newton",
    option2: "Albert Einstein",
    option3: "Galileo Galilei",
    option4: "Niels Bohr",
    answer: "Albert Einstein",
  },
  {
    question: "What is the largest ocean on Earth?",
    option1: "Atlantic Ocean",
    option2: "Indian Ocean",
    option3: "Pacific Ocean",
    option4: "Arctic Ocean",
    answer: "Pacific Ocean",
  },
  {
    question: "What is the capital of Australia?",
    option1: "Sydney",
    option2: "Melbourne",
    option3: "Canberra",
    option4: "Perth",
    answer: "Canberra",
  },
];
// Element selectors
let gknext = document.querySelector("#gknext");
let gkprev = document.querySelector("#gkprev");
let timerSpan = document.querySelector("#gktimer");
let gkQuestion = document.querySelector("#gkquestion");
let gkoptionA = document.querySelector("#gkoptionA");
let gkoptionB = document.querySelector("#gkoptionB");
let gkoptionC = document.querySelector("#gkoptionC");
let gkoptionD = document.querySelector("#gkoptionD");
let scoreBox = document.querySelector(".score");

// Variables
let currentQuestion = 0;
let score = 0;
let questionTimer = 15;
let overallTimer = 15 * 60;
let timerInterval;
let selectedAnswer = null;

// Load question
function loadQuestion() {
  clearSelection();
  gkQuestion.innerHTML = generalKnowledgeQuiz[currentQuestion].question;
  gkoptionA.innerHTML = generalKnowledgeQuiz[currentQuestion].option1;
  gkoptionB.innerHTML = generalKnowledgeQuiz[currentQuestion].option2;
  gkoptionC.innerHTML = generalKnowledgeQuiz[currentQuestion].option3;
  gkoptionD.innerHTML = generalKnowledgeQuiz[currentQuestion].option4;
}
// Clear selected answer
function clearSelection() {
  selectedAnswer = null;
  document.querySelectorAll(".gkanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// Select answer
function selectAnswer(button, answer) {
  clearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  selectedAnswer = answer;
}
// Check answer and calculate score
function checkAnswer() {
  if (selectedAnswer === generalKnowledgeQuiz[currentQuestion].answer) {
    score++;
  }
}
// Next question
function nextQuestion() {
  checkAnswer();
  if (currentQuestion < generalKnowledgeQuiz.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    endQuiz();
  }
}
// Previous question
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}
// Timer
function updateTimers() {
  overallTimer--;
  timerSpan.innerHTML = formatTime(overallTimer);

  if (overallTimer <= 0) {
    endQuiz();
  }
}
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
// End quiz
function endQuiz() {
  clearInterval(timerInterval);
  document.querySelector(".quizbtn").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    scoreBox.style.display = "flex";
    scoreBox.querySelector("h1").innerHTML = score;
  }, 1500);
}
// Initialize Quiz
function startQuiz() {
  loadQuestion();
  timerSpan.innerHTML = formatTime(overallTimer);
  timerInterval = setInterval(updateTimers, 1000);

  let buttons = document.querySelectorAll(".gkanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectAnswer(button, button.innerHTML);
    });
  });

  gknext.addEventListener("click", nextQuestion);
  gkprev.addEventListener("click", prevQuestion);
}
// Start the quiz
startQuiz();

/*
###############################################################################################
                            INTELLEGENCE QUOTIENT QUESTION ANSWER
###############################################################################################*/

const intelligenceQuiz = [
  {
    question: "What number should come next in the series? 2, 3, 5, 8, 12, ...",
    option1: "16",
    option2: "17",
    option3: "18",
    option4: "19",
    answer: "17",
  },
  {
    question: "Which word does not belong with the others?",
    option1: "Book",
    option2: "Index",
    option3: "Glossary",
    option4: "Chapter",
    answer: "Book",
  },
  {
    question: "Which of the following is least like the others?",
    option1: "Dog",
    option2: "Mouse",
    option3: "Lion",
    option4: "Snake",
    answer: "Snake",
  },
  {
    question: "Which of the following numbers is least like the others?",
    option1: "8",
    option2: "12",
    option3: "18",
    option4: "36",
    answer: "8",
  },
  {
    question:
      "Which of the following can be arranged into a 5-letter English word?",
    option1: "H R G S T",
    option2: "R I L S A",
    option3: "T O O M T",
    option4: "W Q R G S",
    answer: "R I L S A", // SALIR
  },
  {
    question: "Which number is the odd one out?",
    option1: "11",
    option2: "23",
    option3: "35",
    option4: "47",
    answer: "35",
  },
  {
    question:
      "Which of the following numbers comes next in the series? 3, 6, 11, 18, ...",
    option1: "27",
    option2: "28",
    option3: "29",
    option4: "30",
    answer: "27",
  },
  {
    question: "Which word is the odd one out?",
    option1: "Hate",
    option2: "Love",
    option3: "Admire",
    option4: "Adore",
    answer: "Hate",
  },
  {
    question: "What comes next in the series? 1, 1, 2, 3, 5, ...",
    option1: "8",
    option2: "7",
    option3: "6",
    option4: "5",
    answer: "8",
  },
  {
    question: "What is the next number in the sequence? 2, 4, 8, 16, ...",
    option1: "30",
    option2: "32",
    option3: "24",
    option4: "18",
    answer: "32",
  },
  {
    question: "Which letter is next in the series? B, E, H, K, ...",
    option1: "M",
    option2: "N",
    option3: "P",
    option4: "Q",
    answer: "N",
  },
  {
    question:
      "Which number should come next in the series? 1, 4, 9, 16, 25, ...",
    option1: "36",
    option2: "49",
    option3: "64",
    option4: "81",
    answer: "36",
  },
  {
    question: "Which number is the odd one out?",
    option1: "21",
    option2: "25",
    option3: "33",
    option4: "49",
    answer: "33",
  },
  {
    question: "What is the next number in the series? 7, 14, 21, 28, ...",
    option1: "35",
    option2: "36",
    option3: "40",
    option4: "42",
    answer: "35",
  },
  {
    question: "Which number is the odd one out?",
    option1: "3",
    option2: "7",
    option3: "9",
    option4: "15",
    answer: "9",
  },
  {
    question:
      "Which number should come next in the series? 10, 20, 30, 40, ...",
    option1: "50",
    option2: "60",
    option3: "70",
    option4: "80",
    answer: "50",
  },
  {
    question: "Which number is the odd one out?",
    option1: "11",
    option2: "13",
    option3: "17",
    option4: "19",
    answer: "19",
  },
  {
    question: "Which number should come next in the series? 3, 6, 12, 24, ...",
    option1: "30",
    option2: "36",
    option3: "48",
    option4: "60",
    answer: "48",
  },
  {
    question: "Which word is the odd one out?",
    option1: "Blue",
    option2: "Yellow",
    option3: "Green",
    option4: "Red",
    answer: "Yellow",
  },
  {
    question: "Which letter is next in the series? D, F, H, J, ...",
    option1: "K",
    option2: "L",
    option3: "M",
    option4: "N",
    answer: "L",
  },
];

// Element selectors
let iqnext = document.querySelector("#iqnext");
let iqprev = document.querySelector("#iqprev");
let iqtimerSpan = document.querySelector("#iqtimer");
let iqQuestion = document.querySelector("#iqquestion");
let iqoptionA = document.querySelector("#iqoptionA");
let iqoptionB = document.querySelector("#iqoptionB");
let iqoptionC = document.querySelector("#iqoptionC");
let iqoptionD = document.querySelector("#iqoptionD");
let iqscoreBox = document.querySelector(".iqscore");

// Variables
let iqcurrentQuestion = 0;
let iqscore = 0;
let iqquestionTimer = 15;
let iqoverallTimer = 15 * 60;
let iqtimerInterval;
let iqselectedAnswer = null;

// Load question
function iqloadQuestion() {
  iqclearSelection();
  iqQuestion.innerHTML = intelligenceQuiz[iqcurrentQuestion].question;
  iqoptionA.innerHTML = intelligenceQuiz[iqcurrentQuestion].option1;
  iqoptionB.innerHTML = intelligenceQuiz[iqcurrentQuestion].option2;
  iqoptionC.innerHTML = intelligenceQuiz[iqcurrentQuestion].option3;
  iqoptionD.innerHTML = intelligenceQuiz[iqcurrentQuestion].option4;
}
// Clear selected answer
function iqclearSelection() {
  iqselectedAnswer = null;
  document.querySelectorAll(".iqanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// Select answer
function iqselectAnswer(button, answer) {
  iqclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  iqselectedAnswer = answer;
}
// Check answer and calculate score
function iqcheckAnswer() {
  if (iqselectedAnswer === intelligenceQuiz[iqcurrentQuestion].answer) {
    iqscore++;
  }
}
// Next question
function iqnextQuestion() {
  iqcheckAnswer();
  if (iqcurrentQuestion < intelligenceQuiz.length - 1) {
    iqcurrentQuestion++;
    iqloadQuestion();
  } else {
    iqendQuiz();
  }
}
// Previous question
function iqprevQuestion() {
  if (iqcurrentQuestion > 0) {
    iqcurrentQuestion--;
    iqloadQuestion();
  }
}
// Timer
function iqupdateTimers() {
  iqoverallTimer--;
  iqtimerSpan.innerHTML = iqformatTime(iqoverallTimer);

  if (iqoverallTimer <= 0) {
    iqendQuiz();
  }
}
function iqformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
// End quiz
function iqendQuiz() {
  clearInterval(iqtimerInterval);
  document.querySelector(".quizbtn").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    iqscoreBox.style.display = "flex";
    iqscoreBox.querySelector("h1").innerHTML = iqscore;
  }, 1500);
}
// Initialize Quiz
function iqstartQuiz() {
  iqloadQuestion();
  iqtimerSpan.innerHTML = iqformatTime(iqoverallTimer);
  iqtimerInterval = setInterval(iqupdateTimers, 1000);

  let buttons = document.querySelectorAll(".iqanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      iqselectAnswer(button, button.innerHTML);
    });
  });

  iqnext.addEventListener("click", iqnextQuestion);
  iqprev.addEventListener("click", iqprevQuestion);
}
// Start the quiz
iqstartQuiz();

/*
##############################################################################################
                            MATHEMATICS QUESTION ANSWER
##############################################################################################*/

const mathQuiz = [
  {
    question: "What is 2 + 2?",
    option1: "3",
    option2: "4",
    option3: "5",
    option4: "6",
    answer: "4",
  },
  {
    question: "What is the square root of 16?",
    option1: "2",
    option2: "3",
    option3: "4",
    option4: "5",
    answer: "4",
  },
  {
    question: "What is 5 * 6?",
    option1: "11",
    option2: "30",
    option3: "35",
    option4: "25",
    answer: "30",
  },
  {
    question: "What is the value of π (pi) approximately?",
    option1: "3.14",
    option2: "2.17",
    option3: "3.71",
    option4: "2.71",
    answer: "3.14",
  },
  {
    question: "What is 12 / 4?",
    option1: "2",
    option2: "3",
    option3: "4",
    option4: "5",
    answer: "3",
  },
  {
    question: "What is the derivative of x^2?",
    option1: "x",
    option2: "2x",
    option3: "x^2",
    option4: "2",
    answer: "2x",
  },
  {
    question: "What is the integral of 1/x?",
    option1: "ln(x) + C",
    option2: "e^x + C",
    option3: "x^2/2 + C",
    option4: "x + C",
    answer: "ln(x) + C",
  },
  {
    question: "What is the sum of angles in a triangle?",
    option1: "90 degrees",
    option2: "180 degrees",
    option3: "360 degrees",
    option4: "270 degrees",
    answer: "180 degrees",
  },
  {
    question: "What is 10^2?",
    option1: "10",
    option2: "20",
    option3: "100",
    option4: "1000",
    answer: "100",
  },
  {
    question: "What is the cube root of 27?",
    option1: "2",
    option2: "3",
    option3: "4",
    option4: "5",
    answer: "3",
  },
  {
    question: "What is 7 + 8?",
    option1: "13",
    option2: "14",
    option3: "15",
    option4: "16",
    answer: "15",
  },
  {
    question: "What is 9 - 3?",
    option1: "5",
    option2: "6",
    option3: "7",
    option4: "8",
    answer: "6",
  },
  {
    question: "What is the factorial of 4 (4!)?",
    option1: "12",
    option2: "16",
    option3: "24",
    option4: "32",
    answer: "24",
  },
  {
    question: "What is 15% of 200?",
    option1: "25",
    option2: "30",
    option3: "35",
    option4: "40",
    answer: "30",
  },
  {
    question: "What is 5^3?",
    option1: "25",
    option2: "75",
    option3: "125",
    option4: "150",
    answer: "125",
  },
  {
    question: "What is the value of the golden ratio (φ)?",
    option1: "1.414",
    option2: "1.618",
    option3: "2.718",
    option4: "3.142",
    answer: "1.618",
  },
  {
    question: "What is the area of a circle with radius 3?",
    option1: "9π",
    option2: "18π",
    option3: "27π",
    option4: "36π",
    answer: "9π",
  },
  {
    question: "What is the value of log(100)?",
    option1: "0",
    option2: "1",
    option3: "2",
    option4: "3",
    answer: "2",
  },
  {
    question: "What is the value of e (Euler's Number)?",
    option1: "2.71",
    option2: "2.72",
    option3: "2.73",
    option4: "2.74",
    answer: "2.71",
  },
  {
    question: "What is the sum of the first 10 natural numbers?",
    option1: "45",
    option2: "50",
    option3: "55",
    option4: "60",
    answer: "55",
  },
];

// Element selectors
let mtnext = document.querySelector("#mtnext");
let mtprev = document.querySelector("#mtprev");
let mttimerSpan = document.querySelector("#mttimer");
let mtQuestion = document.querySelector("#mtquestion");
let mtoptionA = document.querySelector("#mtoptionA");
let mtoptionB = document.querySelector("#mtoptionB");
let mtoptionC = document.querySelector("#mtoptionC");
let mtoptionD = document.querySelector("#mtoptionD");
let mtscoreBox = document.querySelector(".mtscore");

// Variables
let mtcurrentQuestion = 0;
let mtscore = 0;
let mtquestionTimer = 15;
let mtoverallTimer = 15 * 60;
let mttimerInterval;
let mtselectedAnswer = null;

// load question
function mtloadQuestion() {
  mtclearSelection();
  mtQuestion.innerHTML = mathQuiz[mtcurrentQuestion].question;
  mtoptionA.innerHTML = mathQuiz[mtcurrentQuestion].option1;
  mtoptionB.innerHTML = mathQuiz[mtcurrentQuestion].option2;
  mtoptionC.innerHTML = mathQuiz[mtcurrentQuestion].option3;
  mtoptionD.innerHTML = mathQuiz[mtcurrentQuestion].option4;
}
// math clear selection
function mtclearSelection() {
  mtselectedAnswer = null;
  document.querySelectorAll(".mtanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// math select answer
function mtselectanswer(button, answer) {
  mtclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  mtselectedAnswer = answer;
}
// check answer and count score
function mtCheckAnswer() {
  if (mtselectedAnswer === mathQuiz[mtcurrentQuestion].answer) {
    mtscore++;
  }
}
// math next question
function mtNextQuestion() {
  mtCheckAnswer();
  if (mtcurrentQuestion < mathQuiz.length - 1) {
    mtcurrentQuestion++;
    mtloadQuestion();
  } else {
    mtEndQuiz();
  }
}
// math previous question
function mtprevQuestion() {
  if (mtcurrentQuestion > 0) {
    mtcurrentQuestion--;
    mtloadQuestion();
  }
}
// math timer updater
function mtTimeUpdate() {
  mtoverallTimer--;
  mttimerSpan.innerHTML = mtformatTime(mtoverallTimer);
  if (mtoverallTimer <= 0) {
    mtEndQuiz();
  }
}
function mtformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// math end quiz
function mtEndQuiz() {
  clearInterval(mttimerInterval);
  document.querySelector(".mtquizbtn").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    mtscoreBox.style.display = "flex";
    mtscoreBox.querySelector("h1").innerHTML = mtscore;
  }, 1500);
}
// start quiz
function mtstartQuiz() {
  mtloadQuestion();
  mttimerSpan.innerHTML = mtformatTime(mtoverallTimer);
  mttimerInterval = setInterval(mtTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".mtanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      mtselectanswer(button, button.innerHTML);
    });
  });

  mtnext.addEventListener("click", mtNextQuestion);
  mtprev.addEventListener("click", mtprevQuestion);
}
// Start the quiz
mtstartQuiz();

/*
##############################################################################################
                            ISLAMIYAT QUESTION ANSWER
##############################################################################################*/

const islamiyatQuiz = [
  {
    question: "What is the first Kalma of Islam?",
    option1: "La ilaha illallah Muhammadur Rasoolullah",
    option2: "Subhanallah",
    option3: "Alhamdulillah",
    option4: "Allahu Akbar",
    answer: "La ilaha illallah Muhammadur Rasoolullah",
  },
  {
    question: "How many sections (paras) does the Quran have?",
    option1: "20",
    option2: "30",
    option3: "40",
    option4: "50",
    answer: "30",
  },
  {
    question: "In which city was Prophet Muhammad (SAW) born?",
    option1: "Medina",
    option2: "Mecca",
    option3: "Taif",
    option4: "Jerusalem",
    answer: "Mecca",
  },
  {
    question: "Which pillar of Islam is Hajj?",
    option1: "First",
    option2: "Second",
    option3: "Third",
    option4: "Fifth",
    answer: "Fifth",
  },
  {
    question: "What is the longest surah in the Quran?",
    option1: "Surah Yaseen",
    option2: "Surah Al-Baqarah",
    option3: "Surah Al-Imran",
    option4: "Surah Al-Fatiha",
    answer: "Surah Al-Baqarah",
  },
  {
    question: "How many times is Salat (prayer) performed in a day?",
    option1: "Two",
    option2: "Three",
    option3: "Four",
    option4: "Five",
    answer: "Five",
  },
  {
    question: "Which month is Ramadan in the Islamic calendar?",
    option1: "First",
    option2: "Ninth",
    option3: "Twelfth",
    option4: "Eleventh",
    answer: "Ninth",
  },
  {
    question: "Which angel brought the revelations to Prophet Muhammad (SAW)?",
    option1: "Angel Michael",
    option2: "Angel Israfil",
    option3: "Angel Jibra'il (Gabriel)",
    option4: "Angel Azrael",
    answer: "Angel Jibra'il (Gabriel)",
  },
  {
    question: "What is the night called when the Quran was first revealed?",
    option1: "Laylat al-Qadr (Night of Power)",
    option2: "Laylat al-Miraj (Night of Ascension)",
    option3: "Laylat al-Bara'at (Night of Forgiveness)",
    option4: "Laylat al-Qadr (Night of Power)",
    answer: "Laylat al-Qadr (Night of Power)",
  },
  {
    question: "Who was the first Caliph of Islam after Prophet Muhammad (SAW)?",
    option1: "Umar ibn al-Khattab",
    option2: "Ali ibn Abi Talib",
    option3: "Uthman ibn Affan",
    option4: "Abu Bakr al-Siddiq",
    answer: "Abu Bakr al-Siddiq",
  },
  {
    question: "What is the holy book of Islam?",
    option1: "Bible",
    option2: "Torah",
    option3: "Quran",
    option4: "Vedas",
    answer: "Quran",
  },
  {
    question: "What is the term for charity in Islam?",
    option1: "Zakat",
    option2: "Sadaqah",
    option3: "Khums",
    option4: "Fitra",
    answer: "Zakat",
  },
  {
    question: "Which direction do Muslims face during prayer?",
    option1: "East",
    option2: "West",
    option3: "North",
    option4: "Qibla (towards Mecca)",
    answer: "Qibla (towards Mecca)",
  },
  {
    question: "What is the Islamic term for the pilgrimage to Mecca?",
    option1: "Umrah",
    option2: "Hajj",
    option3: "Jihad",
    option4: "Tawaf",
    answer: "Hajj",
  },
  {
    question: "Who was the mother of Prophet Isa (Jesus) in Islam?",
    option1: "Hajar",
    option2: "Asiya",
    option3: "Maryam (Mary)",
    option4: "Khadijah",
    answer: "Maryam (Mary)",
  },
  {
    question: "How many chapters (surahs) are in the Quran?",
    option1: "114",
    option2: "86",
    option3: "99",
    option4: "124",
    answer: "114",
  },
  {
    question:
      "What is the term for the sayings and actions of Prophet Muhammad (SAW)?",
    option1: "Hadith",
    option2: "Sunnah",
    option3: "Sharia",
    option4: "Fiqh",
    answer: "Hadith",
  },
  {
    question: "What is the significance of Friday in Islam?",
    option1: "Day of Rest",
    option2: "Day of Worship",
    option3: "Day of Eid",
    option4: "Day of Judgment",
    answer: "Day of Worship",
  },
  {
    question: "What is the Arabic word for God?",
    option1: "Deus",
    option2: "Allah",
    option3: "Elohim",
    option4: "Bhagwan",
    answer: "Allah",
  },
  {
    question: "Who was the last Prophet in Islam?",
    option1: "Prophet Isa (Jesus)",
    option2: "Prophet Musa (Moses)",
    option3: "Prophet Ibrahim (Abraham)",
    option4: "Prophet Muhammad (SAW)",
    answer: "Prophet Muhammad (SAW)",
  },
];

// Element selectors
let islnext = document.querySelector("#isnext");
let islprev = document.querySelector("#isprev");
let isltimerSpan = document.querySelector("#istimer");
let islQuestion = document.querySelector("#isquestion");
let isloptionA = document.querySelector("#isoptionA");
let isloptionB = document.querySelector("#isoptionB");
let isloptionC = document.querySelector("#isoptionC");
let isloptionD = document.querySelector("#isoptionD");
let islscoreBox = document.querySelector(".islscore");

// Variables
let islcurrentQuestion = 0;
let islscore = 0;
let islquestionTimer = 15;
let isloverallTimer = 15 * 60;
let isltimerInterval;
let islselectedAnswer = null;

// islamiyat load Question
function islloadQuestion() {
  islQuestion.innerHTML = islamiyatQuiz[islcurrentQuestion].question;
  isloptionA.innerHTML = islamiyatQuiz[islcurrentQuestion].option1;
  isloptionB.innerHTML = islamiyatQuiz[islcurrentQuestion].option2;
  isloptionC.innerHTML = islamiyatQuiz[islcurrentQuestion].option3;
  isloptionD.innerHTML = islamiyatQuiz[islcurrentQuestion].option4;
}
// islamiyat clear selection
function islclearSelection() {
  islselectedAnswer = null;
  document.querySelectorAll(".islanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// islamiyat select answer
function islselectanswer(button, answer) {
  islclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  islselectedAnswer = answer;
}
// check answer and count score
function islCheckAnswer() {
  if (islselectedAnswer === islamiyatQuiz[islcurrentQuestion].answer) {
    islscore++;
  }
}
// islamiyat next question
function islNextQuestion() {
  islCheckAnswer();
  if (islcurrentQuestion < islamiyatQuiz.length - 1) {
    islcurrentQuestion++;
    islloadQuestion();
  } else {
    islEndQuiz();
  }
}
// islamiyat previous question
function islprevQuestion() {
  if (islcurrentQuestion > 0) {
    islcurrentQuestion--;
    islloadQuestion();
  }
}
// islamiyat timer updater
function islTimeUpdate() {
  isloverallTimer--;
  isltimerSpan.innerHTML = islformatTime(isloverallTimer);
  if (isloverallTimer <= 0) {
    islEndQuiz();
  }
}
function islformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// islamiyat end quiz
function islEndQuiz() {
  clearInterval(isltimerInterval);
  document.querySelector(".islanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    islscoreBox.style.display = "flex";
    islscoreBox.querySelector("h1").innerHTML = islscore;
  }, 1500);
}
// start quiz
function islstartQuiz() {
  islloadQuestion();
  isltimerSpan.innerHTML = islformatTime(isloverallTimer);
  isltimerInterval = setInterval(islTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".islanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      islselectanswer(button, button.innerHTML);
    });
  });

  islnext.addEventListener("click", islNextQuestion);
  islprev.addEventListener("click", islprevQuestion);
}
// Start the quiz
islstartQuiz();

/*
##############################################################################################
                            URDU QUESTION ANSWER
##############################################################################################*/

const urduQuiz = [
  {
    question: "اردو زبان کا پہلا حرف کون سا ہے؟",
    option1: "الف",
    option2: "ب",
    option3: "پ",
    option4: "ت",
    answer: "الف",
  },
  {
    question: "اردو کا قومی شاعر کون ہے؟",
    option1: "میر تقی میر",
    option2: "علامہ اقبال",
    option3: "مرزا غالب",
    option4: "احمد فراز",
    answer: "علامہ اقبال",
  },
  {
    question: "پاکستان کی قومی زبان کون سی ہے؟",
    option1: "پنجابی",
    option2: "سندھی",
    option3: "اردو",
    option4: "بلوچی",
    answer: "اردو",
  },
  {
    question: "اردو ادب میں داستان کے موجد کون ہیں؟",
    option1: "میر امن",
    option2: "پریم چند",
    option3: "منشی نول کشور",
    option4: "مولوی نذیر احمد",
    answer: "میر امن",
  },
  {
    question: "اردو کا سب سے پہلا ناول کون سا ہے؟",
    option1: "امراؤ جان ادا",
    option2: "فسانہ آزاد",
    option3: "بنات النعش",
    option4: "آب حیات",
    answer: "فسانہ آزاد",
  },
  {
    question: "پاکستان کا سب سے بڑا شہر کون سا ہے؟",
    option1: "لاہور",
    option2: "کراچی",
    option3: "اسلام آباد",
    option4: "پشاور",
    answer: "کراچی",
  },
  {
    question: "اردو شاعری کی سب سے مشہور صنف کون سی ہے؟",
    option1: "غزل",
    option2: "نظم",
    option3: "قصیدہ",
    option4: "رباعی",
    answer: "غزل",
  },
  {
    question: "مرزا غالب کا اصل نام کیا تھا؟",
    option1: "مرزا اسد اللہ خان",
    option2: "مرزا تقی خان",
    option3: "مرزا فتح اللہ خان",
    option4: "مرزا شفیع اللہ خان",
    answer: "مرزا اسد اللہ خان",
  },
  {
    question: "اردو کا پہلا اخبار کون سا تھا؟",
    option1: "اردو اخبار",
    option2: "جام جہاں نما",
    option3: "اودھ پنچ",
    option4: "زمیندار",
    answer: "جام جہاں نما",
  },
  {
    question: "اردو زبان میں لفظ 'کتاب' کا مطلب کیا ہے؟",
    option1: "پنسل",
    option2: "کاغذ",
    option3: "قلم",
    option4: "کتاب",
    answer: "کتاب",
  },
  {
    question: "اردو کا پہلا شاعر کون ہے؟",
    option1: "میر تقی میر",
    option2: "ولی دکنی",
    option3: "مرزا غالب",
    option4: "فراق گورکھپوری",
    answer: "ولی دکنی",
  },
  {
    question: "پاکستان کی سب سے مشہور ندی کون سی ہے؟",
    option1: "سندھ ندی",
    option2: "راوی ندی",
    option3: "چناب ندی",
    option4: "جہلم ندی",
    answer: "سندھ ندی",
  },
  {
    question: "اردو کے مشہور افسانہ نگار کون ہیں؟",
    option1: "منٹو",
    option2: "پریم چند",
    option3: "قرۃ العین حیدر",
    option4: "تمام",
    answer: "منٹو",
  },
  {
    question: "اردو کا پہلا افسانہ کون سا ہے؟",
    option1: "اندر سبھا",
    option2: "کفن",
    option3: "حاجرہ",
    option4: "افسانہ حویلی",
    answer: "کفن",
  },
  {
    question: "اردو کا سب سے مشہور مزاحیہ شاعر کون ہے؟",
    option1: "مرزا غالب",
    option2: "پطرس بخاری",
    option3: "ابن انشا",
    option4: "منور رانا",
    answer: "ابن انشا",
  },
  {
    question: "پاکستان کا قومی کھیل کون سا ہے؟",
    option1: "کرکٹ",
    option2: "ہاکی",
    option3: "فٹبال",
    option4: "سکواش",
    answer: "ہاکی",
  },
  {
    question: "پاکستان کا قومی پھول کون سا ہے؟",
    option1: "گلاب",
    option2: "چمبیلی",
    option3: "کنول",
    option4: "گل داوودی",
    answer: "چمبیلی",
  },
  {
    question: "اردو میں 'صبح' کا مطلب کیا ہے؟",
    option1: "شام",
    option2: "رات",
    option3: "دوپہر",
    option4: "صبح",
    answer: "صبح",
  },
  {
    question: "کس شاعر کو 'شاعر مشرق' کہا جاتا ہے؟",
    option1: "مرزا غالب",
    option2: "علامہ اقبال",
    option3: "فیض احمد فیض",
    option4: "جون ایلیا",
    answer: "علامہ اقبال",
  },
  {
    question: "پاکستان کا قومی دن کون سا ہے؟",
    option1: "23 مارچ",
    option2: "14 اگست",
    option3: "6 ستمبر",
    option4: "25 دسمبر",
    answer: "14 اگست",
  },
];

// Element selectors
let urnext = document.querySelector("#urnext");
let urprev = document.querySelector("#urprev");
let urtimerSpan = document.querySelector("#urtimer");
let urQuestion = document.querySelector("#urquestion");
let uroptionA = document.querySelector("#uroptionA");
let uroptionB = document.querySelector("#uroptionB");
let uroptionC = document.querySelector("#uroptionC");
let uroptionD = document.querySelector("#uroptionD");
let urscoreBox = document.querySelector(".urscore");

// Variables
let urcurrentQuestion = 0;
let urscore = 0;
let urquestionTimer = 15;
let uroverallTimer = 15 * 60;
let urtimerInterval;
let urselectedAnswer = null;

// URDU load Question
function urloadQuestion() {
  urQuestion.innerHTML = urduQuiz[urcurrentQuestion].question;
  uroptionA.innerHTML = urduQuiz[urcurrentQuestion].option1;
  uroptionB.innerHTML = urduQuiz[urcurrentQuestion].option2;
  uroptionC.innerHTML = urduQuiz[urcurrentQuestion].option3;
  uroptionD.innerHTML = urduQuiz[urcurrentQuestion].option4;
}
// URDU clear selection
function urclearSelection() {
  urselectedAnswer = null;
  document.querySelectorAll(".uranswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// URDU select answer
function urselectanswer(button, answer) {
  urclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  urselectedAnswer = answer;
}
// check answer and count score
function urCheckAnswer() {
  if (urselectedAnswer === urduQuiz[urcurrentQuestion].answer) {
    urscore++;
  }
}
// URDU next question
function urNextQuestion() {
  urCheckAnswer();
  if (urcurrentQuestion < urduQuiz.length - 1) {
    urcurrentQuestion++;
    urloadQuestion();
  } else {
    urEndQuiz();
  }
}
// URDU previous question
function urprevQuestion() {
  if (urcurrentQuestion > 0) {
    urcurrentQuestion--;
    urloadQuestion();
  }
}
// URDU timer updater
function urTimeUpdate() {
  uroverallTimer--;
  urtimerSpan.innerHTML = urformatTime(uroverallTimer);
  if (uroverallTimer <= 0) {
    urEndQuiz();
  }
}
function urformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// URDU end quiz
function urEndQuiz() {
  clearInterval(urtimerInterval);
  document.querySelector(".uranswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    urscoreBox.style.display = "flex";
    urscoreBox.querySelector("h1").innerHTML = urscore;
  }, 1500);
}
// start quiz
function urstartQuiz() {
  urloadQuestion();
  urtimerSpan.innerHTML = urformatTime(uroverallTimer);
  urtimerInterval = setInterval(urTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".uranswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      urselectanswer(button, button.innerHTML);
    });
  });

  urnext.addEventListener("click", urNextQuestion);
  urprev.addEventListener("click", urprevQuestion);
}
// Start the quiz
urstartQuiz();

/*
##############################################################################################
                            ENGLISH QUESTION ANSWER
##############################################################################################*/

const englishQuiz = [
  {
    question: "What is the first letter of the English alphabet?",
    option1: "A",
    option2: "B",
    option3: "C",
    option4: "D",
    answer: "A",
  },
  {
    question: "Who is the author of 'Romeo and Juliet'?",
    option1: "Charles Dickens",
    option2: "William Shakespeare",
    option3: "Jane Austen",
    option4: "Mark Twain",
    answer: "William Shakespeare",
  },
  {
    question: "What is the national language of England?",
    option1: "French",
    option2: "Spanish",
    option3: "German",
    option4: "English",
    answer: "English",
  },
  {
    question: "Who wrote the famous book '1984'?",
    option1: "George Orwell",
    option2: "J.K. Rowling",
    option3: "Ernest Hemingway",
    option4: "F. Scott Fitzgerald",
    answer: "George Orwell",
  },
  {
    question: "What is the longest word in the English language?",
    option1: "Pneumonoultramicroscopicsilicovolcanoconiosis",
    option2: "Antidisestablishmentarianism",
    option3: "Floccinaucinihilipilification",
    option4: "Supercalifragilisticexpialidocious",
    answer: "Pneumonoultramicroscopicsilicovolcanoconiosis",
  },
  {
    question: "What is the capital city of the United Kingdom?",
    option1: "New York",
    option2: "London",
    option3: "Paris",
    option4: "Berlin",
    answer: "London",
  },
  {
    question: "What is the most popular genre of literature?",
    option1: "Science Fiction",
    option2: "Romance",
    option3: "Mystery",
    option4: "Fantasy",
    answer: "Fantasy",
  },
  {
    question: "Who is the main character in the novel 'Moby Dick'?",
    option1: "Captain Ahab",
    option2: "Ishmael",
    option3: "Queequeg",
    option4: "Starbuck",
    answer: "Captain Ahab",
  },
  {
    question: "What is the first book of the Bible?",
    option1: "Genesis",
    option2: "Exodus",
    option3: "Leviticus",
    option4: "Numbers",
    answer: "Genesis",
  },
  {
    question:
      "What is the term for a word that is opposite in meaning to another word?",
    option1: "Synonym",
    option2: "Antonym",
    option3: "Homonym",
    option4: "Acronym",
    answer: "Antonym",
  },
  {
    question: "What is the name of Sherlock Holmes' loyal friend?",
    option1: "Dr. Watson",
    option2: "Mr. Smith",
    option3: "Inspector Lestrade",
    option4: "Professor Moriarty",
    answer: "Dr. Watson",
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    option1: "Charlotte Bronte",
    option2: "Jane Austen",
    option3: "Emily Bronte",
    option4: "Mary Shelley",
    answer: "Jane Austen",
  },
  {
    question: "What is the plural form of 'mouse'?",
    option1: "Mouses",
    option2: "Mice",
    option3: "Mousees",
    option4: "Mices",
    answer: "Mice",
  },
  {
    question: "What is the main ingredient in a traditional English breakfast?",
    option1: "Rice",
    option2: "Bacon",
    option3: "Pasta",
    option4: "Cereal",
    answer: "Bacon",
  },
  {
    question:
      "What is the term for a group of words that does not form a complete sentence?",
    option1: "Paragraph",
    option2: "Phrase",
    option3: "Clause",
    option4: "Sentence Fragment",
    answer: "Sentence Fragment",
  },
  {
    question: "What is the smallest unit of language that carries meaning?",
    option1: "Phoneme",
    option2: "Morpheme",
    option3: "Syllable",
    option4: "Word",
    answer: "Morpheme",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    option1: "Harper Lee",
    option2: "Mark Twain",
    option3: "F. Scott Fitzgerald",
    option4: "Ernest Hemingway",
    answer: "Harper Lee",
  },
  {
    question: "What is the study of the origin of words called?",
    option1: "Phonetics",
    option2: "Semantics",
    option3: "Syntax",
    option4: "Etymology",
    answer: "Etymology",
  },
  {
    question:
      "What is the term for a word that sounds the same as another word but has a different meaning?",
    option1: "Homophone",
    option2: "Synonym",
    option3: "Antonym",
    option4: "Homograph",
    answer: "Homophone",
  },
  {
    question:
      "What is the name of the famous English playwright known as 'The Bard'?",
    option1: "William Shakespeare",
    option2: "Christopher Marlowe",
    option3: "Ben Jonson",
    option4: "John Milton",
    answer: "William Shakespeare",
  },
];

// Element selectors
let engnext = document.querySelector("#ennext");
let engprev = document.querySelector("#enprev");
let engtimerSpan = document.querySelector("#entimer");
let engQuestion = document.querySelector("#enquestion");
let engoptionA = document.querySelector("#enoptionA");
let engoptionB = document.querySelector("#enoptionB");
let engoptionC = document.querySelector("#enoptionC");
let engoptionD = document.querySelector("#enoptionD");
let engscoreBox = document.querySelector(".enscore");

// Variables
let engscore = 0;
let engcurrentQuestion = 0;
let engquestionTimer = 15;
let engoverallTimer = 15 * 60;
let engtimerInterval;
let engselectedAnswer = null;

// ENGLISH load Question
function engloadQuestion() {
  engQuestion.innerHTML = englishQuiz[engcurrentQuestion].question;
  engoptionA.innerHTML = englishQuiz[engcurrentQuestion].option1;
  engoptionB.innerHTML = englishQuiz[engcurrentQuestion].option2;
  engoptionC.innerHTML = englishQuiz[engcurrentQuestion].option3;
  engoptionD.innerHTML = englishQuiz[engcurrentQuestion].option4;
}
// ENGLISH clear selection
function engclearSelection() {
  engselectedAnswer = null;
  document.querySelectorAll(".enanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// ENGLISH select answer
function engselectanswer(button, answer) {
  engclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  engselectedAnswer = answer;
}
// check answer and count score
function engCheckAnswer() {
  if (engselectedAnswer === englishQuiz[engcurrentQuestion].answer) {
    engscore++;
  }
}
// ENGLISH next question
function engNextQuestion() {
  engCheckAnswer();
  if (engcurrentQuestion < englishQuiz.length - 1) {
    engcurrentQuestion++;
    engloadQuestion();
  } else {
    engEndQuiz();
  }
}
// ENGLISH previous question
function engprevQuestion() {
  if (engcurrentQuestion > 0) {
    engcurrentQuestion--;
    engloadQuestion();
  }
}
// ENGLISH timer updater
function engTimeUpdate() {
  engoverallTimer--;
  engtimerSpan.innerHTML = engformatTime(engoverallTimer);
  if (engoverallTimer <= 0) {
    engEndQuiz();
  }
}
function engformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// ENGLISH end quiz
function engEndQuiz() {
  clearInterval(engtimerInterval);
  document.querySelector(".enanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    engscoreBox.style.display = "flex";
    engscoreBox.querySelector("h1").innerHTML = engscore;
  }, 1500);
}
// ENGLISH start quiz
function engstartQuiz() {
  engloadQuestion();
  engtimerSpan.innerHTML = engformatTime(engoverallTimer);
  engtimerInterval = setInterval(engTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".enanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      engselectanswer(button, button.innerHTML);
    });
  });

  engnext.addEventListener("click", engNextQuestion);
  engprev.addEventListener("click", engprevQuestion);
}
// Start the quiz
engstartQuiz();

/*
##############################################################################################
                            PAK STUDIES QUESTION ANSWER
##############################################################################################*/

const pakStudiesQuiz = [
  {
    question: "Who is the founder of Pakistan?",
    option1: "Allama Iqbal",
    option2: "Liaquat Ali Khan",
    option3: "Quaid-e-Azam Muhammad Ali Jinnah",
    option4: "Sir Syed Ahmed Khan",
    answer: "Quaid-e-Azam Muhammad Ali Jinnah",
  },
  {
    question: "What is the national language of Pakistan?",
    option1: "Punjabi",
    option2: "Sindhi",
    option3: "Urdu",
    option4: "Pashto",
    answer: "Urdu",
  },
  {
    question: "When did Pakistan gain independence?",
    option1: "1945",
    option2: "1946",
    option3: "1947",
    option4: "1948",
    answer: "1947",
  },
  {
    question: "What is the capital city of Pakistan?",
    option1: "Karachi",
    option2: "Lahore",
    option3: "Islamabad",
    option4: "Rawalpindi",
    answer: "Islamabad",
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    option1: "Liaquat Ali Khan",
    option2: "Ayub Khan",
    option3: "Zulfikar Ali Bhutto",
    option4: "Benazir Bhutto",
    answer: "Liaquat Ali Khan",
  },
  {
    question: "Which province of Pakistan is the largest by area?",
    option1: "Punjab",
    option2: "Sindh",
    option3: "Balochistan",
    option4: "Khyber Pakhtunkhwa",
    answer: "Balochistan",
  },
  {
    question: "What is the national flower of Pakistan?",
    option1: "Rose",
    option2: "Tulip",
    option3: "Jasmine",
    option4: "Sunflower",
    answer: "Jasmine",
  },
  {
    question: "Which river is the longest in Pakistan?",
    option1: "Jhelum",
    option2: "Chenab",
    option3: "Ravi",
    option4: "Indus",
    answer: "Indus",
  },
  {
    question: "What is the currency of Pakistan?",
    option1: "Dollar",
    option2: "Rupee",
    option3: "Euro",
    option4: "Pound",
    answer: "Rupee",
  },
  {
    question: "Who presented the Lahore Resolution in 1940?",
    option1: "Quaid-e-Azam Muhammad Ali Jinnah",
    option2: "Allama Iqbal",
    option3: "Liaquat Ali Khan",
    option4: "A.K. Fazlul Huq",
    answer: "A.K. Fazlul Huq",
  },
  {
    question: "What is the national sport of Pakistan?",
    option1: "Cricket",
    option2: "Hockey",
    option3: "Football",
    option4: "Squash",
    answer: "Hockey",
  },
  {
    question: "Who is known as the 'Father of the Nation' in Pakistan?",
    option1: "Allama Iqbal",
    option2: "Liaquat Ali Khan",
    option3: "Quaid-e-Azam Muhammad Ali Jinnah",
    option4: "Sir Syed Ahmed Khan",
    answer: "Quaid-e-Azam Muhammad Ali Jinnah",
  },
  {
    question: "Which is the highest peak in Pakistan?",
    option1: "Nanga Parbat",
    option2: "K2",
    option3: "Mount Everest",
    option4: "Broad Peak",
    answer: "K2",
  },
  {
    question: "When was the first constitution of Pakistan adopted?",
    option1: "1949",
    option2: "1950",
    option3: "1956",
    option4: "1962",
    answer: "1956",
  },
  {
    question: "What is the national anthem of Pakistan called?",
    option1: "Pakistan Zindabad",
    option2: "Qaumi Taranah",
    option3: "Dil Dil Pakistan",
    option4: "Jeevay Pakistan",
    answer: "Qaumi Taranah",
  },
  {
    question: "Who composed the national anthem of Pakistan?",
    option1: "Hafeez Jalandhari",
    option2: "Allama Iqbal",
    option3: "Ahmed Ghulamali Chagla",
    option4: "Faiz Ahmed Faiz",
    answer: "Ahmed Ghulamali Chagla",
  },
  {
    question: "Which city is known as the 'City of Lights' in Pakistan?",
    option1: "Karachi",
    option2: "Lahore",
    option3: "Islamabad",
    option4: "Faisalabad",
    answer: "Karachi",
  },
  {
    question: "Which sea borders Pakistan to the south?",
    option1: "Arabian Sea",
    option2: "Red Sea",
    option3: "Mediterranean Sea",
    option4: "Caspian Sea",
    answer: "Arabian Sea",
  },
  {
    question: "Who is called the 'Poet of the East'?",
    option1: "Mirza Ghalib",
    option2: "Faiz Ahmed Faiz",
    option3: "Allama Iqbal",
    option4: "Sir Syed Ahmed Khan",
    answer: "Allama Iqbal",
  },
  {
    question: "What is the official name of Pakistan?",
    option1: "Islamic Republic of Pakistan",
    option2: "Republic of Pakistan",
    option3: "Federation of Pakistan",
    option4: "People's Republic of Pakistan",
    answer: "Islamic Republic of Pakistan",
  },
];

// Element selectors
let psnext = document.querySelector("#psnext");
let psprev = document.querySelector("#psprev");
let pstimerSpan = document.querySelector("#pstimer");
let psQuestion = document.querySelector("#psquestion");
let psoptionA = document.querySelector("#psoptionA");
let psoptionB = document.querySelector("#psoptionB");
let psoptionC = document.querySelector("#psoptionC");
let psoptionD = document.querySelector("#psoptionD");
let psscoreBox = document.querySelector(".psscore");

// Variables
let psscore = 0;
let pscurrentQuestion = 0;
let psquestionTimer = 15;
let psoverallTimer = 15 * 60;
let pstimerInterval;
let psselectedAnswer = null;

// PAK STUDIES load Question
function psloadQuestion() {
  psQuestion.innerHTML = pakStudiesQuiz[pscurrentQuestion].question;
  psoptionA.innerHTML = pakStudiesQuiz[pscurrentQuestion].option1;
  psoptionB.innerHTML = pakStudiesQuiz[pscurrentQuestion].option2;
  psoptionC.innerHTML = pakStudiesQuiz[pscurrentQuestion].option3;
  psoptionD.innerHTML = pakStudiesQuiz[pscurrentQuestion].option4;
}
// PAK STUDIES clear selection
function psclearSelection() {
  psselectedAnswer = null;
  document.querySelectorAll(".psanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// PAK STUDIES select answer
function psselectanswer(button, answer) {
  psclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  psselectedAnswer = answer;
}
// check answer and count score
function psCheckAnswer() {
  if (psselectedAnswer === pakStudiesQuiz[pscurrentQuestion].answer) {
    psscore++;
  }
}
// PAK STUDIES next question
function psNextQuestion() {
  psCheckAnswer();
  if (pscurrentQuestion < pakStudiesQuiz.length - 1) {
    pscurrentQuestion++;
    psloadQuestion();
  } else {
    psEndQuiz();
  }
}
// PAK STUDIES previous question
function psprevQuestion() {
  if (pscurrentQuestion > 0) {
    pscurrentQuestion--;
    psloadQuestion();
  }
}
// PAK STUDIES timer updater
function psTimeUpdate() {
  psoverallTimer--;
  pstimerSpan.innerHTML = psformatTime(psoverallTimer);
  if (psoverallTimer <= 0) {
    psEndQuiz();
  }
}
function psformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// PAK STUDIES end quiz
function psEndQuiz() {
  clearInterval(pstimerInterval);
  document.querySelector(".psanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    psscoreBox.style.display = "flex";
    psscoreBox.querySelector("h1").innerHTML = psscore;
  }, 1500);
}
// PAK STUDIES start quiz
function psstartQuiz() {
  psloadQuestion();
  pstimerSpan.innerHTML = psformatTime(psoverallTimer);
  pstimerInterval = setInterval(psTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".psanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      psselectanswer(button, button.innerHTML);
    });
  });

  psnext.addEventListener("click", psNextQuestion);
  psprev.addEventListener("click", psprevQuestion);
}
// Start the quiz
psstartQuiz();

/*
##############################################################################################
                            COMPUTER SCIENCE QUESTION ANSWER
##############################################################################################*/

const computerScienceQuiz = [
  {
    question: "What does CPU stand for?",
    option1: "Central Process Unit",
    option2: "Central Processing Unit",
    option3: "Computer Personal Unit",
    option4: "Central Processor Unit",
    answer: "Central Processing Unit",
  },
  {
    question: "Which language is primarily used for web development?",
    option1: "Python",
    option2: "Java",
    option3: "HTML",
    option4: "C++",
    answer: "HTML",
  },
  {
    question: "What does RAM stand for?",
    option1: "Random Access Memory",
    option2: "Read Access Memory",
    option3: "Run Access Memory",
    option4: "Real Access Memory",
    answer: "Random Access Memory",
  },
  {
    question: "What is the main function of an operating system?",
    option1: "To manage hardware and software resources",
    option2: "To compile code",
    option3: "To browse the internet",
    option4: "To design websites",
    answer: "To manage hardware and software resources",
  },
  {
    question: "Which of the following is a programming language?",
    option1: "HTML",
    option2: "HTTP",
    option3: "FTP",
    option4: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "What is the name of the first electronic computer?",
    option1: "ENIAC",
    option2: "UNIVAC",
    option3: "IBM PC",
    option4: "Altair",
    answer: "ENIAC",
  },
  {
    question: "Which device is used to connect a computer to a network?",
    option1: "Monitor",
    option2: "Mouse",
    option3: "Router",
    option4: "Printer",
    answer: "Router",
  },
  {
    question: "What does HTTP stand for?",
    option1: "Hypertext Transfer Protocol",
    option2: "Hypertext Transmission Protocol",
    option3: "Hyper Transfer Text Protocol",
    option4: "Hyper Transfer Transmission Protocol",
    answer: "Hypertext Transfer Protocol",
  },
  {
    question: "Which of the following is a type of non-volatile memory?",
    option1: "RAM",
    option2: "ROM",
    option3: "Cache",
    option4: "Register",
    answer: "ROM",
  },
  {
    question: "What is an algorithm?",
    option1: "A programming language",
    option2: "A step-by-step procedure for solving a problem",
    option3: "A type of software",
    option4: "A hardware device",
    answer: "A step-by-step procedure for solving a problem",
  },
  {
    question: "Which company developed the Windows operating system?",
    option1: "Apple",
    option2: "IBM",
    option3: "Microsoft",
    option4: "Google",
    answer: "Microsoft",
  },
  {
    question: "What does SQL stand for?",
    option1: "Structured Question Language",
    option2: "Structured Query Language",
    option3: "Simple Query Language",
    option4: "Simplified Question Language",
    answer: "Structured Query Language",
  },
  {
    question: "What is the main purpose of a firewall?",
    option1: "To protect a computer network from unauthorized access",
    option2: "To store data",
    option3: "To display web pages",
    option4: "To compile programs",
    answer: "To protect a computer network from unauthorized access",
  },
  {
    question: "Which of the following is an example of an input device?",
    option1: "Printer",
    option2: "Monitor",
    option3: "Keyboard",
    option4: "Speaker",
    answer: "Keyboard",
  },
  {
    question: "What is the full form of GUI?",
    option1: "General User Interface",
    option2: "Graphical User Interface",
    option3: "Graphical Universal Interface",
    option4: "General Universal Interface",
    answer: "Graphical User Interface",
  },
  {
    question: "What is the primary purpose of a database?",
    option1: "To store and manage data",
    option2: "To display web pages",
    option3: "To compile code",
    option4: "To browse the internet",
    answer: "To store and manage data",
  },
  {
    question: "Which of the following is not an operating system?",
    option1: "Windows",
    option2: "Linux",
    option3: "Oracle",
    option4: "MacOS",
    answer: "Oracle",
  },
  {
    question: "What does IP stand for in networking?",
    option1: "Internet Protocol",
    option2: "Internet Process",
    option3: "Internal Protocol",
    option4: "Internal Process",
    answer: "Internet Protocol",
  },
  {
    question: "Which language is used for Android app development?",
    option1: "Swift",
    option2: "Kotlin",
    option3: "Ruby",
    option4: "PHP",
    answer: "Kotlin",
  },
  {
    question: "What is the full form of URL?",
    option1: "Uniform Resource Locator",
    option2: "Uniform Resource Link",
    option3: "Universal Resource Link",
    option4: "Universal Resource Locator",
    answer: "Uniform Resource Locator",
  },
];

// Element selectors
let csnext = document.querySelector("#csnext");
let csprev = document.querySelector("#csprev");
let cstimerSpan = document.querySelector("#cstimer");
let csQuestion = document.querySelector("#csquestion");
let csoptionA = document.querySelector("#csoptionA");
let csoptionB = document.querySelector("#csoptionB");
let csoptionC = document.querySelector("#csoptionC");
let csoptionD = document.querySelector("#csoptionD");
let csscoreBox = document.querySelector(".csscore");

// Variables
let csscore = 0;
let cscurrentQuestion = 0;
let csquestionTimer = 15;
let csoverallTimer = 15 * 60;
let cstimerInterval;
let csselectedAnswer = null;

// COMPUTER SCIENCE load Question
function csloadQuestion() {
  csQuestion.innerHTML = computerScienceQuiz[cscurrentQuestion].question;
  csoptionA.innerHTML = computerScienceQuiz[cscurrentQuestion].option1;
  csoptionB.innerHTML = computerScienceQuiz[cscurrentQuestion].option2;
  csoptionC.innerHTML = computerScienceQuiz[cscurrentQuestion].option3;
  csoptionD.innerHTML = computerScienceQuiz[cscurrentQuestion].option4;
}
// COMPUTER SCIENCE clear selection
function csclearSelection() {
  csselectedAnswer = null;
  document.querySelectorAll(".csanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// COMPUTER SCIENCE select answer
function csselectanswer(button, answer) {
  csclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  csselectedAnswer = answer;
}
// check answer and count score
function csCheckAnswer() {
  if (csselectedAnswer === computerScienceQuiz[cscurrentQuestion].answer) {
    csscore++;
  }
}
// COMPUTER SCIENCE next question
function csNextQuestion() {
  csCheckAnswer();
  if (cscurrentQuestion < computerScienceQuiz.length - 1) {
    cscurrentQuestion++;
    csloadQuestion();
  } else {
    csEndQuiz();
  }
}
// COMPUTER SCIENCE previous question
function csprevQuestion() {
  if (cscurrentQuestion > 0) {
    cscurrentQuestion--;
    csloadQuestion();
  }
}
// COMPUTER SCIENCE timer updater
function csTimeUpdate() {
  csoverallTimer--;
  cstimerSpan.innerHTML = csformatTime(csoverallTimer);
  if (csoverallTimer <= 0) {
    csEndQuiz();
  }
}
function csformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// COMPUTER SCIENCE end quiz
function csEndQuiz() {
  clearInterval(cstimerInterval);
  document.querySelector(".csanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    csscoreBox.style.display = "flex";
    csscoreBox.querySelector("h1").innerHTML = csscore;
  }, 1500);
}
// COMPUTER SCIENCE start quiz
function csstartQuiz() {
  csloadQuestion();
  cstimerSpan.innerHTML = csformatTime(csoverallTimer);
  cstimerInterval = setInterval(csTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".csanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      csselectanswer(button, button.innerHTML);
    });
  });

  csnext.addEventListener("click", csNextQuestion);
  csprev.addEventListener("click", csprevQuestion);
}
// Start the quiz
csstartQuiz();

/*
##############################################################################################
                            BIOLOGY QUESTION ANSWER
##############################################################################################*/
const biologyQuiz = [
  {
    question: "What is the basic unit of life?",
    option1: "Tissue",
    option2: "Organ",
    option3: "Cell",
    option4: "Organism",
    answer: "Cell",
  },
  {
    question: "What is the powerhouse of the cell?",
    option1: "Nucleus",
    option2: "Mitochondria",
    option3: "Ribosome",
    option4: "Endoplasmic Reticulum",
    answer: "Mitochondria",
  },
  {
    question: "Which molecule carries genetic information?",
    option1: "RNA",
    option2: "DNA",
    option3: "Protein",
    option4: "Lipid",
    answer: "DNA",
  },
  {
    question: "What is the process by which plants make their food?",
    option1: "Respiration",
    option2: "Digestion",
    option3: "Photosynthesis",
    option4: "Excretion",
    answer: "Photosynthesis",
  },
  {
    question: "Which organ is responsible for pumping blood throughout the body?",
    option1: "Liver",
    option2: "Lungs",
    option3: "Heart",
    option4: "Kidneys",
    answer: "Heart",
  },
  {
    question: "What is the largest organ in the human body?",
    option1: "Liver",
    option2: "Skin",
    option3: "Heart",
    option4: "Lungs",
    answer: "Skin",
  },
  {
    question: "Which system in the body is responsible for transporting nutrients, oxygen, and waste?",
    option1: "Respiratory system",
    option2: "Digestive system",
    option3: "Circulatory system",
    option4: "Nervous system",
    answer: "Circulatory system",
  },
  {
    question: "Which type of blood cell is responsible for fighting infections?",
    option1: "Red blood cells",
    option2: "Platelets",
    option3: "White blood cells",
    option4: "Plasma",
    answer: "White blood cells",
  },
  {
    question: "What is the term for an organism that makes its own food?",
    option1: "Consumer",
    option2: "Decomposer",
    option3: "Autotroph",
    option4: "Heterotroph",
    answer: "Autotroph",
  },
  {
    question: "What is the process by which cells divide to form two identical daughter cells?",
    option1: "Meiosis",
    option2: "Fertilization",
    option3: "Mitosis",
    option4: "Binary fission",
    answer: "Mitosis",
  },
  {
    question: "What type of macromolecule are enzymes?",
    option1: "Carbohydrates",
    option2: "Lipids",
    option3: "Proteins",
    option4: "Nucleic acids",
    answer: "Proteins",
  },
  {
    question: "What is the primary pigment found in the chloroplasts of plants?",
    option1: "Carotene",
    option2: "Chlorophyll",
    option3: "Xanthophyll",
    option4: "Anthocyanin",
    answer: "Chlorophyll",
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    option1: "Cerebrum",
    option2: "Cerebellum",
    option3: "Medulla oblongata",
    option4: "Thalamus",
    answer: "Cerebellum",
  },
  {
    question: "What is the genetic disorder caused by an extra chromosome 21?",
    option1: "Turner syndrome",
    option2: "Klinefelter syndrome",
    option3: "Down syndrome",
    option4: "Edwards syndrome",
    answer: "Down syndrome",
  },
  {
    question: "What is the term for a change in the DNA sequence?",
    option1: "Translation",
    option2: "Transcription",
    option3: "Mutation",
    option4: "Replication",
    answer: "Mutation",
  },
  {
    question: "Which blood type is known as the universal donor?",
    option1: "A",
    option2: "B",
    option3: "AB",
    option4: "O",
    answer: "O",
  },
  {
    question: "What is the main function of the large intestine?",
    option1: "Absorb nutrients",
    option2: "Absorb water",
    option3: "Digest proteins",
    option4: "Store bile",
    answer: "Absorb water",
  },
  {
    question: "What type of organism is yeast?",
    option1: "Bacteria",
    option2: "Fungus",
    option3: "Virus",
    option4: "Algae",
    answer: "Fungus",
  },
  {
    question: "What is the term for a symbiotic relationship where both organisms benefit?",
    option1: "Parasitism",
    option2: "Commensalism",
    option3: "Mutualism",
    option4: "Predation",
    answer: "Mutualism",
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    option1: "Insulin",
    option2: "Adrenaline",
    option3: "Thyroxine",
    option4: "Growth hormone",
    answer: "Insulin",
  },
];

// Element selectors
let bionext = document.querySelector("#bionext");
let bioprev = document.querySelector("#bioprev");
let biotimerSpan = document.querySelector("#biotimer");
let bioQuestion = document.querySelector("#bioquestion");
let biooptionA = document.querySelector("#biooptionA");
let biooptionB = document.querySelector("#biooptionB");
let biooptionC = document.querySelector("#biooptionC");
let biooptionD = document.querySelector("#biooptionD");
let bioscoreBox = document.querySelector(".bioscore");

// Variables
let bioscore = 0;
let biocurrentQuestion = 0;
let bioquestionTimer = 15;
let biooverallTimer = 15 * 60;
let biotimerInterval;
let bioselectedAnswer = null;


// BIOLOGY load Question
function bioloadQuestion() {
  bioQuestion.innerHTML = biologyQuiz[biocurrentQuestion].question;
  biooptionA.innerHTML = biologyQuiz[biocurrentQuestion].option1;
  biooptionB.innerHTML = biologyQuiz[biocurrentQuestion].option2;
  biooptionC.innerHTML = biologyQuiz[biocurrentQuestion].option3;
  biooptionD.innerHTML = biologyQuiz[biocurrentQuestion].option4;
}
// BIOLOGY clear selection
function bioclearSelection() {
  bioselectedAnswer = null;
  document.querySelectorAll(".bioanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// BIOLOGY select answer
function bioselectanswer(button, answer) {
  bioclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  bioselectedAnswer = answer;
}
// check answer and count score
function bioCheckAnswer() {
  if (bioselectedAnswer === biologyQuiz[biocurrentQuestion].answer) {
    bioscore++;
  }
}
// BIOLOGY next question
function bioNextQuestion() {
  bioCheckAnswer();
  if (biocurrentQuestion < biologyQuiz.length - 1) {
    biocurrentQuestion++;
    bioloadQuestion();
  } else {
    bioEndQuiz();
  }
}
// BIOLOGY previous question
function bioprevQuestion() {
  if (biocurrentQuestion > 0) {
    biocurrentQuestion--;
    bioloadQuestion();
  }
}
// BIOLOGY timer updater
function bioTimeUpdate() {
  biooverallTimer--;
  biotimerSpan.innerHTML = bioformatTime(biooverallTimer);
  if (biooverallTimer <= 0) {
    bioEndQuiz();
  }
}
function bioformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// BIOLOGY end quiz
function bioEndQuiz() {
  clearInterval(biotimerInterval);
  document.querySelector(".bioanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    bioscoreBox.style.display = "flex";
    bioscoreBox.querySelector("h1").innerHTML = bioscore;
  }, 1500);
}
// BIOLOGY start quiz
function biostartQuiz() {
  bioloadQuestion();
  biotimerSpan.innerHTML = bioformatTime(biooverallTimer);
  biotimerInterval = setInterval(bioTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".bioanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      bioselectanswer(button, button.innerHTML);
    });
  });

  bionext.addEventListener("click", bioNextQuestion);
  bioprev.addEventListener("click", bioprevQuestion);
}
// Start the quiz
biostartQuiz();

/*
##############################################################################################
                            CHEMISTRY QUESTION ANSWER
##############################################################################################*/

const chemistryQuiz = [
  {
    question: "What is the chemical symbol for water?",
    option1: "H2O",
    option2: "HO2",
    option3: "O2H",
    option4: "HHO",
    answer: "H2O",
  },
  {
    question: "What is the atomic number of carbon?",
    option1: "6",
    option2: "8",
    option3: "12",
    option4: "14",
    answer: "6",
  },
  {
    question: "What type of bond involves the sharing of electron pairs between atoms?",
    option1: "Ionic bond",
    option2: "Covalent bond",
    option3: "Hydrogen bond",
    option4: "Metallic bond",
    answer: "Covalent bond",
  },
  {
    question: "Which element is known as the 'king of chemicals'?",
    option1: "Hydrogen",
    option2: "Oxygen",
    option3: "Sulfuric Acid",
    option4: "Nitrogen",
    answer: "Sulfuric Acid",
  },
  {
    question: "What is the pH of a neutral solution?",
    option1: "0",
    option2: "7",
    option3: "14",
    option4: "1",
    answer: "7",
  },
  {
    question: "Which gas is commonly known as laughing gas?",
    option1: "Carbon dioxide",
    option2: "Nitrogen",
    option3: "Nitrous oxide",
    option4: "Methane",
    answer: "Nitrous oxide",
  },
  {
    question: "What is the chemical formula for table salt?",
    option1: "NaCl",
    option2: "KCl",
    option3: "NaCO3",
    option4: "K2SO4",
    answer: "NaCl",
  },
  {
    question: "Which element is represented by the symbol 'Au'?",
    option1: "Silver",
    option2: "Gold",
    option3: "Aluminum",
    option4: "Argon",
    answer: "Gold",
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    option1: "Oxygen",
    option2: "Hydrogen",
    option3: "Carbon dioxide",
    option4: "Nitrogen",
    answer: "Nitrogen",
  },
  {
    question: "What is the process of a solid turning directly into a gas called?",
    option1: "Condensation",
    option2: "Sublimation",
    option3: "Evaporation",
    option4: "Melting",
    answer: "Sublimation",
  },
  {
    question: "Which acid is found in the stomach?",
    option1: "Sulfuric acid",
    option2: "Nitric acid",
    option3: "Hydrochloric acid",
    option4: "Acetic acid",
    answer: "Hydrochloric acid",
  },
  {
    question: "What is the lightest element on the periodic table?",
    option1: "Helium",
    option2: "Hydrogen",
    option3: "Lithium",
    option4: "Oxygen",
    answer: "Hydrogen",
  },
  {
    question: "What is the chemical name for baking soda?",
    option1: "Sodium bicarbonate",
    option2: "Calcium carbonate",
    option3: "Potassium sulfate",
    option4: "Magnesium chloride",
    answer: "Sodium bicarbonate",
  },
  {
    question: "Which element is a liquid at room temperature?",
    option1: "Mercury",
    option2: "Lead",
    option3: "Gold",
    option4: "Iron",
    answer: "Mercury",
  },
  {
    question: "What is the primary component of natural gas?",
    option1: "Methane",
    option2: "Propane",
    option3: "Butane",
    option4: "Ethane",
    answer: "Methane",
  },
  {
    question: "What is the name of the chemical reaction between an acid and a base?",
    option1: "Oxidation",
    option2: "Reduction",
    option3: "Neutralization",
    option4: "Combustion",
    answer: "Neutralization",
  },
  {
    question: "What is the chemical symbol for potassium?",
    option1: "P",
    option2: "K",
    option3: "Pt",
    option4: "Po",
    answer: "K",
  },
  {
    question: "What type of bond is formed between sodium and chlorine in table salt?",
    option1: "Covalent bond",
    option2: "Ionic bond",
    option3: "Hydrogen bond",
    option4: "Metallic bond",
    answer: "Ionic bond",
  },
  {
    question: "What is the chemical formula for ammonia?",
    option1: "NH3",
    option2: "NO2",
    option3: "N2H4",
    option4: "NH4",
    answer: "NH3",
  },
  {
    question: "Which element is essential for the production of thyroid hormones?",
    option1: "Iron",
    option2: "Calcium",
    option3: "Iodine",
    option4: "Zinc",
    answer: "Iodine",
  },
];

// Element selectors
let chenext = document.querySelector("#chenext");
let cheprev = document.querySelector("#cheprev");
let chetimerSpan = document.querySelector("#chetimer");
let cheQuestion = document.querySelector("#chequestion");
let cheoptionA = document.querySelector("#cheoptionA");
let cheoptionB = document.querySelector("#cheoptionB");
let cheoptionC = document.querySelector("#cheoptionC");
let cheoptionD = document.querySelector("#cheoptionD");
let chescoreBox = document.querySelector(".chescore");

// Variables
let chescore = 0;
let checurrentQuestion = 0;
let chequestionTimer = 15;
let cheoverallTimer = 15 * 60;
let chetimerInterval;
let cheselectedAnswer = null;

// CHEMISTRY load Question
function cheloadQuestion() {
  cheQuestion.innerHTML = chemistryQuiz[checurrentQuestion].question;
  cheoptionA.innerHTML = chemistryQuiz[checurrentQuestion].option1;
  cheoptionB.innerHTML = chemistryQuiz[checurrentQuestion].option2;
  cheoptionC.innerHTML = chemistryQuiz[checurrentQuestion].option3;
  cheoptionD.innerHTML = chemistryQuiz[checurrentQuestion].option4;
}
// CHEMISTRY clear selection
function checlearSelection() {
  cheselectedAnswer = null;
  document.querySelectorAll(".cheanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// CHEMISTRY select answer
function cheselectanswer(button, answer) {
  checlearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  cheselectedAnswer = answer;
}
// check answer and count score
function cheCheckAnswer() {
  if (cheselectedAnswer === chemistryQuiz[checurrentQuestion].answer) {
    chescore++;
  }
}
// CHEMISTRY next question
function cheNextQuestion() {
  cheCheckAnswer();
  if (checurrentQuestion < chemistryQuiz.length - 1) {
    checurrentQuestion++;
    cheloadQuestion();
  } else {
    cheEndQuiz();
  }
}
// CHEMISTRY previous question
function cheprevQuestion() {
  if (checurrentQuestion > 0) {
    checurrentQuestion--;
    cheloadQuestion();
  }
}
// CHEMISTRY timer updater
function cheTimeUpdate() {
  cheoverallTimer--;
  chetimerSpan.innerHTML = cheformatTime(cheoverallTimer);
  if (cheoverallTimer <= 0) {
    cheEndQuiz();
  }
}
function cheformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// CHEMISTRY end quiz
function cheEndQuiz() {
  clearInterval(chetimerInterval);
  document.querySelector(".cheanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    chescoreBox.style.display = "flex";
    chescoreBox.querySelector("h1").innerHTML = chescore;
  }, 1500);
}
// CHEMISTRY start quiz
function chestartQuiz() {
  cheloadQuestion();
  chetimerSpan.innerHTML = cheformatTime(cheoverallTimer);
  chetimerInterval = setInterval(cheTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".cheanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cheselectanswer(button, button.innerHTML);
    });
  });

  chenext.addEventListener("click", cheNextQuestion);
  cheprev.addEventListener("click", cheprevQuestion);
}
// Start the quiz
chestartQuiz();


/*
##############################################################################################
                            PHYSICS QUESTION ANSWER
##############################################################################################*/

const physicsQuiz = [
  {
    question: "What is the unit of force?",
    option1: "Joule",
    option2: "Newton",
    option3: "Watt",
    option4: "Pascal",
    answer: "Newton",
  },
  {
    question: "What is the speed of light in a vacuum?",
    option1: "3 × 10^8 m/s",
    option2: "3 × 10^6 m/s",
    option3: "3 × 10^10 m/s",
    option4: "3 × 10^4 m/s",
    answer: "3 × 10^8 m/s",
  },
  {
    question: "Which law states that for every action there is an equal and opposite reaction?",
    option1: "Newton's First Law",
    option2: "Newton's Second Law",
    option3: "Newton's Third Law",
    option4: "Law of Universal Gravitation",
    answer: "Newton's Third Law",
  },
  {
    question: "What is the formula for calculating kinetic energy?",
    option1: "KE = 1/2 mv^2",
    option2: "KE = mv",
    option3: "KE = mgh",
    option4: "KE = 1/2 mv",
    answer: "KE = 1/2 mv^2",
  },
  {
    question: "What is the unit of electric current?",
    option1: "Volt",
    option2: "Ohm",
    option3: "Ampere",
    option4: "Watt",
    answer: "Ampere",
  },
  {
    question: "What phenomenon causes a rainbow to form?",
    option1: "Refraction",
    option2: "Reflection",
    option3: "Diffraction",
    option4: "Interference",
    answer: "Refraction",
  },
  {
    question: "What is the rate of change of velocity called?",
    option1: "Speed",
    option2: "Acceleration",
    option3: "Force",
    option4: "Momentum",
    answer: "Acceleration",
  },
  {
    question: "What is the formula for Ohm's Law?",
    option1: "V = IR",
    option2: "V = I/R",
    option3: "P = IV",
    option4: "R = V/I",
    answer: "V = IR",
  },
  {
    question: "What type of wave is sound?",
    option1: "Transverse wave",
    option2: "Longitudinal wave",
    option3: "Electromagnetic wave",
    option4: "Surface wave",
    answer: "Longitudinal wave",
  },
  {
    question: "What is the unit of power?",
    option1: "Joule",
    option2: "Watt",
    option3: "Newton",
    option4: "Coulomb",
    answer: "Watt",
  },
  {
    question: "Who is known as the father of modern physics?",
    option1: "Isaac Newton",
    option2: "Albert Einstein",
    option3: "Galileo Galilei",
    option4: "Niels Bohr",
    answer: "Albert Einstein",
  },
  {
    question: "What is the law of conservation of energy?",
    option1: "Energy can neither be created nor destroyed, only transformed",
    option2: "Energy can be created from nothing",
    option3: "Energy can be destroyed but not created",
    option4: "Energy can only be created",
    answer: "Energy can neither be created nor destroyed, only transformed",
  },
  {
    question: "What is the unit of frequency?",
    option1: "Hertz",
    option2: "Joule",
    option3: "Newton",
    option4: "Watt",
    answer: "Hertz",
  },
  {
    question: "What does the first law of thermodynamics state?",
    option1: "Energy cannot be created or destroyed, only transformed",
    option2: "The total entropy of an isolated system can never decrease",
    option3: "For any heat transfer, the heat is always lost",
    option4: "The temperature of a system always increases",
    answer: "Energy cannot be created or destroyed, only transformed",
  },
  {
    question: "What is the force of gravity on an object called?",
    option1: "Mass",
    option2: "Weight",
    option3: "Density",
    option4: "Pressure",
    answer: "Weight",
  },
  {
    question: "What is the principle behind a lever?",
    option1: "Conservation of momentum",
    option2: "Mechanical advantage",
    option3: "Conservation of energy",
    option4: "Inertia",
    answer: "Mechanical advantage",
  },
  {
    question: "What is the SI unit of distance?",
    option1: "Meter",
    option2: "Kilogram",
    option3: "Second",
    option4: "Ampere",
    answer: "Meter",
  },
  {
    question: "Which scientist formulated the laws of motion?",
    option1: "Albert Einstein",
    option2: "Isaac Newton",
    option3: "James Clerk Maxwell",
    option4: "Niels Bohr",
    answer: "Isaac Newton",
  },
  {
    question: "What does a barometer measure?",
    option1: "Temperature",
    option2: "Pressure",
    option3: "Speed",
    option4: "Volume",
    answer: "Pressure",
  },
  {
    question: "What is the speed of sound in air at room temperature?",
    option1: "343 m/s",
    option2: "300 m/s",
    option3: "1500 m/s",
    option4: "700 m/s",
    answer: "343 m/s",
  },
];

// Element selectors
let phynext = document.querySelector("#phynext");
let phyprev = document.querySelector("#phyprev");
let phytimerSpan = document.querySelector("#phytimer");
let phyQuestion = document.querySelector("#phyquestion");
let phyoptionA = document.querySelector("#phyoptionA");
let phyoptionB = document.querySelector("#phyoptionB");
let phyoptionC = document.querySelector("#phyoptionC");
let phyoptionD = document.querySelector("#phyoptionD");
let physcoreBox = document.querySelector(".physcore");

// Variables
let physcore = 0;
let phycurrentQuestion = 0;
let phyquestionTimer = 15;
let phyoverallTimer = 15 * 60;
let phytimerInterval;
let physelectedAnswer = null;

// CHEMISTRY load Question
function phyloadQuestion() {
  phyQuestion.innerHTML = physicsQuiz[phycurrentQuestion].question;
  phyoptionA.innerHTML = physicsQuiz[phycurrentQuestion].option1;
  phyoptionB.innerHTML = physicsQuiz[phycurrentQuestion].option2;
  phyoptionC.innerHTML = physicsQuiz[phycurrentQuestion].option3;
  phyoptionD.innerHTML = physicsQuiz[phycurrentQuestion].option4;
}
// CHEMISTRY clear selection
function phyclearSelection() {
  physelectedAnswer = null;
  document.querySelectorAll(".phyanswerBox button").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}
// CHEMISTRY select answer
function physelectanswer(button, answer) {
  phyclearSelection();
  button.style.backgroundColor = "#fcc822";
  button.style.color = "#fff";
  physelectedAnswer = answer;
}
// check answer and count score
function phyCheckAnswer() {
  if (physelectedAnswer === physicsQuiz[phycurrentQuestion].answer) {
    physcore++;
  }
}
// CHEMISTRY next question
function phyNextQuestion() {
  phyCheckAnswer();
  if (phycurrentQuestion < physicsQuiz.length - 1) {
    phycurrentQuestion++;
    phyloadQuestion();
  } else {
    phyEndQuiz();
  }
}
// CHEMISTRY previous question
function phyprevQuestion() {
  if (phycurrentQuestion > 0) {
    phycurrentQuestion--;
    phyloadQuestion();
  }
}
// CHEMISTRY timer updater
function phyTimeUpdate() {
  phyoverallTimer--;
  phytimerSpan.innerHTML = phyformatTime(phyoverallTimer);
  if (phyoverallTimer <= 0) {
    phyEndQuiz();
  }
}
function phyformatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes}: ${secs < 10 ? "0" : ""}${secs}`;
}
// CHEMISTRY end quiz
function phyEndQuiz() {
  clearInterval(phytimerInterval);
  document.querySelector(".phyanswerBox").style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    physcoreBox.style.display = "flex";
    physcoreBox.querySelector("h1").innerHTML = physcore;
  }, 1500);
}
// CHEMISTRY start quiz
function phystartQuiz() {
  phyloadQuestion();
  phytimerSpan.innerHTML = phyformatTime(phyoverallTimer);
  phytimerInterval = setInterval(phyTimeUpdate, 1000);

  let buttons = document.querySelectorAll(".phyanswerBox button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      physelectanswer(button, button.innerHTML);
    });
  });

  phynext.addEventListener("click", phyNextQuestion);
  phyprev.addEventListener("click", phyprevQuestion);
}
// Start the quiz
phystartQuiz();