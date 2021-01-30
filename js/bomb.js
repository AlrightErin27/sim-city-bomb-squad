/*----- constants -----*/
const INITIAL_TIME = 31


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
    //decremnt time remaing, if no time left then end game
    timeRemaining--;
    if(timeRemaining <= 0) {
        // console.log("Game over! Bomb exploded!")
        endGame(false);
    } 
    timerEl.textContent = "00:00:" + timeRemaining;
}

//run to set up game
function initializeGame() {
    // console.log("Set the game up!")
    timeRemaining = INITIAL_TIME
    //set up remaing time variable
    countdown = setInterval(updateClock, 1000) //runs updateclock() every second
    gameOver = false
    wiresToCut = []
    wireState = {
        blue: false,
        green: false,
        red: false,
        yellow: false,
        white: false   
    }
}
//reset button
let resetButtonEl = null


//randomly select what wires have to be cut
for(const color in wireState) {
    console.log(color)
    let rand = Math.random() //gives us a radom # 0-1
    if(rand > 0.5) {
        wiresToCut.push(color);
    }
}
//handles reset button click
function resetGame() {
    console.log("Reset game!")
    //update game over state & variable
    gameOver = false
    backgroundEl.style.backgroundImage = "url(img/simcity.jpg)";
    //display simcity background
    //set clock text back
    timerEl.style.color = "red"
    clearInterval(countdown);
    //clear any intervals or timeouts
    //invoke initalize game
    initializeGame()
}
//handles reset button click
function cutWire(event) {
    console.log(`You cut the ${wireColor} wire.`);
    let wireColor = event.target.id;
    if(!gameOver && wireState[wireColor] == false) {
        console.log(event.target.src)
        event.target.src = `img/cut- ${wireColor} -wire.png`
        //cut the wire
        wireState[wireColor] = true;
        if(wiresToCut.includes(wireColor)) {
            //that was the correct wire
        wiresToCut.splice(wiresToCut.indexOf(wireColor), 1)
        if(wiresToCut.length === 0){
            endGame(true);
        }
        } else {
            endGame(false);
        }
    }
}











//handle game over state
function endGame(isGameWon) {
    console.log("END GAME")
    //clearcount and update game over state var
    clearInterval(countdown);
    gameOver = true;

    //If the game is won chant text to green
    if(isGameWon) {
        timerEl.style.color = "green"
        console.log("Hooray! You're hero!")
    } else {
        console.log("Everyone is dead!")
        backgroundEl.style.backgroundImage = "url(img/explosion.jpg)";
    }
    //if lost make background img change
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
    initializeGame()
})