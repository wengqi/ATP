var Doc = require('./../view/doc'),
    Style = require('./../style/style'),
    config = require('../config/config');

function ATP() {
    this.config = config;
    this.doc = new Doc;
    this.style = new Style;
}

ATP.prototype = {
    constructor: ATP

};

module.exports = new ATP;
