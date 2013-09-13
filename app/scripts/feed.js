/*global define, Handlebars, moment */
define(['jquery', 'handlebars', 'momentjs'], function ($) {
	'use strict';

	var Feed = function () {
		this.fetch('#github','https://github.com/josephspens.json?callback=?');
		this.fetch('#blog','https://www.googleapis.com/plus/v1/people/105984509136518387439/activities/public?maxResults=5&key=AIzaSyCjsAgokjM_8s_M2HMuCt2YuKSxcE9Owb8');

		return this;
	};

	Feed.prototype.fetch = function (container, url) {
		$.getJSON(url, function(data){
			// Github JSON feed is malformed
			if(data.hasOwnProperty('length')){
				data = {
					items: $.map(data, function(value, key) {
						return value;
					})
				};
			}
			console.log(data);

			$(container + ' .items').html(Handlebars.compile($(container + '-template').html())(data));
		});

		Handlebars.registerHelper('date', function(context) {
			return moment(context).format('MMMM D, YYYY');
		});

		Handlebars.registerHelper('verb', function(context) {
			return (context === 'post') ? 'posted' : 'shared';
		});

		Handlebars.registerHelper('ifReshare', function(context, block) {
			if(context === 'share') {
				return block.fn(this);
			}
			return block.inverse(this);
		});
	};

	Feed.prototype.unescapeHtml = function (unsafe) {
		return unsafe
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#039;/g, '\'');
	};

	return new Feed(Handlebars, moment);
});