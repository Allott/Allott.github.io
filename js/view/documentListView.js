var DocumentListView = Backbone.View.extend({
    template: Handlebars.templates.documentList,
    tagName: 'li',
    render: function () {
        console.log(this.model)
        var rendered = this.template(this.model.toJSON());//.get('name')
        this.$el.html(rendered);
        return this;
    }
});