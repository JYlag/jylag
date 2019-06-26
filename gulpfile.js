var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('build', shell.task('bundle exec jekyll build'));

gulp.task('browser-sync', function() {
    browserSync.init({server: {baseDir: '_site/'}});
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('serve', shell.task('bundle exec jekyll serve --watch'));

gulp.task('default', gulp.series('build', 'browser-sync', 'serve'));
 