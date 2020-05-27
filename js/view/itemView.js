var ItemView = Backbone.View.extend({
    template: Handlebars.templates.item,
    render: function () {
        var rendered = this.template(this.model.toJSON());
        this.$el.html(rendered);
        return this;
    }
})