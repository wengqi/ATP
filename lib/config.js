var fs = require('fs'),
    path = require('path'),
    base = [process.cwd(), 'config'];

function Config() {
    this.parse(['color', 'icon', 'margin', 'padding', 'screen', 'text', 'title', 'title-small'])
}

Config.prototype = {
    constructor: Config,

    parse: function (keys) {
        var self = this;
        if (Array.isArray(keys)) {
            keys.forEach(function (key) {
                self.load(key);
            })
        } else {
            this.load(keys);
        }
        return this;
    },

    load: function (key) {
        var pathName = base.concat([key + '.json']), string;
        try {
            string = fs.readFileSync(pathName.join(path.sep));
            this[key] = JSON.parse(string);
        } catch (error) {
            this[key] = null;
        }
        return this;
    }
};

module.exports = new Config();