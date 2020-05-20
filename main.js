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

var Item = Backbone.Model.extend({
    defaults: {
        name: 'default',
        type: 'N/A',
        url: 'default'
    }
})
var ContentsView = Backbone.View.extend({
    template: Handlebars.templates.contents,

    render: function () {
        console.log(Handlebars)
        var rendered = this.template(this.collection);
        //document.getElementById("itemContainer").innerHTML = rendered;
        this.$el.append(rendered);
        return this;
    }
});





var data = JSON.parse(loadFile('json/class-core.json'));

//var items = [];
// for (var i = 0; i < data.count; i++){//one json object to lots of individual item models
//     items.push(
//         new Item({
//             name: data.classes[i].name,
//             url: data.classes[i].url
//         })
//     )
// }
// console.log(items)


//move to Router.js ?
var ItemRouter = Backbone.Router.extend({
    routes: {
        'contents': 'contents'
    },
    contents: function () {
        $('body').html(new ContentsView({collection: data}).render().el)
    }
});

var router = new ItemRouter();
Backbone.history.start();

router.navigate('contents', {trigger:true});



