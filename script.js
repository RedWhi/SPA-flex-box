$(function() {
	const link = $('.m-menu-link');
	const close =$('.close-menu');
	const menu = $('.m-menu');

	link.on('click', function(event) {
		menu.toggleClass('m-menu__active');
	});
	close.on('click', function(event) {
		menu.toggleClass('m-menu__active');
	});
});