var util = require('util'),
    Tree = require('./tree'),
    ATP = require('./ATP');

function Template(files) {
    ATP.call(this, files);
    this.tree = new Tree(files);
}

util.inherits(Template, ATP);

Template.prototype.render = function(){
    this.posts.forEach(function(post){

    })
};

module.exports = Template;