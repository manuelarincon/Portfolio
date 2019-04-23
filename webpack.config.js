"use strict"
const path = require('path');

module.exports = {
    entry: [
        "./src/main.tsx",
        // 'font-awesome/scss/font-awesome.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'        
    },
    devServer: {
        contentBase: path.join(__dirname, "src"), 
        port: 3487,
        publicPath: '/',
        historyApiFallback: true

    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname,"node_modules")],
                use: [ 'script-loader' ]
            },
            {
                test: /\.css?$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(ttf|eot|svg|otf|pdf|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                loader: 'url-loader'
            },
            // font-awesome
            // {
            //     test: /font-awesome\.config\.js/,
            //     use: [
            //     { loader: 'style-loader' },
            //     { loader: 'font-awesome-loader' }
            //     ]
            // },
            {   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" },
                
            {   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" }
        ],
    }
}