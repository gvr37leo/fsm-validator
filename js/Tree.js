var Tree = function(type, onEnter, onExit){
    this.type = type;
    this.children = [];
    //probably dont need this only antlr does it to make an abstract syntax tree but i could
    //just interpret it directly
    //this.onEnter = onEnter;
    //this.onExit = onExit;
};

Tree.prototype.walk = function(interpreter){
    for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if(child instanceof Tree){
            //trigger on enter
            //do something with type of child tree
            //like maybe call that function from a map in the interpreter
            child.walk();
            //trigger on leave
        }
    }

};

module.exports = Tree;