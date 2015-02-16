var inherits = require('util').inherits,
    mock = require('./../data/mock'),
    Base = require('./base');

function Single(files) {
    Base.call(this, files);
    this.render();
}

inherits(Single, Base);


Single.prototype.render = function () {
    var self = this;
    this.posts.forEach(function (post) {
        post.contents = self.compile(post)(mock);
    });
};

module.exports = Single;