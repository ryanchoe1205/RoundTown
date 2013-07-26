define(['jquery', 'underscore', 'backbone', 'config', 'content' ], function($, _, Backbone, config, content) {

    // Extends Backbone.View
    var HistoryView = Backbone.View.extend( {

        el: $('#content'),

        // The View Constructor
        initialize: function() {
            this.on('render', this.afterRender);
            $(this.el).empty();
            content.setTitle('Storia');
            this.render();
        },

        // Renders all of the Category models on the UI
        render: function() {
            this.trigger('render');
            $.getJSON('http://it.wikipedia.org/w/api.php?action=parse&format=json&callback=?', {page:config.wikipedia, prop:'text|images', uselang:'it'}, this.wikipediaHTMLResult);
        },

        wikipediaHTMLResult: function(data) {
            console.log(data.parse.text["*"]);
            $('#content').append(data.parse.text["*"]);
        },

        afterRender: function() {
            $.mobile.loading('hide');
        }

    });
    // Returns the View class
    return HistoryView;

});