var inherits = require('util').inherits,
    extend = require('util')._extend,
    mock = require('./../mock/mock'),
    path = require('path'),
    Base = require('./base');

function Single(files, frame, detail, config) {
    Base.call(this);
    this.detail = this.compile(detail);
    this.render(files, frame, config);
}

inherits(Single, Base);


Single.prototype.render = function (files, frame, config) {
    var self = this, data = extend(mock, config);
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
                contents: self.compile(file)(data)
            })
        });
    });
    return this;
};

module.exports = Single;