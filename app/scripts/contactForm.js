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
			var dev = 'https://script.google.com/macros/s/AKfycbwdx97EiQ3cKwT2Iz4xFYSDknheqr08mysTTavKACc/dev';
			//var prod = 'https://script.google.com/macros/s/AKfycbye-LazoQQv8LOvFEEwZmiDQj4l5p070i4z0bUHp1AUyB_SgHg/exec';

			this.sendButton.classList.add('sending');

			$.ajax({
				url: dev,
				type: 'get',
				dataType: 'jsonp',
				data: {
					name: this.name.value,
					replyTo: this.email.value,
					subject: this.subject.value,
					body: this.message.value
				}
			}).always(function (response) {
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