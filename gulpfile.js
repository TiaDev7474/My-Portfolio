require = require('esm')(module);

const {src, dest, parallel, series,watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = import('gulp-imagemin');
const del = import('del')
console.log(imagemin)


function html(){
    return src('./*.html')
           .pipe(dest('dist/'))
               
}
function optimizeImage(){
    return src('./assets/images/*')
        //    .pipe(imagemin())
           .pipe(dest('dist/assets/images'))
}
function minifyJs(){
    return src('./js/**/*.js')
           .pipe(sourcemaps.init())
           .pipe(concat('index.min.js'))
           .pipe(terser())
           .pipe(sourcemaps.write('.'))
           .pipe(dest('/dist/assets/js/'))      
}

function clean(){
    return del(
        'dist/css/*'
    )
}
function transpileSass() {
     return src('./styles/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('styles.css'))
            .pipe(dest('./dist/css/'))
            .pipe(browserSync.stream()) 
           
}
function watchTask(){
    browserSync.init({
       server:{
           baseDir:'./'
       }
    });
    watch('./styles/**/*.scss', transpileSass);
    watch('./*.html').on('change', browserSync.reload);
    watch(['./assets/images/*','./assets/icons/*']).on('change', browserSync.reload);
    watch('./js/**/*.js').on('change',browserSync.reload);

}

exports.build = series(html, optimizeImage ,minifyJs, transpileSass)
exports.default = series( watchTask)
exports.transpileSass = transpileSass