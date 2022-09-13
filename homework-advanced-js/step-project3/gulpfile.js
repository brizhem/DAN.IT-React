const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const minifyjs = require('gulp-js-minify');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task("HTML", () => {
    return gulp
        .src("src/*.html").pipe(gulp.dest("."));
});

gulp.task("CSS", () => {
    return gulp
        .src("src/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("styles.min.css"))
        .pipe(autoprefixer({ cascade: false, }))
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task("JS", () => {
    return gulp
        .src("src/js/*.js")
        .pipe(uglify({ v8: true }))
        .pipe(minifyjs())
        .pipe(concat("scripts.min.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("IMGMIN", () => {
    return gulp
        .src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task("clean", () => {
    return gulp.src("dist", { read: false }).pipe(clean());
});

gulp.task("build", gulp.series("clean", gulp.parallel("HTML", "CSS", "JS", "IMGMIN")));

gulp.task("dev", () => {
    browserSync.init({
        server: {
            baseDir: "."
        }
    })
    gulp.watch("src/scss/*.scss").on('change', gulp.series("CSS", browserSync.reload));
    gulp.watch("src/*.html").on('change', gulp.series("HTML", browserSync.reload));
    gulp.watch("src/js/*.js").on('change', gulp.series("JS", browserSync.reload));
});