var es = require('event-stream');
var gutil = require('gulp-util');
var gen = require('extjs-spec-generator');

var PluginError = gutil.PluginError;
const PLUGIN_NAME = 'gulp-extjs-spec-generator';

function generate(config) {
    return es.map(function (file, cb) {
        file = gen.generateSpecs(file, config);
        cb(null, file);    
    });
}

module.exports = generate;