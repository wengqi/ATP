var inherits = require('util').inherits,
    mock = require('./../data/mock'),
    path = require('path'),
    Base = require('./base');

function Single(files, frame, detail) {
    Base.call(this);
    this.detail = this.compile(detail);
    this.render(files, frame);
}

inherits(Single, Base);


Single.prototype.render = function (files, frame) {
    var self = this;
    files.forEach(function (file) {
        var list = file.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2];
        frame.categoriesByCatalogName(catalog);
        frame.subcategoriesByCategoryName(category);
        self.posts.push({
            relative: self.relative(file.relative),
            contents: self.detail({
                catalogs: frame.catalogs,
                categories: frame.categories,
                subcategories: frame.subcategories,
                catalog: catalog,
                category: category,
                subcategory: subcategory,
                contents: self.compile(file)(mock)
            })
        });
    });
    return this;
};

module.exports = Single;