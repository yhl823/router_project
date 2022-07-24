// 假数据模拟
module.exports = {
  devServer: {
    before: (app, serve) => {
      app.get('/api/post', (req, res) => {
        res.json({
          title: 'vue-router的数据获取',
          body: '1.在导航完成之后获取数据'
        })
      })
    }
  },
  lintOnSave: false, // 关闭语法检查
  chainWebpack: (config) => {
    config.resolve.symlinks(true) // 修复热更新失效
  }
}
