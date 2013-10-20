/*global define, moment */
define(['handlebars-latest', 'momentjs'], function (Handlebars) {
	'use strict';

	var helpers = function helpers () {
		var args = Array.prototype.slice.call(arguments),
				obj,
				ns;

		for (var index in args) {
			if (typeof args[index] === 'object') {
				obj = args[index];
			} else if (typeof args[index] === 'string') {
				ns = args[index];
			}
		}

		if (obj !== void 0) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					Handlebars.registerHelper(((ns) ? ns+'-'+key : key), obj[key]);
				}
			}
		}
	};

	helpers('Blog', {

		showVerb: function showVerb (context) {
			if (context === 'post') {
				return 'posted';
			} else {
				return 'shared';
			}
		},

		trimMessage: function trimMessage (passedString) {
			var maxLength = 70,
				string = passedString.substring(0, maxLength);
			if (passedString.length >= maxLength) {
				string.concat('...');
			}
			return new Handlebars.SafeString(string);
		},

		trimTitle: function trimTitle (passedString) {
			var string = passedString.replace('<br /><br />','<br />'),
					test = /<b>(.)*<\/b><br \/>/;

			if (string.search(test) === 0) {
				string = string.match(test)[0];
			}

			return string;
		}

	});

	helpers('Code', {

		trimCommitCode: function trimCommitCode (passedString) {
			return new Handlebars.SafeString(passedString.substring(0,7));
		}

	});

	helpers({

		date: function date (context) {
			return moment(context).format('MMMM D, YYYY');
		},

		substr: function substr (passedString) {
			return new Handlebars.SafeString(passedString.substr(passedString.lastIndexOf('/')+1));
		},

		either: function either (v1, v2, block) {
			if (v1 || v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		equals: function equals (v1, v2, block) {
			if (v1 === v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		equalsEither: function equalsEither (compare, v1, v2, block) {
			if (compare === v1 || compare === v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		greater: function greater (v1, v2, block) {
			if (v1 > v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		link: function link (uri, block) {
			if (uri) {
				return '<a href="' + uri + '" target="_blank">' + block.fn(this) + '</a>';
			} else {
				return block.fn(this);
			}
		}

	});

	return Handlebars;
});