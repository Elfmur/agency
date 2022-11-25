'use strict';
// этот код работает в строгом режиме

// объявляю переменные
let menuWrapper = document.querySelector('.popup-menu')
let menuButton = document.querySelector('.popup-menu__button')
let menuList = document.querySelector('.popup-menu__list')

// добавляем событие по клику 'click' на переменную menuButton и будущую функцию с названием showMenu
menuButton.addEventListener('click', showMenu)

// создаем функцию showMenu меняющую класс. classList - список классов. toggle - что делать с классом (убрать-добавить)
function showMenu() {
  menuList.classList.toggle('hide')
}

// добавляем еще одно событие по клику 'click' на весь документ и будущую функцию с названием closeMenu
document.addEventListener('click', closeMenu)

//добавляем функцию closeMenu. (evt - аргумент.  когда по событию срабатывает функция мы можем аргументом передать событие.) Потом создаем переменную внутри функции которое смотрит на событие клика внутри контейнера?. создаем If - если то-то,  то будет что-то, в нашем случае это значит,  что если клик не на список меню,  то навешивается хайд,  а хайд это дисплей - нон
function closeMenu(evt) {
  let insideMenu = menuWrapper.contains(evt.target)
  if (!insideMenu) {menuList.classList.add('hide')}
}
