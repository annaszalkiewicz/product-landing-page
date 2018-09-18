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

let map;

initMap = () => {
	map = new window.google.maps.Map(document.getElementById('map'), {
		center: { lat: 51.7730971, lng: 19.4105533 },
		zoom: 6
	});
}