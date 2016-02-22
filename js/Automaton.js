var Automaton = function(origin, tokenType){
    this.origin = origin;
    this.currentstate = origin;
    this.size = 0;
    this.tokentype = tokenType;
};

module.exports = Automaton;