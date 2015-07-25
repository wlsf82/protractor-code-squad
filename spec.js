/**
* @file spec.js
*/

describe ('Choko demo', function () {
	it ('title', function () {
		browser.get('/');
		var title = element(by.css('h1'));
		expect(title.getText()).toEqual('Demo application');
	});
});