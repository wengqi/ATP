var ATP = require('./lib/view/ATP');
ATP.pipe = require('./lib/wrap/gulp-ATP');
ATP.style = require('./lib/style/define');

module.exports = ATP;