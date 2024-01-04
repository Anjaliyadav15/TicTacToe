console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3"); // Corrected variable name
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"; // Corrected return values
};

// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Corrected the array syntax
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"; // Corrected property name and added a space
            isgameover = true; // Corrected assignment
           // document.querySelector('.imgbox').getElementsByTagName('img').style.width = "200px";
        }
    })
}
// game logic
// music play
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// add onclick listener to reset button
let reset = document.getElementById("reset"); // Assuming you have an element with id "reset"
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    isgameover = false; // Reset game over status
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn ;
    //document.querySelector('.imgbox').getElementsByTagName('img').style.width = "0px";
});
