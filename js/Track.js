var Track = function(symbols, to){
    this.to = to;
    this.symbols = symbols.split("");
    this.whitelist = true;
};

Track.prototype.isAllowed = function(symbol){

    var contains = this.symbols.indexOf(symbol) > -1;
    return contains == this.whitelist
};

module.exports = Track;