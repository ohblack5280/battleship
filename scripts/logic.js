function fireMissle(displayBoard, board, coordinates) {


var yarray= board[coordinates.y]
console.log(board)
var ThingInBoardAtPos= yarray[coordinates.x]

var HitOrMiss= 0
if (ThingInBoardAtPos>0){
  HitOrMiss= -1
} else{  
  
  HitOrMiss= 1
}

displayBoard[coordinates.y][coordinates.x]=HitOrMiss
var UpdateDB= displayBoard[coordinates.y][coordinates.x]


return displayBoard
}

function generateComputerMove(board) {
  var x= Math.floor(Math.random() * 10)
  var y= Math.floor(Math.random() * 10)
  return {
    x ,
    y
  }
}

function isWon(board) {

  var totalhits= 0
for(let i =0;i < board.length;i++){
  for(let j =0;j <board[i].length;j++){
    if(board[i][j]=== -1)
   totalhits+=board[i][j]
  }
}  

console.log(totalhits)
if (totalhits=== -17){
  return true;
}





  return false
}
