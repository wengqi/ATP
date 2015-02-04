var path = require('path');

function Tree(files, cwd, base) {
    this.files = files;
    this.cwd = cwd;
    this.base = base;
    this.url = "index.html";
    this.contents = "";
    this.children = [];
    this.parse();
}

Tree.prototype = {
    constructor: Tree,

    parse: function () {
        var tree = this.tree, self = this, fileMap = {};
        this.files.forEach(function (file) {
            self.cwd = self.cwd || file.cwd;
            self.base = self.base || file.base;
            var children = self.children,
                relative = file.relative,
                pathList = relative.split(path.sep);
            pathList.reduce(function (prev, cur, index) {
                var list = pathList.slice(0, index + 1),
                    relative = list.join(path.sep);
                if (!fileMap[relative]) {
                    fileMap[relative] = {
                        relative: relative,
                        url: list.join('/'),
                        name: cur,
                        contents: index + 1 === pathList.length ? file.contents : null,
                        children: []
                    };
                    children.push(fileMap[relative]);
                }
                children = fileMap[relative].children;

            }, '');
        });
        return this;
    }

};

module.exports = Tree;