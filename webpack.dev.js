import { merge } from 'webpack-merge';
import Dotenv from 'dotenv-webpack';
import common from './webpack.common.js';

export default merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        devMiddleware: {
            stats: "errors-only"
        },
        historyApiFallback: true,
    },
    plugins: [
        new Dotenv({
            path: "./dev.env"
        }),
    ]
});