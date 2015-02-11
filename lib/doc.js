var ATP = require('./ATP'),
    path = require('path'),
    single = require('./single'),
    inherits = require('util').inherits.
        config = require('./config');

function Doc(files) {
    ATP.call(this, files);
    var self = this;
    this.posts.forEach(function (post) {
        var subcategory = post.relative.split(path.sep)[2];
        self[subcategory] = self.compile(file);
    })
}

inherits(Doc, ATP);


Doc.prototype.render = function () {
    var self = this;
    //todo single.posts
    this.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], template;
        self.category(catalog);
        self.subcategory(category);
        //var content = jade.compile(post.contents, {basedir: process.cwd(), filename: post.path})(mock);
        //post.contents = self.template({header: header, content: content});
        template = oUtil.hash(self.template, list.join('.'));
    });
    return this;
};

Object.defineProperty(Doc, 'dashboard', {
    get: function () {
        return this._dashboard;
    },
    set: function (dashboard) {
        this._dashboard = dashboard;
        return this
    }

});

module.exports = Doc;