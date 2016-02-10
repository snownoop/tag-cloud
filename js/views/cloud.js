define([
        'js/app',
        'tpl!templates/tag.html'
    ], function(App, tpl) {
    'use strict';

    var FONT_SIZE = 9;

    var TagView = Marionette.ItemView.extend({
        template: tpl,
        tagName: 'div',
        className: 'tag-item',

        events: {
            'click': 'onTagClick'
        },

        onRender: function() {
            this.$el.css('font-size', Math.floor(this.getSizeRatioBySentimentScore() * FONT_SIZE));
        },

        onTagClick: function() {
            App.Router.navigate('view/' + this.model.get('id'), {trigger: true});
        },

        getSizeRatioBySentimentScore: function() {
          return this.model.get('sentimentScore') / this.model.collection.getMinSentimentScore();
        }
    });

    return Marionette.CollectionView.extend({
        tagName: 'div',
        className: 'tags-cloud',
        childView : TagView,
        collection: {},
        initialize: function() {
            this.collection = _.extend({}, {}, App.collections.tags);
        }

    });
});