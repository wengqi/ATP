var through = require('through2'),
    File = require('vinyl'),
    path = require('path'),
    ext = require('gulp-util').replaceExtension,
    instance = require('./wrap');

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
        cb(null, null);
    }, function (flush) {
        var stream = this;
        instance.doc.init(files, base, instance.config);
        instance.doc.posts.forEach(function (post) {
            stream.push(new File({
                base: base,
                path: ext(path.resolve(base, post.relative), '.html'),
                contents: new Buffer(post.contents)
            }))
        });
        flush();
    })
};