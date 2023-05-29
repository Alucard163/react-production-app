import HTMLWebpackPlugin from "html-webpack-plugin";
import wepback from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): wepback.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new wepback.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new wepback.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })
    ]
}