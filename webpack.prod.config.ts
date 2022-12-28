import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BannerPlugin, CleanPlugin } from 'webpack'
import packageJson from './package.json'
import { IConfiguration } from './webpack.config'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { NetlifyPlugin } from 'netlify-webpack-plugin'

const config: IConfiguration = {
  mode: 'production',
  bail: true,
  plugins: [
    new BannerPlugin({
      banner: `${packageJson.name}@${packageJson.version} ${Date()}`,
    }),
    new CleanPlugin(),
    new HtmlWebpackPlugin({
      title: 'Online Shop',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      publicPath: '/',
    }),
    new MiniCssExtractPlugin({ filename: `${packageJson.name}.css` }),
    new NetlifyPlugin({
      redirects: [
        {
          from: '/*',
          to: '/index.html',
          status: 200,
        },
      ],
    }),
  ],
  devtool: false,
}

export default config
