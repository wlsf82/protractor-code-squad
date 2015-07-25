/**
* @file conf.js
*/

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
	// framework: 'jasmine2'
}