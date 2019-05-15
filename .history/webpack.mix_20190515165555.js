const mix = require('laravel-mix');

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
        .sass('resources/assets/sass/app.scss', 'public/css')
    .combine([
        'resources/assets/css/admin.css',
        'resources/assets/css/styles.css'
    ], 'public/css/all.css', __dirname);


mix.copy('resources/assets/js/summernote-lite.min.js', 'public/js');
mix.copy('resources/assets/css/summernote-lite.css', 'public/css');
mix.copyDirectory('resources/assets/fonts', 'public/fonts');
mix.copyDirectory('resources/assets/font', 'public/css/font');
