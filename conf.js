/**
* @file conf.js
*/

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	// Saucelabs selenium info:
	// seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
	// Browserstack selenium info:
	// seleniumAddress: 'http://hub.browserstack.com/wd/hub',
	specs: ['./specs/spec.js', './specs/signin.spec.js', './specs/create.account.spec.js', './specs/page.spec.js', './specs/blog.spec.js', './specs/mobile.spec.js'],
	capabilities: {
		browserName: 'firefox',
		// Saucelabs credentials:
		// username: 'your saucelabs username here',
		// accessKey: 'your saucelabs accesskey here',
		// Browserstack credentials:
		// 'browserstack.user': 'your browserstack user here',
		// 'browserstack.key': 'your browserstack key here',
		// 'browserstack.debug': true,
		// Optional:
		// 'name': 'Code Squad - Protractor'
	},
	// multiCapabilities : [
	// 	{
	// 		browserName: 'chrome'
	// 	},
	// 	{
	// 		browserName: 'firefox'
	// 	}
	// ]
	baseUrl: 'http://demo.choko.org/',
	// framework: 'jasmine2',
	// onPrepare: function () {
	// 	var SpecReporter = require('jasmine-spec-reporter');

	// 	jasmine.getEnv().addReporter(new SpecReporter ({
	// 		displayFailureSummary: true,
	// 		displayFailedSpec: true,
	// 		displaySuiteNumber: true,
	// 		displaySpecDuration: true
	// 	}));
	// },

	onPrepare: function () {
		browser.driver.manage().window().maximize(),
		jasmine.getEnv().addReporter(new HtmlReporter ({
			baseDirectory: 'results'
		}));
	}
}
