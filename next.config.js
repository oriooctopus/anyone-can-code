const { merge } = require('webpack-merge');
const fs = require('fs');
const path = require('path');
const { resolveTsAliases } = require('resolve-ts-aliases');
const withTM = require('next-transpile-modules')(['react-markdown']);

const appDirectory = fs.realpathSync(process.cwd());
// const tsConfig = require('./tsconfig.json');

/*
 * the withTm is needed to fix an error with esmodule when importing
 * react-markdown. For more info see https://github.com/vercel/next.js/issues/25454
 */
module.exports = withTM({
  webpack: (initialConfig) => {
    console.log;
    const customConfig = {
      resolve: {
        alias: resolveTsAliases(path.resolve('tsconfig.json')),
        fallback: {
          fs: false,
        },
      },
      module: {
        rules: [
          {
            test: /\.svg?$/,
            oneOf: [
              {
                use: [
                  {
                    loader: '@svgr/webpack',
                    options: {
                      prettier: false,
                      svgo: true,
                      svgoConfig: {
                        plugins: [{ removeViewBox: false }],
                      },
                      titleProp: true,
                    },
                  },
                ],
                issuer: {
                  and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                },
              },
            ],
          },
        ],
      },
    };

    return merge(initialConfig, customConfig);
  },
});
