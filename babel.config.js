module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "@components": "./src/components",
            "@api": "./src/api",
            "@utils": "./src/utils",
            "@models": "./src/models",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
