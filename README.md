# eslint

Install

yarn add gulp
yarn add gulp-eslint
yarn add gulp-babel

Usage

const { src, task } = require('gulp')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')

task('default', () => {
    return src(['./scripts/*.js'])
        .pipe(babel()) // babel converte o ecma script para js browser
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
})
