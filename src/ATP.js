var Tree = require('./Tree');
function ATP(files) {
    this.tree = new Tree(files);
}

ATP.prototype = {
    constructor: ATP,

    pipe: function () {

    }
};

module.exports = ATP;