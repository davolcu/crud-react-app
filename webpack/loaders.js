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

// JQuery loader to add it to the templates
const JQLoader = {
    test: /jquery.+\.(ts|js)x?$/,
    use: [{
        loader: 'expose-loader',
        options: 'jQuery'
    }, {
        loader: 'expose-loader',
        options: '$'
    }]
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

// Image loader to import them correctly on TS files
const FileLoader = {
    test: /\.(ico|png|jpe?g|svg|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    exclude: /node_modules/,
    use: {
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[ext]',
        }
    },
};

module.exports = {
    JSLoader: JSLoader,
    JQLoader: JQLoader,
    CSSLoader: CSSLoader,
    FileLoader: FileLoader
};
