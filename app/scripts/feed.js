/*global define, Handlebars, moment */
define(['jquery', 'handlebars', 'templates', 'momentjs'], function ($, Handlebars, Templates) {
	'use strict';

	var Feed = function () {
		this.fetch('github','https://github.com/josephspens.json?callback=?');
		this.fetch('blog','https://www.googleapis.com/plus/v1/people/105984509136518387439/activities/public?maxResults=5&key=AIzaSyCjsAgokjM_8s_M2HMuCt2YuKSxcE9Owb8');
		this.fetch('portfolio','/portfolio.json')

		return this;
	};

	Feed.prototype.fetch = function (container, url) {
		$.getJSON(url, function(data){
			// Github JSON feed is malformed
			if(container === 'github'){
				data = {
					items: $.map(data, function(value, index) {
						return (index <= 8) ? value : null;
					})
				};
			}

			console.log(data);

			$('#' + container + ' .items').html(Templates[container](data));
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

	Handlebars.registerPartial('time', Templates['time']);
	Handlebars.registerPartial('small-gravatar', Templates['small-gravatar']);
	Handlebars.registerPartial('large-gravatar', Templates['large-gravatar']);

	Handlebars.registerPartial('author', Templates['author']);

	Handlebars.registerHelper('date', function(context) {
		return moment(context).format('MMMM D, YYYY');
	});

	Handlebars.registerHelper('verb', function(context) {
		return (context === 'post') ? 'posted' : 'shared';
	});

	Handlebars.registerHelper('ifPost', function(context, block) {
		return (context === 'post') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('ifArticle', function(context, block) {
		return (context === 'article') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('ifImage', function(context, block) {
		return (context === 'photo') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('ifWatching', function(context, block) {
		return (context === 'WatchEvent') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('ifPush', function(context, block) {
		return (context === 'PushEvent') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('ifFollow', function(context, block) {
		return (context === 'FollowEvent') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('ifIssue', function(context, block) {
		return (context === 'IssuesEvent') ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('trimCommitCode', function(passedString) {
		return new Handlebars.SafeString(passedString.substring(0,7));
	});

	Handlebars.registerHelper('trimMessage', function(passedString) {
		var maxLength = 70,
			string = new Handlebars.SafeString(passedString.substring(0, maxLength));
		if(passedString.length >= maxLength) string += '...';
		return string;
	});

	Handlebars.registerHelper('substr', function(passedString) {
		return new Handlebars.SafeString(passedString.substr(passedString.lastIndexOf('/')+1));
	});

	Handlebars.registerHelper('either', function(v1, v2, block) {
		return (v1 || v2) ? block.fn(this) : block.inverse(this);
	});

	Handlebars.registerHelper('link', function(uri, options) {
		if (uri) {
			return '<a href="' + uri + '">' + options.fn(this) + '</a>';
		} else {
			return options.fn(this);
		}
	});

	return new Feed();
});