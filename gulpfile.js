var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var cleancss = require('gulp-clean-css');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

var paths = {

  htmlAssets: [
    './**/*.html',
  ],
  
  sassAssets: './scss/**/*.scss',

  coffeeAssets: './coffee/**/*.coffee',

  jsAssets: './js/**/*.js',
  
  appSass: './scss/app.scss',
  
  cssFolder: './css'
}

gulp.task('images', function () {
  gulp.src('img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('img/'));
});

gulp.task('styles', function () {
  gulp.src(['scss/**/*.scss'])
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sass())
    .pipe(autoprefixer('last 3 versions', '>1%', 'ie 10'))
    .pipe(gulp.dest('css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss({processImport: false}))
    .pipe(gulp.dest('css/'))
});

gulp.task('scripts', function () {
  return gulp.src('coffee/**/*.coffee')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(coffee({ bare: true }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('html', function () {
  return gulp.src(paths.htmlAssets)
    .pipe(plumber({errorHandler: errorAlert}))
  ;
});

gulp.task('js', function () {
  return gulp.src(paths.jsAssets)
    .pipe(plumber({errorHandler: errorAlert}))
  ;
});

gulp.task('watch', function () {
  // Watch Sass
  gulp.watch(paths.coffeeAssets, ['scripts']);
  gulp.watch(paths.sassAssets, ['styles']);
  gulp.watch(paths.htmlAssets, ['html']);
});

// Copies global icon font to company level
gulp.task('icons', function () {
  gulp.src('../modules/internet/search/search3skin/fonts/*')
  .pipe(gulp.dest('fonts'))
});

gulp.task('default', ['styles','scripts','watch']);

function errorAlert(error){
  notify.onError({title: "SCSS Error", message: "Check your terminal", sound: "Sosumi"})(error); //Error Notification
  console.log(error.toString());//Prints Error to Console
  this.emit("end"); //End function
};