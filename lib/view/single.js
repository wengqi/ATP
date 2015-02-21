var inherits = require('util').inherits,
    mock = require('./../data/mock'),
    Base = require('./base');

function Single(files) {
    Base.call(this, files);
    this.dist = [];
    this.render();
}

inherits(Single, Base);


Single.prototype.render = function () {
    var self = this;
    this.posts.forEach(function (post) {
        self.dist.push({
            relative: self.relative(post.relative),
            contents: self.compile(post)(mock)
        });
    });
    return this;
};

module.exports = Single;