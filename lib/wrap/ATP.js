var Doc = require('./../view/doc'),
    Template = require('./../view/template'),
    Style = require('./../style/index'),
    config = require('../config/config');

function ATP() {
    this.config = config;
    this.doc = new Doc;
    this.style = new Style;
}

ATP.template = Template.template;

ATP.prototype = {
    constructor: ATP

};

module.exports = new ATP;