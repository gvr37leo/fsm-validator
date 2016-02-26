#fsm-validator

## Intro
fsm-validator or Finite State Machine validator is a lexer that uses finite state machines to make rules instead of regular expressions.
The idea is that finite state machines are a better fit for validating strings and more customizable.

## Example
this is an example for what an email rule might look like it corresponds with this antlr syntax
`letter+ '@' letter+ '.' letter+`

    start.plus(letters).normal(at).plus(letters).normal(dot).plus(letters).finished = true;

For an explanation about finite state machines there is a very good video about it on [numberphile](https://www.youtube.com/watch?v=RjOCRYdg8BY).
![finite state machine](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/CPT-FSM-abcd.svg/326px-CPT-FSM-abcd.svg.png)

## How to use
First of all you need to make a "rule" you do this by making an automaton like the one in the image above.
Rules are made up out of multiple states(circles) and tracks(lines).
You can set a states finished attribute to true this will mark it as a legal endstate,
in 99% of all cases you'll want your final state to be the "finished" state.

    var start = new State();
    start.plus(letters).normal(at).plus(letters).normal(dot).plus(letters).finished = true;
tracks need an array of symbols that are allowed to pass over this track.
Btw this is where that *letters* variable comes from same is true for *at* and *dot*

    var letters = "abcdefghijklmonpqrstuvwxyz".split("");
Once you've made your rule/automaton you can pass it a string and it will walk the automaton seeing if it fits the pattern.

    var automaton = new Automaton(start,"email");
    automaton.consume("paul@gmail.com")
    //returns Token object {
        type:"email",
        value:"paul@gmail.com"
    }

That second parameter is the type of token the automaton wil return.
Did i say return? Yes the consume function returns null if the string isn't valid and a token object containing the "value" and the "type" of the token.

The total for the email rule looks like this.

    var Lexer = require("./Lexer.js");
    var State = require("./State.js");
    var Automaton = require("./Automaton");
    
    //primitives
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

## still coming
- documentation on all the classes and functions and how they work
- comparisson to regular expressions
- extra functionality like
    - giving a range
    - black and whitelisting characters