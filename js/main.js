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