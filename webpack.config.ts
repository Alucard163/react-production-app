import path from 'node:path';
import wepback from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: wepback.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
})

export default config;