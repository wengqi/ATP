var Base = require('./base'),
    path = require('path'),
    mock = require('./../data/mock'),
    extend = require('util')._extend,
    inherits = require('util').inherits;

function Doc(files, frame) {
    Base.call(this);
    this.render(files, frame);
}

inherits(Doc, Base);

Doc.prototype.render = function (files, frame) {
    var self = this;
    files.forEach(function (file) {
        var list = file.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2];
        frame.categoriesByCatalogName(catalog);
        //frame.subcategoriesByCategoryName(category);
        var data = extend({}, frame, mock);
        self.posts.push({
            relative: self.relative(file.relative),
            contents: self.compile(file)(data)
        });
    });
    return this;
};

module.exports = Doc;