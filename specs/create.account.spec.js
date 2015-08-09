/**
* @file create.account.spec.js
*/

var helper = require('../helper');
var CreateAccountPage = require ('../pages/create.account.page');

describe ('Create account', function () {
    beforeEach (function () {
    	CreateAccountPage.get();
    });

	it ('title', function () {
		helper.verifyTitle('Create an account');
	});

	it ('try to create account without filling any field', function () {
		CreateAccountPage.add('', '', '');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Please provide an username.');
	});

	it ('already existing account', function () {
		CreateAccountPage.add('walmyr@test.com', 'walmyr', 'senhasecreta');
		expect(element(by.repeater('error in errors')).getText()).toEqual('This username is not available, please choose another one.');
	});

  	it ('password not match', function () {
		CreateAccountPage.add('walmyr12345@test.com', 'walmyr12345', 'senhasecreta', 'senhaerrada');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Passwords must match.');
	});

  	it ('invalid email', function () {
		CreateAccountPage.add('invalidEmail', 'walmyr3', 'senhasecreta');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Email is required.');
	});

	/**
	* The below test will be skipped because we have no control to the users in the sample app
  * I mean, once this user is added, we will not be able to delete it, and then, next time this test run, it will fail.
  * In a real project, where you have access to the database, or even the administrative UI, you should delete it, automatically.
	*/

	xit ('successfully account creation', function () {
		CreateAccountPage.add('walmy1234r@test.com', 'walmyr1234', 'senhasecreta');
	});
});
