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
  randomClass(class1Box)
  randomClass(class2Box)
  showReBut()
  count = 0
  counter.innerHTML = count
}

function randomRace() {
  //setup
  var total = 0
  var sourceList = [];
  
  //add sources
  //ugly as shit
  var role
  
  //core
  if (document.getElementById("CoreRCheck").checked) {
    role = JSON.parse(loadFile('race-core.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //standard
  if (document.getElementById("StandardRCheck").checked) {
    role = JSON.parse(loadFile('race-standard.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //advanced
  if (document.getElementById("AdvancedRCheck").checked) {
    role = JSON.parse(loadFile('race-advanced.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //roll and find the class
  var roll = Math.floor(Math.random() * total)
  for (var i = 0; i < sourceList.length; i++) {
    if (sourceList[i].count > roll) {
      //apply class
      raceBox.innerHTML = sourceList[i].classes[roll].name
      raceBox.href = sourceList[i].classes[roll].link
      //increase count
      count = count + 1
      counter.innerHTML = count
      //break
      i = sourceList.length
    } else {
      roll -= sourceList[i].count
    }
  }
}

function randomClass(box) {
  //setup
  var total = 0
  var sourceList = [];
  
  //add sources
  //ugly as shit
  var role
  
  //core
  if (document.getElementById("CoreCCheck").checked) {
    role = JSON.parse(loadFile('class-core.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //base
  if (document.getElementById("BaseCCheck").checked) {
    role = JSON.parse(loadFile('class-base.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //hybrid
  if (document.getElementById("HybridCCheck").checked) {
    role = JSON.parse(loadFile('class-hybrid.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //occult
  if (document.getElementById("OccultCCheck").checked) {
    role = JSON.parse(loadFile('class-occult.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //unchained
  if (document.getElementById("UnchainedCCheck").checked) {
    role = JSON.parse(loadFile('class-unchained.json'))
    sourceList.push(role)
    total += role.count
  }
  
  //roll and find the class
  var roll = Math.floor(Math.random() * total)
  for (var i = 0; i < sourceList.length; i++) {
    if (sourceList[i].count > roll) {
      //apply class
      box.innerHTML = sourceList[i].classes[roll].name
      box.href = sourceList[i].classes[roll].link
      //increase count
      count = count + 1
      counter.innerHTML = count
      //break
      i = sourceList.length
    } else {
      roll -= sourceList[i].count
    }
  }    
}

//old functions
function randomClass1() {
  randomClass(class1Box);
}

function randomClass2() {
  randomClass(class2Box);
}

function showReBut() {
  document.getElementById("butRe1").style.display = "block"
  document.getElementById("butRe2").style.display = "block"
  document.getElementById("butRe3").style.display = "block"
}
