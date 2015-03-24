var util = require('util'),
    path = require('path'),
    Base = require('./base'),
    mock = require('./../mock/mock'),
    extend = require('util')._extend;

function Page(files, frame) {
    Base.call(this);
    this.render(files, frame);
}

Page.template = {};

util.inherits(Page, Base);

Page.prototype.render = function (files, frame) {
    var self = this;
    files.forEach(function (file) {
        var list = file.relative.split(path.sep),
            catalog = list[0],
            category = list[1],
            subcategory = list[2];
        Page.template[file.relative] = self.compile(file);
        frame.categoriesByCatalogName(catalog);
        frame.subcategoriesByCategoryName(category);
        var data = extend(mock, {catalog: catalog,
            category: category,
            catalogs: frame.categories,
            categories: frame.subcategories
        });
        self.posts.push({
            relative: self.relative(file.relative),
            contents: self.compile(file)(data)
        });
    })
};

module.exports = Page;