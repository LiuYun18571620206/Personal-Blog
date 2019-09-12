const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports={
    entry:{
        app:path.resolve(__dirname,'src/App.tsx')
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            title:'hello',
            template:'./src/index.html'
        }),
    ],
    resolve:{
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
}