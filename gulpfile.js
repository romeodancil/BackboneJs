var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// scripts
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
});

// styles
gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.pipe(gulp.dest('css/'));
});

// watcher
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);