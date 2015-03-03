var Tree = require('./../data/tree'),
    path = require('path'),
    jade = require('jade');

function Base() {
    this.posts = [];
}

Base.prototype = {
    constructor: Base,

    render: function () {
        throw new Error('Please implement this method in a subclass.');
    },

    compile: function (file) {
        return jade.compile(file.contents, {
            basedir: process.cwd(),
            filename: file.path
        });
    },

    relative: function (relative) {
        var sep = '--';
        return relative.split(path.sep).join(sep);
    }
};

module.exports = Base;