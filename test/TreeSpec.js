var Tree = require('./../src/tree'),
    should = require('should'),
    files = require('./files');

describe('Tree', function () {
    var tree = new Tree(files);
    describe('InstanceOf', function () {
        it('should instance', function () {
            should(tree).be.object
            should(tree.files).be.Array
        })
    })
});