var util = require('util'),
    ATP = require('./ATP');

function Page(files) {
    ATP.call(this, files);
}

util.inherits(Page, ATP);

module.exports = Page;