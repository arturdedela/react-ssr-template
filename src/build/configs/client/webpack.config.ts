import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import { DefinePlugin } from 'webpack';
import { resolve } from 'path';
import { merge } from 'webpack-merge';
import defaultConfig from 'build/configs/common.webpack.config';
import LoadablePlugin from '@loadable/webpack-plugin';

const PUBLIC_PATH = '/';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default merge(defaultConfig, {
    name: 'client',
    entry: resolve('src/client/index.tsx'),

    output: {
        path: resolve('dist/client'),
        filename: IS_PRODUCTION ? '[contenthash:8].js' : '[name].js',
        chunkFilename: IS_PRODUCTION ? '[contenthash:8].js' : '[name].js',
        publicPath: PUBLIC_PATH,
    },

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
                                    cacheDirectory: resolve('node_modules/.cache/babel-client'),
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
                                                modules: false,
                                                loose: true,
                                                useBuiltIns: 'usage',
                                                corejs: 3,
                                            },
                                        ],
                                        ['@babel/preset-react', {}],
                                        ['@babel/preset-typescript', {}],
                                    ],
                                    plugins: [
                                        '@loadable/babel-plugin',
                                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                                        '@babel/plugin-proposal-class-properties',
                                        '@babel/plugin-transform-runtime',
                                        'babel-plugin-optimize-react',
                                    ],
                                },
                            },
                        ],
                    },

                    {
                        test: /\.scss$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'cache-loader',
                                options: {
                                    cacheDirectory: resolve('node_modules/.cache/babel-client'),
                                },
                            },
                            'css-loader',
                            'sass-loader',
                        ],
                    },
                ],
            },
        ],
    },

    plugins: [
        new LoadablePlugin(),
        new MiniCssExtractPlugin({
            filename: IS_PRODUCTION ? '[contenthash:8].css' : '[name].css',
            chunkFilename: IS_PRODUCTION ? '[contenthash:8].css' : '[name].css',
        }),

        new DefinePlugin({
            'typeof window': '"object"',
        }),

        ...(IS_PRODUCTION ? [new OptimizeCssAssetsPlugin()] : []),
    ],
});
