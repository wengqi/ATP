var Single = require('./lib/view/single'),
    Doc = require('./lib/view/doc'),
    Template = require('./lib/view/template'),
    Filer = require('./lib/wrap/filer');
ATP.style = require('./lib/style/define');

function ATP(files) {
    var filer = new Filer(files);
    this.single = new Single(filer.single);
    this.template = new Template(filer.template);
    this.doc = new Doc(filer.doc, filer.single.concat(filer.template));
    this.dist = [];
    this.concat();
}

ATP.prototype = {
    constructor: ATP,

    concat: function () {
        this.dist = this.dist.concat(this.doc.toSingleDoc(this.single), this.doc.toTemplateDoc(this.template), this.template.posts);
        return this;
    }
};

module.exports = ATP;