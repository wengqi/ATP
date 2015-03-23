var Frame = require('./../frame/frame'),
    Induce = require('./guide'),
    Filer = require('./filer'),
    Snippet = require('./snippet'),
    Template = require('./template');

function Doc() {
    this.base = '';
    this.snippet = this.template = this.induce = this.posts = null;
}

Doc.prototype = {
    constructor: Doc,

    init: function (files, base, config) {
        var filer = new Filer(files),
            frame = {
                induce: new Frame(filer.frame),
                page: new Frame(filer.templateFrame)
            };
        this.base = base;
        this.snippet = new Snippet(filer.snippets, frame.induce, filer.single, config);
        this.template = new Template(filer.template, frame.page);
        this.induce = new Induce(filer.induce, frame.induce);
        this.concat();
    },

    concat: function () {
        this.posts = this.induce.posts.concat(this.snippet.posts, this.template.posts);
        return this;
    }
};

module.exports = Doc;