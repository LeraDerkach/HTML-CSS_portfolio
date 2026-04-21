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



//Language selection

// const savedLang = localStorage.getItem('lang');

// if (savedLang) {
//     window.location.href = '/' + savedLang + '/';
// } else {
//     const lang = navigator.language;
//      if (lang.startsWith('fr')) {
//         window.location.href = '/fr/';
//      } else {
//         window.location.href = '/en/';
//      }
// }

// авто-вибір + збереження
// const savedLang = localStorage.getItem('lang');

// if (!savedLang) {
//   const lang = navigator.language;

//   if (lang.startsWith('fr')) {
//     window.location.href = '/fr/';
//   } else if (lang.startsWith('de')) {
//     window.location.href = '/de/';
//   }
// }

// обробка кліків
// document.querySelectorAll('.lang-switch').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const lang = btn.dataset.lang;
//     localStorage.setItem('lang', lang);
//     window.location.href = '/' + lang + '/';
//   });
// });



// стара версія бургер меню

// let burger = document.getElementById('burger-mob');
// let menu = document.getElementById('menu');
// let close = document.getElementById('close');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     burger.classList.toggle('active');
// });

// close.addEventListener('click', () => {
//     menu.classList.remove('active');
//     burger.classList.remove('active');
// });
