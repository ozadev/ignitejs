
"use strict";

module.exports = {
    entry: {
        // "lesson19/classwork/build/bundle1": "./lesson19/classwork/jsx/main1.jsx",
        // "lesson19/classwork/build/bundle2": "./lesson19/classwork/jsx/main2.jsx",
        // "lesson19/classwork/build/bundle3": "./lesson19/classwork/jsx/main3.jsx",
        // "lesson19/homework/build/bundle1": "./lesson19/homework/jsx/main1.jsx",
        // "lesson19/homework/build/bundle2": "./lesson19/homework/jsx/main2.jsx",
        // "lesson19/homework/build/bundle3": "./lesson19/homework/jsx/main3.jsx",
        // "lesson20/classwork/build/bundle1": "./lesson20/classwork/jsx/main1.jsx",
        // "lesson20/classwork/build/bundle2": "./lesson20/classwork/jsx/main2.jsx",
        // "lesson20/classwork/build/bundle3": "./lesson20/classwork/jsx/main3.jsx",
        // "lesson20/homework/build/bundle1": "./lesson20/homework/jsx/main1.jsx",
        // "lesson20/homework/build/bundle2": "./lesson20/homework/jsx/main2.jsx",
        // "lesson20/homework/build/bundle3": "./lesson20/homework/jsx/main3.jsx",
        // "lesson21/classwork/build/bundle1": "./lesson21/classwork/jsx/main1.jsx",
        // "lesson21/classwork/build/bundle2": "./lesson21/classwork/jsx/main2.jsx",
        // "lesson21/classwork/build/bundle3": "./lesson21/classwork/jsx/main3.jsx",
        // "lesson21/homework/build/bundle1": "./lesson21/homework/jsx/main1.jsx",
        // "lesson21/homework/build/bundle2": "./lesson21/homework/jsx/main2.jsx",
        // "lesson21/homework/build/bundle3": "./lesson21/homework/jsx/main3.jsx",
        // "lesson22/classwork/build/bundle1": "./lesson22/classwork/jsx/main1.jsx",
        // "lesson22/classwork/build/bundle2": "./lesson22/classwork/jsx/main2.jsx",
        // "lesson22/classwork/build/bundle3": "./lesson22/classwork/jsx/main3.jsx",
        // "lesson22/homework/build/bundle1": "./lesson22/homework/jsx/main1.js",
        // "lesson22/homework/build/bundle2": "./lesson22/homework/jsx/main2.js",
        // "lesson22/homework/build/bundle3": "./lesson22/homework/jsx/main3.jsx",
        // "lesson24/classwork/build/bundle1": "./lesson24/classwork/jsx/index1.jsx",
        // "lesson24/classwork/build/bundle2": "./lesson24/classwork/jsx/index2.jsx",
        // "lesson24/classwork/build/bundle3": "./lesson24/classwork/jsx/index3.jsx",
        // "lesson24/homework/build/bundle1": "./lesson24/homework/jsx/index1.jsx",
        // "lesson24/homework/build/bundle2": "./lesson24/homework/jsx/index2.jsx",
        // "lesson24/homework/build/bundle3": "./lesson24/homework/jsx/index3.jsx",
        // "lesson25/classwork/task1/build/bundle": "./lesson25/classwork/task1/src/main.jsx",
        // "lesson25/classwork/task2/build/bundle": "./lesson25/classwork/task2/src/main.jsx",
        // "lesson25/classwork/task3/build/bundle": "./lesson25/classwork/task3/src/main.jsx",
        // "lesson25/homework/task1/build/bundle": "./lesson25/homework/task1/src/main.jsx",
        // "lesson25/homework/task2/build/bundle": "./lesson25/homework/task2/src/main.jsx",
        // "lesson26/classwork/task1/build/bundle": "./lesson26/classwork/task1/src/main.jsx",
        // "lesson26/classwork/task2/build/bundle": "./lesson26/classwork/task2/src/main.jsx",
        // "lesson26/classwork/task3/build/bundle": "./lesson26/classwork/task3/src/main.jsx",
        // "lesson26/homework/task1/build/bundle": "./lesson26/homework/task1/src/main.jsx",
        // "lesson26/homework/task2/build/bundle": "./lesson26/homework/task2/src/main.jsx",
        "lesson26/homework/task3/build/bundle": "./lesson26/homework/task3/src/main.jsx"
    },
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                {
                    presets: ["es2015", "stage-0", 'react'],
                    plugins: ["transform-object-rest-spread", "transform-async-to-generator", "syntax-async-functions", "transform-runtime"]
                }
            }
        ]
    }
};