var template = document.getElementById("template");
var compiledTemplate = Handlebars.compile(template);
var generatedHTLM = compiledTemplate(JSON.parse(loadFile('json/class-core.json')));
document.getElementById("pets-container").innerHTML = generatedHTLM;
