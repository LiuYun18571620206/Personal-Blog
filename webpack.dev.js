const merge=require('webpack-merge')
const common=require('./webpack.common')
const path=require('path')
module.exports=merge(common,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer:{
        hot:true,
        port:3000
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader'],exclude:/node_modules/},
            {test:/\.(png|jpg|svg|gif|mp3)$/,loader:'file-loader',exclude:/node_modules/},
            {test:/\.(js|jsx)$/,use:{loader:'babel-loader'},exclude:/node_modules/},
            {test:/\.(ts|tsx)$/,use:['babel-loader','ts-loader'],exclude:/node_modules/}
        ]
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dev'),
        publicPath: '/'
    }
})