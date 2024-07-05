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
    button.style.backgroundColor = ""; // Or your default color
    button.style.color = ""; // Or your default color
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
  scoreBox.style.display = "flex";
  scoreBox.querySelector("h1").innerHTML = score;
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
