const withCSS = require('@zeit/next-css')
const assetPrefix = process.env.NODE_ENV === 'staging' ? '/devfest-nola-2019' : ''

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  assetPrefix: assetPrefix
});
