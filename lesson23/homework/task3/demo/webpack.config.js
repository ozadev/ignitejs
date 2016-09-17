"use strict";

module.exports = {
    entry: './jsx/main.jsx',

    output: {
        filename: 'bundle.js',
        path: './bundle'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};