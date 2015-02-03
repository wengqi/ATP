var util = require('util'),
    ATP = require('./ATP');

function Page() {
    ATP.call(this);
}

util.inherits(Page, ATP);

module.exports = Page;