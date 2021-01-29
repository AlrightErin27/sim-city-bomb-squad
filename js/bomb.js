/*----- constants -----*/
const INITIAL_TIME = 30

/*----- app's state (variables) -----*/
//var to store timer's countdown
let timeRemaining = 0
//store our timer's set interval so we can clear it
let countdown = null
// boolean for game over
let gameOver = false
//keep track of clicked wires
let wireState = {
    blue: false,
    green: false,
    red: false,
    yellow: false,
    white: false
}
//array of wires that need to be clicked to win the game
let wiresToCut = []

/*----- cached element references -----*/
//event listeners on wiress
let wireBoxEl = null
//each wire element
let wires = []
//background image
let backgroundEl = null
//timer 
let timerEl = null
function updateClock() {
    console.log("Countdown the timer!")
}
//run to set up game
function initializeGame() {
        console.log("Set the game up!")
}
//reset button
let resetButtonEl = null

//handles reset button click
function resetGame() {
    console.log("Reset game!")
}
//handles reset button click
function cutWire(event) {
    console.log("cut a wire!" , event);
}
//handle game over state
function endGame(isGameWon) {
    console.log("END GAME")
}
/*----- event listeners -----*/
// event listeners on the wires
document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded!');
//BACKGROUND IMAGE manippulator
    backgroundEl = document.querySelector("main")
//countdown timer
    timerEl = document.querySelector("#timer")
//RESET BUTTON
    resetButtonEl = document.querySelector("#reset")
    resetButtonEl.addEventListener("click" , resetGame)
//WIREBOX & click event listener
    wireBoxEl = document.querySelector("#wireBox")
    wireBoxEl.addEventListener("click" , cutWire)
    wires = wireBoxEl.children
})