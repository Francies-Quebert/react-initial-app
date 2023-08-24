const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
            assetModuleFilename:'images/[hash][ext][query]'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|test.tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                }, {
                    test: /\.(css)$/,
                    use: ['style-loader', 'css-loader', "postcss-loader"],
                }
            ],
        },
        optimization: isProduction ? {
            minimize: true,
            runtimeChunk: {
                name: 'runtime',
            },
        } : { minimize: true, },
        plugins: isProduction ? [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
            }),
            new Dotenv(),
        ] : [
            new HtmlWebpackPlugin({
                title: 'Receipe Generator',
                template: './public/index.html',
                filename: './index.html',
                base: '/'
            }),
            new Dotenv(),
        ],
        devServer: {
            port: 3000,
            historyApiFallback: true,

        },
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        target: 'web',
        devtool: 'source-map',
    };
};