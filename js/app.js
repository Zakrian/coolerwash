// Определение типа устройства ===============================
// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };

// Меню бургер ===============================================

//Логика скрипта бургера:
//1. Получаем объект бургер
//2. Получаем меню, которое нужно открыть
//3. Вешаем обработчик события click на бургер (п.1)
//4. Добавляем (toggle) класс к меню (п.2)

const menuBurger = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		if (menuBody) {
			menuBody.classList.toggle('_active');
		}
	})
}

// Плавный скролл к якорю ===================================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		// const topOffset = document.querySelector('.scrollto').offsetHeight;
		const topOffset = 80; // Отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

// Изменение порядков элементов DOM при определенной ширине экрана ================
let main = document.querySelector('.main')
let brends = document.querySelector('.brends')

if (window.innerWidth <= 767.99) {
	main.append(brends)
}

// Аккордеон ======================================================================
// const questions = document.querySelectorAll('.accordion');

// const closeQuestion = (el) => {
// 	const content = el.querySelector('.accordion__text');
// 	el.classList.remove('_active-acc');
// 	content.style.maxHeight = null;
// }

// const openQuestion = (el) => {
// 	const content = el.querySelector('.accordion__text');
// 	el.classList.add('_active-acc');
// 	content.style.maxHeight = content.scrollHeight + 'px';
// }

// const closeAllQuestions = () => questions.forEach(question => closeQuestion(question));

// questions.forEach((el) => {
// 	el.addEventListener('click', () => {
// 		if (el.classList.contains('_active-acc')) {
// 			closeQuestion(el);
// 		} else {
// 			closeAllQuestions();
// 			openQuestion(el);
// 		}
// 	});
// })

// Animation on scroll ============================================================
// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);

// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_show');
// 			} else {
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_show');
// 				}
// 			}
// 		}
// 	}

// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return {
// 			top: rect.top + scrollTop,
// 			left: rect.left + scrollLeft
// 		}
// 	}
// 	setTimeout(() => {
// 		animOnScroll();
// 	}, 500);
// }