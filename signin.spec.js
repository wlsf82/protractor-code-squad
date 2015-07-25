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
});