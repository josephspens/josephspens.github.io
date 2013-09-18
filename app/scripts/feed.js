/*global define */
define(['jquery', 'handlebars', 'templates'], function ($, Handlebars, Templates) {
	'use strict';

	var Feed = function () {
		this.fetch('github','https://github.com/josephspens.json?callback=?');
		this.fetch('blog','https://www.googleapis.com/plus/v1/people/105984509136518387439/activities/public?maxResults=5&key=AIzaSyCjsAgokjM_8s_M2HMuCt2YuKSxcE9Owb8');
		this.fetch('portfolio','portfolio.json');

		return this;
	};

	Feed.prototype.fetch = function (container, url) {
		$.getJSON(url, function(data){
			// Github JSON feed is malformed
			if(container === 'github'){
				data = {
					items: $.map(data, function(value, index) {
						return (index < 6) ? value : null;
					})
				};
			}

			$('#' + container + ' .items').html(Templates[container](data));
		});
	};

	return new Feed();
});