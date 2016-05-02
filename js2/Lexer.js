var Lexer = function(){
    this.rules = [];
    this.tokens = [];

    //add to the rule object
    this.alter = function(token){
        return token;
    }
};

Lexer.prototype.lex = function(string){
    var tokens = [];
    var position = 0;

    for(var i = 0; i < this.rules.length; i++){
        var currentRule = this.rules[i];

        var token = currentRule.consume(string.slice(position));
        if(token != null){
            position += token.value.length;
            tokens.push(currentRule.alter(token));
            i = -1;//found matching rule so go back
            continue;
        }
        if(i == this.rules.length - 1 && position != string.length)console.log("error at position:" + position)
    }
    return tokens;
};



Lexer.prototype.addRule = function(state, tokenType){
    this.rules.push(state);
    this.tokens.push(tokenType);
};

module.exports = Lexer;