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
            var item = self[key] = {}, value = origin[key];
            if (key === 'colors') {
                self.brands = self.collectBrands(value);
            }else if(key === 'screens'){
                self.collectScreens(value);
            }
            Object.keys(value).forEach(function (name) {
                item[name] = value[name];
                return item;
            });

        });
    },

    collectBrands: function (colors) {
        var brands = {}, self = this;
        Object.keys(colors).forEach(function (color) {
            var brand = /^([^-]+)/.exec(color)[1];
            if (!brands[brand])brands[brand] = brand;
            self[color] = colors[color];
        });
        return Object.keys(brands);
    },

    collectScreens: function (screens) {
        var self = this;
        Object.keys(screens).forEach(function (screen) {
            self[screen] = screens[screen];
        });
    }
};

module.exports = new Config;