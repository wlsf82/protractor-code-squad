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

    it ('h3\'s', function () {
        var allH3Elements = element.all(by.css('h3'));
        expect(allH3Elements.getText()).toEqual(['Pages', 'Panels', 'Navigations', 'Layouts', 'Contexts', 'Rules']);
    });

    it ('count h3', function () {
        var allH3Elements = element.all(by.css('h3'));
        expect(allH3Elements.count()).toBe(6);
    });

    // it ('menu items', function () {
    //     var mainMenu = element(by.css('.navbar-nav'));
    //     var menuItems = mainMenu.all(by.css('.ng-binding'));
    //     expect(menuItems.getText()).toEqual(['A Page', 'Another Page', 'Blog']);
    // });

    it ('menu items', function () {
        var menuItems = element.all(by.css('.navbar-nav .ng-binding'));
        expect(menuItems.getText()).toEqual(['A Page', 'Another Page', 'Blog']);
    });
});