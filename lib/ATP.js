var Tree = require('./tree'),
    path = require('path'),
    util = require('oscript-util'),
    mock = require('./mock'),
    jade = require('jade'),
    extend = require('util')._extend,
    Filer = require('./filer'),

    config = require('./config');

function ATP(files) {
    this.posts = files;
}

ATP.prototype = {
    constructor: ATP,

    render: function () {
        throw new Error('Please implement this method in a subclass.');
    },

    compile: function (file) {
        return jade.compile(file.contents, {
            basedir: process.cwd(),
            filename: file.path
        });
    },

    get data() {
        return this._data;
    },
    set data(data) {
        this._data = data;
        return this;
    },

    get posts() {
        return this._posts;
    },
    set posts(posts) {
        this._posts = posts;
        return this;
    }
};


//function ATP(files) {
//}
//
//ATP.prototype = {
//    render: function () {
//        var self = this,
//            docTemplate = this.template.templates.doc.doc,
//            headerTemplate = this.template.templates.doc.header,
//            listTemplate = this.template.organisms.section.pageList;
//        this.posts.forEach(function (post) {
//            var list = post.relative.split(path.sep);
//            var catalogName = list[0],
//                categoryName = list[1],
//                tabName = list[2], template;
//            self.category(catalogName).tab(categoryName);
//            template = util.hash(self.template, list.join('.'));
//            console.log(list);
//            var content = template(mock);
//            var header = headerTemplate({catalogs: self.catalogs, categories: self.categories, tabs: self.tabs});
//            post.contents = docTemplate({header: header, content: content});
//        });
//        this.tree = new Tree(this.pages);
//        this.catalogs = this.tree.children;
//        this.pages.forEach(function (page) {
//            var list = page.relative.split(path.sep);
//            var catalogName = list[0],
//                categoryName = list[1],
//                tabName = list[2], template;
//            self.category(catalogName).tab(categoryName);
//            template = util.hash(self.template, list.join('.'));
//            mock.catalogs = self.catalogs;
//            mock.categories = self.categories;
//            mock.tabs = self.tabs;
//            console.log(page.relative);
//            page.contents = template(mock);
//        });
//        console.log(this.pages);
//        return this;
//    }
//};

module.exports = ATP;