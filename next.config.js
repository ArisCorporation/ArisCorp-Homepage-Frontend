const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['cms.ariscorp.de'],
  },

  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },

  target: 'serverless',
})
