define([
        'js/app',
        'tpl!templates/tag-info.html'
     ], function(App, tpl) {
    'use strict';

    return Marionette.ItemView.extend({

        template: tpl,
        tagName: 'div',
        className: 'tag-info',

        templateHelpers: function() {
            return {
                totalSentiments: this.getTotalSentiments(),
                negativeSentiments: this.model.get('sentiment').negative ? this.model.get('sentiment').negative : null,
                neutralSentiments: this.model.get('sentiment').neutral ? this.model.get('sentiment').neutral : null,
                positiveSentiments: this.model.get('sentiment').positive ? this.model.get('sentiment').positive : null,
                pageTypes: this.getPageTypesList()
            }
        },

        initialize: function(options) {
            this.model = App.collections.tags.get(options.tagId);
        },

        getTotalSentiments: function() {
            return _.reduce(this.model.get('sentiment'), function(memo, num){ return memo + num; }, 0);
        },

        getPageTypesList: function() {
            return _.keys(this.model.get('pageType')).join();
        }
    });
});