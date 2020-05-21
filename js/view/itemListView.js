var ItemListView = Backbone.View.extend({
    template: Handlebars.templates.itemList,
    tagName: 'li',
    events: {
        'click': function(){
            eventAggregator.trigger('item:selected', this.model)
        }
    },
    render: function () {
        var rendered = this.template(this.model.toJSON());//.get('name')
        this.$el.html(rendered);
        return this;
    }
});