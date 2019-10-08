const common = require('./webpack.common.js'),
    merge = require('webpack-merge'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    plugins = require('./plugins.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    // Dynamic HTML webpack generator and CSS extractor
    plugins: [
        new CleanWebpackPlugin(),
        plugins.HtmlWebpackPlugin,
        plugins.MiniCSSExtractPlugin,
        plugins.TSLintPlugin
    ]
});