const merge=require('webpack-merge')
const path=require('path')
const webpack = require('webpack');
const common = require('./webpack.common.js');
module.exports=merge(common,{
    mode:'production',
    optimization:{
        minimize:false
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader'],exclude:/node_modules/},
            {test:/\.(png|jpg|svg|gif|mp3)$/,loader:'file-loader',exclude:/node_modules/,options:{
                outputPath:'../images',
                publicPath:'../images'
            }},
            {test:/\.(js|jsx)$/,use:{loader:'babel-loader'},exclude:/node_modules/},
            {test:/\.(ts|tsx)$/,use:['babel-loader','ts-loader'],exclude:/node_modules/}
        ]
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist/public/javascripts'),
        publicPath: './'
    }
})