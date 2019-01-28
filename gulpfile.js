const gulp = require("gulp");
const browserSync = require("browser-sync");
const csso = require("gulp-csso");
const sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("assets/scss/main.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task(
  "serve",
  gulp.series(["sass"], function() {
    browserSync.init({
      watch: true,
      server: "./",
      port: 4001
    });
    gulp
      .watch(["assets/scss/*.scss"], gulp.series(["sass"]))
      .on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve"));
