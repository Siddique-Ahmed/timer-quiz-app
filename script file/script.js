let bar = document.querySelector("nav i");
let list = document.querySelector("nav .list");
let logoSpan = document.querySelector(".logo h1 span");
bar.addEventListener("click", () => {
  hamburger();
});

function hamburger() {
  if (list.style.top == "-400px") {
    list.style.top = "0px";
    bar.classList.add("fa-xmark");
    bar.classList.remove("fa-bars");
    bar.style.color = "#fff";
    logoSpan.style.color = "#fff";
  } else {
    list.style.top = "-400px";
    bar.classList.add("fa-bars");
    bar.classList.remove("fa-xmark");
    bar.style.color = "#fcc822";
    logoSpan.style.color = "#fcc822";
  }
}
// ################# hamburger work ####################### \\
