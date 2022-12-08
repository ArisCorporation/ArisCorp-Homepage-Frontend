const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withGlobalCss } = require('next-global-css')

const withConfig = withGlobalCss()

module.exports = withPWA(withConfig({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    formats: ['image/webp'],
    domains: ['cms.ariscorp.de', 'i.pinimg.com'],
  },

  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },

  // target: 'serverless',

  webpack: (config, options) => {
    patchWebpackConfig(config, options)

    if (options.isServer) {
      config.externals = webpackNodeExternals({
        // Uses list to add this modules for server bundle and process.
        allowlist: [/design-system/],
      })
    }

    return config
  },
}))
