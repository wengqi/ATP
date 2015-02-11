var Filer = require('./lib/filer'),
    Single = require('./lib/single'),
    Doc = require('./lib/doc'),
    Template = require('./lib/template'),
    style = require('./lib/style');

module.exports = function AtomPage(files) {
    var filer = new Filer(files);
    this.single = new Single(filer.single);
    this.doc = new Doc(filer.doc);
    this.template = new Template(filer.template);
    this.style = style;
};