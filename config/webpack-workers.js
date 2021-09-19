const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { writeFileSync } = require('fs');

module.exports = (env = {}) => {
  const __DEV__ = env.production !== true;
  const staticPath = path.join(__dirname, '../public/js');
  return {
    // cache: __DEV__ ? { type: "filesystem" } : false,
    // mode: __DEV__ ? "development" : "production",
    entry: {
      'frame-runner': './src/workers/frame-runner.js',
      'test-evaluator': './src/workers/test-evaluator.js',
    },
    devtool: 'inline-source-map',
    output: {
      publicPath: '/js/',
      filename: (chunkData) => {
        // construct and output the filename here, so the client can use the
        // json to find the file.
        const filename = `${chunkData.chunk.name}`;
        // writeFileSync(
        //   path.join(configPath, `${chunkData.chunk.name}.json`),
        //   `{"filename": "${filename}"}`,
        // );
        return filename + '.js';
      },
      chunkFilename: '[name].js',
      path: staticPath,
    },
    stats: {
      // Display bailout reasons
      optimizationBailout: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  { modules: false, targets: '> 0.25%, not dead' },
                ],
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
        },
      ],
    },
    plugins: [
      // new CopyWebpackPlugin({
      //   patterns: ['node_modules/sass.js/dist/sass.sync.js'],
      // }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    resolve: {
      // modules: [
      //   {
      //     buffer: require.resolve("buffer"),
      //     util: false,
      //     stream: false,
      //     process: require.resolve("process/browser"),
      //   },
      // ],
      extensions: ['.js', '.ts'],
    },
  };
};
