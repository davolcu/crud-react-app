const common = require('./webpack.common.js'),
    merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map'
});