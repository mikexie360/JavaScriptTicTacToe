// The Tic Tac Toe Board is where the players will draw X and O.
// Getting 3 in a row means that player wins
// if the board is filled before there is a winner, then it is a tie.
class TicTacToeBoard{
    constructor(){
        // board starts off as empty, 2D array.
        this.board = [
                        [" ", " ", " "],
                        [" ", " ", " "],
                        [" ", " ", " "]
                        ];
        this.turnTracker = 1;
    }
    // first step should be to display the Tic Tac Toe Board
    displayBoard(){
        // board should be displayed like this
        /*
            x|x|x
            -----
            x|x|x
            -----
            x|x|x
        */
        var helperString = "";
        for(var r=0; r < 3; r++){
            for(var c=0; c < 3; c++){
                if (c === 0){
                    helperString += this.board[r][c];
                }
                if (c === 1){
                    helperString += "|" + this.board[r][c] + "|";
                }
                if (c === 2){
                    helperString += this.board[r][c];
                }
            }
            if(r === 0 || r === 1){
                helperString += "\n-----\n";
            }
        }
        console.log(helperString);
    }
}

function main(){
    console.log("Starting the Tic Tac Toe Game");

    var TTTBoard = new TicTacToeBoard();

    TTTBoard.displayBoard();

    // player 1 goes first and is X
    // player 2 goes second and is O

    // how we get user input from the command line
    var prompt = require('prompt-sync')();
    var userInput;
    var userX;
    var userY;
    // game loop
    while (true){
        // if it is player 1 turn
        if (TTTBoard.turnTracker === 1){
            console.log("Player 1 turn")
            
            // prompt the user to place a X
            userInput = prompt("Enter where to place your X the row and column: ");
            // see if that is possible, if valid position and is empty
            while (userInput.length != 2){
                console.log("Invalid Input: \nTry Again!");
                userInput = prompt("Enter where to place your X the row and column: ");
                userX = userInput.substring(0,1);
                userY = userInput.substring(1,2);
                console.log("x:"  + userX);
                console.log("Y:"  + userY);
            }


            // if(TTTBoard.board[][]){

            // }

            TTTBoard.turnTracker = 2;

        }
        // if it is player 2 turn
        else {
            console.log("Player 2 turn")
            // prompt the user to place a O
            userInput = prompt("Enter where to place your O the row and column: ");


            TTTBoard.turnTracker = 1;
        }
    }

}

main();