const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    index: "./example.tsx"
  },
  //配置其他插件
  plugins: [
    //自动关联HTML用的插件
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: "Test Page"
    })
  ],
})
