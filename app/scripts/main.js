require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		requirejs: '../bower_components/requirejs/require',
		handlebarsjs: '../bower_components/handlebars/handlebars',
		momentjs: '../bower_components/momentjs/moment'
	},
	shim: {
		'handlebarsjs': {
			exports: 'Handlebars'
		},
		'momentjs': {
			exports: 'moment'
		}
	}
});

require(['jquery', 'contact-form', 'feed', 'utilities'], function ($) {
	'use strict';

	// nav scrolling
	function navigate (event) {
		event.data.offset = event.data.offset || 0;

		$('html, body').animate({
			scrollTop: $(event.data.scrollTop).offset().top + event.data.offset
		}, 'slow');
	}

	$('nav')
		.on('click', '.home', { scrollTop: 'header' }, navigate)
		.on('click', '.about', { scrollTop: '#container', offset: -200 }, navigate)
		.on('click', '.work', { scrollTop: '#portfolio', offset: -100 }, navigate)
		.on('click', '.github', { scrollTop: '#github', offset: -100 }, navigate)
		.on('click', '.blog', { scrollTop: '#blog', offset: -100 }, navigate)
		.on('click', '.contact', { scrollTop: 'footer', offset: -100 }, navigate);

	// window scrolling
	$(window).on('scroll', function () {
		// section header animation
		$('section, footer').each(function (){
			$(this).find('h2').toggleClass('hidden', ($(this).offset().top - window.pageYOffset) >= 700);
		});

		// about module scrolling
		$('#about').css('top',(window.pageYOffset / - 5));

		// nav bar changing colors
		var isBelowHeader = ($('header').height() - window.pageYOffset) < 0,
			isAboveFeeds = ($('#feeds').offset().top - window.pageYOffset) > 0,
			isInPortfolio = (isBelowHeader && isAboveFeeds);
		$('nav').toggleClass('work_section', isInPortfolio);
	}).scroll();

});
