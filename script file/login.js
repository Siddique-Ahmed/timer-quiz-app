/*
###############################################################################################
                                LOGIN PAGE 
#############################################################################################
*/
let login = document.querySelector("#login");
let loader = document.querySelector(".loader");

login.addEventListener("click", (e) => {
  e.preventDefault();
  loggedinUser();
});

function loggedinUser() {
  let data = JSON.parse(localStorage.getItem("dataSave"));
  let email = document.querySelector("#getEmail").value.trim();
  let password = document.querySelector("#getPassword").value.trim();

  if (email === "" || password === "") {
    swal.fire("enter email and password");
    return;
  }

  let isValid = false;

  for (let val in data) {
    if (
      (data[val].emailAddress === email || data[val].username === email) &&
      data[val].userPassword === password
    ) {
      loader.style.display = "flex";
      setTimeout(() => {
        loader.style.display = "none";
        document.location.href = "../quiz page/quiz.html";
      }, 1500);
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    swal.fire("Invalid email or password");
  }
}
