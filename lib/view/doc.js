var Frame = require('./../frame/frame'),
    Induce = require('./guide'),
    Filer = require('./filer'),
    Snippet = require('./snippet'),
    Page = require('./page');

function Doc() {
    this.base = '';
    this.snippet = this.page = this.induce = this.posts = null;
}

Doc.prototype = {
    constructor: Doc,

    init: function (files, base, config) {
        var filer = new Filer(files),
            frame = {
                induce: new Frame(filer.frame),
                page: new Frame(filer.pageFrame)
            };
        this.base = base;
        this.snippet = new Snippet(filer.snippets, frame.induce, filer.single, config);
        this.page = new Page(filer.pages, frame.page);
        this.induce = new Induce(filer.induces, frame.induce);
        this.concat();
    },

    concat: function () {
        this.posts = this.induce.posts.concat(this.snippet.posts, this.page.posts);
        return this;
    }
};

module.exports = Doc;