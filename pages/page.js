var Page = function () {

	this.mainElements = {
		panelTitle: element(by.css('h3')),
		panelDescription: element(by.css('.panel-body')),
		title: element(by.css('h1')),
		subTitle: element(by.css('.lead')),
		text: element(by.css('.page-content p'))
	}

	this.get = function (url) {
		browser.get(url);
	};

	this.checkMainElementsPresence = function () {
		for (var key in this.mainElements) {
			expect(this.mainElements[key].isPresent()).toBe(true);
		}
	};

};

module.exports = new Page();