var Track = function Track(symbols, to){
    this.symbols = symbols;
    this.to = to;
    this.whitelist = true;

    //hits should probably be on State or maybe on track
    //probably on track it kinda functions like a + or *
    //would probably require a from to check the hits
    //maybe a bounded by track field this is going a bit of a weird way
    this.bounded = false;
    this.hits = 0;
    this.min = 0;//or more
    this.max = 10;//or less
};

Track.prototype.isAllowed = function(value){
    var contains = this.symbols.indexOf(value) > -1;
    if(!this.bounded || (this.bounded && this.hits <= this.max)){
        if(this.whitelist){
            return contains
        }else{//blacklist
            return !contains
        }
    }
    return false
};

module.exports = Track;