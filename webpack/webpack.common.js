const path = require('path'),
    loaders = require('./loaders.js');

module.exports = {
    // Main entry
    entry: {
        main: __dirname + '/../src/index.tsx'
    },

    // Main output into /build as main.js
    output: {
        path: path.join(__dirname, '/../build'),
        filename: '[name].js'
    },

    // It adds the typescript extensions to help on the transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    // Conversion rules
    module: {
        rules: [
            // JavaScript Loader
            loaders.JSLoader,
            // JQuery Loader
            loaders.JQLoader,
            // CSS Loader
            loaders.CSSLoader,
            // Img Loader
            loaders.FileLoader
        ]
    },
};
