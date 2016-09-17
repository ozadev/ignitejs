"use strict";

module.exports = {
    entry: './src/main.js',

    output: {
        filename: 'bundle.js',
        path: './build'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                {
                    presets: ["es2015"]
                }
            }
        ]
    }
};