function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    //humanChoice = yourChoice.id;
    //botChoice = numberToChoice(randToRpsInt());
    //results = decideWinner(humanChoice,botChoice);
    //message= finalMessage(results);
    //rpsFrontEnd(yourChoice.id,botChoice.id,message);
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock','paper','scissors'][number]
}
function decideWinner(humanChoice,botChoice){
    var rpsDateBase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }
}