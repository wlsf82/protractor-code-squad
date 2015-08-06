/**
* @file blog.spec.js
*/

// All the tests in this file will be skipped, since they make no much sense for the class-14.

var BlogPage = require('../pages/blog.page');
var helper = require('../helper');

describe ('Blog', function () {
  // Tests pre-condition
  beforeEach(function () {
    BlogPage.get();
  });
  // False negative test
  // This is a test that needs to be refactored, because it's causing the impression of a bug,
  // but the true is that the bug is in the test.
  xit ('false negative test', function () {
    BlogPage.countPostsOnPanel(6);
  });

  // False positive test
  // This is a test that needs to be refactored, bacause it's causing the impression that everything is working fine
  // When the true is that we've a masked bug.
  xit ('false positive test', function () {
    // expect(BlogPage.title.getText()).toContain('Blog posts');
    // The below line can be used to make this test a positive negative.
    expect(BlogPage.title.getText()).toEqual('Blog posts');
  });

  // Positive negative test
  // This is a true bug
  xit ('positive negative test', function () {
    expect(BlogPage.addBlogPostButton.isDisplayed()).toBe(false);
  });

  // Positive positive test
  // This is a test that is really testing something is that can be used to provide feedback.
  xit ('positive positive test', function () {
    expect(BlogPage.listOfPosts.isPresent()).toBe(true);
  });
});
