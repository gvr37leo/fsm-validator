var State = require("./State");

var whitespace = [" ","\t","\n"];//w
var specials = "`-=~!@#$%^&*()_+{[}]|\\:;\"'<>?,./".split("");
var lettersLC = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var letters = lettersLC.concat(lettersUC);
var digit = "0123456789".split("");//d
var at = ["@"];
var newline = ["\n"];//anything except newline, meant for blacklist

var email = new State().plus(letters).normal(["@"]).plus(letters).normal(["."]).plus(letters).finished = true;

module.exports = {

};