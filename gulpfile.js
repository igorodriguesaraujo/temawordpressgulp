
/**
* =============== DEPENDENCIA ====================
*
* npm install -g gulp
* npm install --save-dev browser-sync
* npm install --save-dev gulp-sass
* npm install --save-dev gulp-rename
* npm install --save-dev bootstrap
* npm install --save-dev popper.js
* npm install --save-dev jquery
*	
**/

/** ============= INCLUDES ==================== **/

var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var rename 		= require('gulp-rename');
var browserSync = require('browser-sync').create();

/** ============ VARIAVEIS ===================== **/

var proxy 		= 'http://localhost/wordpress2/'; //[EDIT]
var scss  		= 'assets/scss/*.scss';
var css   		= 'assets/css/';
var js 			= 'assets/js';
var index   	= './*.php'; 		
var bootstrap 	= 'node_modules/bootstrap/scss/bootstrap.scss';
var bootstrapJs	= 'node_modules/bootstrap/dist/js/bootstrap.min.js';
var pooperJs	= 'node_modules/popper.js/dist/popper.min.js';
var jqueryJs	= 'node_modules/jquery/dist/jquery.min.js';

/** ============ BROWSER SYNC ==================== **/
gulp.task('serve', ['sassdev', 'sassprod', 'booststrap', 'javascript'], function(){
	browserSync.init({
		proxy:proxy
	});

	gulp.watch( scss, ['sassdev', 'sassprod', 'booststrap', 'javascript']);
	gulp.watch(index).on('change', browserSync.reload);

});

/** ============ BOOTSTRAP 4 [CSS] =================== **/
gulp.task('booststrap', function(){
	return gulp.src(bootstrap)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(css));
});

/** ============ BOOTSTRAP / POPPERJS / JQUERY [JS] =================== **/
gulp.task('javascript', function() {
	return gulp.src([bootstrapJs, pooperJs, jqueryJs])
		.pipe(gulp.dest(js))
		.pipe(browserSync.stream());
});

/** ============ SASS DEV =================== **/
gulp.task('sassdev', function(){
	return gulp.src(scss)
		.pipe(sass({outputStyle:'extended'}).on('error', sass.logError))
		.pipe(gulp.dest(css))
		.pipe(browserSync.stream());
});

/** ============ SASS .MIN ================= **/
gulp.task('sassprod', function(){
	return gulp.src(scss)
		.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(css))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
