const path = require('path')
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  //指定入口文件
  entry: './src/index.ts',
  //指定打包文件所在目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    //打包后文件的名字
    filename: 'bundle.js',
    //配置打包环境,高速webpack不适用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  //指定webpack打包时使用模块
  module: {
    //指定加载规则
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader,执行顺序是从后往前
        use: [
          //配置babel
          {
            //指定加载器
            loader: 'babel-loader',
            //设置babel
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境的插件
                  '@babel/preset-env',
                  //配置信息
                  {
                    //兼容浏览器版本
                    targets: {
                      chrome: '88',
                      ie: '11'
                    },
                    //指定corejs版本
                    corejs: '3',
                    //使用corejs的方式,按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        //要排除的文件
        exclude: /node-modules/
      },
      //设置 less 文件的处理
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  //配置插件
  plugins: [
    new HTMLWebpackPlugin({
      title: '自定义网页title',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}
