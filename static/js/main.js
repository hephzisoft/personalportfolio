const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".sidenav");
  const navLink = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    // toggle
    nav.classList.toggle("sidenav-active");
    // animate items
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${
          index / 7
        }s`;
      }
    });
  });
};
navSlide();
