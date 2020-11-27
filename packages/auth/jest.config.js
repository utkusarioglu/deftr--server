'use strict';
const baseConfig = require('../../jest.config.all');

const packageName = require('./package.json')
  .name.split('@deftr/server-')
  .pop();

module.exports = {
  ...baseConfig,
  roots: [`<rootDir>/packages/${packageName}`],
  testRegex: `(packages/${packageName}/.*/__tests__/.*|\\.(test|spec))\\.tsx?$`,
  name: packageName,
  displayName: packageName,
  rootDir: '../..',
  modulePaths: [`<rootDir>/packages/${packageName}/src/`],
};
