const container = document.getElementById('container');
const gameCells = document.querySelectorAll(".cell");
const newGameButton = document.getElementById('newGame');
let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let player1 = document.getElementById('nameOne');
let subButton = document.getElementById('submit');
const square1 = document.querySelector('#container :nth-child(1)');
const square2 = document.querySelector('#container :nth-child(2)');
const square3 = document.querySelector('#container :nth-child(3)');
const square4 = document.querySelector('#container :nth-child(4)');
const square5 = document.querySelector('#container :nth-child(5)');
const square6 = document.querySelector('#container :nth-child(6)');
const square7 = document.querySelector('#container :nth-child(7)');
const square8 = document.querySelector('#container :nth-child(8)');
const square9 = document.querySelector('#container :nth-child(9)');
const playerOneName = document.getElementById('playerOnesName'.textContent);
const submitOne = document.getElementById('submitOne');
let name1 = prompt ("Please enter player one's name");
let name2 = prompt ("Please enter player two's name");
let winMessage = document.createElement('div');
winMessage.setAttribute("id", "winmessage");
container.appendChild(winMessage);

function names() {
    playerOne.textContent =  name1 + " " + "(Blue)" + " " + "click your squares once.";
    playerTwo.textContent =  name2 + " " + "(Red)" + " " + "click your squares twice.";

}

names()

function startGame(){

gameCells.forEach((gameCells)=>{
gameCells.addEventListener('click', (e)=> {
    gameCells.classList.add('x')
    console.log(gameCells.className);
    function winner() {
        if(square1.classList.contains('x') && square2.classList.contains('x') && square3.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!";
        }if(square4.classList.contains('x') && square5.classList.contains('x') && square6.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }if(square7.classList.contains('x') && square8.classList.contains('x') && square9.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }if(square1.classList.contains('x') && square4.classList.contains('x') && square7.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }if(square2.classList.contains('x') && square5.classList.contains('x') && square8.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }if(square3.classList.contains('x') && square6.classList.contains('x') && square9.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }if(square1.classList.contains('x') && square5.classList.contains('x') && square9.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }if(square3.classList.contains('x') && square5.classList.contains('x') && square7.classList.contains('x')) {
            winMessage.innerText = name1 + " " + "wins!"
        }

    }
    winner();
})
})
};

function startGame2 () {
    gameCells.forEach((gameCells)=> {
        gameCells.addEventListener('dblclick', (e)=> {
            gameCells.classList.add('o');
    
            function winner() {
                if(square1.classList.contains('o') && square2.classList.contains('o') && square3.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!";
                }if(square4.classList.contains('o') && square5.classList.contains('o') && square6.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }if(square7.classList.contains('o') && square8.classList.contains('o') && square9.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }if(square1.classList.contains('o') && square4.classList.contains('o') && square7.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }if(square2.classList.contains('o') && square5.classList.contains('o') && square8.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }if(square3.classList.contains('o') && square6.classList.contains('o') && square9.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }if(square1.classList.contains('o') && square5.classList.contains('o') && square9.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }if(square3.classList.contains('o') && square5.classList.contains('o') && square7.classList.contains('o')) {
                    winMessage.innerText = name2 + " " + "wins!"
                }
        
            }
            winner();
        })
    })
}



startGame();

startGame2();

gameCells.forEach((gameCells) =>{
    newGameButton.addEventListener('click', (e)=> {
       window.location.reload(true);
       
    })

})