var pool = Backbone.Model.extend({

    defaults: {
        name: '4D6',
        diceCount: [4],
        diceValues: [new dice()],
        lastRoll: null
    },

    roll: function () {
        var total = 0;
        for (var i = 0; i < this.attributes.diceValues.length; i++) 
        {
            for (var j = 0; j < this.attributes.diceCount[i]; j++)
            {
                total = total + this.attributes.diceValues[i].roll();
            }
        }
        this.attributes.lastRoll = total;
        return total;
    }
})