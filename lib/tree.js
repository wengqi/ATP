var path = require('path');

function Tree(files, cwd, base) {
    this.cwd = cwd;
    this.base = base;
    this.url = "index";
    this.contents = [];
    this.children = [];
    this.map = {};
    this.parse(files);
    this.catalogs = this.children;
    this._categories = [];
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

    get categories() {
        return this._categories;
    },
    set categories(catalogName) {
        var catalog = this.catalogs.filter(function (catalog) {
            if (catalogName === catalog.name) {
                return catalog
            }
        });
        this._categories = catalog[0].children;
        return this;
    },

    get subcategories() {
        return this._subcategories;
    },
    set subcategories(categoryName) {
        var category = this.categories.filter(function (category) {
            if (categoryName === category.name) {
                return category
            }
        });
        this._subcategories = category[0].children;
        return this;
    }

};

module.exports = Tree;