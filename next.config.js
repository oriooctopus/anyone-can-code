module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // config.node = Object.assign(config.node, {
    //   fs: 'empty',
    // });
    // console.log('config. special', config.resolve.fallback);
    config.resolve.fallback = Object.assign(config.resolve.fallback || {}, {
      fs: false,
    });

    config.module.rules.push({
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
    });

    // config.module.rules.push({
    //   test: /\.(js|mjs|jsx|ts|tsx)$/,
    //   loader: require.resolve('babel-loader'),

    //   plugins: [
    //     [
    //       require.resolve('babel-plugin-named-asset-import'),
    //       {
    //         loaderMap: {
    //           svg: {
    //             ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
    //           },
    //         },
    //       },
    //     ],
    //   ],
    // });
    // console.log('after', config.resolve.fallback);

    // console.log('the config module rules', config.module.rules);
    // throw new Error('abc');

    // config.module.rules: {
    //   strictExportPresence: true,
    //   rules: [
    //     // Disable require.ensure as it's not a standard language feature.
    //     { parser: { requireEnsure: false } },
    //     {
    //       // "oneOf" will traverse all following loaders until one will
    //       // match the requirements. When no loader matches it will fall
    //       // back to the "file" loader at the end of the loader list.
    //       oneOf: [
    //         // TODO: Merge this config once `image/avif` is in the mime-db
    //         // https://github.com/jshttp/mime-db
    //         {
    //           test: [/\.avif$/],
    //           loader: require.resolve('url-loader'),
    //           options: {
    //             limit: imageInlineSizeLimit,
    //             mimetype: 'image/avif',
    //             name: 'static/media/[name].[hash:8].[ext]',
    //           },
    //         },
    //         {
    //           test: /\.css$/,
    //           include: MONACO_DIR,
    //           use: ['style-loader', 'css-loader'],
    //         },
    //         // "url" loader works like "file" loader except that it embeds assets
    //         // smaller than specified limit in bytes as data URLs to avoid requests.
    //         // A missing `test` is equivalent to a match.
    //         {
    //           test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    //           loader: require.resolve('url-loader'),
    //           options: {
    //             limit: imageInlineSizeLimit,
    //             name: 'static/media/[name].[hash:8].[ext]',
    //           },
    //         },
    //         // Process application JS with Babel.
    //         // The preset includes JSX, Flow, TypeScript, and some ESnext features.
    //         {
    //           test: /\.(js|mjs|jsx|ts|tsx)$/,
    //           include: paths.appSrc,
    //           loader: require.resolve('babel-loader'),
    //           options: {
    //             customize: require.resolve(
    //               'babel-preset-react-app/webpack-overrides'
    //             ),
    //             presets: [
    //               [
    //                 require.resolve('babel-preset-react-app'),
    //                 {
    //                   runtime: hasJsxRuntime ? 'automatic' : 'classic',
    //                 },
    //               ],
    //             ],

    //             plugins: [
    //               [
    //                 require.resolve('babel-plugin-named-asset-import'),
    //                 {
    //                   loaderMap: {
    //                     svg: {
    //                       ReactComponent:
    //                         '@svgr/webpack?-svgo,+titleProp,+ref![path]',
    //                     },
    //                   },
    //                 },
    //               ],

    // const result = merge(config, {
    // resolve: {
    //   fallback: {
    //     fs: false,
    //   },
    // },
    // target: 'node',
    // });
    // console.log('result', result);

    return config;
  },
};
