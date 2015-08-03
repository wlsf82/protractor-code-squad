/**
* @file page.spec.js
*/

var Page = require('./pages/page');

describe ('Page', function () {
	it ('verify main elements presence', function () {
		Page.get('a-page');
		Page.checkMainElementsPresence();
	});

	it ('verify main elements presence', function () {
		Page.get('a-page-callback');
		Page.checkMainElementsPresence();
	});	
});