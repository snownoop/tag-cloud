define(['models/tag'], function(TagModel) {
    'use strict';
    return Backbone.Collection.extend({
        url: 'tags.json',
        model: TagModel,

        getMinSentimentScore: function(){
            return this.min(function(item){
                return item.get('sentimentScore');
            }).get('sentimentScore');
        }
    });
});