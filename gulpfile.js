const {src, dest, watch, parallel} = require("gulp");

// CSS

const sass = require("gulp-sass")(require ("sass"));
const plumber = require("gulp-plumber"); // Para no cortar la ejecución del código

// JS
const sourcemaps = require ("gulp-sourcemaps");

// Imagenes

const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache")
const webp = require("gulp-webp");

// Funciones

function css (done) {
    
    src("src/scss/**/*.scss")
    .pipe( plumber())
    .pipe( sass())
    .pipe( dest("build/css")) // Almacenar

    done();
}

function images (done) {
    src("img/**/*.{png, jpg}")
    .pipe( cache(imagemin( {
        optimizationLevel: 3})))
    .pipe( dest("build/img"))

    done();
}

function vWebp (done) {
    const opciones = {
        quality: 50
    }

    src("img/**/*.{jpg, png}")
    .pipe( webp(opciones))
    .pipe( dest("build/img"))

    done();
}

function javascript (done) {
    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))

    done();

}

function dev (done) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);

    done();
}

exports.css = css;
exports.js = javascript;
exports.images = images;
exports.vWepb = vWebp;
exports.dev = parallel(dev, javascript, images, vWebp);