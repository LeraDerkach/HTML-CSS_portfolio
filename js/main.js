// Opening the mobile version

let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let close = document.getElementById('close');
let overlay = document.getElementById('overlay');

function openMenu() {
  menu.classList.add('active');
  overlay.classList.add('active');
  burger.classList.add('active');
  burger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  burger.classList.remove('active');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  menu.classList.contains('active') ? closeMenu() : openMenu();
});

close.addEventListener('click', closeMenu);

// overlay
overlay.addEventListener('click', closeMenu);

// ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// mob menu

let btn = document.querySelector(".btn-navbar-mob");
let navMenu = document.querySelector(".navbar-menu-mob");
let closeBtn = document.querySelector(".btn-navbar-close");

btn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    btn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    btn.classList.remove('active');
});




