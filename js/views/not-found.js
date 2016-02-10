define([
        'tpl!templates/not-found.html'
     ], function(tpl) {
    'use strict';

    return Marionette.ItemView.extend({
        template: tpl
    });
});