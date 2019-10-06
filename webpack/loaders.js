const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

// Babel loader to transpile the new JS versions
const JSLoader = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react"
            ],
            plugins: [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread"
            ]
        }
    },
};

// Scss, Sass, Css extractor and converter to Prefixed CSS
const CSSLoader = {
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
        {
            loader: MiniCSSExtractPlugin.loader,
            options: {
                publicPath: __dirname + '/../src/css/'
            }
        },
        {
            loader: 'css-loader',
            options: {importLoaders: 1},
        },
        {
            loader: 'postcss-loader',
            options: {
                config: {
                    path: __dirname + '/postcss.config.js'
                }
            },
        },
        {
            loader: 'sass-loader',
        },
    ],
};

module.exports = {
    JSLoader: JSLoader,
    CSSLoader: CSSLoader
};