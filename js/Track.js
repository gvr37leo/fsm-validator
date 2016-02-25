var Track = function Track(allowedValues, to){
    this.allowedValues = allowedValues;
    this.to = to;
};

Track.prototype.isAllowed = function(value){
    return this.allowedValues == null || this.allowedValues.contains(value);
};

module.exports = Track;