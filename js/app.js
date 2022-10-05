// Меню бургер =====================================================================
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

// Плавный скролл к якорю =========================================================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 80;
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

// Swiper slider ==================================================================
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
	speed: 10000,
	width: 800,
  breakpoints: {
    320: {
      slidesPerView: 8,
      spaceBetween: 10
    },
    991.99: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  },
	autoplay: {
		delay: 800,
	},
});

// Class for services section & his instances======================================
class ServicesCard {
	constructor(src, alt, name, descr, parentSelector) {
		this.src = src;
		this.alt = alt;
		this.name = name;
		this.descr = descr;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('services__item');

		el.innerHTML = `
			<a href="https://wa.me/79181366982?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%0A%D0%9C%D0%BD%D0%B5%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%3A%20%20%0A%D0%90%D0%B4%D1%80%D0%B5%D1%81%3A%20%0A%D0%94%D0%B0%D1%82%D0%B0%3A%20" class="services__link btn__mobile"></a>
			<a href="https://vk.com/coolerwash" target="_blank" class="services__link btn__pc"></a>
			<div class="services__img">
				<img src=${this.src} alt=${this.alt}>
			</div>
			<div class="services__name">${this.name}</div>
			<div class="services__descr">${this.descr}</div>
		`;

		this.parent.append(el);
	}
}

new ServicesCard(
	'img/services/servicePack.jpg',
	'Мойка сплит системы',
	'Чистка сплит системы профилактическая',
	'Профилактическая (плановая) чистка внутреннего и внешнего блоков сплит системы водой под давлением, а также чистка пластикового корпуса внутреннего блока.',
	'.services__inner'
).render();

new ServicesCard(
	'img/services/cleanAntiBak.jpg',
	'Мойка сплит системы антибактериальная',
	'Комплексная чистка сплит ситсемы',
	'Комплексная чистка внутреннего и внешнего блоков сплит системы водой под давлением, антибактериальная обработка испарителя и вала(крыльчатки), а также чистка пластикового корпуса внутреннего блока',
	'.services__inner'
).render();

new ServicesCard(
	'img/services/freon.jpg',
	'Фреон',
	'Заправка хладагентом',
	'Проверка давления и наличия фреона в системе. Дозаправка при необходимости (В случае, когда заправка НЕ требуется, плата за проверку давления = 0руб.)',
	'.services__inner'
).render();

new ServicesCard(
	'img/services/drenag.jpeg',
	'Дренаж сплит системы',
	'Чистка дренажной трубы',
	'Разбор внутреннего блока сплит системы, чистка дренажного лотка, промывка, сборка внутреннего блока сплит ситсемы',
	'.services__inner'
).render();

new ServicesCard(
	'img/services/repair.jpg',
	'Ремонт сплит системы',
	'Модульный ремонт',
	'Модульная замена частей внешнего блока (конденсатор, реле и т.п.)',
	'.services__inner'
).render();

new ServicesCard(
	'img/services/controller.jpg',
	'Универсальный пульт сплит системы',
	'Замена пульта',
	'Приобретение универсального пульта, а также его прошивка под вашу модель сплит ситсемы',
	'.services__inner'
).render();
