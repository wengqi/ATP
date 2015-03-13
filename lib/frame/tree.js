var path = require('path');

function Tree(files, cwd, base) {
    this.url = "index";
    this.contents = [];
    this.children = [];
    this.map = {};
    this.parse(files);
}

Tree.prototype = {
    constructor: Tree,

    parse: function (files) {
        var self = this, map = this.map;
        files.forEach(function (file) {
            var children = self.children,
                relative = file.relative,
                pathList = relative.split(path.sep);
            pathList.reduce(function (prev, cur, index) {
                var list = pathList.slice(0, index + 1),
                    relative = list.join(path.sep);
                if (!map[relative]) {
                    map[relative] = {
                        relative: relative,
                        url: list.join('--') + '.html',
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