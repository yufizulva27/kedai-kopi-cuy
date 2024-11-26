// Toggle class active
const navBarNav = document.querySelector(".navbar-nav");

//ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navBarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const hambuger = document.querySelector("#hamburger-menu");

document.addEventListener("click", (e) => {
  if (!hambuger.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }
});
