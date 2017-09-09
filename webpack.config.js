var path = require('path'),
    htmlWebpackPlugin= require('html-webpack-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    extractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    entry : {
        App : './app/App.js'
    },
    devServer:{
      port:3000
    },
    output:{
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options:{
                            presets : ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        'postcss-loader'
                    ]
                })
            }


        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : './app/index.pug',
            minify : false
        }),
        new extractTextPlugin('main.css'),
        new cleanWebpackPlugin(['dist'])
    ]
}