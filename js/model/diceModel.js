var dice = Backbone.Model.extend({
    defaults: {
        name: 'D6',
        values: [1,2,3,4,5,6],
        lastRoll: null
    },

    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.attributes.values.length);
        this.attributes.lastRoll = this.attributes.values[randomNumber];
        return  this.attributes.values[randomNumber];
    }
})