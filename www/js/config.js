// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ['main'],

  paths: {
    // JavaScript folders.
    libs: '../bower_components',
    plugins: '../bower_components', // Ours or 3rd party plugins / components

    // Libraries.
    jquery: '../bower_components/jquery',       // 1.9.0
    jquerymobile: '../bower_components/jquery.mobile-1.2.0',
    lodash: '../bower_components/lodash', // 0.7.0
    backbone: '../bower_components/backbone', // 0.9.2
    marionette: '../bower_components/backbone.marionette', // 1.0.0-rc2
    text: '../bower_components/requirejs-text' // 2.0.1 :- require plug-in which compiles our templates
  },

  shim: {

    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    // Marionette depends on jquery, lodash and backbone
    marionette : {
      deps : ['jquery', 'lodash', 'backbone'],
      exports : 'Marionette'
    },

    jquerymobile : ['jquery'],

    // Backbone webSQL depends on backbone
    'bower_components/backbone-websql': ['backbone']
  }
});