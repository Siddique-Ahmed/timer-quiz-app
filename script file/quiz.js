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
gk.addEventListener("click",(e)=>{
  e.preventDefault();
  gksection();

})

// ############ iq click ################ \\
iq.addEventListener("click",(e)=>{
  e.preventDefault();
  iqsection();
})

// ############ math click ################ \\
math.addEventListener("click",(e)=>{
  e.preventDefault();
  mathsection();
})

// ############ urdu click ################ \\
urdu.addEventListener("click",(e)=>{
  e.preventDefault();
  urdusection();
})

// ############ isl click ################ \\
isl.addEventListener("click",(e)=>{
  e.preventDefault();
  islsection();
})

// ############ cs click ################ \\
cs.addEventListener("click",(e)=>{
  e.preventDefault();
  cssection();
})

// ############ eng click ################ \\
eng.addEventListener("click",(e)=>{
  e.preventDefault();
  engsection();
})

// ############ pk click ################ \\pk
pk.addEventListener("click",(e)=>{
  e.preventDefault();
  pksection();
})

// ############ bio click ################ \\bio
bio.addEventListener("click",(e)=>{
  e.preventDefault();
  biosection();
})

// ############ che click ################ \\
che.addEventListener("click",(e)=>{
  e.preventDefault();
  chesection();
})

// ############ phy click ################ \\
phy.addEventListener("click",(e)=>{
  e.preventDefault();
  physection();
})

// ############ gk function ################ \\
function gksection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    generalKnowledge.style.display = "flex";
  }, 2000);
}

// ############ iq function ################ \\
function iqsection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    intellegenceQuitent.style.display = "flex";
  }, 2000);
}

// ############ math function ################ \\
function mathsection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    mathquiz.style.display = "flex";
  }, 2000);
}


// ############ urdu function ################ \\
function urdusection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    urduquiz.style.display = "flex";
  }, 2000);
}

// ############ pak studies function ################ \\
function pksection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    pakStudies.style.display = "flex";
  }, 2000);
}

// ############ isl function ################ \\
function islsection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    islamiyat.style.display = "flex";
  }, 2000);
}

// ############ english function ################ \\
function engsection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    english.style.display = "flex";
  }, 2000);
}

// ############ computer science function ################ \\
function cssection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    computerSCience.style.display = "flex";
  }, 2000);
}

// ############ biology function ################ \\
function biosection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    biology.style.display = "flex";
  }, 2000);
}

// ############ chemistry function ################ \\
function chesection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    chemistry.style.display = "flex";
  }, 2000);
}

// ############ physics function ################ \\
function physection(){
  selectPage.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    physics.style.display = "flex";
  }, 2000);
}




