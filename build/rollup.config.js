import babel from 'rollup-plugin-babel'

export default {
  entry: './src/index.js',
  dest: './dist/index.js',
  moduleName: 'clipIt',
  format: 'umd',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}