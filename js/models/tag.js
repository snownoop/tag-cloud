define([], function () {
  'use strict';
  return Backbone.Model.extend({
    defaults: {
      id: null,
      label: null,
      sentiment: null,
      pageType: null,
      sentimentScore: null
    }
  });
});
