/*
###############################################################################################
                                SIGNUP PAGE 
#############################################################################################
*/

let signup = document.querySelector("#signup");
let setpersonData = [];
let loader = document.querySelector(".loader");

/*
###############################################################################################
                              SAVE TO LOCALSTORAGE
#############################################################################################
*/

function saveDataToLocalStorage() {
  localStorage.setItem("dataSave", JSON.stringify(setpersonData));
}

/*
###############################################################################################
                            GET DATA TO LOCALSTORAGE
#############################################################################################
*/

function getDataToLocalStorage() {
  let getData = localStorage.getItem("dataSave");

  if (getData) {
    setpersonData = JSON.parse(getData);
  }
}

getDataToLocalStorage();

signup.addEventListener("click", (e) => {
  e.preventDefault();
  userSignupData();
});

function userSignupData() {
  let username = document.querySelector("#setusername").value.trim();
  let userEmail = document.querySelector("#setEmail").value.trim();
  let userPassword = document.querySelector("#setPassword").value.trim();
  let userConfirmPassword = document
    .querySelector("#setConfirmPassword")
    .value.trim();
  const usernameRegex = /^[a-zA-Z0-9_]{3,25}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z\d]{8,20}$/;

  if(username === "" || userEmail === "" || userPassword === "" || userConfirmPassword === ""){
    swal.fire("please fill the requirments")
    return
  }
  if (!usernameRegex.test(username)) {
    swal.fire(
      "Invalid username. It should be 3-16 characters long and contain only letters, numbers, and underscores."
    );
    return;
  }
  if (!emailRegex.test(userEmail)) {
    swal.fire("Invalid email address");
  }
  if (!passwordRegex.test(userPassword)) {
    swal.fire("Invalid password. It should be 8-20 characters long and contain only letters and numbers.");
    return;
  }

  if (userPassword !== userConfirmPassword) {
    swal.fire("Passwords do not match.");
    return;
  }
  userRegistrationData(username, userEmail, userPassword, userConfirmPassword);

  username = "";
  userEmail = "";
  userPassword = "";
  userConfirmPassword = "";
}

function userRegistrationData(username, email, password, confirmPassword) {
  let userExists = setpersonData.some((check) => check.emailAddress === email);

  if (userExists) {
    swal.fire("User already exists!");
    return;
  }

  let newUser = {
    username: username,
    emailAddress: email,
    userPassword: password,
    userConfirmPassword: confirmPassword,
  };

  setpersonData.push(newUser);
  saveDataToLocalStorage()
  swal.fire("successfull created account");
  setTimeout(() => {
    document.location.href = "../login page/loginpage.html";
  }, 2500);
}
