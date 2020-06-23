"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const server = require("browser-sync").create();
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const del = require("del");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");
const webpack = require("webpack-stream");

gulp.task("css", function () {
  return gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
server.init({
  browser: 'google chrome',
  server: "source/",
  notify: false,
  open: true,
  cors: true,
  ui: false
});

gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
gulp.watch("source/*.html").on("change", server.reload);
gulp.watch("source/js/*.js").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));

// let isDev = false;
// let isProd = !isDev;
// let webConfig = {
//   output: {
//     filename: "main.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ['@babel/plugin-proposal-object-rest-spread']
//           }
//         }
//       }
//     ]
//   },
//   mode: isDev ? "development" : "production"
// };

// gulp.task("clean", function () {
//   return del("build");
// });

// gulp.task("copy", function () {
//   return gulp.src([
//       "source/fonts/**/*.{woff,woff2}",
//       "source/img/**",
//       "source/js/**",
//       "source/*.ico"
//     ], {
//       base: "source"
//     })
//     .pipe(gulp.dest("build"));
// });

// gulp.task("css", function () {
//   return gulp.src("source/scss/style.scss")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(sass())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(rename("style.css"))
//     .pipe(gulp.dest("build/css"))
//     .pipe(csso())
//     .pipe(rename({
//       suffix: '-min'
//     }))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("build/css"));
// });

// gulp.task("server", function () {
//   server.init({
//     browser: 'google chrome',
//     server: "build/"
//   });

//   gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
//   //gulp.watch("source/img/sprite-*.svg", gulp.series("sprite", "html", "refresh"));
//   gulp.watch("source/js/main.js", gulp.series("webpack"));
//   gulp.watch("source/*.html", gulp.series("html", "refresh"));
// });

// gulp.task("refresh", function (done) {
//   server.reload();
//   done();
// });

// // gulp.task("images", function () {
// //   return gulp.src("source/img/**/*.{png,jpg,svg}")
// //     .pipe(imagemin([
// //       imagemin.optipng({
// //         optimizationLevel: 3
// //       }),
// //       imagemin.jpegtran({
// //         progressive: true
// //       }),
// //       imagemin.svgo()
// // ]))
// //     .pipe(gulp.dest("source/img"));
// // });

// // gulp.task("sprite", function () {
// //   return gulp.src("source/img/sprite-*.svg")
// //     .pipe(svgstore({
// //       inlineSvg: true
// //     }))
// //     .pipe(rename("sprite.svg"))
// //     .pipe(gulp.dest("build/img"));
// // });

// gulp.task("html", function () {
//   return gulp.src("source/*.html")
//     .pipe(posthtml([
//       include()
//     ]))
//     .pipe(gulp.dest("build"));
// });

// gulp.task("webpack", function (done) {
//   gulp.src("source/js/main.js")
//     .pipe(webpack(webConfig))
//     .pipe(gulp.dest("build/js"));
//     done();
// });

// gulp.task("htmlmin", function () {
//   return gulp.src("build/*.html")
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(gulp.dest("build"));
// });

// gulp.task("build", gulp.series(
//   "clean",
//   "copy",
//   "css",
//   //"images",
//   //"sprite",
//   "html",
//   //"compress",
//   "htmlmin",
//   "webpack"
// ));

// gulp.task("start", gulp.series("build", "server"));

// gulp.task("webp", function () {
//   return gulp.src("source/img/**/*.{png,jpg}")
//     .pipe(webp({
//       quality: 90
//     }))
//     .pipe(gulp.dest("build/img"));
// });