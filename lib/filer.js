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
    },

    get single() {
        return this._single;
    },
    set single(single) {
        this._single = single;
        return this;
    },

    get doc() {
        return this._doc;
    },
    set doc(doc) {
        this._doc = doc;
        return this;
    },

    get template() {
        return this._template;
    },
    set template(template) {
        this._template = template;
        return this;
    }
};

module.exports = Filer;