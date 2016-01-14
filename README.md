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
	.pipe(gulp.dest('min.js'))
});
```
# 3. Named Tasks