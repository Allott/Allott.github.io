//functions
function loadFile(filePath) {//extra
  var result = null
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open("GET", filePath, false)
  xmlhttp.send()
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText
  }
  return result
}


var eventAggregator = _.extend({}, Backbone.Events);
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
var pools = Backbone.Model.extend({
    model: pool
});
var PoolsView = Backbone.View.extend({
    template: Handlebars.templates.PoolsView,
    tagName: 'div',

    render: function () {

        _(this.collection.attributes).each(function (m) {
            m.roll();
            this.$el.append(new PoolView({model: m}).render().el);
        }, this)
        return this;
    }
});
var PoolView = Backbone.View.extend({
    template: Handlebars.templates.pool,

    render: function () {
        var rendered = this.template(this.model.toJSON());
        this.$el.html(rendered);
        return this;
    }
});
// var data = JSON.parse(loadFile('json/class-core.json'));

// var items = [];
// for (var i = 0; i < data.count; i++){//one json object to lots of individual item models
//     items.push(
//         new Item({
//             name: data.classes[i].name,
//             url: data.classes[i].url
//         })
//     )
// }

var d6 = new dice();
var d8 = new dice();

var pool1 = new pool();
var pool2 = new pool();

var pools = new pools([pool1,pool2]);

//move to Router.js ?
var ItemRouter = Backbone.Router.extend({
    routes: {
        'contents': 'contents'
        //'view/:title': 'viewItem'
    },
    contents: function () {
        $('body').html(new PoolsView({collection: pools}).render().el)
    }

    // viewItem: function (title) {//find item via title
    //     var selectedItem = _(items).find(function (item) {
    //         return item.get('name') === title;
    //     });

    //     $('body').empty().append(new ItemView({model: selectedItem}).render().
    //     el);
    // }
});

// eventAggregator.on('item:selected', function name(item) {
//     var urlPath = 'view/' + item.get('name');
//     router.navigate(urlPath, {trigger: true});
// })

var router = new ItemRouter();
Backbone.history.start();

router.navigate('contents', {trigger:true});

console.log(d6.roll())

//to do
//fix grunt precomp
//