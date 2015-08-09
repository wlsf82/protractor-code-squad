/**
* @file spec.js
*/

var EC = protractor.ExpectedConditions;

describe ('Non-Angular app', function () {
	it ('search', function () {
		browser.get('/');
		$('input#lst-ib').sendKeys('Protractor documentacao oficial' + protractor.Key.ENTER);
		browser.wait(EC.visibilityOf(element.all(by.cssContainingText('a', 'Protractor')).last()), 3000);		
		element.all(by.cssContainingText('a', 'Protractor')).last().click();
	});
});