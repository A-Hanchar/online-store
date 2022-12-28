import { IConfiguration } from './webpack.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: IConfiguration = {
  mode: 'development',
  bail: false,
  devtool: 'inline-source-map',
  devServer: {
    static: false,
    historyApiFallback: true,
    port: 1812,
    open: false,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Online Shop',
      template: 'src/index.html',
      publicPath: '/',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
}

export default config
