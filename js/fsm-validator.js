var Lexer = require("./Lexer.js");
var State = require("./State.js");
var Track = require("./Track");
var Automaton = require("./Automaton");
var Token = require("./Token");
var Presets = require("./Presets.js");

////primitives
//var letters = "abcdefghijklmonpqrstuvwxyz".split("");
//var at = ["@"];
//var dot = ["."];
//
////rule(s)
//var start = new State();
////   \l/     \l/     \l/
////*-l-*-@-*-l-*-.-*-l-O
//start.plus(letters).normal(at).plus(letters).normal(dot).plus(letters).finished = true;
//var automaton = new Automaton(start,"email");
//console.log(automaton.consume("paul@gmail.com"));

module.exports = {
    //maybe direct function
    Automaton: Automaton,
    State:State,
    Token:Token,
    Track:Track,
    Presets:Presets
};