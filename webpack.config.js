const path = require('path');
const htmlwebpackplugin=require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/js/index.js',
    content: './src/js/index.js',
   },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
       new htmlwebpackplugin({
        chunks: ['index'],
        template:path.join(__dirname,"./src/index.html"),
        filename:'index.html',
       }),
       new htmlwebpackplugin({
        chunks: ['content'],
        template:path.join(__dirname,"./src/content.html"),
        filename:'content.html',
       }),
     ],
   module: {
     rules: [
       {test: /\.css$/,use: ['style-loader','css-loader']},
       {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
       {test:/\.(png|svg|jpg|gif)$/,use:{loader:"file-loader",options:{name:"[name].[ext]",outputPath:"imgs",　esModule: false }}},
       {test:/\.(ttf|eot|svg|woff|woff2|otf)$/,use:{loader:"file-loader",options:{name:"[name].[ext]",outputPath:"fonts"}}},
       {test: /\.(htm|html)$/,loader: 'html-withimg-loader'}
     ]
   }
};