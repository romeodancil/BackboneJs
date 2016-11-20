var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

// scripts
gulp.task('scripts', function(){
	gulp.src('dev/js/**')
		.pipe(minify({
			 ext:{
            	src:'-d.js',
            	min:'.js'
        	},
        	exclude: ['tasks'],
        	ignoreFiles: ['-min.js']
		}))
		.pipe(gulp.dest('build/js'))
});

// concat
/*gulp.task('scripts', function() {
  gulp.src([
  		'dev/js/app.js', 'dev/js/app.js', 'dev/js/main.js', 'dev/js/router.js'
  	])
    .pipe(concat('root.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});
*/
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