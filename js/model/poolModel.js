var pool = Backbone.Model.extend({

    defaults: {
        name: '4D6',
        diceCount: [4],
        diceValues: [new dice()]
    },

    roll: function () {
        var total;
        for (var i = 0; i < this.diceValues.length; i++) 
        {
            for (var j = 0; j < this.diceCount[i]; j++)
            {
                total += this.diceValues[i].roll();
            }
        }
        return total;
    }
})