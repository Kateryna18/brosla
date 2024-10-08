/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	let swiperInstance;
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) { // Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 10,
			speed: 800,
			centeredSlides: true,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			// Брейкпоінти
			breakpoints: {
				992: {
					// slidesPerView: "auto",
					spaceBetween: 45,
					centeredSlides: false,
					slidesOffsetBefore: 10,
				},
				1700: {
					slidesPerView: "auto",
					spaceBetween: 45,
					centeredSlides: false,
					slidesOffsetBefore: 65,
				},
			},
		});
	}

	if (document.querySelector('.address__slider')) { 
		let swiperInstance;
	
		function initSwiper() {
			let screenWidth = window.innerWidth;
			
			if (screenWidth < 1024 && !swiperInstance) {
				swiperInstance = new Swiper('.address__slider', { 
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: 1.1,
					spaceBetween: 10,
					speed: 800,
					centeredSlides: true,
	
					navigation: {
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					},
				});
			} 
			// Якщо ширина екрану більше або дорівнює 768px, знищуємо слайдер
			else if (screenWidth >= 1400 && swiperInstance) {
				swiperInstance.destroy(true, true);
				swiperInstance = null;
			}
		}
	
		// Ініціалізуємо або знищуємо слайдер під час завантаження сторінки
		initSwiper();
	
		// Додаємо обробник події на зміну розміру вікна
		window.addEventListener('resize', function () {
			initSwiper();
		});
	}

	if (document.querySelector('.catalogs__slider')) { // Вказуємо клас потрібного слайдера

		if (window.innerWidth <= 768) {  // Задаємо breakpoint для мобільних екранів
			if (!swiperInstance) {
				swiperInstance = new Swiper('.catalogs__slider', { // Вказуємо склас потрібного слайдера
					// Підключаємо модулі слайдера
					// для конкретного випадку
					modules: [Pagination],
					observer: true,
					observeParents: true,
					slidesPerView: "auto",
					spaceBetween: 40,
					autoHeight: true,
					speed: 800,
					centeredSlides: true,
		
					// Пагінація
					pagination: {
						el: '.catalogs__pagination',
						clickable: true,
					},

					breakpoints: {
						490: {
							slidesPerView: 1,
							spaceBetween: 30,
						}
					},
				});
			}
		} else {
			if (swiperInstance) {
				swiperInstance.destroy(true, true);
				swiperInstance = null;
			}
		}
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});