var Token = require("./Token.js");

var Automaton = function(origin, tokenType){
    this.origin = origin;
    this.currentstate = origin;
    this.size = 0;
    this.tokenType = tokenType;
};

Automaton.prototype.feed = function(symbol){
    this.currentstate.nextStates.forEach(function(track){
        if(track.allowedValues.contains(symbol)){
            this.currentState = track.to;
            size++;
            return true;
        }
    });
    return false
};

Automaton.prototype.consume = function(sentence){
    var characters = sentence.split("");
    var checkpoint = null;

    for(var i = 0; i < characters.length; i++){
        var character = characters[i];
        if(this.feed(character)){
            if(this.currentState.isFinalState()){
                //character is legal and got a checkpoint at an endpoint
                checkpoint = new Token(this.tokenType,sentence.substring(0,size));
            }
        }else if(this.currentState.isFinalState()){
            //encountered an illegal character but you were on a checkpoing so just return that
            checkpoint = new Token(this.tokenType,sentence.substring(0,size));
            break;
        }else{
            //encountered an illegal character so return the latest legal state of the automaton
            break;
        }
    }
    refresh();
    return checkpoint;
};

function refresh(){
    this.currentState = this.origin;
    this.size = 0;
}

module.exports = Automaton;