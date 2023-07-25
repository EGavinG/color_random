//GOAL
//When the button is clicked 5 random and new colors should appear
//the color's hex codes should appear below each color box
//the current palette should be tracked somewhere in your Data Model and updated when a new palette is generated

// QUERY SELECTORS:

var newPaletteBtn = document.querySelector(".newPaletteBtn");
var box1Main = document.querySelector(".box1");
var code1Main = document.querySelector(".code1");

var box2Main = document.querySelector(".box2");
var code2Main = document.querySelector(".code2");

var box3Main = document.querySelector(".box3");
var code3Main = document.querySelector(".code3");

var box4Main = document.querySelector(".box4");
var code4Main = document.querySelector(".code4");

var box5Main = document.querySelector(".box5");
var code5Main = document.querySelector(".code5");

// EVENT LISTNER:

newPaletteBtn.addEventListener("click", randomizeColors);
window.addEventListener("DOMContentLoaded", loadPage);

//FUNCTIONS

function loadPage() {
  randomizeColors();
}

function randomizeColors() {
  var randHex1 = randomHex();
  var randHex2 = randomHex();
  var randHex3 = randomHex();
  var randHex4 = randomHex();
  var randHex5 = randomHex();
  box1Main.style.backgroundColor = randHex1;
  box2Main.style.backgroundColor = randHex2;
  box3Main.style.backgroundColor = randHex3;
  box4Main.style.backgroundColor = randHex4;
  box5Main.style.backgroundColor = randHex5;
  code1Main.innerText = randHex1;
  code2Main.innerText = randHex2;
  code3Main.innerText = randHex3;
  code4Main.innerText = randHex4;
  code5Main.innerText = randHex5;
  var hexObj = {
    id: Date.now(),
    hex1: randHex1,
    hex2: randHex1,
    hex3: randHex3,
    hex4: randHex4,
    hex5: randHex5,
  };
  newPalettesArr.push(hexObj);
  console.log(newPalettesArr);
}

function randomHex() {
  var values = "ABCDEF0123456789";
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    hex += values[Math.floor(Math.random() * 16)];
    // hex = hex + values[Math.floor(Math.random() * 16)];
  }
  return hex;
}
