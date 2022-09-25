const sharkLogo = document.querySelector(".header__btn--logo-container");
const sharkLogoImage = document.querySelector(".header__btn--logo");
const headerBtn = document.querySelector(".header__btn");

//Shark Pop-up Class Toggling.

headerBtn.addEventListener("mouseenter", () => {
  sharkLogo.className === "header__btn--logo-container"
    ? sharkLogo.classList.toggle("header__btn--logo-container--hovered")
    : sharkLogo.classList.toggle("header__btn--logo-container");
});
headerBtn.addEventListener("mouseleave", () => {
  sharkLogo.className === "header__btn--logo-container--hovered"
    ? sharkLogo.classList.toggle("header__btn--logo-container")
    : sharkLogo.classList.toggle("header__btn--logo-container--hovered");
});
headerBtn.addEventListener("mousedown", () => {
  sharkLogoImage.className === "header__btn--logo"
    ? sharkLogoImage.classList.toggle("header__btn--logo--clicked")
    : sharkLogoImage.classList.toggle("header__btn--logo");
});
headerBtn.addEventListener("mouseup", () => {
  sharkLogoImage.className === "header__btn--logo--clicked"
    ? sharkLogoImage.classList.toggle("header__btn--logo")
    : sharkLogoImage.classList.toggle("header__btn--logo--clicked");
});
