var PoolsView = Backbone.View.extend({
    template: Handlebars.templates.PoolsView,
    tagName: 'li',

    render: function () {
        // _(this.collection).each(function (item) {
        //     this.$el.append(new PoolView({model: item}).render().el);
        // }, this);
        console.log(this.collection.attributes);

        // for(var i=0; i<this.collection.attributes.length; i++)
        // {
        //     this.$el.append(new PoolView({model: this.collection.attributes[i]}).render().el);
        // }

        _(this.collection.attributes).each(function (m) {
            this.$el.append(new PoolView({model: m}).render().el);
        }, this)
        return this;
    }
});