const body = document.querySelector(".body");
const checkbox = document.getElementById("checkbox");
const toggleBtn = document.getElementById("nav__toggle--btn");
const toggleNav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  toggleNav.className === "nav"
    ? (toggleNav.className += " responsive")
    : (toggleNav.className = "nav");
});

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
});

checkbox.addEventListener("change", () => {
  console.log(1);
  body.classList.toggle("dark");
});
