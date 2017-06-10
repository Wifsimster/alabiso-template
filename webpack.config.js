const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js",
        publicPath: "dist",
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.vue?$/, loader: 'vue-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(jpe?g|png)(\?[a-z0-9=\.]+)?$/i, loader: 'url-loader?limit=100000&name=./img/[name].[ext]'},
            {test: /\.(woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'file-loader?name=./fonts/[name].[ext]'},
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },
}

if(process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else { module.exports.devtool = '#source-map' }