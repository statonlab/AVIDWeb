const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync('avid.test')

mix.webpackConfig({
  entry : {
    app: ['./resources/sass/app.scss'],
  },
  output: {
    chunkFilename: '[name].js?id=[chunkhash]',
  },
})

mix.js('resources/js/app.js', 'public/js')
  .js('resources/js/auth.js', 'public/js')
  .js('resources/js/guest.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .version()
  .sourceMaps()
