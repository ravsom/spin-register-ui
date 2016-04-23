var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

gulp.task('build', function() {
	browserify({
		entries: './src/public/scripts/index.js',
		extensions: ['.jsx'],
		debug: true
	}).transform(babelify)
		.bundle()
		.pipe(source('bundle1.js'))
		.pipe(gulp.dest('src/public/dist'));

});

gulp.watch('src/public/scripts/*.jsx', ['build']);
gulp.task('default', ['build']);