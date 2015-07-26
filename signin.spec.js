/**
* @file signin.spec.js
*/

var helper = require('./helper');

describe ('Sign in', function () {
    beforeEach (function () {
        browser.get('sign-in');
    });

	it ('title', function () {
		helper.verifyTitle('Sign in');
	});

	it ('try to login with a invalid user and password', function () {
		var usernameField = $('#element-sign-in-username');
		var passwordField = $('#element-sign-in-password');
		var signinButton = $('#element-sign-in-submit');

		usernameField.sendKeys('invalid');
		passwordField.sendKeys('invalid');
		signinButton.click();

		expect(element(by.repeater('error in errors')).getText()).toEqual('Invalid username or password.');
	});
});