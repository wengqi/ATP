var assert = require('assert'),
    Engine = require('../../lib/config/engine'),
    fs = require('fs'),
    path = require('path'),
    content = fs.readFileSync(path.resolve(__dirname, '../src/1.styl')).toString();
var engine = new Engine();
var lookupList = engine.compile(content).execute();
describe('engine', function(){
    it('should return #bbbbbb when $default', function() {
        assert.equal(lookupList['$default'], '#bbbbbb');
    });
    it('should return #ffffff when $default', function() {
        assert.equal(lookupList['$primary-color'], '#ffffff');
    });
    it('should return #ffffff when $default', function() {
        assert.equal(lookupList['$primary-bg'], '#ffffff');
    });
    it('should return #ffffff when $default', function() {
        assert.equal(lookupList['$primary-border'], '#ffffff');
    });
    it('should return #ffffff when $default', function() {
        assert.equal(lookupList['$primary-button'], '#ffffff');
    });
});
