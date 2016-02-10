define([], function () {
    'use strict';

    var globalChannel = Backbone.Radio.channel('global');

    return Backbone.Router.extend({
        routes: {
            '': 'cloud',
            'view/:id': 'viewTag',
            '*notFound': 'notFound'
        },

        cloud: function(){
            globalChannel.trigger('show', 'cloud');
        },

        viewTag: function(id){
            globalChannel.trigger('show', 'tag-info', {tagId: id});
        },

        notFound: function(){
            globalChannel.trigger('show', 'not-found');
        }
    });
});