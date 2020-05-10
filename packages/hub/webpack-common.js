let path = require("path")
//let webpack = require("webpack")

const webpack = require("webpack")
let config ={
    entry:{ 
        "index": ".src/index.js"
    },
    output:{
        "filename":"[name].[contentHash].bundle.js",
        "publicPath" : "/reactapp/"
    }
}

module.exports = config;