// Мобильное меню

let nav = document.querySelector(".main-navigation");
let button = document.querySelector(".navigation-button");

if (nav && button) {
  // инициализация меню
  nav.classList.toggle("main-navigation_closed");
  button.classList.toggle("navigation-button_closed");

  // переключение состояний меню по кнопке
  button.addEventListener('click', function (e) {
    nav.classList.toggle("main-navigation_closed")
    button.classList.toggle("navigation-button_closed");
    button.classList.toggle("navigation-button_opened");
  })
}
