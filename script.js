
let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('.guessfield');
const submit = document.querySelector('#submit');
const rg = document.querySelector('.rg');
const pg = document.querySelector('.pg');
const startOver = document.querySelector('.result');  
const loworhi = document.querySelector('.loworhigh');
const p = document.createElement('p');  
//array of privious geusses

let prevGuesses = []; 
let numGuesses = 10; // count number of guesses 
let playGame = true;

 if(playGame){
    submit.addEventListener('click' ,(e) =>{
    e.preventDefault()
    let guess = parseInt(userInput.value);
    validateGuess(guess)
    })
 }
function validateGuess(guess){
if(isNaN(guess) || guess < 1 || guess > 100){
    alert('Please enter a number between 1 and 100!');
}
else{ 
    prevGuesses.push(guess);
    displayGuesse(guess);
    checkGuess(guess);
    if(numGuesses === 0 && guess !== randomNumber){
        displayMessage(`Game over. Random number was ${randomNumber}`);
        endGame();
     }
}
}

function checkGuess(guess){ 
if(guess > randomNumber){
displayMessage(`Guessed number is bigger`)

}
else if(guess<randomNumber){ 
    displayMessage(`Guessed number is smaller`)
}

else{
    displayMessage(`Guessed number is right`)
    endGame()
}
}

function displayGuesse(guess){ 
// to clean the input
userInput.value = ''
pg.innerHTML += `${guess}, `
numGuesses--;
rg.innerHTML = `${numGuesses}`;
}


function displayMessage(message){
loworhi.innerHTML = `<h2> ${message}</h2>`;
}
function newGame(){
   const newGameButton = document.querySelector('#newgame')
   newGameButton.addEventListener('click' ,(e) =>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = []
    pg.innerHTML = ` `
    numGuesses = 10;
    playGame = true;
    rg.innerHTML = `${numGuesses}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true;
   })
}   

 function endGame(){
  userInput.value =''
  userInput.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML = `<h1 id="newgame">Start new game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame()
 }