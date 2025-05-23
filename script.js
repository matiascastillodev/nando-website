const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document.getElementById("year").textContent = new Date().getFullYear();

window.onload = function () {
  const targetDate = new Date(2025, 4, 10);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (today.getTime() === targetDate.getTime()) {
    document.documentElement.innerHTML = "";
  }
};
