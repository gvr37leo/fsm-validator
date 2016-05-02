var Token = require("./Token");

var Track = function(symbols, to){
    this.to = to;
    this.symbols = symbols.split("");
    this.whitelist = true;

    this.isTerminal = true;
    this.parent = null;
};

Track.prototype.isAllowed = function(symbol){
    var contains;
    if(symbol instanceof Token) contains = this.symbols.indexOf(symbol.value) > -1;
    else contains = this.symbols.indexOf(symbol) > -1;
    return contains == this.whitelist
};

module.exports = Track;