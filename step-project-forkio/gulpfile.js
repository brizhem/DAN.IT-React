const gulp = require("gulp");
const clean = require("gulp-clean");
const minifyJs = require("gulp-js-minify");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
// const sass = require("gulp-sass")(require('node-sass'));
const sass  = require('gulp-sass');
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");
// const { dest } = require("gulp");

gulp.task("clean", () => {
    return gulp.src("dist", { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task("html", () => {
  return gulp
    .src("./src/**/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css", () => {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", () => {
  return gulp
    .src("./src/script/**/*.js")
    .pipe(concat("script.min.js"))
    .pipe(minifyJs())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("images", () => {
  return gulp
    .src("./src/img/*")
    .pipe(imagemin([imagemin.mozjpeg({ quality: 75, progressive: true })]))
    .pipe(gulp.dest("dist/img"));
});

// gulp.task("browssync", () => {
//   browserSync.init({
//     server: { baseDir: "./" },
//   });
// });

gulp.task('build', (done) => {
    gulp.series('clean',
                    gulp.parallel('html', 'css', 'js', 'images'));
    done();
});

gulp.task("dev", () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
  
    gulp
      .watch(
        "./src/**/*.*",
        gulp.series("clean", gulp.parallel("html", "css", "js", "images"))
      )
      .on("change", browserSync.reload);
  });

gulp.task('watch', () => {
    gulp.watch('./src/**/*.*',
        gulp.series('clean',
            gulp.parallel('html', 'css', 'images', 'js')));
});
