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

$(function () {

  var data = JSON.parse(loadFile('json/class-core.json'));

  var rendered = Handlebars.templates.example(data);
  document.getElementById("itemContainer").innerHTML = rendered;
});