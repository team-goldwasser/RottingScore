var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles', function () {
  return gulp.src('./Scoreboard/dist/Scoreboard/*.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./Scoreboard/dist/Scoreboard/',{overwrite: true}))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./Scoreboard/dist/Scoreboard/**/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./Scoreboard/dist/Scoreboard/',{overwrite: true}))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./Scoreboard/dist/Scoreboard/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist',{overwrite: true}));
});

gulp.task('default', gulp.series('styles', 'scripts', 'pages', function (done) {
  done();
}));
