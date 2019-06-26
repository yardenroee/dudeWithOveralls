const path = require("path");

module.exports = {
    context: __dirname, // always sets the proper directory to start looking for the entry file regardless of environment
    entry: "./lib/main.js",
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "bundle.js"
    },
    devtool: 'source-map'
};