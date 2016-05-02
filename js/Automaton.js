var Token = require("./Token.js");
var State = require("./State.js");

var Automaton = function(tokenType){
    this.states = [];
    //this.origin;
    //this.currentState;
    this.size = 0;
    this.tokenType = tokenType;
};

Automaton.prototype.feed = function(symbol){
    for(var i = 0; i < this.currentState.tracks.length; i++){
        var track = this.currentState.tracks[i];
        if(track.isAllowed(symbol)){
            track.hits ++;
            this.currentState = track.to;
            this.size++;
            return true;
        }
    }
    return false
};

/**
 *
 * @param {string} sentence
 * @returns Token the biggest token it can make with the given sentence and null if none can be made
 */
Automaton.prototype.consume = function(sentence){
    var characters = sentence.split("");
    var checkpoint = null;

    for(var i = 0; i < characters.length; i++){
        var character = characters[i];
        if(this.feed(character)){
            if(this.currentState.isFinalState()){
                //character is legal and got a checkpoint at an endpoint
                checkpoint = new Token(this.tokenType,sentence.substring(0,this.size));
            }
        }else if(this.currentState.isFinalState()){
            //encountered an illegal character but you were on a checkpoint so just return that
            checkpoint = new Token(this.tokenType,sentence.substring(0,this.size));
            break;
        }else{
            //encountered an illegal character so return the latest legal state of the automaton
            break;
        }
    }
    this.refresh();
    return checkpoint;
};

Automaton.prototype.setOrigin = function(state){
    this.origin = state;
    this.currentState = state;
};

Automaton.prototype.refresh = function(){
    this.size = 0;
    this.currentState = this.origin;
    this.states.forEach(function(state){
        state.refresh();
    });
};

module.exports = Automaton;