const { merge } = require('webpack-merge');
const fs = require('fs');
const path = require('path');
const { resolveTsAliases } = require('resolve-ts-aliases');
const withLinaria = require('next-linaria');
const withTM = require('next-transpile-modules')(['react-markdown']);

module.exports = withLinaria(
  withTM({
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
  }),
);
