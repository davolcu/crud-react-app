'use strict';

// Gulp and webpack imports for the pipeline
const gulp = require('gulp'),
    webpack = require('webpack'),
    // An env variable should be set to decide between configurations but as its local environment, is not worth it
    webpackDevConfig = require('./webpack/webpack.dev.js'),
    webpackProdConfig = require('./webpack/webpack.prod.js'),
    browserSync = require('browser-sync').create(),
    historyApiFallback = require('connect-history-api-fallback');

// Arrow function to run webpack from Gulp
const buildDevAssets = () => {
    return buildAssets(webpackDevConfig);
};

// Arrow function to run webpack from Gulp
const buildProdAssets = () => {
    return buildAssets(webpackProdConfig);
};

// Common arrow function to build the webpack assets
const buildAssets = webpackConfig => {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (error, status) => {
            if (error) {
                return reject(error);
            }

            if (status.hasErrors()) {
                return reject(new Error(status.compilation.errors.join('\n')));
            }

            resolve();
        });
    });
};

// Arrow function to rise a 'server'
const buildServer = cb => {
    browserSync.init({
        server: './build',
        port: 8080,
        host: '0.0.0.0',
        middleware: [historyApiFallback()]
    }, cb);
};

// Arrow function to enable HMR when the watch function detects a change
const reloadAssets = cb => {
    browserSync.reload();
    cb();
};

// Arrow function that controls and detects the changes on the files in order to have HMR on development mode
const watchAssets = cb => {
    gulp.watch(
        './src/**/*.*', // Watch everything on src folder...
        {
            ignored: [
                // Do not watch the build files
                './build/**/*.*'
            ]
        },
        // when something changes, rebuild + reload
        gulp.series(buildDevAssets, reloadAssets)
    );
    cb();
};

// Export a build task that runs the above two tasks in series (PROD MODE)
exports.production = gulp.series(buildProdAssets, buildServer);

// Export a build task that runs the above three tasks in series (DEVELOPMENT MODE)
exports.development = gulp.series(buildDevAssets, buildServer, watchAssets);