var extend = require('util')._extend;
var nodes = require('stylus').nodes;
function Style() {
}

Style.prototype = {
    constructor: Style,

    define: function (style, config) {
        var object = JSON.parse(JSON.stringify(config));
        this.filter(object);
        Object.keys(object).forEach(function (key) {
            style.define('$' + key, object[key]);
        });
    },

    filter: function (config) {
        Object.keys(config).forEach(function (key) {
            var item = config[key];
            if (typeof item === 'object' && !!item) {
                Object.keys(item).forEach(function (name) {
                    var r = /^([\d\.\-]+)(rem|px|%)$/.exec(item[name]);
                    if (r) {
                        item[name] = new nodes.Unit(+r[1], r[2]);
                    } else if (+item[name] === 0) {
                        item[name] = 0;
                    }
                })
            } else {
                if (/^#[0-9a-fA-F]+$/.test(item)) {
                    config[key] = new nodes.Ident(item);
                }else if(/^([\d\.\-]+)(rem|px|%)$/.test(item)){
                    var r = /^([\d\.\-]+)(rem|px|%)$/.exec(item);
                    if (r) {
                        config[key] = new nodes.Unit(+r[1], r[2]);
                    } else if (+config[key] === 0) {
                        config[key] = 0;
                    }
                }
            }
        });
        return this;
    },

    color: function (unit) {
        if (/^#[0-9a-fA-F]+$/.test(unit)) {
            unit = new nodes.Ident(unit);
        }
        return unit;
    },

    unit: function (unit) {
        var r = /^([\d\.\-]+)(rem|px|%)$/.exec(unit);
        if (r) {
            unit = new nodes.Unit(+r[1], r[2]);
        }
        return unit;
    }
};


module.exports = Style;