// We use a custom Jest transform to provide Babel config because in Gatsby v2
// a .babelrc overrides the Gatsby default Babel config, meaning we have to keep
// track of changes to that and feed them back into the custom one.
const JEST_BABEL_CONFIG = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

module.exports = require('babel-jest').createTransformer(JEST_BABEL_CONFIG);
