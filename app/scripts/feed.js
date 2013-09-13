/*global define, Handlebars, moment */
define(['jquery', 'handlebars', 'momentjs'], function ($) {
	'use strict';

	var Feed = function () {
		//this.fetchGithub('https://github.com/josephspens.atom');
		this.fetchGithub('/josephspens.atom');
		this.fetchGooglePlus('https://www.googleapis.com/plus/v1/people/105984509136518387439/activities/public?maxResults=5&key=AIzaSyCjsAgokjM_8s_M2HMuCt2YuKSxcE9Owb8');

		return this;
	};

	Feed.prototype.fetchGooglePlus = function (url) {
		$.getJSON(url, function(data){
			console.log(data);

			$('#blog .items').html(Handlebars.compile($('#blog-template').html())(data));
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

	Feed.prototype.fetchGithub = function (url) {
		var Feed = this;

		$.get(url, function(data){
			var json = {
				entries: []
			};
			
			$(data).find('entry').each(function (index) {
				if(index === 5) {
					return false;
				}

				json.entries.push({
					title: $(this).children('title').text(),
					content: Feed.unescapeHtml($(this).children('content').text())
				});
			});

			$('#github .items').html(Handlebars.compile($('#github-template').html())(json));
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