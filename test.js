Array.prototype.top = function(){
    return this[this.length - 1];
};

var Parser = require("./js/Parser");
var State = require("./js/State");
var Interpreter = require("./js/Interpreter");

var parser = new Parser();
var interpreter = new Interpreter();

var start = new State();
start.normal("(").or("m",start).normal(")").accepting = true;

parser.addRule(start,"brackets");
var tree = parser.parse("(((m)))");
console.log(tree);

var output = interpreter.interpret(tree);
console.log(output);