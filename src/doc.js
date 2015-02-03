var util = require('util'),
    ATP = require('./ATP');

function Doc() {
    ATP.call(this);
}

util.inherits(Doc, ATP);

module.exports = Doc;