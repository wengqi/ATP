var Tree = require('./../data/tree'),
    jade = require('jade');

function Base(files) {
    this.posts = files;
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
    }
};

module.exports = Base;