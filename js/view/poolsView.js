var PoolsView = Backbone.View.extend({
    template: Handlebars.templates.PoolsView,
    tagName: 'div',

    render: function () {

        _(this.collection.attributes).each(function (m) {
            m.roll();
            this.$el.append(new PoolView({model: m}).render().el);
        }, this)
        return this;
    }
});