//Global variables
var pattern = []
var progress = 0
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //needs to be between 0.0 and 1.0
var guessCounter = 0
var clueHoldTime = 1000;//how long the clue holds its lit status
var mode = 1;
var missedGuesses = 0;
var remainingGuesses = 3;
var baseTime = 2000;
var timeOut = []

const cluePauseTime = 333;//pause between each clue
const nextClueWaitTime = 1000;//delay before playing clue sequence


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function makePattern(){
  pattern = [];
  for (var i = 0; i < 8; i++) {
  pattern.push(getRandomIntInclusive(1,8));
}
}

function startGame(){
  //initialize game variables
  progress = 0;
  if (mode == 0) {
    document.getElementById("classicMode").classList.add("hidden");
    document.getElementById("clockedMode").classList.add("hidden");
  }else if (mode == 1) {
    document.getElementById("casualMode").classList.add("hidden");
    document.getElementById("clockedMode").classList.add("hidden");
  }else {
    document.getElementById("casualMode").classList.add("hidden");
    document.getElementById("classicMode").classList.add("hidden");
  }
  
  gamePlaying = true;
  clueHoldTime = 1000;
  baseTime = 4000;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  makePattern();
  playClueSequence();
}


function stopGame(){
  //end game if stopped
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("casualMode").classList.remove("hidden");
  document.getElementById("classicMode").classList.remove("hidden");
  document.getElementById("clockedMode").classList.remove("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    if (mode == 1 || mode == 2){//classic and clocked speed up, easy does not
    clueHoldTime -= 25
  }
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  //if (mode == 2){
    //timeOut = setTimeout(loseGame, baseTime)
  //}
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //correct guess opening
    clearTimeout(timeOut);
    if(progress == guessCounter){ 
      if(progress == pattern.length - 1){//check for full length of the pattern
        winGame();
      }//close tag for wincon check
      else{
        progress++;//increment by 1 on progress
        playClueSequence();
        if (mode == 2){
          baseTime += 900
          timeOut = setTimeout(loseGame, baseTime)
        }
      }//close tag for continuation
    } //close tag for victory
    else{
      guessCounter++;//increment by 1 on correct guesses
    }//close for correct but not won
  }else if(pattern[guessCounter] != btn && mode == 0 && missedGuesses < 3){//easymode alteration for multiple guesses
    missedGuesses++
    remainingGuesses--
    alert("You have missed a guess! Strikes remaining " + remainingGuesses);
    playClueSequence();
  }
  else{
    loseGame();
  }
} 

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You've won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392.0,
  6: 440,
  7: 493.88,
  8: 523.25
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)