var Frame = require('./../frame/frame'),
    Induce = require('./guide'),
    Filer = require('./filer'),
    Single = require('./single'),
    Template = require('./template');

function Doc(config) {
    this.base = '';
    this.single = this.template = this.induce = this.posts = null;
}

Doc.prototype = {
    constructor: Doc,

    init: function (files, base) {
        var filer = new Filer(files),
            frame = {
                induce: new Frame(filer.frame),
                page: new Frame(filer.templateFrame)
            };
        this.base = base;
        this.single = new Single(filer.single, frame.induce, filer._single);
        this.template = new Template(filer.template, frame.page);
        this.induce = new Induce(filer.induce, frame.induce);
        this.concat();
    },

    concat: function () {
        this.posts = this.induce.posts.concat(this.single.posts, this.template.posts);
        return this;
    }
};

module.exports = Doc;