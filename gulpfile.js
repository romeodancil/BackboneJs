var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

// scripts
gulp.task('scripts', function(){
	gulp.src('dev/js/**')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
});

// styles
gulp.task('styles', function(){
	gulp.src('dev/scss/**/*.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.pipe(gulp.dest('build/css/'));
});

// watcher
gulp.task('watch', function(){
	gulp.watch('dev/js/**', ['scripts']);
	gulp.watch('dev/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);