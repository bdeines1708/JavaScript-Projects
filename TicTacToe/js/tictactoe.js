//This variable keeps track of whose turn it is.
let  activePlayer = 'X';
//This array stores an array of moves.  We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or an o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //This .some() method is used to check each element of the selectSquare array.
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber)))  {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to "X", the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
    } else {
        //If activePlayer is equal to 'O', the o.png is placed in HTML
        select.style.backgroundImage = 'url("images/o.png")';
    }
    //squareNumber and activePlayer are concatenated together and added to the array.
    selectedSquares.push(squareNumber + activePlayer);
    //This calls a function to check for any win conditions.
    checkWinConditions();
    //This condition is for changing the active player.
    if (activePlayer === 'X') {
        // if activePlayer is 'X' change it to 'O'.
        activePlayer = 'O';
        //if activePlayer  is anything other than 'X'
    } else {
        //Change the active player to 'X'
        activePlayer = 'X';
    }
    //This function plays placement sound
    audio('./media/place.mp3');
    //This condition checks to see if its the computers turn
    if (activePlayer === 'O') {
        //This function disables clicking for computers turn.
        disableClick();
        //This function waits one second before the computer places an image and enables click
        setTimeout(function() { computersTurn(); }, 1000);
    }
    //Returning true is needed for our computersTurn() function to work.
    return true;
}
//This function results in a random square being selected by the computer.
function computersTurn() {
    //This Boolean is needed for our while loop.
    let success = false;
    //This variable stores a random number 0-8.
    let pickASquare;
    //This condition allows our while loop to keep trying if a square is selected already.
    while (!success) {
        //A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random()* 9));
        //if the random number returns true, the square hasn't been selected yet.
        if (placeXOrO(pickASquare)) {
            //This line calls the function.
            placeXOrO(pickASquare);
            //This changes our boolean and ends the loop.
            success = true;
        };
    }
}
}

//this function parses the selectedSquares array to search for win conditions.
//drawLine()function is called to draw a line on the screen if the condition is set.
function checkWinConditions() {
    //X O 1,2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 550, 100)}
    //X 3,4,5 condition
    else if (arrayIncludes( '3X', '4X', '5x')) { drawWinLine(50, 304, 550, 304)}
    //X 6,7,8 condition
    else if (arrayIncludes( '6X', '7X', '8x')) { drawWinLine(50, 508, 558, 508)}
    // x0,3,6 condition
    else if (arrayIncludes( '0X', '3X', '6x')) { drawWinLine(100, 50, 100, 558)}
    // X,1,4,7 condition
    else if (arrayIncludes( '1X', '4X', '7x')) { drawWinLine(304, 50, 304, 558)}
    // X 2,5,8 condition
    else if (arrayIncludes( '2X', '5X', '8x')) { drawWinLine(508, 50, 508, 558)}
    // X 6,4,2 condition.
    else if (arrayIncludes( '6X', '4X', '2x')) { drawWinLine(100, 508, 510, 90)}
    // X 0,4,8 condition
    else if (arrayIncludes( '0X', '4X', '8x')) { drawWinLine(100, 100, 520, 520)}
    // O 0,1,2 condition
    else if (arrayIncludes( '0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    // O3,4,5 condition
    else if (arrayIncludes( '3O', '4O', '5O')) { drawWinLine(50, 304, 550, 304)}
    // O6,7,8 condition
    else if (arrayIncludes( '6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    // O0,3,6 condition.
    else if (arrayIncludes( '0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    // O1,4,7 condition
    else if (arrayIncludes( '1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    // O2,5,8 condition
    else if (arrayIncludes( '2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    // O 6,4,2 condition.
    else if (arrayIncludes( '6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    // O0,4,8 condition
    else if (arrayIncludes( '0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}
    //This condition checks for a tie.  If none of the above conditions are met and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('.media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function() { resetGame(); }, 500);
    }
//This function checks if an array includes 3 strings. It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for three in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    //if the 3 variables we pass are all included in our array, then true is returned and our else if condition excecutes the drawLine() function.
    if (a === true && b === true && c === true) { return true; }
}

}