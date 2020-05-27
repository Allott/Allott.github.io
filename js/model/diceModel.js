var dice = Backbone.Model.extend({
    defaults: {
        name: 'D6',
        values: [1,2,3,4,5,6]
    },

    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.values.length);
        return  this.values[randomNumber];
    }
})