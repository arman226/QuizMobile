const aliases = require('./resolve-alias');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.js', '.ios.js', '.android.js', '.native.js'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          constants: './src/constants',
          // '@hoc': './app/hoc',
          // '@hooks': './app/hooks',
          modules: './src/modules',
          navigations: './src/navigations',
          screens: './src/screens',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ],
  // Remove console.log codes in building production mode
  // This will increase performance speed in production code
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
