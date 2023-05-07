import HTMLWebpackPlugin from "html-webpack-plugin";
import wepback from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({ paths }: BuildOptions): wepback.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new wepback.ProgressPlugin(),
    ]
}