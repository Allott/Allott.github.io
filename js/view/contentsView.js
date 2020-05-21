var ContentsView = Backbone.View.extend({
    template: Handlebars.templates.contents,

    render: function () {
        _(this.collection).each(function (document) {
            this.$el.append(new DocumentListView({model: document}).render().el);
        }, this);
        return this;
    }
});