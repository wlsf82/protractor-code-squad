/**
* @file blog.page.js
*/

var BlogPage = function () {

  this.addBlogPostButton = element(by.buttonText('Add blog post'));
  this.title = element(by.css('h1'));
  this.listOfPosts = element(by.css('.list-group'));

	this.get = function () {
    browser.get('blog');
  };

  this.countPostsOnPanel = function (expectedNumberOfLines) {
    var allPanelsLines = element.all(by.css('.panel [ng-repeat="item in items"]'));
    expect(allPanelsLines.count()).toBe(expectedNumberOfLines);
    // expect(allPanelsLines.count()).toBe(expectedNumberOfLines + 1);
  };

};

module.exports = new BlogPage();
