const common = require("./webpack.common");
const merge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devConfig = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 8000,
    clientLogLevel: "warning",
    compress: true,
    inline: true,
    hot: true,
    progress: true,
    quiet: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/staffManage": "http://localhost:8001",
      "/deptManage": "http://localhost:8002"
    }
  }
});

module.exports = () => {
  const devServer = devConfig.devServer;
  const { host, port } = devServer;
  const message = `You application is running here http://${host}:${port}`;
  devConfig.plugins.push(
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [message]
      }
    })
  );
  return devConfig;
};
