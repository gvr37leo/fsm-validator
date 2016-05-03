#fsm-validator

## Intro
fsm-validator is an alternative to regular expressions however it allows you to write them in a more programmatic way.
This could come in very handy if you'd want to generate a different fsm depending on some input.

## Example
this is an example for what an email rule might look like `\[a-z]+@[a-z]+\.[a-z]+\`
and this is the what it would like using fsm-validator

    start.plus(letters).normal('@').plus(letters).normal('.').plus(letters).accepting = true;

For an explanation about finite state machines there is a very good video about it on [numberphile](https://www.youtube.com/watch?v=RjOCRYdg8BY).
![finite state machine](http://i.imgur.com/zV0H3uO.png)

## How to use
First of all you need to make a finite state machine like the one in the image above.
you do this by creating a Start state and then using it's methods to build it up.
You can set a states accepting attribute to true this will mark it as a legal endstate,
in 99% of all cases you'd want your final state to be the "accepting" state.
    
    var letters = "abcdefghijklmonpqrstuvwxyz";
    var start = new State();
    start.plus(letters).normal(at).plus(letters).normal(dot).plus(letters).accepting = true;

Once you've made your fsm you can pass it a string and it will walk the fsm seeing if it fits the pattern.
The total for the email rule looks like this.

    var State = require("./js2/State");
    
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var start = new State();
    
    start.plus(letters).normal("@").plus(letters).normal(".").plus(letters).accepting = true;
    
    console.log(start.consume("paul@gmail.com"));

## Functions
- The black circle represents the State you're calling the method on
- The green circle represents the State that is returned
- The lines represent the symbols you can pass in the parameters

### normal
![normal](http://i.imgur.com/vV0Lm9r.png)

### or
![or](http://i.imgur.com/kpwxd2G.png)

### optional
![optional](http://i.imgur.com/cUNFjPs.png)

### star
![star](http://i.imgur.com/gdUFnHl.png)

### plus
![plus](http://i.imgur.com/WXaxiXy.png)

## warning
The implementation of these finite state machines is a little different than regular expressions.
Normally regular expressions consider a string valid if there is any possible way to complete the finite state machine.
However the way these fsm's are implemented is that they will take the first path that is available, so the order in which you specify the rules
does matter. For instance this regex `\a+a\` would allow aa but `start.plus("a").normal("a")` wouldn't because 
it would keep looping in the a+ part and never reach the accepting state so be aware of this and try to avoid ambiguity.

## still coming
- documentation on all the classes and functions and how they work
- more regex functions like search and replace
- pre-made fsm's