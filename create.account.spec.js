/**
* @file create.account.spec.js
*/

var helper = require('./helper');

describe ('Create account', function () {
    beforeEach (function () {
        browser.get('create-account');
    });

	it ('title', function () {
		helper.verifyTitle('Create an account');
	});
});