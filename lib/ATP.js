var Tree = require('./tree'),
    path = require('path'),
    util = require('oscript-util'),
    mock = require('./mock'),
    jade = require('jade'),
    extend = require('util')._extend,
    Filer = require('./filer'),

    config = require('./config');

extend(mock, config);
mock.brands = ['inverse', 'primary', 'success', 'info', 'warning', 'danger'];

function ATP(files) {
    this.posts = files;

    this.render();

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
//    this.data = {};
//    this.cwd = '';
//    this.base = '';
//    this.posts = [];
//    this.pages = [];
//    this.template = {};
//    this.filter(files);
//    this.tree = new Tree(this.posts);
//    this.catalogs = this.tree.children;
//    this.categories = [];
//    this.tabs = [];
//    this.render();
//}
//
//ATP.prototype = {
//    constructor: ATP,
//
//    catalog: function (catalogs) {
//        if (catalogs) {
//            this.catalogs = catalogs;
//            return this;
//        } else {
//            return this.catalog
//        }
//    },
//
//    category: function (catalogName) {
//        if (catalogName) {
//            this.categories = this.catalogs.filter(function (catalog) {
//                if (catalogName === catalog.name)return catalog;
//            })[0].children;
//            return this;
//        } else {
//            return this.categories;
//        }
//    },
//
//    tab: function (categoryName) {
//        if (categoryName) {
//            this.tabs = this.categories.filter(function (category) {
//                if (categoryName === category.name)return category;
//            })[0].children;
//            return this;
//        } else {
//            return this.tabs;
//        }
//    },
//
//    compile: function (instance, file) {
//        var list = file.relative.split(path.sep);
//        return util.hash(instance, list.join('.'), jade.compile(file.contents, {
//            basedir: process.cwd(),
//            filename: file.path
//        }));
//    },
//
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
//    },
//
//
//    get data(){
//        return this._data;
//    },
//    set data(data){
//        this._data = data;
//        return this;
//    },
//
//    get template(){
//        return this._template;
//    },
//    set template(tempalte){
//        this._template = tempalte;
//        return this;
//    }
//};

module.exports = ATP;