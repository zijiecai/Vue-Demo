module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gank.io/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      // '/data': {
      //   target: 'https://gank.io/api',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/data': ''
      //   }
      // }
    }
  }
}
