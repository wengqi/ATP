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
    var self = this;
    this.posts.forEach(function (post) {
        var subcategory = post.relative.split(path.sep)[2];
        self[subcategory] = self.compile(post);
    });
    return this;
};

Doc.prototype.toDetailPage = function (single) {
    var self = this, frame = this.frame, dist = [];
    single.dist.forEach(function (post) {
        var list = post.relative.split('--');
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], content;
        frame.categoriesByCatalogName(catalog);
        frame.subcategoriesByCategoryName(category);
        dist.push({
            relative: post.relative,
            contents: self.detail({
                catalogs: frame.catalogs,
                categories: frame.categories,
                subcategories: frame.subcategories,
                content: post.contents
            })
        });
    });
    return dist;
};

Doc.prototype.toListPage = function(){
    var self = this,
        frame = this.frame,
        tFrame = template.frame,
        catalog = tFrame.catalogs[0].name,
        dist = [];
    tFrame.categoriesByCatalogName(catalog);
    tFrame.categories.forEach(function (category) {
        tFrame.subcategoriesByCategoryName(category.name);
        dist.push({
            relative: [catalog, category.name].join('--'),
            contents: self.list({
                catalogs: frame.catalogs,
                categories: frame.categories,
                subcategories: frame.subcategories,
                list: tFrame.subcategories
            })
        });
    });
    return dist;
};

Doc.protorype.toDashBoard = function(){

};

module.exports = Doc;