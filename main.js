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

var template = document.getElementById('itemContainer');//.inner
console.log(template.innerHTML);
var compiledTemplate = Handlebars.compile(template);
var generatedHTLM = compiledTemplate(JSON.parse(loadFile('json/class-core.json')));
document.getElementById("pets-container").innerHTML = generatedHTLM;

//good day? could be better, could be worse