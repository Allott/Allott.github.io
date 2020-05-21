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
        _(this.collection).each(function (item) {
            this.$el.append(new ItemListView({model: item}).render().el);
        }, this);
        return this;
    }
});
var ItemView = Backbone.View.extend({
    template: Handlebars.templates.item,
    render: function () {
        var rendered = this.template(this.model.toJSON());//.get('name')
        this.$el.html(rendered);
        return this;
    }
})
var ItemListView = Backbone.View.extend({
    template: Handlebars.templates.itemList,
    tagName: 'li',
    events: {
        'click': function(){
            eventAggregator.trigger('item:selected', this.model)
        }
    },
    render: function () {
        var rendered = this.template(this.model.toJSON());//.get('name')
        this.$el.html(rendered);
        return this;
    }
});
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

//move to Router.js ?
var ItemRouter = Backbone.Router.extend({
    routes: {
        'contents': 'contents',
        'view/:title': 'viewItem'
    },
    contents: function () {
        $('body').html(new ContentsView({collection: items}).render().el)
    },

    viewItem: function (title) {//find item via title
        var selectedItem = _(items).find(function (item) {
            return item.get('name') === title;
        });

        $('body').empty().append(new ItemView({model: selectedItem}).render().
        el);
    }
});

eventAggregator.on('item:selected', function name(item) {
    var urlPath = 'view/' + item.get('name');
    router.navigate(urlPath, {trigger: true});
})

var router = new ItemRouter();
Backbone.history.start();

router.navigate('contents', {trigger:true});



//to do
//fix grunt precomp
//