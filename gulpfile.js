const gulp = require('gulp')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')

const checkjs = () => {
    return gulp.src(['./scripts/*.js'])
        .pipe(babel())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

const watch = () => {
    return gulp.watch('./scripts/*.js', checkjs)
}

exports.checkjs = checkjs
exports.watch = watch
exports.default = checkjs