/*global define */
define(['jquery'], function ($) {
	'use strict';

	var ContactForm = function () {
		this.emailAddressRegexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.isValid = true;

		this.name = document.getElementById('name');
		this.email = document.getElementById('email');
		this.subject = document.getElementById('subject');
		this.message = document.getElementById('message');
		this.sendButton = document.getElementById('send-mail');

		this.validatedInputs = [ this.email, this.name, this.message ];

		$(this.sendButton).one('click', this.sendMail.bind(this));
		$(this.validatedInputs).on('blur', { context: this }, function(event){
			event.data.context.validate({ inputs: $(this).get() });
		});

		return this;
	};

	ContactForm.prototype.validate = function (options) {
		// validate text fields
		return options.inputs.map(function (input) {
			var type = input.getAttribute('type'),
				isEmpty = (input.value.trim() === ''),
				isInputValid;

			if (type === 'email') {
				isInputValid = (!isEmpty && this.emailAddressRegexPattern.test(input.value));
			} else  {
				isInputValid = !isEmpty;
			}

			if(!isInputValid){
				this.isValid = false;
				input.classList.add('error');
			} else {
				input.classList.remove('error');
			}
		}, this);
	};

	ContactForm.prototype.sendMail = function () {
		var that = this;
		this.validate({ inputs: this.validatedInputs });

		if (this.isValid) {
			this.sendButton.classList.add('sending');

			$.getJSON('//spens.us/libs/services.php?callback=?', {
				method: 'sendMail',
				data: {
					name: this.name.value,
					email: this.email.value,
					subject: this.subject.value,
					message: this.message.value
				}
			}, function (response) {
				if (response) {
					that.sendButton.classList.add('sent');
				} else {
					$(that.sendButton).one('click', that.sendMail.bind(that));
				}
			});
		} else {
			$(that.sendButton).one('click', that.sendMail.bind(that));
		}
	};

	return new ContactForm();
});