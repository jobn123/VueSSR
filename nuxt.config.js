module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuessr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * css
   */
  css: [
    'assets/css/main.css',
    '~assets/css/normalize.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /**
     * url-loader
     */
    loaders:[
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10000,
          name:'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
