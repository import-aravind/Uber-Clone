module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName:"@env",
          path:".env",
          "blacklist": null,
          "whitelist": null,
          "safe": true,
          "allowUndefined": true
        }
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            'tests/*': './__tests__',
            src: './src',
            '@redux': './src/redux/',
            '@components': './src/components/',
            '@containers': './src/containers/',
            '@routes': './src/routes/',
            '@screens': './src/screens/',
            '@share': './src/share/',
            '@configs': './src/configs/',
          },
        },
      ],
    ],
  };
  api.cache(false);
  
};
