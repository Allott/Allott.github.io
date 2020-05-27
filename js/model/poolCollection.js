var pool = Backbone.Collection.extend({
    model: dice
}, {
    roll: function () {
        var total;
        for (var i = 0; i < this.length; i++) 
        {
            total += this.models[i].roll();
        }
        return total;
    }
});