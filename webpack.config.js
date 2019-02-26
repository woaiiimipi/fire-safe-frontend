// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);
  webpackConfig.module.loaders.push({
    test:/\.scss$/,
    // use: [
    //   {
    //     loader: "style-loader" // 将 JS 字符串生成为 style 节点
    //   },
    //   {
    //     loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
    //   },
    //   {
    //     loader: "sass-loader" // 将 Sass 编译成 CSS
    //   }
    // ],
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });
  
  console.log('begin------------------------------');
  console.log(webpackConfig);
  console.log('end------------------------------');
  // webpackConfig.rules = [{
  //   use: [{
  //     loader: 'sass-loader',
  //   }]
  // }];
  
  return webpackConfig;
};
