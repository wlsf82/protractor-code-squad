/**
* @file signin.spec.js
*/

var helper = require('../helper');
var SigninPage = require('../pages/signin.page');

describe ('Sign in', function () {
    beforeEach (function () {
        SigninPage.get();
    });

	it ('title', function () {
		helper.verifyTitle('Sign in');
	});

	it ('try to login with a invalid user and password', function () {
		SigninPage.signin('invalid', 'invalid');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Invalid username or password.');
	});

	it ('try to login without filling any field', function () {
		SigninPage.signin('', '');
		expect(element(by.repeater('error in errors')).getText()).toEqual('Please provide an username and a password.');
	});
});