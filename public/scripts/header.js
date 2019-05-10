import Component from './component.js';

class Header extends Component {
	constructor(element) {
		super(element);

		// Save references to children
		this.toggle = element.querySelector('.header__nav-toggle');
	}

	init() {
		const _this = this;

		this.toggle.addEventListener('click', function(e) {
			_this.handleToggleClick(e);
		});
	}

	handleToggleClick(e) {
		e.preventDefault();
		this.element.classList.toggle('header--expanded');
	}
}

Header.selector = '.header';

export default Header;
