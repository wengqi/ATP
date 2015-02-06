var config = require('./config'),
    extend = require('util')._extend;
var nodes = require('stylus').nodes;

function Style() {
    extend(this, config);
    this.filter('title', 'rem')
        .filter('title-small', 'rem')
        .filter('text', 'rem')
        .filter('margin', 'px')
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
        style.define('$icons', config['icon-type']);
        style.define('$titles', config['title']);
        style.define('$titles-small', config['title-small']);
        style.define('$texts', config['text']);
        style.define('$margin', config['margin']);
        style.define('$padding', config['padding']);
        style.define('$screens', config['screen']);
        style.define('$brands', config['brands']);
        this.screenDefine(style);
        this.colorDefine(style);
    },

    screenDefine: function (style) {
        for (var key in this.screen) {
            style.define('$screen-' + key, this.screen[key]);
        }
    },

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

module.exports = function (style) {
    var instance = new Style();
    instance.define(style);
};