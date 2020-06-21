require('dotenv').config()
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')
const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')()
const withImages = require('next-images')

module.exports = withSourceMaps(
  withImages(
    withSass({
      webpack: (config, options) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty'
        }

        const { isServer } = options
        if (isServer) {
          config.devtool = 'source-map'
        }

        config.plugins = config.plugins || []
        config.plugins = [
          ...config.plugins,
          // Read the .env file
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true
          })
        ]
        return config
      },
      target: 'serverless'
    })
  )
)
