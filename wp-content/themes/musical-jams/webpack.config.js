const path = require("path"),
  removeEmptyScriptsPlugin = require("webpack-remove-empty-scripts"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  webpackConfig = require("@wordpress/scripts/config/webpack.config");

// Extend the @wordpress webpack config and add the entry points.
module.exports = {
  ...webpackConfig,
  ...{
    mode: "production",
    devServer: {
      static: {
        directory: path.join(__dirname, "assets"),
      },
      client: {
        overlay: false,
      },
      // open: ["http://localhost"], // (Optional) Add your local domain here
      liveReload: true,
      hot: false,
      compress: true,
      devMiddleware: {
        writeToDisk: true,
      },
    },
    context: path.resolve(__dirname, "assets"),
    entry: {
      "main-js": "./main.js",
      frontpage: "./frontpage.js",
      index: "../src/index.js",
      main: "./main.scss",
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    externals: {
      jquery: "jQuery",
      react: "React",
      "react-dom": "ReactDOM",
    },
    plugins: [
      ...webpackConfig.plugins,
      /*new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
			}),*/
      new removeEmptyScriptsPlugin({
        stage: removeEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  },
};
