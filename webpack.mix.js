let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.copy('resources/assets/images', 'public/images');

mix.copy('node_modules/dropzone/dist/min/dropzone.min.js', 'public/js');
mix.copy('node_modules/dropzone/dist/min/dropzone.min.css', 'public/css');

mix.copy('node_modules/phaser/dist/phaser.min.js', 'public/js');

mix.copy('resources/assets/phaser', 'public/js');
