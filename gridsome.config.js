// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome VueJS',
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png'
  }
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Gridsome VueJS',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Gridsome VueJS',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: './src/favicon.png',
        msTileImage: './src/favicon.png',
        msTileColor: '#666600'
      }
    }
  ]
}
