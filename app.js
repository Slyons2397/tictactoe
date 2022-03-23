const gameCells = document.querySelectorAll(".cell");
const newGameButton = document.getElementById('newGame');
let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let player1 = document.getElementById('nameOne');
let subButton = document.getElementById('submit');


function names() {
    playerOne.textContent = "Player one is" + " " + prompt("Please enter player one's name") + " " + "(Blue)" + " " + "click your squares once.";
    playerTwo.textContent = "Player two is" + " " + prompt("Please enter player two's name") + " " + "(Red)" + " " + "click your squares twice.";


}

names()

function startGame(){

gameCells.forEach((gameCells)=>{
gameCells.addEventListener('click', (e)=> {
    gameCells.classList.toggle('x')

gameCells.addEventListener('click', (e)=> {
    gameCells.classList.toggle('o');
    
})
})
})
};



gameCells.forEach((gameCells) =>{
    newGameButton.addEventListener('click', (e)=> {
       window.location.reload(true);
       
    })

})



startGame();


