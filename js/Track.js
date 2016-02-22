var track = function Track(allowedValues, to){
    this.allowedValues = allowedValues;
    this.to = to;
};

track.prototype.isAllowed = function(){
    return false;
};

module.exports = track;