import gulp from "gulp";
import sass from "gulp-sass";

/** `compileSass()`:
 *  this function will compile `.scss` to `.css`.
 */
function compileSass() {
  return gulp
    .src(["./sass/**/*.scss"])
    .pipe(
      sass({
        outputStyle: "compreessed", // Change to `"expanded"` to change CSS output.
        errLogToConsole: true,
      }),
    )
    .pipe(gulp.dest("./css"));
}

// gulp's task sass will be the compileSass function.
gulp.task("sass", compileSass);

/** `watch()`:
 * This function will monitor all changes in the `sass/` directory,
 * and will automatically compile to the `css/` directory.
 */
function watch() {
  gulp.watch("./sass/**/*.scss", compileSass);
}

// gulp's default task will be the watch function.
gulp.task("default", watch);
