var util = require('util');
function Tree() {

}

Tree.prototype = {
    constructor: Tree

};

function ATP(files) {
    this.tree = new Tree(files);
}

ATP.prototype = {
    constructor: ATP,

    pipe: function () {

    }
};

function Page() {
    ATP.call(this);
}

util.inherits(Page, ATP);

function Doc() {
    ATP.call(this);
}

util.inherits(Doc, ATP);