var nSquares = 6;
var colors = [];
var goalColor; //set goal color
var colorShow = document.querySelector("#colorShow");
// colorShow.textContent = goalColor;

var h1 = document.querySelector("h1");
var messageShow = document.querySelector("#message");
var squares = document.querySelectorAll(".square");

var reset = document.querySelector("#reset");

// var easyMode = document.querySelector("#easyMode");
// var hardMode = document.querySelector("#hardMode");
var modes = document.querySelectorAll(".Mode");

init();

function init(){

  // set easy or hard mode
  setMode();
  // build up squares
  buildSquares(); 
  // reset
  resetMode();
}

function setMode(){
  // Mode change
  for(var i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function(){
      modes[0].classList.remove("selected");
      modes[1].classList.remove("selected");
      this.classList.add("selected");

      // this.textContent === "Easy" ? nSquares = 3: nSquares = 6;
      if(this.textContent === "Easy"){
        nSquares = 3;
      }else{
        nSquares = 6;
      }

      // identify mode, set goal color and set colors
      // update squares
      resetMode();
    });
  }
}

function buildSquares(){
  // Game
  for (var i = 0; i < squares.length; i++) {
    // squares[i].style.backgroundColor = colors[i];

    // add click listener
    squares[i].addEventListener("click", function(){
      //user select a color
      var selectColor = this.style.backgroundColor;

    // compare color selected by users to goalColor
      if (selectColor === goalColor) {
        messageShow.textContent = "Got it!";
        reset.textContent = "Play again?";
        changeAllColor(selectColor);
        h1.style.backgroundColor = selectColor;
      } else {
        this.style.backgroundColor = "#242424";
        messageShow.textContent = "Try it again!";
      }
    });
  }
}

function resetMode(){
  // generate colors
  colors = generateColors(nSquares);

  // pick a goal color
  goalColor = chooseColor();

  // change colorShow
  colorShow.textContent = goalColor;

  // update squares' color
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
    
  }

  h1.style.backgroundColor = "indianred";
  messageShow.textContent = "";
  reset.textContent = "New colors";
}

// reset game
reset.addEventListener("click", function(){
  resetMode();
});

// Change squares' color after wining
function changeAllColor(color) {
  for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

// Pick random colors
function chooseColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generate random colors array
function generateColors(num) {
  var colors = [];

  for(var i = 0; i < num; i++) {
    colors.push(randomColors());
  }

  return colors;
}

// Generate random colors
function randomColors() {
  // rgb range: 0 - 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
