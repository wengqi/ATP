var inherits = require('util').inherits,
    mock = require(mock),
    ATP = require('./ATP');

function Single(files) {
    ATP.call(this, files);
}

inherits(Single, ATP);


Single.prototype.render = function () {
    var self = this;
    this.posts.forEach(function (post) {
        self.compile(post)(mock);
    });
};

module.exports = function (files) {
    return new Single(files);
};