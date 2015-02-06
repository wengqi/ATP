var util = require('util'),
    ATP = require('./ATP'),
    jade = require('jade'),
    mock = require('./mock'),
    path = require('path'),
    extend = util._extend,
    config = require('./config');

extend(mock, config);
mock.brands = ['inverse', 'primary', 'success', 'info', 'warning', 'danger']

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
        console.log(post.path);
        var header = self.headerTemplate({catalogs: self.catalogs, categories: self.categories, tabs: self.tabs});
        var content = jade.compile(post.contents, {basedir: process.cwd(), filename: post.path})(mock);
        post.contents = self.template({header: header, content: content});
    });
    return this;
};

module.exports = Doc;