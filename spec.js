/**
* @file spec.js
*/

var helper = require('./helper');

describe ('Home', function () {
    beforeEach (function () {
        browser.get('/');
    });

	it ('title', function () {
        helper.verifyTitle('Demo application');
	});
});