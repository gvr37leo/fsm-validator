var fsm = require("./js/fsm-validator.js");

var emailRule = fsm.Presets.email;
var automaton = fsm.Automaton(emailRule,"email");


console.log(automaton.consume("paul@gmail.com"));
