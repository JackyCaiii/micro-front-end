const common = require("./webpack.common");
const merge = require("webpack-merge");
const name = require("./package.json").name;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devConfig = merge(common, {
  mode: "development",
  output: {
    publicPath: `/${name}/`
  },
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 8002,
    clientLogLevel: "warning",
    compress: true,
    inline: true,
    hot: true,
    quiet: true,
    progress: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
});

module.exports = () => {
  const devServer = devConfig.devServer;
  const { host, port } = devServer;
  const message = `You application is running here http://${host}:${port}/${name}`;
  devConfig.plugins.push(
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [message]
      }
    })
  );
  return devConfig;
};
