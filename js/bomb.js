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

/*----- cached element references -----*/

/*----- event listeners -----*/
// event listeners on the wires
//
// event listeners on the timer- using set interval & stop:
// 

document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded!');
})