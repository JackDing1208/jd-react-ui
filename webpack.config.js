const path= require("path")
const HtmlWebpackPlugin = require( "html-webpack-plugin")

module.exports={
  //配置生产或开发模式，开发环境不做压缩
  mode:"development",
  //设置入口文件,路径最好加./
  entry:{
    index:"./lib/index.tsx"
  },
  resolve: {
    extensions: [".ts",".tsx",".js",".jsx"]
  },
  //设置转译后文件输出的文件夹
  output:{
    path:path.resolve(__dirname,"dist/lib"),                 //配合node使用绝对路径
    library:"JD",                                                        //库的名字
    libraryTarget:"umd"                                                  //输出类型，umd兼容性最好
  },
  //根据不同类型的文件用不同的loader进行转译
  module:{
    rules:[
      {
        test:/\.tsx?$/,    //通过正则检查文件类型
        loader:"awesome-typescript-loader"
      }
    ]
  },
  //配置插件
  plugins: [
     //目标html自动关联生成的js
     new HtmlWebpackPlugin({
       title:"配置测试",
       template: "index.html",
     })
  ]
}
