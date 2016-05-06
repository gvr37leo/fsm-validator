var Tree = require("./Tree");

var Interpreter = function(){
    this.output = "";
};

Interpreter.prototype.interpret = function(tree){
    //tree.walk(this)
    if(tree.type == "brackets"){
        this.brackets(tree)
    }
    return this.output;
};

Interpreter.prototype.brackets = function(tree){
    this.output += "{";
    if(tree.children[1] instanceof Tree){
        this.brackets(tree.children[1])
    }else this.output += "p";
    this.output += "}"
};

module.exports = Interpreter;