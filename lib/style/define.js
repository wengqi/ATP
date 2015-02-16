var config = require('./../data/config'),
    extend = require('util')._extend;
var nodes = require('stylus').nodes;
function Style() {
    extend(this, JSON.parse(JSON.stringify(config)));
    this.filter('title', 'rem')
        .filter('title-small', 'rem')
        .filter('text', 'rem')
        .filter('margin', 'px')
        .filter('padding', 'px')
        .filter('padding', 'px')
        .filter('screen', 'rem');
}

Style.prototype = {
    constructor: Style,

    filter: function (key, unit) {
        var name, value;
        if (unit) {
            for (name in this[key]) {
                value = +this[key][name];
                if (value !== 0) {
                    this[key][name] = new nodes.Unit(+value, unit);
                }
            }
        }
        return this;
    },

    define: function (style) {
        style.define('$icons', this['icon']);
        style.define('$titles', this['title']);
        style.define('$titles-small', this['title-small']);
        style.define('$texts', this['text']);
        style.define('$margin', this['margin']);
        style.define('$padding', this['padding']);
        //style.define('$screens', this['screen']);
        //style.define('$brands', this['brands']);
        this.screenDefine(style);
        this.colorDefine(style);
    },

    screenDefine: function (style) {
        for (var key in this.screen) {
            style.define('$screen-' + key, this.screen[key]);
        }
    },

    //todo 调色板系统
    colorDefine: function (style) {
        var name, key, brand, value;
        for (name in this.color) {
            brand = this.color[name];
            for (key in this.color[name]) {
                value = brand[key];
                style.define('$' + name + '-' + key, new nodes.Ident(value));
            }
        }
    }
};


var instance = new Style();
module.exports = function (style) {
    instance.define(style);
};