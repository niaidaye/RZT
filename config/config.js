const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'rzt'
    },
    port: process.env.PORT || 3030,
  },

  test: {
    root: rootPath,
    app: {
      name: 'rzt'
    },
    port: process.env.PORT || 3030,
  },

  production: {
    root: rootPath,
    app: {
      name: 'rzt'
    },
    port: process.env.PORT || 3000,
  }
};

module.exports = config[env];
