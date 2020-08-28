const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const name = require("./package.json").name;

module.exports = {
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    library: name,
    libraryTarget: "umd",
    libraryExport: "default"
  },
  externals: {
    vue: "Vue",
    vuex: "Vuex",
    "vue-router": "VueRouter",
    app: "app"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@root": path.resolve(__dirname)
    },
    extensions: [".js", ".json", ".jsx", ".css", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: "vue-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
