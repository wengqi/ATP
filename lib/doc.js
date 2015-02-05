var util = require('util'),
    ATP = require('./ATP'),
    jade = require('jade'),
    path = require('path');

function Doc(files) {
    ATP.call(this, files);
    this.template = jade.compileFile(path.resolve(__dirname, '../template/config.jade'), {basedir: process.cwd()});
    this.headerTemplate = jade.compileFile(path.resolve(__dirname, '../template/header.jade'), {basedir: process.cwd()});
    this.render();
}

util.inherits(Doc, ATP);

Doc.prototype.render = function () {
    var self = this;
    this.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            tab = list[2];
        self.category(catalog);
        self.tab(category);
        var header = self.headerTemplate({catalogs: self.catalogs, categories: self.categories, tabs: self.tabs});
        var content = post.contents;
        post.contents = self.template({header: header, content: ''});
    });
    return this;
};

module.exports = Doc;