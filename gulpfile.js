var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');

var paths = {
	'scss': 'scss/',
	'css': 'css/'
	}
gulp.task('scss', function() {
	return gulp.src(paths.scss + '**/*.scss')
		.pipe(sass())
		.on('error', function(err) {
			console.log(err.message);
		})
		.pipe(cssnext({
			browsers: 'last 2 versions',
			features:{
				customProperties: true,
				calc: true,
				customMedia: false,
				mediaQueriesRange: false
			}
		}))
		.pipe(gulp.dest(paths.css))
});
gulp.task('watch', function() {
	var targets = [paths.scss + '**/*.scss'];
	console.log(targets);
	gulp.watch(targets, ['scss']);
});

