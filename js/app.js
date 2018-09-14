// Show / hide main navigation

const icon = document.getElementById('hamburger-menu');
const menu = document.getElementById('nav-bar');

const toggleMenu = () => {
	
	if (menu.classList.contains('show')) {
		menu.classList.remove('show');
	}
	else {
		menu.classList.add('show');
	}

};
icon.addEventListener('click', toggleMenu);
