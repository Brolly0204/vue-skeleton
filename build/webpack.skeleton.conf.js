const path = require('path')
const merge = require('webpack-merge')
const config = require('../config')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnable = isProduction // 是否开启sourceMap
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

let SkeletonWebpackConfig = merge({}, baseWebpackConfig, { // 骨架屏webpack配置
  target: 'node', // 编译为用于node环境的代码
  devtool: false,
  entry: resolve('./src/entry-skeleton.js'), // 入口文件
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: 'commonjs2' // 以commonjs规范输出
  }),
  externals: nodeExternals({ // webpack打包时排除掉node_modules中的模块
    whitelist: /\.css$/ // 白名单
  }),
  plugins: []
})

SkeletonWebpackConfig.module.rules[0].options.loaders = utils.cssLoaders({
  sourceMap: sourceMapEnable,
  extract: true
})

module.exports = SkeletonWebpackConfig