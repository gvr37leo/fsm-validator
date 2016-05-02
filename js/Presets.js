var State = require("./State");
var Automaton = require("./Automaton");

var whitespace = [" ","\t","\n"];//w
var specials = "`-=~!@#$%^&*()_+{[}]|\\:;\"'<>?,./".split("");
var lettersLC = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var letters = lettersLC.concat(lettersUC);
var digit = "0123456789".split("");//d
var at = ["@"];
var newline = ["\n"];//anything except newline, meant for blacklist

var email = new Automaton("email");
var emailStart = new State(email).plus(letters).normal(["@"]).plus(letters).normal(["."]).plus(letters).finished = true;
email.setOrigin(emailStart);

module.exports = {
    whitespace:whitespace,
    specials:specials,
    lettersLC:lettersLC,
    lettersUC:lettersUC,
    letters:letters,
    digit:digit,
    at:at,
    newline:newline,
    email:email
};