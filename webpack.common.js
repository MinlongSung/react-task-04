import HtmlWebpackPlugin from "html-webpack-plugin";
import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        plugins: [new TsConfigPathsPlugin()]
    },
    entry: {
        app: ["./index.tsx", "./styles.css"],
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
                test: /\.(jpg|jpeg|png|)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
    ]
}