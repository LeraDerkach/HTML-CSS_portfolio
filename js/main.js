let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
});

let btn = document.querySelector(".navbar-btn-mob");
let navMenu = document.querySelector(".navbar-menu-mob");
let closeBtn = document.querySelector(".navbar-close-btn");

btn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    btn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    btn.classList.remove('active');
});
