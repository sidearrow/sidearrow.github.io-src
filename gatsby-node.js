const tsconfig = require('./tsconfig.json');

require('ts-node').register(tsconfig);

exports.createPages = require('./src/gatsby-node').createPages;
