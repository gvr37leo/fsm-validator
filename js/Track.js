var Track = function Track(symbols, to){
    this.symbols = symbols;
    this.to = to;
    this.whitelist = true;
};

Track.prototype.isAllowed = function(value){
    var contains = this.symbols.contains(value) > -1;
    if(this.whitelist){
        return contains
    }else{//blacklist
        return !contains
    }
};

module.exports = Track;