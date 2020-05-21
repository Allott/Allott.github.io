



var data = JSON.parse(loadFile('json/class-core.json'));

var items = [];
for (var i = 0; i < data.count; i++){//one json object to lots of individual item models
    items.push(
        new Item({
            name: data.classes[i].name,
            url: data.classes[i].url
        })
    )
}
//console.log(items)


//move to Router.js ?
var ItemRouter = Backbone.Router.extend({
    routes: {
        'contents': 'contents'
    },
    contents: function () {
        $('body').html(new ContentsView({collection: items}).render().el)
    }
});

var router = new ItemRouter();
Backbone.history.start();

router.navigate('contents', {trigger:true});



