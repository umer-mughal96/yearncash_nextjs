const webpack = require('webpack')

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
 
      config.plugins.push(new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
      }))
      
      // Important: return the modified config
      return config;
  }
  };