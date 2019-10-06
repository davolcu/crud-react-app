const _MiniCSSExtractPlugin = require('mini-css-extract-plugin'),
    _HtmlWebpackPlugin = require('html-webpack-plugin'),
    _TSLintPlugin = require('tslint-webpack-plugin');

// MiniCSSExtractor Plugin
const MiniCSSExtractPlugin = new _MiniCSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
});

// MiniHtmlExtractor plugin
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
    template: __dirname + '/../public/index.html',
    minify: {
        collapseWhitespace: true
    }
});

// TSLinter Plugin
const TSLintPlugin = new _TSLintPlugin({
    files: [__dirname + '/../src/**/*.tsx']
});

module.exports = {
    MiniCSSExtractPlugin: MiniCSSExtractPlugin,
    HtmlWebpackPlugin: HtmlWebpackPlugin,
    TSLintPlugin: TSLintPlugin,
};