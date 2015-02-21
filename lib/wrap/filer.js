var path = require('path');

function Filer(files) {
    this.single = [];
    this.doc = [];
    this.template = [];
    this.filter(files);
}

Filer.prototype = {
    constructor: Filer,

    filter: function (files) {
        var self = this;
        files.forEach(function (file) {
            self.cwd = self.cwd || file.cwd;
            self.base = self.base || file.base;
            var list = file.relative.split(path.sep),
                catalog = list[0],
                category = list[1],
                subcategory = list[2];
            if (catalog === 'templates') {
                if (category === 'doc') {
                    self.doc.push(file);
                } else if (category !== 'layout') {
                    self.template.push(file);
                }
            } else {
                self.single.push(file);
            }
        });
        return this;
    }
};

module.exports = Filer;