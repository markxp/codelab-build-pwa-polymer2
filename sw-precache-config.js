module.exports = {
    staticFileGlobs: [
      '/index.html',
      '/manifest.json',
      '/bower_components/webcomponentsjs/webcomponents-lite.js'
    ],
    navigateFallback: '/index.html',

    //This option allows us to serve the app shell while the app is offline for any client-side route.
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],    
    runtimeCaching: [
      // an image for unavailable youtube video
      {
        urlPattern: /^https:\/\/i\.ytimg\.com/,
        handler: 'fastest',
        options: {
          cache: {
            maxEntries: 100,
            name: 'yt-images-cache'
          }
        }
      },
      {
        urlPattern: /^https:\/\/www\.googleapis\.com\/youtube\/v3\/search/,
        handler: 'networkFirst',
        options: {
          cache: {
            maxEntries: 100,
            name: 'yt-data-cache'
          }
        }
      }
    ]
  };