let raceBox = document.getElementById("race-box")
let class1Box = document.getElementById("class1-box")
let class2Box = document.getElementById("class2-box")
let counter = document.getElementById("counter")
var count = 0

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

function roll() {
  randomRace()
  randomClass1()
  randomClass2()
  showReBut()
  count = 0
  counter.innerHTML = count
}

function randomRace() {
  var race = JSON.parse(loadFile('race.json'))
  var roll = Math.floor(Math.random() * 14)
  
  if (roll > 7) {
     roll = Math.floor(Math.random() * 40)
  } 
  
  raceBox.innerHTML = race[roll].name
  raceBox.href = race[roll].link
  count = count + 1
  counter.innerHTML = count
}

function randomClass1() {
  var role = JSON.parse(loadFile('class.json'))
  var roll = Math.floor(Math.random() * 50)
  
  class1Box.innerHTML = role[roll].name
  class1Box.href = role[roll].link
  count = count + 1
  counter.innerHTML = count
}

function randomClass2() {
  var role = JSON.parse(loadFile('class.json'))
  var roll = Math.floor(Math.random() * 50)
  
  class2Box.innerHTML = role[roll].name
  class2Box.href = role[roll].link
  count = count + 1
  counter.innerHTML = count
}

function showReBut() {
  document.getElementById("butRe1").style.display = "block"
  document.getElementById("butRe2").style.display = "block"
  document.getElementById("butRe3").style.display = "block"
}
