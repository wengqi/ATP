var Compiler = require('./compiler'),
    Scope = require('./scope');

function Engine() {
    this.AST = {};
    this.global = new Scope();
}

Engine.prototype = {
    compile: function (source) {
        var parser = new Compiler(source);
        this.AST = parser.AST;
        return this;
    },
    execute: function () {
        var global = this.global, AST = this.AST;
        Object.keys(AST).forEach(function (index) {
            var statement = AST[index];
            evaluate(statement.value);
        });

        function evaluate(expression) {
            var value, right = expression.right;
            if (right.type === 'expression') {
                value = evaluate(expression.right);
            } else {
                value = expression.right.value;
            }
            global.set(expression.left.value, value);
            return value;
        }

        return this.global.getJSON();
    }
};

module.exports = Engine;