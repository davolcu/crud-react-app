const common = require('./webpack.common.js'),
    merge = require('webpack-merge'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    plugins = require('./plugins.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
    },
    // Dynamic HTML webpack generator and CSS extractor (does not remove the html file from build folder)
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['!*.html'],
        }),
        plugins.HtmlWebpackPlugin,
        plugins.MiniCSSExtractPlugin,
        plugins.TSLintPlugin
    ]
});