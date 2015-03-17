var through = require('through2'),
    path = require('path'),
    ext = require('gulp-util').replaceExtension,
    instance = require('./wrap');

module.exports = function () {
    return through.obj(function (file, env, cb) {
        file.path = ext(file.path, '');
        var name = file.relative,
            content = file.contents.toString();
        instance.config.parse(name, content);
        cb(null, file);
    }, function(flush){
        instance.config.collect();
        flush();
    })
};