(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>Name: "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":19}}}) : helper)))
    + "</div>\r\n<div>Data: "
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":2,"column":11},"end":{"line":2,"column":19}}}) : helper)))
    + "</div>";
},"useData":true});
templates['pool'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"color: #B9993E;\" id=\"Class2\">\r\n    <div class=\"m-3 row\" style=\"background-color: #800020; border-radius: 10px;\">\r\n      <div class=\"col-10 align-self-center\">\r\n        <div class=\"d-flex justify-content-start\">\r\n          <div class= \"align-self-center\">\r\n            <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":24}}}) : helper)))
    + "</h3>\r\n          </div>\r\n          <div class= \"align-self-center ml-2\">\r\n            <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lastRoll") || (depth0 != null ? lookupProperty(depth0,"lastRoll") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastRoll","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":28}}}) : helper)))
    + "</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2 align-self-center\">\r\n        <button id=\"butRe3\" type=\"button\" onclick=\"randomClass2()\" class=\"\" style=\"display:none\">Roll</button>\r\n      </div>\r\n    </div>\r\n</div";
},"useData":true});
templates['pools'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":8}}}) : helper)));
},"useData":true});
})();