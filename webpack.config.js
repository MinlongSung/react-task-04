import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: {
        app: "./index.tsx",
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        },
                    },
                    'sass-loader'
                ], 
            },
            {
                test: /\.(jpg|jpeg|png|)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        devMiddleware: {
            stats: "errors-only"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
    ]
}