var  gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");


function f(done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream())
    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir:'./'
        },
        port: 3333
    })
    done()
}

function browserReload(done) {
    browserSync.reload();
    done();
}

gulp.task("exportWebP", function() {
    let src = "src/raw img/**/*.png"; // Where your PNGs are coming from.
    let dest = "src/img"; // Where your WebPs are going.

    return gulp.src(src)
        .pipe(imagemin([
            webp({
                quality: 100,
                lossless: true
            })
        ]))
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest(dest));
});


function watchFiles(){
    gulp.watch('./scss/**/*', f)
    gulp.watch('./**/*.html', browserReload);
    gulp.watch('./**/*.js', browserReload);
}



gulp.task('default', gulp.parallel(sync,watchFiles));

