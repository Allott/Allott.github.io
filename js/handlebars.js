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

var role = JSON.parse(loadFile('json/class-core.json'));

var template = document.getElementById('template').innerHTML;
var compiledTemplate = Handlebars.compile(template);
var generatedHTLM = compiledTemplate(role);
document.getElementById("pets-container").innerHTML = generatedHTLM;
