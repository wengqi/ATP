var ATP = require('./ATP'),
    path = require('path'),
    Single = require('./single'),
    Template = require('./template'),
    Filer = require('./filer'),
    Tree = require('./tree'),
    inherits = require('util').inherits,
    config = require('./config');

function Doc(files) {
    var filer = Filer(files), self = this;
    ATP.call(this, filer.doc);
    this.single = new Single(filer.single);
    this.template = new Template(filer.template);
    this.posts.forEach(function (post) {
        var subcategory = post.relative.split(path.sep)[2];
        self[subcategory] = self.compile(file);
    });
    this.tree = new Tree(filer.single.concat(filer.template));
    this.dist = [];
}

inherits(Doc, ATP);

Doc.prototype.render = function () {
    var self = this;
    this.single.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], template;
        self.category(catalog);
        self.subcategory(category);
        //var content = jade.compile(post.contents, {basedir: process.cwd(), filename: post.path})(mock);
        //post.contents = self.template({header: header, content: content});
    });
    return this;
};

Object.defineProperty(Doc, 'dashboard', {
    get: function () {
        return this._dashboard;
    },
    set: function (dashboard) {
        this._dashboard = dashboard;
        return this
    }
});

Object.defineProperty(Doc, 'list', {
    get: function () {
        return this._dashboard;
    },
    set: function (dashboard) {
        this._dashboard = dashboard;
        return this
    }
});

Object.defineProperty(Doc, 'detail', {
    get: function () {
        return this._dashboard;
    },
    set: function (dashboard) {
        this._dashboard = dashboard;
        return this
    }
});

module.exports = Doc;