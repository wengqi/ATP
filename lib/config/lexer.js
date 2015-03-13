var NODE = {
    identifier: /^\$[A-Za-z0-9\-_]+/,
    space: /^\s+/,
    semicolon: /^;/,
    evaluate: /^=/,
    string: /^[A-Za-z0-9\-_#\.]+/
};

function Lexer(source) {
    this.source = source;
    this.chunks = [];
    this.tokens = [];
    this.breakUp().lex();
}
Lexer.prototype = {
    constructor: Lexer,

    breakUp: function () {
        var source = this.source;
        while (source.length) {
            var item = this.peek(source);
            if (item) {
                this.chunks.push(item);
                source = source.slice(item.value.length);
            }
        }
        return this;
    },

    lex: function () {
        var tokens = this.tokens;
        this.chunks.forEach(function (chunk) {
            if (chunk.type !== 'space') {
                tokens.push(chunk);
            }
        });
        return this;
    },

    peek: function (source) {
        var rst;
        Object.keys(NODE).every(function (key) {
            var node = NODE[key];
            rst = node.exec(source);
            if (!!rst) {
                rst = {
                    type: key,
                    value: rst[0]
                };
                return false;
            } else {
                return true;
            }
        });
        if (!rst) {
            throw new Error('lexer error!');
        }
        return rst;
    }
};

module.exports = Lexer;