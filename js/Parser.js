var Tree = require("./Tree");

var Parser = function(){
    this.rules = [];
};

Parser.prototype.parse = function(sentence){
    var position = 0;
    //states is a stack of pointers to currentstate
    var stateStack = [this.rules[0]];
    var treeStack = [new Tree("S")];

    while(position < sentence.length){
        var next = stateStack.top().next(sentence[position],stateStack,treeStack);
        //raising and lowering is done in the next method?
        if(next != null){
            stateStack[stateStack.length - 1] = next;//waarschijnlijk overbodig
            treeStack.top().children.push(sentence[position]);
            position++;
        }
    }



    return treeStack[0];
};



module.exports = Parser;