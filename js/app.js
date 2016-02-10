define([''], function (Components) {
  'use strict';

  var globalChannel = Backbone.Radio.channel('global');

  var App = Marionette.Application.extend({

    navigateTo: function (path) {
      globalChannel.trigger('navigate', path);
    }
  });

  return new App();
});
