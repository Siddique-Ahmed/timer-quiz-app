/*
###############################################################################################
                                LOGIN TO LOGOUT 
#############################################################################################
*/
let logout = document.querySelector(".logout");
let logoutpopup = document.querySelector(".logoutPopUp");
let noBtn = document.querySelector("#btnNO");
let yesBtn = document.querySelector("#btnYES");
let loader = document.querySelector(".loader");
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
    setTimeout(() => {
      logoutpopup.style.display = "none";
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
let startPage = document.querySelector(".startbox")

start.addEventListener("click", (e) => {
  e.preventDefault();
  selectBox();
});

function selectBox(){

  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
    selectPage.style.display = "flex";
    startPage.style.display = "none";
  }, 2000);

}