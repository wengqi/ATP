var util = require('util'),
    ATP = require('./ATP');

function Doc() {
    ATP.call(this);
    this.template = "";
    this.templateUrl = "";
}

util.inherits(Doc, ATP);


module.exports = Doc;