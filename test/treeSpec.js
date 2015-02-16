describe('Tree', function () {
    var Tree = require('../lib/data/tree'),
        should = require('should'),
        files = require('./files');
    var tree = new Tree(files);
    describe('InstanceOf', function () {
        it('should instance', function () {
            should(tree).be.object
            should(tree.files).be.Array
        })
    })
});