/**
 * BESPOKEN FOR WEBSITE
 * AUTOMATION
 *
 * @author Eric L.
 * @copyright 2018, BE
 * @see itsbe.studio
 * @version 1.0
 */
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");


/* SASS/AUTOPREFIXER */
gulp.task("styles", function() {
  gulp.src("src/styles//**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("/"))
    .pipe(gulp.dest("./src/"));
});


/* WATCH */
gulp.task("watch", function() {
  return gulp.watch("src/styles/**/*.scss", ["styles"])
    .on("change", function(event) {
      console.log("The file " + event.path + " was " + event.type + ".");
    });
});


/* AUTOMATION */
gulp.task("default", [
  "styles",
  "watch"
]);
