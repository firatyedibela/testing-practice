export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'], // Removed '.js'
  globals: {
    'babel-jest': {
      useESM: true,
    },
  },
};
