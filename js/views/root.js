define([
    'tpl!templates/root.html',
    'views/cloud',
    'views/tag-info',
    'views/not-found'
], function(
    tpl,
    CloudView,
    TagInfoView,
    NotFoundView
) {
    'use strict';

    var globalChannel = Backbone.Radio.channel('global');

    return Marionette.LayoutView.extend({

        el: '#app-container',

        template: tpl,

        regions: {
            'content': '.main-content-region'
        },

        viewsMapping: [
            {
                'page': 'cloud',
                'view': CloudView
            },
            {
                'page': 'tag-info',
                'view': TagInfoView
            },
            {
                'page': 'not-found',
                'view': NotFoundView
            }
        ],

        initialize: function() {
            globalChannel.on('show', this.onPageRender.bind(this));
        },

        onPageRender: function(page, options) {
            var View = _.findWhere(this.viewsMapping, {
                page: page
            }).view;
            this.getRegion('content').show(new View(options ? options : null));
        }
    });
});