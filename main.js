// QUERY SELECTORS:

var box1Main = document.querySelector(".box1");
var code1Main = document.querySelector(".code1");
var icon1 = document.querySelector(".icon1");

var box2Main = document.querySelector(".box2");
var code2Main = document.querySelector(".code2");
var icon2 = document.querySelector(".icon2");

var box3Main = document.querySelector(".box3");
var code3Main = document.querySelector(".code3");
var icon3 = document.querySelector(".icon3");

var box4Main = document.querySelector(".box4");
var code4Main = document.querySelector(".code4");
var icon4 = document.querySelector(".icon4");

var box5Main = document.querySelector(".box5");
var code5Main = document.querySelector(".code5");
var icon5 = document.querySelector(".icon5");

var newPaletteBtn = document.querySelector(".newPaletteBtn");
var savePaletteBtn = document.querySelector(".savePaletteBtn");
var savedPalettesEl = document.querySelector(".savedPalettes");
var noSavedPalettes = document.querySelector(".no-saved-palettes");
var savedPalettesAside = document.querySelector(".savedPalettes");
var singlePalette = document.querySelector(".savedPalette");
var displayMain = document.querySelector(".boxesDisplayMain");
var iconDelete = document.querySelector(".iconDelete");

// EVENT LISTNERS:
window.addEventListener("DOMContentLoaded", loadPage);

newPaletteBtn.addEventListener("click", randomizeColors);

displayMain.addEventListener("click", unlock);

savePaletteBtn.addEventListener("click", save);

savedPalettesAside.addEventListener("click", deletePalette);

//FUNCTIONS

function loadPage() {
  randomizeColors();
}

function randomHex(values, hex) {
  for (var i = 0; i < 6; i++) {
    hex += values[Math.floor(Math.random() * 16)];
  }
  return hex;
}
randomHex("ABCDEF0123456789", "#");

function randomizeColors() {
  var randHex1 = randomHex("ABCDEF0123456789", "#");
  var randHex2 = randomHex("ABCDEF0123456789", "#");
  var randHex3 = randomHex("ABCDEF0123456789", "#");
  var randHex4 = randomHex("ABCDEF0123456789", "#");
  var randHex5 = randomHex("ABCDEF0123456789", "#");
  if (icon1.src.includes("unlocked")) {
    box1Main.style.backgroundColor = randHex1;
    code1Main.innerText = randHex1;
  }
  if (icon2.src.includes("unlocked")) {
    box2Main.style.backgroundColor = randHex2;
    code2Main.innerText = randHex2;
  }

  if (icon3.src.includes("unlocked")) {
    box3Main.style.backgroundColor = randHex3;
    code3Main.innerText = randHex3;
  }

  if (icon4.src.includes("unlocked")) {
    box4Main.style.backgroundColor = randHex4;
    code4Main.innerText = randHex4;
  }

  if (icon5.src.includes("unlocked")) {
    box5Main.style.backgroundColor = randHex5;
    code5Main.innerText = randHex5;
  }

  var hexObj = {
    id: Date.now(),
    hexCode: [
      code1Main.innerText,
      code2Main.innerText,
      code3Main.innerText,
      code4Main.innerText,
      code5Main.innerText,
    ],
  };
  newPalettesCurr = hexObj;
}

function unlock(e) {
  if (e.target.src.includes("assets/locked.png")) {
    e.target.src = "./assets/unlocked.png";
    e.target.alt = "unlock icon";
  } else if (e.target.src.includes("unlocked.png")) {
    e.target.src = "./assets/locked.png";
    e.target.alt = "lock icon";
  }
}

function save() {
  var randomId = Date.now();
  var savedPalletObj = {
    id: randomId,
    hexCode: [
      code1Main.innerText,
      code2Main.innerText,
      code3Main.innerText,
      code4Main.innerText,
      code5Main.innerText,
    ],
  };
  savedPalettesArr.push(savedPalletObj);
  console.log(savedPalettesArr);

  if (savedPalettesArr.length === 0) {
    noSavedPalettes.classList.remove("hidden");
  } else if (savedPalettesArr.length > 0) {
    noSavedPalettes.classList.add("hidden");
  }

  displaySavedPalettes();
}

function displaySavedPalettes() {
  savedPalettesAside.innerHTML = "";
  var newHtml = "";

  for (var i = 0; i < savedPalettesArr.length; i++) {
    newHtml += ` <div class="singlePallete"><div class="singleP" style="background-color: ${savedPalettesArr[i].hexCode[0]}"></div>
<div class="singleP" style="background-color: ${savedPalettesArr[i].hexCode[1]}"></div>
<div class="singleP" style="background-color: ${savedPalettesArr[i].hexCode[2]}"></div>
<div class="singleP" style="background-color: ${savedPalettesArr[i].hexCode[3]}"></div>
<div class="singleP" style="background-color: ${savedPalettesArr[i].hexCode[4]}"></div>
<img
      class="icon icon-Delete"
      id= ${savedPalettesArr[i].id}
      src="./assets/delete.png"
      alt="delete"
    />
    </div>`;
  }
  console.log(newHtml);
  savedPalettesEl.innerHTML = newHtml;
}

function deletePalette(e) {
  var deleteID = e.target.id;
  for (var i = 0; i < savedPalettesArr.length; i++) {
    if (savedPalettesArr[i].id == deleteID) {
      savedPalettesArr.splice(i, 1);
    }
  }

  savedPalettesAside.innerHTML = "";

  for (var i = 0; i < savedPalettesArr.length; i++) {
    var savedP = document.createElement("div");
    savedP.classList = "singlePallete";

    for (var j = 0; j < 5; j++) {
      var singleP = document.createElement("div");
      singleP.classList = "singleP";
      singleP.style.backgroundColor = savedPalettesArr[i].hexCode[j];
      savedP.appendChild(singleP);
    }

    var deleteEl = document.createElement("img");
    deleteEl.classList = "icon icon-Delete";
    deleteEl.src = "./assets/delete.png";
    deleteEl.alt = "delete button";
    deleteEl.id = savedPalettesArr[i].id;
    deleteEl.addEventListener("click", deletePalette);
    savedP.appendChild(deleteEl);

    savedPalettesAside.appendChild(savedP);
  }
}
