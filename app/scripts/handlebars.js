/*global define, moment */
define(['handlebars-latest', 'momentjs'], function (Handlebars) {
	'use strict';

	var helpers = function helper (obj) {
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) {
				Handlebars.registerHelper(key, obj[key]);
			}
		}
	};

	helpers({

		date: function (context) {
			return moment(context).format('MMMM D, YYYY');
		},

		verb: function (context) {
			if (context === 'post') {
				return 'posted';
			} else {
				return 'shared';
			}
		},

		trimCommitCode: function (passedString) {
			return new Handlebars.SafeString(passedString.substring(0,7));
		},

		trimMessage: function (passedString) {
			var maxLength = 70,
				string = passedString.substring(0, maxLength);
			if (passedString.length >= maxLength) {
				string.concat('...');
			}
			return new Handlebars.SafeString(string);
		},

		trimTitle: function (passedString) {
			var string = passedString.replace('<br /><br />','<br />'),
					test = /<b>(.)*<\/b><br \/>/;

			if (string.search(test) === 0) {
				string = string.match(test)[0];
			}

			return string;
		},

		substr: function (passedString) {
			return new Handlebars.SafeString(passedString.substr(passedString.lastIndexOf('/')+1));
		},

		either: function (v1, v2, block) {
			if (v1 || v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		equals: function (v1, v2, block) {
			if (v1 === v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		equalsEither: function (compare, v1, v2, block) {
			if (compare === v1 || compare === v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		greater: function (v1, v2, block) {
			if (v1 > v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		link: function (uri, block) {
			if (uri) {
				return '<a href="' + uri + '" target="_blank">' + block.fn(this) + '</a>';
			} else {
				return block.fn(this);
			}
		}

	});

	return Handlebars;
});