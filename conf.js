/**
* @file conf.js
*/

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	baseUrl: 'http://google.com/',
	onPrepare: function () {
		// Used for non-angular apps.
    	browser.ignoreSynchronization = true;
	}
}