/**
* @file signin.page.js
*/

var SigninPage = function () {

	this.usernameField = $('#element-sign-in-username');
	this.passwordField = $('#element-sign-in-password');
	this.signinButton = $('#element-sign-in-submit');

	this.get = function () {
		browser.get('sign-in');
	};

	this.signin = function (user, password) {
		this.usernameField.sendKeys(user);
		this.passwordField.sendKeys(password);
		this.signinButton.click();
	}

};

module.exports = new SigninPage();