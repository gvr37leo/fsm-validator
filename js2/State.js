var Track = require("./Track");
var Token = require("./Token");

var State = function(){
    this.tracks = [];
    this.accepting = false;
};

State.prototype.isFinalState = function(){
    return this.tracks.length == 0 || this.accepting
};

State.prototype.consume = function(sentence){
    var currentState = this;
    var size = 0;
    var checkpoint = null;

    for(var i = 0; i < sentence.length; i++){
        var character = sentence[i];
        currentState = currentState.next(character);
        if(currentState != null){
            size++;
            if(currentState.isFinalState()){
                //character is legal and got a checkpoint at an endpoint
                checkpoint = sentence.substring(0, size);
            }
        }else break; //encountered an illegal character so return the latest legal state of the automaton
    }
    return checkpoint;
};

State.prototype.next = function(symbol){
    for(var i = 0; i < this.tracks.length; i++){
        var currentTrack = this.tracks[i];
        if(currentTrack.isAllowed(symbol)){
            return currentTrack.to;
        }
    }
    return null;
};




State.prototype.optional = function(symbol){
    var end = new State();
    var track = new Track(end, symbol);
    var optional = new Track(end,"");
    optional.whitelist = false;
    this.tracks.push(track);
    this.tracks.push(optional);
    return end;
};
//   \v/
//*-v-*
State.prototype.plus = function(symbol, whitelist){
    if(whitelist == undefined)whitelist = true;
    var end = new State();
    var track = new Track(symbol, end);
    var cycle = new Track(symbol, end);
    track.whitelist = whitelist;
    cycle.whitelist = whitelist;
    this.tracks.push(track);
    end.tracks.push(cycle);
    return end;
};

//\v/
// *
State.prototype.star = function(symbol, whitelist){
    if(whitelist == undefined)whitelist = true;
    var track = new Track(symbol,this);
    track.whitelist = whitelist;
    this.tracks.push(track);
    return this;
};

///-2-\
//*-1--*
State.prototype.or = function(symbol1, symbol2){
    var end = new State();
    var track1 = new Track(symbol1, end);
    var track2 = new Track(symbol2, end);
    this.tracks.push(track1);
    this.tracks.push(track2);
    return end;
};

//*-v-*
State.prototype.normal = function(symbol, whitelist){
    if(whitelist == undefined)whitelist = true;
    var end = new State();
    var track = new Track(symbol, end);
    track.whitelist = whitelist;
    this.tracks.push(track);
    return end;
};

State.prototype.add = function(state){
    this.tracks.concat(state.tracks);
    return state;
};

module.exports = State;