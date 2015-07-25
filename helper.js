/**
* @file helper.js
*/

function verifyTitle (expectedTitle) {
	var title = element(by.css('h1'));
	expect(title.getText()).toEqual(expectedTitle);
}

module.exports = {
	verifyTitle: verifyTitle
}