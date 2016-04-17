# BackboneJs
My Backbonejs Setup

# 1. Installing gulp
npm install -g gulp   		
npm install --save-dev gulp 

## gulpfile.js
```javascript
var gulp = require('gulp');

gulp.task('default', function() {
	console.lo('hello gulp');
});
```
# 2. Using Plugin & Minifying JavaScript
## Plugins list
### gulpjs.com/plugins
npm install --save-dev gulp-uglify
```javascript
var gulp = require('gulp');
var gulify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'))
});
```
# 3. Named Tasks

```javascript
var gulp = require('gulp');
var gulify = require('gulp-uglify');

// Scripts Task
// Uglifies

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
});

// Styles Task
// Uglifies

gulp.task('styles', function(){
	console.log('runs styles');
});

gulp.task('default', ['scripts']);

```

gulp scripts - running the gulp scripts
gulp - will run the default

# 4. Watching Files With gulp

// Watch Task
// watches JS
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
});

# 5. Compilling Sass with Gulp
## Installing Sass
#### npm install --save-dev gulp-ruby-sass
```javascript
var gulp = require('gulp');
var gulify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

// Styles Task
// Uglifies

gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});
```

# 6. Keep Gulp Without Plumber