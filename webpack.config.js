const path = require('path');

module.exports = {
    mode: `development`,
    entry:  './source/js/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:  ["@babel/preset-env"]
                        }
                    }
                ]
            },
        ],
    },
    devtool: 'source-map'
};