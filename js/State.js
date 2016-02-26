var Track = require("./Track.js");

var State = function(){
    this.nextStates = [];
    this.finished = false;
};

State.prototype.isFinalState = function(){
    return this.nextStates.length == 0 || this.finished
};

State.prototype.optional = function(options){
    var end = new State();
    var track = new Track();
    var optional = new Track();
    this.nextStates.push(track);
    this.nextStates.push(optional);
    return end;
};
//   \v/
//*-v-*
State.prototype.plus = function(options){
    var end = new State();
    var track = new Track(options, end);
    var cycle = new Track(options, end);
    this.nextStates.push(track);
    end.nextStates.push(cycle);
    return end;
};

State.prototype.star = function(options){
    this.nextStates.push(new Track(options,this));
    return this;
};

State.prototype.or = function(options1, options2){
    var end = new State();
    var track1 = new Track(options1, end);
    var track2 = new Track(options2, end);
    this.nextStates.push(track1);
    this.nextStates.push(track2);
    return end;
};

State.prototype.normal = function(options){
    var end = new State();
    var track = new Track(options, end);
    this.nextStates.push(track);
    return end;
};

State.prototype.add = function(state){
    this.nextStates.concat(state.nextStates);
    return this;
};

module.exports = State;