var Tree = require("./Tree");

var HTMLInterpreter = function(){
    this.output = "";
    this.indentation = 0;
};

HTMLInterpreter.prototype.interpret = function(tree){
    var trees = [1,3,6];
    for (var i = 0; i < trees.length; i++) {
        var subtree = tree.children[i];

    }
};

HTMLInterpreter.prototype.html = function(tree){

};

module.exports = HTMLInterpreter;