var Tree = require('./Tree'),
    path = require('path');

function ATP(files) {
    this.posts = files;
    this.tree = new Tree(files);
    this.catalogs(this.tree.children);
    this.categories([]);
    this.tabs([]);
    this.template = '';
}

ATP.prototype = {
    constructor: ATP,

    get catalogs() {
        return this.catalogs
    },

    set catalogs(catelogs) {
        this.catalogs = catelogs;
        return this;
    },

    get categories() {
        return this.categories;
    },

    set categories(categories) {
        this.categories = categories;
        return this;
    },

    get tabs() {
        return this.tabs;
    },

    set tabs(tabs) {
        this.tabs = tabs;
        return this;
    },

    render: function () {

    },

    pipe: function () {
        var self = this;
        this.posts.forEach(function (post) {
            var list = post.relative.split(path.sep);
            var catalog = list[0],
                category = list[1],
                tab = list[2];
            self.categories(catalog);
            self.tabs(category);

        });
        return this;
    }
};

module.exports = ATP;