import { WebpackClusterPlugin } from 'build/webpack/WebpackClusterPlugin';
import { resolve } from 'path';
import { DefinePlugin } from 'webpack';
import LoadablePlugin from '@loadable/webpack-plugin';
import { merge } from 'webpack-merge';
import defaultConfig from 'build/configs/common.webpack.config';
import nodeExternals from 'webpack-node-externals';

export default merge(defaultConfig, {
    name: 'server',
    entry: resolve('src/server/index.ts'),
    target: 'node',

    output: {
        path: resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        libraryTarget: 'commonjs2',
    },

    externals: ['@loadable/component', nodeExternals()],

    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.tsx?$/,
                        include: [resolve('src')],
                        use: [
                            {
                                loader: 'cache-loader',
                                options: {
                                    cacheDirectory: resolve('node_modules/.cache/babel-server'),
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    babelrc: false,

                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                loose: true,
                                                modules: false,
                                                targets: {
                                                    node: true,
                                                },
                                            },
                                        ],
                                        ['@babel/preset-typescript', {}],
                                        ['@babel/preset-react', {}],
                                    ],
                                    plugins: [
                                        '@loadable/babel-plugin',
                                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                                        '@babel/plugin-proposal-class-properties',
                                        '@babel/plugin-transform-runtime',
                                    ],
                                },
                            },
                        ],
                    },

                    {
                        test: /\.scss$/,
                        loader: 'null-loader',
                    },
                ],
            },
        ],
    },

    plugins: [
        new LoadablePlugin(),

        new WebpackClusterPlugin({ filename: 'main.js' }),
        new DefinePlugin({
            'typeof window': '"undefined"',
        }),
    ],
});
