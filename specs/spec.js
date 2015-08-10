/**
* @file spec.js
*/

var helper = require('../helper');
var HomePage = require('../pages/home.page');

describe ('Home', function () {
    beforeEach (function () {
        HomePage.get();
        browser.driver.manage().window().maximize();
    });

	it ('title', function () {
        helper.verifyTitle('Demo application');
	});

    it ('h3\'s', function () {
        HomePage.verifyAllH3Elements();
    });

    it ('count h3', function () {
        HomePage.countAllH3Elements(6);
    });

    // it ('menu items', function () {
    //     var mainMenu = element(by.css('.navbar-nav'));
    //     var menuItems = mainMenu.all(by.css('.ng-binding'));
    //     expect(menuItems.getText()).toEqual(['A Page', 'Another Page', 'Blog']);
    // });

    it ('menu items', function () {
        HomePage.verifyMenuItems();
    });
});