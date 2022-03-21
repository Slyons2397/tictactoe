const gameCells = document.querySelectorAll(".cell");
const newGameButton = document.getElementById('newGame');


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

