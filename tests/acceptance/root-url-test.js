import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-1-12-0-beta-1-current-url/tests/helpers/start-app';

var application;

module('Acceptance: RootUrl', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / has a currentURL of /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
