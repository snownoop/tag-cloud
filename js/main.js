require.config({
    paths: {
        'js': '../js',
        'views': '../js/views',
        'collections': '../js/collections',
        'models': '../js/models',
        'templates': '../js/templates',

        // core dependencies
        'underscore': '../vendor/underscore/underscore',
        'backbone': '../vendor/backbone/backbone',
        'backbone.radio': '../vendor/backbone.radio/build/backbone.radio',
        'jquery': '../vendor/jquery/dist/jquery',
        'marionette': '../vendor/backbone.marionette/lib/backbone.marionette',
        'tpl': '../vendor/requirejs-tpl-bower/tpl',
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore']
        },
        'backbone.radio': {
            deps: ['backbone']
        },
        'marionette': {
            deps: ['backbone', 'backbone.radio'],
            exports: 'Marionette'
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'marionette'],
    function() {
        'use strict';

        require([
                'js/app',
                'js/routers/index',
                'views/root',
                'collections/tags'
            ],
            function(
                App,
                Router,
                RootView,
                TagsCollection
            ) {

                var loadRequired = [];
                App.collections = {
                    tags: new TagsCollection(),
                };
                loadRequired.push(App.collections.tags.fetch());

                App.on('start', function() {

                    App.Router = new Router;
                    this.RootView = new RootView();
                    this.RootView.render();
                    Backbone.history.start();
                });

                $.when.apply(this, loadRequired).done(App.start.bind(App));

                window.App = App;
            });

    });