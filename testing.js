//var Lexer = require("./js2/Lexer");
var State = require("./js2/State");

var letters = "abcdefghijklmnopqrstuvwxyz";
var start = new State();

start.plus(letters).normal("@").plus(letters).normal(".").plus(letters).accepting = true;

var result = start.consume("paul@gmail.com");

console.log(result);
