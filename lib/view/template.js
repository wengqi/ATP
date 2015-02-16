var util = require('util'),
    path = require('path'),
    Frame = require('./../data/frame'),
    mock = require('./../data/mock'),
    Base = require('./base');

function Template(files) {
    Base.call(this, files);
    this.frame = new Frame(files);
    this.render();
}

util.inherits(Template, Base);

Template.prototype.render = function () {
    var self = this;
    this.posts.forEach(function (post) {
        var list = post.relative.split(path.sep);
        var catalog = list[0],
            category = list[1],
            subcategory = list[2], content;
        post.contents = self.compile(post)(mock);
    })
};

module.exports = Template;