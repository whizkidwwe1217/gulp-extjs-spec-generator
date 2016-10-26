/* This is a sample gulp file that uses the extjs spec generator */
var gulp = require('gulp');
var gen = require('./src/gulp-extjs-spec-generator');
var pretty = require('gulp-js-prettify');

var config = {
    type: "model",
    moduleName: "Inventory",
    destDir: "test/specs",
    dependencyDestDir: "test/mock"
};

gulp.task('generate', function() {
    gulp.src('src/**/*.js')
        .pipe(gen(config))
        .pipe(pretty())
        .pipe(gulp.dest('specs'));
});

gulp.task('default', ['generate']);