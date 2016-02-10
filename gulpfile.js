var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

var config = {
  port: 9000,
  paths: {
    mainLess: './less/main.less',
    less: './less/**/*.less',
  },
};

gulp.task('browser-sync', function () {
  browserSync({
    port: config.port,
    server: {
      baseDir: "./"
    }
  });
});
gulp.task('less', function () {
  return gulp.src(config.paths.mainLess)
    .pipe(less({
      paths: [path.join(__dirname, './less')]
    }))
    .on('error', function (error) {
      console.error('' + error);
      this.end();
    })
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('default', ['less', 'browser-sync'], function () {
  gulp.watch(config.paths.less, ['less']);
});