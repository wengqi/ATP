var Lexer = require('./lexer'),
    Parser = require('./parser');

function Compiler(source){
    this.tokens = [];
    this.AST = {};
    this.lex(source).parse();
}

Compiler.prototype = {
    constructor: Compiler,

    lex: function(source){
        var lexer = new Lexer(source);
        this.tokens = lexer.tokens;
        return this;
    },

    parse: function(){
        var parser = new Parser(this.tokens);
        this.AST = parser.AST;
        return this;
    }
};

module.exports = Compiler;