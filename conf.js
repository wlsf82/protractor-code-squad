/**
* @file conf.js
*/

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js', 'signin.spec.js', 'create.account.spec.js'],
	// capabilities: {
	// 	browserName: 'chrome'
	// },
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
		jasmine.getEnv().addReporter(new HtmlReporter ({
			baseDirectory: 'results'
		}));
	}
}