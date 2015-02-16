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
    this.categories = [];
    this.subcategories = [];
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
    }

};

module.exports = Tree;