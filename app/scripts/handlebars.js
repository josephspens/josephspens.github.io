/*global define, moment */
define(['handlebars-latest', 'momentjs'], function (Handlebars) {
	'use strict';

	var helpers = function helper (arr) {
		arr.map(function (fn) {
			Handlebars.registerHelper(fn.name, fn);
		});
	};

	helpers([

		function date (context) {
			return moment(context).format('MMMM D, YYYY');
		},

		function verb (context) {
			if (context === 'post') {
				return 'posted';
			} else {
				return 'shared';
			}
		},

		function trimCommitCode (passedString) {
			return new Handlebars.SafeString(passedString.substring(0,7));
		},

		function trimMessage (passedString) {
			var maxLength = 70,
				string = passedString.substring(0, maxLength);
			if (passedString.length >= maxLength) {
				string.concat('...');
			}
			return new Handlebars.SafeString(string);
		},

		function trimTitle (passedString) {
			return passedString.replace('<br /><br />','<br />');
		},

		function substr (passedString) {
			return new Handlebars.SafeString(passedString.substr(passedString.lastIndexOf('/')+1));
		},

		function either (v1, v2, block) {
			if (v1 || v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		function equals (v1, v2, block) {
			if (v1 === v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		function equalsEither (compare, v1, v2, block) {
			if (compare === v1 || compare === v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		function greater (v1, v2, block) {
			if (v1 > v2) {
				return block.fn(this);
			} else {
				return block.inverse(this);
			}
		},

		function link (uri, block) {
			if (uri) {
				return '<a href="' + uri + '" target="_blank">' + block.fn(this) + '</a>';
			} else {
				return block.fn(this);
			}
		}

	]);

	return Handlebars;
});