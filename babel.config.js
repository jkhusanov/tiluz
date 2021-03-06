module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@store': './app/store',
            '@actions': './app/actions',
            '@components': './app/components',
            '@utils': './app/utils',
            '@constants': './app/constants',
          },
        },
      ],
    ],
  };
};
