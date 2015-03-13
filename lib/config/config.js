var Engine = require('./engine');
var origin = {};

function Config() {
}

Config.prototype = {
    constructor: Config,

    parse: function (key, source) {
        var engine = new Engine();
        origin[key] = engine.compile(source).execute();
        return this;
    },

    collect: function () {
        var self = this;
        Object.keys(origin).forEach(function (key) {
            var item = self['$' + key] = {}, value = origin[key];
            if (key === 'colors') {
                self.$brands = self.collectBrands(value);
                delete self.$colors;
            } else {
                Object.keys(value).forEach(function (name) {
                    item[/^\$(\S+)/.exec(name)[1]] = value[name];
                    return item;
                });
            }
        });
    },

    collectBrands: function (colors) {
        var brands = {}, self = this;
        Object.keys(colors).forEach(function (color) {
            var brand = /^\$([^-]+)/.exec(color)[1];
            if (!brands[brand])brands[brand] = brand;
            self[color] = colors[color];
        });
        return Object.keys(brands);
    }
};

module.exports = new Config;