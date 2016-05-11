Array.prototype.top = function(){
    return this[this.length - 1];
};

var Parser = require("./js/Parser");
var State = require("./js/State");
var Interpreter = require("./js/Interpreter");

var parser = new Parser();
var interpreter = new Interpreter();

var text = new State();
text.star("abcdefghijklmnopqrstuvwxyz ").accepting = true;

var html = new State();
//start.normal("(").or("m",start).normal(")").accepting = true;
html.normal("<").normal(text).normal(">").or(html,text).normal("<").normal("/").normal(text).normal(">").accepting = true;

parser.addRule(html,"html");
parser.addRule(text,"text");
var tree = parser.parse("<a><b><c>text</c></b></a>");
console.log(tree);

//var output = interpreter.interpret(tree);
//console.log(output);