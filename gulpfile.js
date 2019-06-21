var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('build', shell.task('jekyll build'));

gulp.task('browser-sync', function() {
    browserSync.init({server: {baseDir: '_site/'}});
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('serve', shell.task('jekyll serve'));

gulp.task('default', gulp.series('build', 'browser-sync', 'serve'));
 