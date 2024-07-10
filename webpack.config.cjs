const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared", // La dependOnopción permite compartir los módulos entre los fragmentos:
    },
    print: "./src/print.js",
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/", // Se utilizará en nuestro script de servidor para garantizar que los archivos se distribuyan correctamente
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Life Push",
    }),
  ],

  // Solo para desarrollo:
  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
    hot: true, // Habilitar recarga en caliente
    liveReload: true, // Habilitar recarga en vivo
  },
  optimization: {
    runtimeChunk: "single",
  },
};
