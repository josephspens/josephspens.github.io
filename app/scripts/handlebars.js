/*global define, moment */
define(['handlebars-latest', 'momentjs'], function (Handlebars) {
	'use strict';
	
	Handlebars.registerHelper('date', function(context) {
		return moment(context).format('MMMM D, YYYY');
	});

	Handlebars.registerHelper('verb', function(context) {
		if (context === 'post') {
			return 'posted';
		} else {
			return 'shared';
		}
	});

	Handlebars.registerHelper('trimCommitCode', function(passedString) {
		return new Handlebars.SafeString(passedString.substring(0,7));
	});

	Handlebars.registerHelper('trimMessage', function(passedString) {
		var maxLength = 70,
			string = passedString.substring(0, maxLength);
		if (passedString.length >= maxLength) {
			string.concat('...');
		}
		return new Handlebars.SafeString(string);
	});

	Handlebars.registerHelper('substr', function(passedString) {
		return new Handlebars.SafeString(passedString.substr(passedString.lastIndexOf('/')+1));
	});

	Handlebars.registerHelper('either', function(v1, v2, block) {
		if (v1 || v2) {
			return block.fn(this);
		} else {
			return block.inverse(this);
		}
	});

	Handlebars.registerHelper('equals', function(v1, v2, block) {
		if (v1 === v2) {
			return block.fn(this);
		} else {
			return block.inverse(this);
		}
	});

	Handlebars.registerHelper('equalsEither', function(compare, v1, v2, block) {
		if (compare === v1 || compare === v2) {
			return block.fn(this);
		} else {
			return block.inverse(this);
		}
	});

	Handlebars.registerHelper('greater', function(v1, v2, block) {
		if (v1 > v2) {
			return block.fn(this);
		} else {
			return block.inverse(this);
		}
	});

	Handlebars.registerHelper('link', function(uri, block) {
		if (uri) {
			return '<a href="' + uri + '" target="_blank">' + block.fn(this) + '</a>';
		} else {
			return block.fn(this);
		}
	});

	return Handlebars;
});