import Component from './component.js';

class Header extends Component {
	constructor(element) {
		super(element);

		// Initial value
		this.lastScroll = 0;

		// Save references to children
		this.toggle = element.querySelector('.header__nav-toggle');
	}

	init() {
		const _this = this;

		this.toggle.addEventListener('click', function(e) {
			_this.handleToggleClick(e);
		});

		window.addEventListener('scroll', e => this.handleScroll());
	}

	handleToggleClick(e) {
		e.preventDefault();
		this.element.classList.toggle('header--expanded');
	}

	handleScroll() {
		const currentScroll = window.scrollY;
		const scrolled = currentScroll > 10;
		const upScroll = this.lastScroll < currentScroll;

		// Save new scroll value
		this.lastScroll = currentScroll;

		this.element.classList.toggle('header--opaque', scrolled);
		this.element.classList.toggle('header--hidden', upScroll && scrolled);
	}
}

Header.selector = '.header';

export default Header;
