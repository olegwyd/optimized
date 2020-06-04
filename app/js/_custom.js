// Script for mobile menu button
let menu = document.querySelector('.menu');
let menuStyle = getComputedStyle(menu);
let menuButton = document.querySelector('.menu-icon-container');

menuButton.addEventListener('click', function(){
	if (menuStyle.display == 'none') {
		menu.classList.add('active')
	} else {
		menu.classList.remove('active')
	}
})