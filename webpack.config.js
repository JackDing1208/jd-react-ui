const path = require("path")

module.exports = {
  //设置入口文件,路径最好加./
  entry: {
    index: "./lib/index.tsx"
  },
  //要转译哪些类型的文件
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  //设置转译后文件输出的文件夹
  output: {
    //配合node使用绝对路径
    path: path.resolve(__dirname, "dist/lib"),
    //库的名字
    library: "JD",
    //模块输出类型，umd兼容性最好
    libraryTarget: "umd"
  },
  //根据不同类型的文件用不同的loader进行转译
  module: {
    rules: [
      {
        test: /\.tsx?$/,    //通过正则检查文件类型
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
}
