var util = require('util'),
    path = require('path'),
    Tree = require('./tree'),
    mock = require('./mock'),
    ATP = require('./ATP');

function Template(files) {
    ATP.call(this, files);
    this.tree = new Tree(files);
    this.render();
}

util.inherits(Template, ATP);

Template.prototype.render = function () {
    var self = this, tree = this.tree;
    this.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], content;
        mock.catalogs = tree.catalogs;
        mock.categories = tree.categories = catalog;
        mock.subcategories = tree.subcategories = category;
        post.contents = self.compile(post)(mock);
    })
};

module.exports = Template;