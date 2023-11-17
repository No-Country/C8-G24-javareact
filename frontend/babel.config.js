module.exports = {
    presets:[
        ["@babel/preset-env", { "modules": "auto" }],
        ["@babel/preset-env", "@babel/preset-modules"],
        ["@babel/preset-react", {runtime : "automatic"}],
    ]
}