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

	/**
	* The three below tests will be skipped because we have no control to the users in the sample app
	* And because we are still not dealing with the password not match situation.
	*/

	xit ('invalid email', function () {
		CreateAccountPage.add('walmyr', 'walmyr3', 'senhasecreta');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Email is required.');
	});

	xit ('password not match', function () {
		CreateAccountPage.add('walmyr@test.com', 'walmyr1', 'senhasecreta', 'senhaerrada');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Please provide an username and a password.');
	});

	xit ('successfully account creation', function () {
		CreateAccountPage.add('walmyr@test.com', 'walmyr2', 'senhasecreta');
	});
});