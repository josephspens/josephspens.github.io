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
					items: $.map(data, function(value) {
						return value;
					})
				};
			}
			console.log(data);

			data.items = data.items.slice(0,8);

			$(container + ' .items').html(Handlebars.compile($(container + '-template').html())(data));
		});

		Handlebars.registerHelper('date', function(context) {
			return moment(context).format('MMMM D, YYYY');
		});

		Handlebars.registerHelper('verb', function(context) {
			return (context === 'post') ? 'posted' : 'shared';
		});

		Handlebars.registerHelper('ifPost', function(context, block) {
			if(context === 'post') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('ifArticle', function(context, block) {
			if(context === 'article') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('ifImage', function(context, block) {
			if(context === 'photo') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('ifWatching', function(context, block) {
			if(context === 'WatchEvent') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('ifPush', function(context, block) {
			if(context === 'PushEvent') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('ifFollow', function(context, block) {
			if(context === 'FollowEvent') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('ifIssue', function(context, block) {
			if(context === 'IssuesEvent') {
				return block.fn(this);
			}
			return block.inverse(this);
		});

		Handlebars.registerHelper('trimString', function(passedString) {
			return new Handlebars.SafeString(passedString.substring(0,7));
		});

		Handlebars.registerHelper('substr', function(passedString) {
			return new Handlebars.SafeString(passedString.substr(passedString.lastIndexOf('/')+1));
		});

		Handlebars.registerPartial('time', $('#time-partial').html());
		Handlebars.registerPartial('small-gravatar', $('#small-gravatar-partial').html());
		Handlebars.registerPartial('large-gravatar', $('#large-gravatar-partial').html());
		Handlebars.registerPartial('author', $('#author-partial').html());
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