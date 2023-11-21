let wHeight = window.innerHeight;
window.addEventListener('scroll', function() {
	let wScroll = window.scrollY;

	let elements = document.querySelectorAll('.js-trigger');
	
	elements.forEach(function(element) {
		let position = element.getBoundingClientRect().top + wScroll;
		
		if (wScroll > position - wHeight * 3/4) {
			element.classList.add('js-active');
		} else if (wScroll <= position - wHeight) {
			element.classList.remove('js-active');
		}
	});


	// let content01 = document.querySelectorAll('.js-trigger');
	
	// elements.forEach(function(element) {
	// 	let position = element.getBoundingClientRect().top + wScroll;
		
	// 	if (wScroll > position - wHeight * 2/3) {
	// 		element.classList.add('js-active');
	// 	} else if (wScroll <= position - wHeight) {
	// 		element.classList.remove('js-active');
	// 	}
	// });
});

