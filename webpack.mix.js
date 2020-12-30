const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins: [
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin()
    ],
    resolve: {
        alias: {
        'vue$': 'vue/dist/vue.runtime.common.js'
        }
    }
}

mix.webpackConfig(webpackConfig);

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

mix
  .js('resources/js/entry-client.js', 'public/js')
  .js('resources/js/entry-server.js', 'public/js')
    //.js('resources/js/app.js', 'public/js')
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss"),]);
