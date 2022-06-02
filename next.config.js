const webpack = require('webpack');

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_LINK: process.env.API_LINK,
    INSTA_LINK: process.env.INSTA_LINK,
    INSTA_TOKEN: process.env.INSTA_TOKEN,
  },
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
return config;
}}
// module.exports = {
//   reactStrictMode: true,
// }