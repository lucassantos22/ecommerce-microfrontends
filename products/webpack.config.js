const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'products', // name is required only for remotes
            filename: 'remoteEntry.js',
            exposes: {
              './ProductsIndex': './src/bootstrap',
            },
            shared: {
                faker: {
                    singleton: true
                }
            }
        }),
    ]
}