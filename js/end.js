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

var dice1 = new dice();
var dice2 = new dice();

var pool1 = new pool([
    dice1, dice2
]);

//move to Router.js ?
var ItemRouter = Backbone.Router.extend({
    routes: {
        'contents': 'contents'
        //'view/:title': 'viewItem'
    },
    contents: function () {
        $('body').html(new PoolView({model: pool1}).render().el)
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



//to do
//fix grunt precomp
//