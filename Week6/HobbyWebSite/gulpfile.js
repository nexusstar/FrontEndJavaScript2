/**
 * @author NexusStar
 * @version 0.0.0
 * @desc
 */

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var plug = require('gulp-load-plugins')();
var notify = require("gulp-notify");
var merge = require("merge-stream");
var sourcemaps = require('gulp-sourcemaps');

var colors = plug.util.colors;
var log = plug.util.log;


/**
 * @desc Copy fontawesome
 */

gulp.task('fontawesome', function() {
    log(colors.red('fonts'));

    return gulp
        .src('./lib/fontawesome/fonts/**/*.*')
        .pipe(gulp.dest('./public/fonts'));
});

/**
 * @desc Compile sass files
 */

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/css'));
});

/**
 * @desc Watch files
 */

gulp.task('watch', function(){
    log(colors.red('## Watching files ##'));
    var sass = 'scss/**/*.scss';

    gulp
        .watch(sass, ['sass'])
        .on('change', logWatch);

    function logWatch(event) {
        log(colors.blue('*** File ' + event.path + ' was ' + event.type + ', running tasks...'));
    }

});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);