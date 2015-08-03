/**
* @file home.page.js
*/

var HomePage = function () {

	this.get = function () {
		browser.get('/');
	};

	this.verifyAllH3Elements = function () {
		var allH3Elements = element.all(by.css('h3'));
        expect(allH3Elements.getText()).toEqual(['Pages', 'Panels', 'Navigations', 'Layouts', 'Contexts', 'Rules']);
	};

	this.countAllH3Elements = function (expectedNumberOfH3Elements) {
		var allH3Elements = element.all(by.css('h3'));
        expect(allH3Elements.count()).toBe(expectedNumberOfH3Elements);
	};

	this.verifyMenuItems = function () {
		var menuItems = element.all(by.css('.navbar-nav .ng-binding'));
        expect(menuItems.getText()).toEqual(['A Page', 'Another Page', 'Blog']);
	};

};

module.exports = new HomePage();