const body = document.querySelector(".body");
const checkbox = document.getElementById("checkbox");
const toggleBtn = document.getElementById("nav__toggle--btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
});

checkbox.addEventListener("change", () => {
  console.log(1);
  body.classList.toggle("dark");
});
