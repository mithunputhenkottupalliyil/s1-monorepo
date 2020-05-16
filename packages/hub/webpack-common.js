const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const outDir = path.resolve(__dirname, "out")
const srcDir = path.resolve(__dirname, "src")

let config ={
    entry: srcDir+"/index.js",
    output:{
        "filename":"[name].[contentHash].bundle.js",
        "path" : outDir+"/target"
    },
    mode:"development",
    plugins:[new HtmlWebPackPlugin({
        template: srcDir+"/template.html"
    })],
    module:{
        rules: [
        {
            test: /\.html$/, 
            use: ["html-loader"]
        }
        ]
    }

}
module.exports = config;