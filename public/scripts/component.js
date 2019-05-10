export default class Component {
	static selector = '';
	static instances = [];

	constructor(element) {
		this.element = element;
	}

	static init() {
		if ( this.selector ) {
			// Get all elements from DOM
			const [...elements] = document.querySelectorAll(this.selector);

			// Loop through the elements to initialize them
			elements.forEach(element => {
				// Instantiate
				const instance = new this(element);

				// Save new instance
				this.instances.push(instance);

				// Initialize new instance
				if ( instance.init ) {
					instance.init();
				}
			});
		}
	}
}
