var PoolView = Backbone.View.extend({
    template: Handlebars.templates.pool,

    render: function () {
        console.log(this.model);
        //var rendered = this.template(this.model.toJSON());
        //this.$el.html(rendered);
        return this;
    }
});