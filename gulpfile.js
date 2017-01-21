var gulp        = require("gulp"),
    sass        = require("gulp-sass"),
    livereload  = require("gulp-livereload"),
    connect     = require("gulp-connect");

gulp.task('connect', function () {
   connect.server({
       root: 'app',
       livereload: true
   })
});

gulp.task('html', function () {
   gulp.src('src/index.html')
       .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('src/css/styles.css')
        .pipe(connect.reload());
});

gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass())
        .pipe(gulp.dest('src/css'))

});

gulp.task('watch', ['connect', 'sass'], function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/css/styles.css', ['css']);
    gulp.watch('src/*.html', ['html']);
});


gulp.task("build", function () {
    var buildWebPage = gulp.src('src/*.html')
        .pipe(gulp.dest('docs'))
    var buildCss = gulp.src('src/css/*.css')
        .pipe(gulp.dest('docs/css'))
    var buildImage = gulp.src('src/img/*.*')
        .pipe(gulp.dest('docs/img'))
    var buildScripts = gulp.src('src/js/*')
        .pipe(gulp.dest('docs/js'))
});
