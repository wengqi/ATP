var inherits = require('util').inherits,
    mock = require('./mock'),
    ATP = require('./ATP');

function Single(files) {
    ATP.call(this, files);
    this.render();
}

inherits(Single, ATP);


Single.prototype.render = function () {
    var self = this;
    this.posts.forEach(function (post) {
        post.contents = self.compile(post)(mock);
    });
};

module.exports = Single;