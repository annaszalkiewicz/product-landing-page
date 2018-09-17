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

// Create google map

var map;

window.initMap = () => {
	map = new window.google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: { lat: 51.7730971, lng: 19.4105533 }
	});
	window.google.maps.event.addListenerOnce(map, 'idle', () => {
		document.getElementsByTagName('iframe')[0].title = 'Google  Maps';
	});
};