var Lexer = require("./Lexer.js");
var State = require("./State.js");
var Automaton = require("./Automaton");

//primitives
var digits = "0123456789".split("");
var letters = "abcdefghijklmonpqrstuvwxyz".split("");
var at = ["@"];
var dot = ["."];

//rule(s)
var start = new State();
//   \l/     \l/     \l/
//*-l-*-@-*-l-*-.-*-l-O
start.plus(letters).normal(at).plus(letters).normal(dot).plus(letters).finished = true;
var automaton = new Automaton(start,"email");
console.log(automaton.consume("paul@gmail.com"));