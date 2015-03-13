var util = require('util'),
    path = require('path'),
    Base = require('./base'),
    mock = require('./../mock/mock'),
    extend = require('util')._extend;

function Template(files, frame) {
    Base.call(this);
    this.render(files, frame);
}

Template.template = {};

util.inherits(Template, Base);

Template.prototype.render = function (files, frame) {
    var self = this;
    files.forEach(function (file) {
        var list = file.relative.split(path.sep),
            catalog = list[1],
            category = list[2];
        Template.template[catalog + path.sep + category] = self.compile(file);
        frame.categoriesByCatalogName(catalog);
        var data = extend({catalog: catalog, category: category}, frame, mock);
        self.posts.push({
            relative: self.relative(file.relative),
            contents: self.compile(file)(data)
        });
    })
};

module.exports = Template;