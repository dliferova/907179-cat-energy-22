// Мобильное меню

let nav = document.querySelector(".main-navigation");
let button = document.querySelector(".main-navigation__button");

if (nav && button) {
  // инициализация меню
  nav.classList.toggle("main-navigation_closed");
  button.classList.toggle("main-navigation__button_closed");

  // переключение состояний меню по кнопке
  button.addEventListener('click', function (e) {
    nav.classList.toggle("main-navigation_closed")
    button.classList.toggle("main-navigation__button_closed");
    button.classList.toggle("main-navigation__button_opened");
  })
}
