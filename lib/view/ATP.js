var Single = require('./single'),
    Doc = require('./doc'),
    Template = require('./template'),
    Filer = require('./../wrap/filer');

function ATP(files, base) {
    var filer = new Filer(files);
    this.base = base;
    this.single = new Single(filer.single);
    this.template = new Template(filer.template);
    this.doc = new Doc(filer.doc, filer.single.concat(filer.template));
    this.dist = [];
    this.concat();
}

ATP.template = Template.template;

ATP.prototype = {
    constructor: ATP,

    concat: function () {
        this.dist = this.dist.concat(this.doc.toDetailPage(this.single), this.doc.toTemplateDoc(this.template), this.template.dist);
        return this;
    }
};

module.exports = ATP;