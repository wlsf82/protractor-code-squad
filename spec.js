/**
* @file spec.js
*/

describe ('Choko demo', function () {
	it ('title', function () {
		browser.driver.get('http://demo.choko.org/');
		var title = element(by.css('h1'));
		expect(title.getText()).toEqual('Demo application');
	});
});