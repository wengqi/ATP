var Base = require('./base'),
    path = require('path'),
    Frame = require('../data/frame'),
    inherits = require('util').inherits;

function Doc(files, frameFiles) {
    Base.call(this, files);
    this.frame = new Frame(frameFiles);
    this.render();
}

inherits(Doc, Base);

Doc.prototype.render = function () {
    this.posts.forEach(function (post) {
        var subcategory = post.relative.split(path.sep)[2];
        self[subcategory] = self.compile(post);
    });
    return this;
};

Doc.prototype.toSingleDoc = function (single) {
    var self = this, tree = single.tree;
    single.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], content;
        self.dist.push({
            cwd: post.cwd,
            base: post.base,
            path: path.resolve(post.base, post.relative),
            contents: self.doc.detail()
        });
    });
};

Doc.prototype.toTemplateDoc = function (template) {
    var self = this, tree = template.tree;
    var catalogs = tree.catalogs;
    catalogs.forEach(function (catalog) {
        var categories = catalog.children;
        categories.forEach(function (category) {
            list = category.children;
            self.dist.push({
                cwd: tree.cwd,
                base: tree.base,
                path: path.resolve(tree.base, catalog.name, category.name),
                contents: self.doc.list()
            });
        });
    });
};
module.exports = Doc;