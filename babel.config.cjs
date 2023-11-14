const babelConfig = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }], 
  ],
};

module.exports = babelConfig;
