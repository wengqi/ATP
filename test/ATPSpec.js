describe('ATP', function () {
    var ATP = require('./../src/ATP'),
        should = require('should'),
        test = require('unit.js'),
        files = require('./files');
    var atp = new ATP(files);
    describe('InstanceOf', function () {
        it('should instance', function () {
            test.object(atp).hasProperty('tree');
        });
    })
});