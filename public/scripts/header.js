import Component from './component.js';

export default class Header extends Component {
	static selector = '.header'

	constructor(element) {
		super(element);

		// Save references to children
		this.toggle = element.querySelector('.header__nav-toggle');
	}

	init() {
		this.toggle.addEventListener('click', e => this.handleToggleClick(e));
	}

	handleToggleClick(e) {
		e.preventDefault();
		this.element.classList.toggle('header--expanded');
	}
}
