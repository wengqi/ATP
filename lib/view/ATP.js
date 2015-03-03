var Single = require('./single'),
    Doc = require('./doc'),
    Frame = require('./../data/frame'),
    Template = require('./template'),
    Filer = require('./../wrap/filer');

function ATP(files, base) {
    var filer = new Filer(files),
        frame = {
            doc: new Frame(filer.frame),
            page: new Frame(filer.templateFrame)
        };
    this.base = base;
    this.single = new Single(filer.single, frame.doc, filer._single);
    this.template = new Template(filer.template, frame.page);
    this.doc = new Doc(filer.doc, frame.doc);
    this.concat();
}

ATP.template = Template.template;

ATP.prototype = {
    constructor: ATP,

    concat: function () {
        this.posts = this.doc.posts.concat(this.single.posts, this.template.posts);
        return this;
    }
};

module.exports = ATP;