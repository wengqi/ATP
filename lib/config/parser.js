function Parser(tokens) {
    this.AST = {};
    this.statements = [];
    this.clause(tokens).parse();
}

Parser.prototype = {
    constructor: Parser,

    clause: function (tokens) {
        var statement = [], statements = this.statements;
        tokens.forEach(function (token) {
            statement.push(token);
            if (token.type === 'semicolon') {
                statements.push(statement);
                statement = [];
            }
        });
        return this;
    },

    // statements to AST.
    parse: function () {
        var statements = this.statements, AST = this.AST;
        statements.forEach(function (tokens, index) {
            var token, statement = {}, operators = [], operands = [], left, right, operator;
            while (tokens.length) {
                token = tokens[0];
                if (token.type === 'evaluate') {
                    tokens.shift();
                    operators.push(token);
                } else if (token.type === 'semicolon') {
                    right = operands.pop();
                    left = operands.pop();
                    operator = operators.pop();
                    operands.push({
                        type: 'expression',
                        left: left,
                        right: right
                    });
                    if(!operators.length){
                        statement = operands[0];
                        break;
                    }
                } else {
                    tokens.shift();
                    operands.push(token);
                }
            }
            AST[index] = {
                type: 'statement',
                value: statement
            };
        });
        return this;
    }
};

module.exports = Parser;