/*global define, Handlebars */
define(['jquery', 'handlebars'], function ($) {
	'use strict';

	var Portfolio = function (Handlebars) {
		$.getJSON('/portfolio.json', function(data){
			$('#portfolio-items').append(Handlebars.compile($('#portfolio-template').html())(data));
		});

		Handlebars.registerHelper('either', function(v1, v2, options) {
			if (v1 || v2) {
				return options.fn(this);
			}
		});

		Handlebars.registerHelper('link', function(uri, options) {
			if (uri) {
				return '<a href="' + uri + '">' + options.fn(this) + '</a>';
			} else {
				return options.fn(this);
			}
		});

		return this;
	};

	return new Portfolio(Handlebars);
});