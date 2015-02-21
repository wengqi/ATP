var util = require('util'),
    path = require('path'),
    Frame = require('./../data/frame'),
    Base = require('./base');

function Template(files) {
    Base.call(this, files);
    this.frame = new Frame(files);
    this.dist = [];
    this.render();
}

Template.template = {};

util.inherits(Template, Base);

Template.prototype.render = function () {
    var self = this, frame = this.frame;
    frame.catalogs = frame.catalogs[0].children;
    this.posts.forEach(function (post) {
        var list = post.relative.split(path.sep),
            catalog = list[1],
            category = list[2];
        Template.template[catalog + '--' + category] = self.compile(post);
        frame.categoriesByCatalogName(catalog);
        self.dist.push({
            relative: self.relative(post.relative),
            contents: self.compile(post)({
                catalogs: frame.catalogs,
                categories: frame.categories,
                subcategories: frame.subcategories,
                content: post.contents
            })
        });
    })
};

module.exports = Template;