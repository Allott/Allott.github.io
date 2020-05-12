//bb model
var Item = Backbone.Model.extend({
    defaults: {
        name: '',
        type: 'N/A',
        url: ''
    }
});

//collection
var Items = Backbone.Collection.extend({

});

var human = new Item({
    name: 'Human',
    type: 'Race',
    url: 'test123'
})