'use strict';

module.exports = {
    source: {
        folder: './src/BoardZ/',
        files: {
            injectables: [
                './build/scripts/es6-shim.min.js',
                './build/scripts/vendor.min.js',
                './build/css/vendor.min.css',
                './build/css/app.css'

            ],
            main: [
                './src/BoardZ/index.html'
            ],
            app: {
                ts: [
                    './src/BoardZ/app/**/*.ts'
                ],
                html: [
                    './src/BoardZ/app/**/*.html'
                ],
                css: [

                    './src/BoardZ/css/**/*.css'
                ],
                componentCss: [
                    './src/BoardZ/app/**/*.css'
                ],
                assets: [
                    './src/BoardZ/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/BoardZ/vendor/bootstrap/css/bootstrap.css',
                './src/BoardZ/vendor/admin-lte/css/AdminLTE.css',
                './src/BoardZ/vendor/admin-lte/css/skins/_all-skins.css',
                './src/BoardZ/vendor/font-awesome/css/font-awesome.css',
                './src/BoardZ/vendor/pNotify/pnotify.custom.css'
            ],
            vendorFonts: [
                './src/BoardZ/vendor/font-awesome/fonts/*.*',
                './src/BoardZ/vendor/bootstrap/fonts/*.*'
            ],
            shim: ['./node_modules/es6-shim/es6-shim.min.js'],
            script_dependencies: [
                './src/BoardZ/vendor/hammerjs/hammer.js',
                './src/BoardZ/vendor/jquery/jquery-2.1.4.js',
                './src/BoardZ/vendor/jquery/jquery.hammer.js',
                './src/BoardZ/vendor/pNotify/pnotify.custom.js',
                './src/BoardZ/vendor/signalr/signalr.js',
                './src/BoardZ/vendor/bootstrap/js/bootstrap.js',
                './src/BoardZ/vendor/fastclick/fastclick.js',
                './src/BoardZ/vendor/admin-lte/js/app.js',
                './node_modules/systemjs/dist/system-polyfills.js',
                './node_modules/angular2/bundles/angular2-polyfills.js',
                './node_modules/systemjs/dist/system.src.js',
                './node_modules/rxjs/bundles/Rx.js',
                './node_modules/angular2/bundles/angular2.dev.js',
                './node_modules/angular2/bundles/http.dev.js',
                './node_modules/angular2/bundles/router.dev.js'

            ]
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
