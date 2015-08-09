/**
* @file mobile.spec.js
*/

var HomePage = require('../pages/home.page');
var SigninPage = require('../pages/signin.page');

describe ('Mobile', function () {
    // Tests pre-condition
    beforeEach(function () {
        HomePage.get();
        browser.driver.manage().window().setSize(320,480);
    });

    it ('access login page by mobile menu', function () {
        browser.sleep(3000);
        HomePage.menuButton.click();
        browser.sleep(1000);
        HomePage.signinMenuItem.click();
        expect(SigninPage.usernameField.isPresent()).toBe(true);
    });
});
