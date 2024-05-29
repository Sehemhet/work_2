// бургер меню
function burgerMenu() {
    var burger_menu = document.querySelector('.burger_menu');
    var burger = document.querySelector('.burger');
    var body = document.querySelector('body'); // Получаем тег body

    // Переключение класса burger_menu_open для бургер-меню
    burger_menu.classList.toggle('burger_menu_open');

    // Меняем класс бургер-кнопки и класс lock у тега body
    setTimeout(function() {
        if (burger_menu.classList.contains('burger_menu_open')) {
            burger.classList.add('burger_cross');
            body.classList.add('lock'); 
        } else {
            burger.classList.remove('burger_cross');
            body.classList.remove('lock'); 
        }
    }, 500);
}

function checkScreen() {
    var burger_menu = document.querySelector('.burger_menu');
    var burger = document.querySelector('.burger');
    var body = document.querySelector('body');

    if (innerWidth > 768) {
        burger_menu.classList.remove('burger_menu_open');
        burger.classList.remove('burger_cross');
        body.classList.remove('lock'); 
    }
}

window.addEventListener('load', checkScreen);
window.addEventListener('resize', checkScreen);





// стрелка для возврата в начало страницы
window.addEventListener('scroll', function() {
    var backPage = document.querySelector('.back_page');

    if (window.scrollY > 100) {
        backPage.style.display = 'flex';
    } else {
        backPage.style.display = 'none';
    }
});