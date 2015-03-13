var instance = require('./atp');

module.exports = function(style){
    instance.style.define(style, instance.config);
};