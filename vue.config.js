const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
        .rule('svg')
        .use('file-loader')
        .loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_themes.scss";`
      }
    }
  }
})