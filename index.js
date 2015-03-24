var config = require('./lib/wrap/gulp-config'),
    doc = require('./lib/wrap/gulp-doc'),
    define = require('./lib/wrap/define'),
    Page = require('./lib/view/page'),
    Frame = require('./lib/frame/frame');

module.exports = {
    config: config,
    doc: doc,
    define: define,
    template: Page.template,
    Frame: Frame
};