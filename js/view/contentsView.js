var ContentsView = Backbone.View.extend({
    template: Handlebars.templates.contents,

    render: function () {
        _(this.collection).each(function (item) {
            this.$el.append(new ItemListView({model: item}).render().el);
        }, this);
        return this;
    }
});