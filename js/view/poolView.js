var PoolView = Backbone.View.extend({
    template: Handlebars.templates.pool,

    render: function () {
        var rendered = this.template(this.model.toJSON());
        this.$el.html(rendered);
        return this;
    }
});