var ContentsView = Backbone.View.extend({
    template: Handlebars.templates.contents,

    render: function () {
        var rendered = this.template(this.collection);
        //document.getElementById("itemContainer").innerHTML = rendered;
        this.$el.append(rendered);
        return this;
    }
});