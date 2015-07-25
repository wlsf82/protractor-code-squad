/**
* @file conf.js
*/

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
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
	baseUrl: 'http://demo.choko.org/'
}