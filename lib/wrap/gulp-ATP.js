var through = require('through2'),
    File = require('vinyl'),
    ATP = require('./../view/ATP'),
    path = require('path'),
    ext = require('gulp-util').replaceExtension;

module.exports = function () {
    var files = [], cwd, base;
    return through.obj(function (file, env, cb) {
        file.path = ext(file.path, '');
        cwd = cwd || file.cwd;
        base = base || file.base;
        files.push({
            path: file.path,
            relative: file.relative,
            contents: file.contents.toString()
        });
        cb(null, null)
    }, function () {
        var instance = new ATP(files, base),
            self = this;
        instance.dist.forEach(function (post) {
            self.push(new File({
                base: base,
                path: ext(path.resolve(base, post.relative), '.html'),
                contents: new Buffer(post.contents)
            }))
        });
    })
};