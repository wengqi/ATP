var instance = require('./wrap');

module.exports = function(style){
    instance.style.define(style, instance.config);
};