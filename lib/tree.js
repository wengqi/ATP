var path = require('path');

function Tree(files, cwd, base) {
    this.cwd = cwd;
    this.base = base;
    this.url = "index";
    this.contents = [];
    this.children = [];
    this.map = {};
    this.catalog = '';
    this.category = '';
    this.subcategory = '';
    this.parse(files);
}

Tree.prototype = {
    constructor: Tree,

    parse: function (files) {
        var self = this, map = this.map;
        files.forEach(function (file) {
            self.cwd = self.cwd || file.cwd;
            self.base = self.base || file.base;
            var children = self.children,
                relative = file.relative,
                pathList = relative.split(path.sep);
            pathList.reduce(function (prev, cur, index) {
                var list = pathList.slice(0, index + 1),
                    relative = list.join(path.sep);
                if (!map[relative]) {
                    map[relative] = {
                        relative: relative,
                        url: '../../' + pathList.join('/') + '.html',
                        name: cur,
                        contents: index + 1 === pathList.length ? file.contents : null,
                        children: []
                    };
                    children.push(map[relative]);
                }
                children = map[relative].children;

            }, '');
        });
        return this;
    },

    get cwd() {
        return this._cwd;
    },
    set cwd(cwd) {
        this._cwd = cwd;
        return this;
    },

    get base() {
        return this._base;
    },
    set base(base) {
        this._base = base;
        return this;
    },

    get url() {
        return this._url;
    },
    set url(url) {
        this._url = url;
        return this;
    },

    get contents() {
        return this._contents;
    },
    set contents(contents) {
        this._contents = contents;
        return this;
    },

    get children() {
        return this._children;
    },
    set children(children) {
        this._children = children;
        return this;
    },

    get map() {
        return this._map;
    },
    set map(map) {
        this._map = map;
        return this;
    },

    get catalog() {
        return this._catelog;
    },
    set catalog(catalog) {
        this._catelog = catalog;
        return this;
    },

    get catalogs() {
        return this._catalogs;
    },
    set catalogs(catalogs) {
        this._catalogs = catalogs;
        return this;
    },

    get category() {
        return this._category;
    },
    set category(category) {
        this._category = category;
        return this;
    },

    get categories() {
        return this._categories;
    },
    set categories(categories) {
        this._categories = categories;
        return this;
    },

    get subcategory() {
        return this._subcategory;
    },
    set subcategory(subcategory) {
        this._subcategory = subcategory;
        return this;
    },

    get subcategories() {
        return this._subcategories;
    },
    set subcategories(subcategories) {
        this._subcategories = subcategories;
        return this;
    }

};

module.exports = Tree;