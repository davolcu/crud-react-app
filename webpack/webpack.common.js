const path = require('path'),
    loaders = require('./loaders.js'),
    plugins = require('./plugins.js'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
            // JavaScript Loaders
            loaders.JSLoader,
            // CSS Loaders
            loaders.CSSLoader,
        ]
    },

    // Dynamic HTML webpack generator and CSS extractor
    plugins: [
        new CleanWebpackPlugin(),
        plugins.HtmlWebpackPlugin,
        plugins.MiniCSSExtractPlugin,
        plugins.TSLintPlugin
    ]
};