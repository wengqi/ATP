var util = require('util'),
    ATP = require('./ATP');

function Page() {
    ATP.call(this);
    this.template = "";
    this.templateUrl = "";
}

util.inherits(Page, ATP);

module.exports = Page;