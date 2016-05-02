var Track = require("./Track.js");

var State = function(automaton){
    this.automaton = automaton;
    this.automaton.states.push(this);
    this.tracks = [];
    this.finished = false;
};

State.prototype.isFinalState = function(){
    return this.tracks.length == 0 || this.finished
};

State.prototype.optional = function(options){
    var end = new State(this.automaton);
    var track = new Track();
    var optional = new Track();
    this.tracks.push(track);
    this.tracks.push(optional);
    return end;
};
//   \v/
//*-v-*
State.prototype.plus = function(options){
    var end = new State(this.automaton);
    var track = new Track(options, end);
    var cycle = new Track(options, end);
    this.tracks.push(track);
    end.tracks.push(cycle);
    return end;
};

//\v/
// *
State.prototype.star = function(options){
    this.tracks.push(new Track(options,this));
    return this;
};

///-2-\
//*-1--*
State.prototype.or = function(options1, options2){
    var end = new State(this.automaton);
    var track1 = new Track(options1, end);
    var track2 = new Track(options2, end);
    this.tracks.push(track1);
    this.tracks.push(track2);
    return end;
};

//*-v-*
State.prototype.normal = function(options){
    var end = new State(this.automaton);
    var track = new Track(options, end);
    this.tracks.push(track);
    return end;
};

State.prototype.add = function(state){
    this.tracks.concat(state.tracks);
    return state;
};

State.prototype.refresh = function(){
    this.tracks.forEach(function(track){
        track.hits = 0;
    });
};

module.exports = State;