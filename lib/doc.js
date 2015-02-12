var ATP = require('./ATP'),
    path = require('path'),
    Single = require('./single'),
    Template = require('./template'),
    Filer = require('./filer'),
    Tree = require('./tree'),
    inherits = require('util').inherits,
    mock = require('./mock');

function Doc(files) {
    var filer = new Filer(files), self = this;
    ATP.call(this, filer.doc);
    this.single = new Single(filer.single);
    this.template = new Template(filer.template);
    this.posts.forEach(function (post) {
        var subcategory = post.relative.split(path.sep)[2];
        self[subcategory] = self.compile(post);
    });
    this.tree = new Tree(filer.single.concat(filer.template));
    this.dist = [];
    this.render();
}

inherits(Doc, ATP);

Doc.prototype.render = function () {
    var self = this, tree = self.tree;
    this.single.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], content;
        mock.catalogs = tree.catalogs;
        mock.categories = tree.categories = catalog;
        mock.subcategories = tree.subcategories = category;
        mock.content = post.contents;
        self.dist.push({
            cwd: post.cwd,
            base: post.base,
            path: path.resolve(post.base, post.relative),
            contents: self.detail(mock)
        });
    });

    tree = this.template.tree;
    var catalogs = tree.catalogs;
    catalogs.forEach(function (catalog) {
        var categories = catalog.children;
        categories.forEach(function (category) {
            mock.list = category.children;
            self.dist.push({
                cwd: tree.cwd,
                base: tree.base,
                path: path.resolve(tree.base, catalog.name, category.name),
                contents: self.list(mock)
            });
        });
    });

    this.dist = this.dist.concat(this.template.posts);
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