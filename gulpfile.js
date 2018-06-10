var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
const appName = 'angular-element-starter';
const distFolder = './dist/';
const buildFolder = './build/' + appName + '/';
const indexTemplate = './src/index.html';

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
  const target = gulp.src(indexTemplate);
  var sources = gulp.src([distFolder + '*.js', distFolder + '*.css'], {
    read: false
  });
  return target
    .pipe(inject(sources, {
      removeTags: true,
      transform: function (filepath) {
        return inject.transform.apply(inject.transform, arguments).replace('/dist', '');
      }
    }))
    .pipe(gulp.dest(distFolder));
});

gulp.task('move-assets', function () {
  return gulp.src([buildFolder + '/assets/**', buildFolder + '*.ico'], {
    base: buildFolder
  }).pipe(gulp.dest(distFolder));
});

gulp.task('bundle', ['concat', 'rename']);
gulp.task('publish', ['move-index', 'move-assets']);
gulp.task('default', ['bundle', 'publish']);
