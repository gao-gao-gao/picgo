const gulp = require("gulp");
const minifyhtml = require("gulp-minify-html");
const less = require("gulp-less");
const mincss = require("gulp-clean-css");
// const rename = require("gulp-rename");
const connect = require("gulp-connect");
// const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
// const minjs = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnext = require("cssnext");

gulp.task("img", function () {
  return (
    gulp
      .src("src/img/*.*")
      // .pipe(imagemin())
      .pipe(gulp.dest("dist/img"))
      .pipe(connect.reload())
  );
});

//html任务
gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(concat("minify.html"))
    .pipe(minifyhtml())
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});

//css任务
gulp.task("css", function () {
  const plugins = [autoprefixer, cssnext];
  return gulp
    .src("src/less/*.less")
    .pipe(less())
    .pipe(postcss(plugins))
    .pipe(gulp.dest("dist/css"))
    .pipe(concat("minify-css.css"))
    .pipe(mincss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

// js任务
gulp.task("js", function () {
  return (
    gulp
      .src("src/js/*.js")
      .pipe(gulp.dest("dist/js"))
      .pipe(concat("minify.js"))
      // .pipe(minjs())
      // .pipe(gulp.dest("dist/minjs/"))
      .pipe(connect.reload())
  );
});

//监听
gulp.task("watch", function () {
  gulp.watch("src/*.html", gulp.series("html"));
  gulp.watch("src/img/*.*", gulp.series("img"));
  gulp.watch("src/less/*.less", gulp.series("css"));
  gulp.watch("src/js/*.js", gulp.series("js"));
});

//实时刷新
gulp.task("connect", function () {
  connect.server({
    root: "dist",
    port: 8080,
    livereload: true,
  });
});

gulp.task(
  "default",
  gulp.parallel(["html", "css", "img", "watch", "connect", "js"])
);
