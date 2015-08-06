/**
* @file create.account.page.js
*/

var CreateAccountPage = function () {

	this.emailField = $('#element-create-account-email');
	this.usernameField = $('#element-create-account-username');
	this.passwordField = $('#element-create-account-password');
	this.confirmPasswordField = $('#element-create-account-password-confirm');
	this.createAccountButton = $('#element-create-account-submit');

  this.get = function () {
  	browser.get('create-account');
  };

  this.add = function (email, username, password) {
  	this.emailField.sendKeys(email);
  	this.usernameField.sendKeys(username);
  	this.passwordField.sendKeys(password);
  	this.confirmPasswordField.sendKeys(password);
  	this.createAccountButton.click();
  }

};

module.exports = new CreateAccountPage();
