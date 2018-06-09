var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
const appName = 'angular-element-starter';
const distFolder = './dist/';
const buildFolder = './build/' + appName + '/';
const indexTemplate = './src/assets/index.html';

const buildFiles = [
  buildFolder + 'runtime*.js',
  buildFolder + 'polyfills*.js',
  buildFolder + 'styles*.js',
  buildFolder + 'scripts*.js',
  buildFolder + 'vendor*.js',
  buildFolder + 'main*.js'
];

gulp.task('concat', function () {
  return gulp.src(buildFiles)
    .pipe(concat(appName + '.js'))
    .pipe(gulp.dest(distFolder));
});

gulp.task('rename', function () {
  return gulp.src(buildFolder + '*.css')
    .pipe(rename(appName + '.css'))
    .pipe(gulp.dest(distFolder));
});

gulp.task('move-index', function () {
  return gulp.src(indexTemplate)
    .pipe(gulp.dest(distFolder));
});

gulp.task('default', ['concat', 'rename', 'move-index']);
