//reset the board
function reset(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
    board[1] = board[2] = board[3] = board[4] = board[5] = board[6] = board[7] = board[8] = board[9] = ' ';
}
var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};
// Everyone possible combination of three in a row
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// keeps track of player turn
player = "X";
function mark(position) {

    document.getElementById("b" + position).value = player; 
    document.getElementById("b" + position).disabled = true; 
    board[position]=player;
    if(checkWin(player)){
        document.getElementById("ins").innerHTML= "Player "+player+" Won!";
        disablebtns();
        return;
    } else if(checkTie()){
        document.getElementById("ins").innerHTML= "It is a Tie!";
        disablebtns();
        return;
    } 
    else {
        if (player ==="X"){
            player ="O";
        } else {
            player="X";
        }
    }
}

var turns = 0;

function checkTie(){
    turns += 1;
    if (turns === 9){
        return true;
    }
    return false;
}

function disablebtns(){
    var b1btn, b2btn, b3btn, b4btn, b5btn,  
        b6btn, b7btn, b8btn, b9btn; 
          
    b1btn = document.getElementById("b1"); 
    b2btn = document.getElementById("b2"); 
    b3btn = document.getElementById("b3"); 
    b4btn = document.getElementById("b4"); 
    b5btn = document.getElementById("b5"); 
    b6btn = document.getElementById("b6"); 
    b7btn = document.getElementById("b7"); 
    b8btn = document.getElementById("b8"); 
    b9btn = document.getElementById("b9"); 
    
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 
}

function checkWin(player) {
    for (var i = 0; i < winCombinations.length; i++) {
        var markCount = 0;
        for (var j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}
