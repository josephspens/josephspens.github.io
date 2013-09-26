/*global define */
define(['jquery'], function ($) {
	'use strict';

	function showCaptcha () {
		validate({ inputs: validatedInputs });

		if (isValid) {
			sendButton.classList.add('captcha');
			$(sendButton).one('click', testCaptcha);
		} else {
			$(sendButton).one('click', showCaptcha);
		}
	}

	function testCaptcha () {
		var captchaResponse = document.getElementById('recaptcha_response_field'),
			captchaChallenge = document.getElementById('recaptcha_challenge_field');

		$.ajax({
			url: '//maple-reaper.herokuapp.com/recaptcha?callback=?',
			type: 'get',
			dataType: 'jsonp',
			data: {
				recaptchaResponseField: captchaResponse.value,
				recaptchaChallengeField: captchaChallenge.value
			}
		}).done(function (response) {
			console.log(response);
			console.log(response.isCorrect);
			if (response.isCorrect) {
				captchaResponse.classList.remove('error');
				sendMail();
			} else {
				captchaResponse.classList.add('error');
				$(sendButton).one('click', testCaptcha);
			}
		});
	}

	function sendMail () {
		sendButton.classList.add('sending');
		
		$.ajax({
			url: '//maple-reaper.herokuapp.com/mail?callback=?',
			type: 'get',
			dataType: 'jsonp',
			data: {
				name: name.value,
				email: email.value,
				subject: subject.value,
				message: message.value
			}
		}).done(function (response) {
			if (response.success) {
				sendButton.classList.add('sent');
			} else {
				$(sendButton).one('click', sendMail);
			}
		});
	}

	function validate (options) {
		// validate text fields
		return options.inputs.map(function (input) {
			var isEmpty = (input.value.trim() === ''),
				isInputValid;

			if (input === email) {
				isInputValid = (!isEmpty && emailAddressRegexPattern.test(input.value));
			} else  {
				isInputValid = !isEmpty;
			}

			if(!isInputValid){
				isValid = false;
				input.classList.add('error');
			} else {
				input.classList.remove('error');
			}
		});
	}

	var emailAddressRegexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		isValid = true,

		name = document.getElementById('name'),
		email = document.getElementById('email'),
		subject = document.getElementById('subject'),
		message = document.getElementById('message'),
		sendButton = document.getElementById('send-mail'),

		validatedInputs = [ email, name, message ];

	$(sendButton).one('click', showCaptcha);
	$(validatedInputs).on('blur', function(){
		validate({ inputs: $(this).get() });
	});
});