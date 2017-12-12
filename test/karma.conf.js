// Karma configuration
// Generated on Wed Mar 29 2017 16:16:32 GMT+0800 (CST)
const babel = require('rollup-plugin-babel')
module.exports = function (config) {
  var configuration = {
    basePath: '..',
    frameworks: ['jasmine'],
    files: [
      './test/**/*spec.js'
    ],
    preprocessors: {
      'test/*.js': ['webpack'],
      'src/*.js': ['webpack', 'coverage']
    },
    webpack: require('../build/webpack.test.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [{type: 'lcov'}]
    },
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    concurrency: Infinity
  }

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration)
}
