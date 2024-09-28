/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window["FLS"] = true;

// Підключення основного файлу стилів
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
// flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
//flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
flsFunctions.showMore();

flsFunctions.transitionEffect();
flsFunctions.changeActiveLink();

/*
Модуль "До/Після"
Документація: https://template.fls.guru/template-docs/modul-do-pislia.html
Сніппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Бігучий рядок" (Alpha)
Документация:
Сниппет (HTML):
*/
// import './libs/keywords.js'

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
// import './libs/select.js'

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
// import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import "./libs/fullpage.js";

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: 
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================
// Отримуємо всі елементи
const items = document.querySelectorAll(".features__slide");

// // Функція, яка ховає всі елементи, крім того, на якому наведений курсор
function handleMouseOver(event) {
  items.forEach((item) => {
    if (item !== event.target) {
      item.classList.add("hidden");
    } else {
      item.classList.add("highlight"); // Додаємо клас до активного елемента
    }
  });
}

// Функція, яка показує всі елементи і видаляє клас highlight
function handleMouseOut(event) {
  items.forEach((item) => {
    item.classList.remove("hidden");
    item.classList.remove("highlight"); // Видаляємо клас highlight
  });
}

// // Додаємо обробники подій для всіх елементів
items.forEach((item) => {
  item.addEventListener("mouseenter", handleMouseOver);
  item.addEventListener("mouseleave", handleMouseOut);
});

// =================================
const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  // Відтворення відео при наведенні миші
  video.addEventListener("mouseenter", () => {
    video.muted = true; // Вимкнути звук
    video.play().catch((error) => {
      console.log("Помилка під час відтворення відео:", error);
    });
  });

  // Зупинка відео, коли миша залишає область відео
  video.addEventListener("mouseleave", () => {
    video.pause(); // Зупинити відтворення
    video.currentTime = 0; // Повернути на початок
  });

  // Відтворення зі звуком при кліку
  video.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false; // Увімкнути звук
      video.play().catch((error) => {
        console.log("Помилка під час відтворення відео зі звуком:", error);
      });
    } else {
      video.muted = true; // Вимкнути звук
      video.pause(); // Зупинити відео при повторному кліку
    }
  });

  // Обробка помилок завантаження відео
  video.addEventListener("error", (e) => {
    console.error("Помилка при завантаженні відео:", e);
    video.insertAdjacentHTML(
      "afterend",
      '<p>Вибачте, це відео не може бути завантажене. Спробуйте переглянути його пізніше або завантажте <a href="your-video.mp4" download>відео</a>.</p>'
    );
  });
});

// ===============================================================================
// Функція для запуску анімації при появі секції в зоні видимості
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in-content");
  const slideUpElements = document.querySelectorAll(".slide-up");

  // Створюємо IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Додаємо клас для fade-in ефекту
        if (entry.target.classList.contains("fade-in-content")) {
          entry.target.classList.add("fade-in-visible");
        }

        // Додаємо клас для slide-up ефекту
        if (entry.target.classList.contains("slide-up")) {
          entry.target.classList.add("slide-up-visible");
        }

        observer.unobserve(entry.target);
      }
    });
  });

  fadeInElements.forEach((el) => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });

  slideUpElements.forEach((el) => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });
});


// =======================================================================
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});


// =======================================================================
// Кількість булетів (крім першого)
const bullets = document.querySelectorAll('.bullet');
const sections = document.querySelectorAll('section');

// Функція для плавного скролу до певної секції
function scrollToSection(section) {
  window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth' // Додає плавний скрол
  });
}

// Додаємо обробник події кліку для кожного булета
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
      const targetSection = sections[index]; // Отримуємо відповідну секцію за індексом
      if (targetSection) {
          scrollToSection(targetSection); // Викликаємо функцію для скролу
      }
  });
});

// Обробка скролу для зміни стану булетів
window.addEventListener('scroll', () => {
  // Висота сторінки та поточна позиція
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Розрахунок проценту скролу
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Розрахунок кількості активних булетів (починаємо з другого)
  const activeBullets = Math.floor((scrollPercent / 100) * (bullets.length - 1)) + 1;

  // Оновлення класів булетів
  bullets.forEach((bullet, index) => {
      if (index < activeBullets) {
          bullet.classList.add('active');
      } else {
          bullet.classList.remove('active');
      }
  });
});

// ======================================================================================
const video = document.getElementById('video');
const playButton = document.getElementById('playButton');

// Функція для запуску та паузи відео
function toggleVideo() {
  if (video.paused) {
    video.play();
    playButton.classList.add('hidden'); // Ховаємо кнопку при запуску відео
  } else {
    video.pause();
    playButton.classList.remove('hidden'); // Показуємо кнопку при паузі
  }
}

// Додаємо слухач кліку на кнопку
if (playButton) {
  playButton.addEventListener('click', toggleVideo);
}

if (video) {
  video.addEventListener('pause', function() {
    playButton.classList.remove('hidden');
  });
}

if (video) {
  video.addEventListener('play', function() {
    playButton.classList.add('hidden');
  });
}



// =================================================================================================
document.querySelectorAll('.footer__address-icon').forEach(icon => {
  icon.addEventListener('click', function() {
    document.querySelectorAll('.footer__address-icon').forEach(i => i.classList.remove('icon--active'));
    this.classList.add('icon--active'); 
  });
});






