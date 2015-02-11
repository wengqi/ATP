var util = require('util'),
    ATP = require('./ATP');

function Template(files) {
    ATP.call(this, files);
}

util.inherits(Template, ATP);

Template.prototype.render = function(){
    this.posts.forEach(function(post){

    })
};

module.exports = Page;