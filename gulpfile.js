const gulp = require('gulp');
const gulp = require('gulp-sass');
const browserSync = require('browser-sync').create();


//Omvandla scss till css
function style(){
 //Lokalisera scss-filen  
 return gulp.src('./scss/*.scss')
 .pipe(sass())
 .pipe(sass().on('error',sass.logError))
 //var sparas de omvandlade css-filerna?
 .pipe(gulp.dest('./css'))
 //strömma ändringarna till browsern
 .pipe(browser-SyncManager.stream());
}
function watch(){
   browserSync.init({
server: {
baseDir: './'
}
   });
   gulp.watch('./scss/**/*, style);
   gulp.watch('./*.html').on('change', browserSync.reload);
   gulp.watch('./js/**/*, js).on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;