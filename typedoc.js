module.exports = {
  name: '@newspaper/server',
  inputFiles: ['./packages'],
  mode: 'modules',
  out: 'docs',
  json: 'docs/docs.json',
  // This is done to stop typedoc (ts, really) from complaining about ../api
  ignoreCompilerErrors: true,
  hideGenerator: true,
  // This is used by @strictsoftware/typedoc-plugin-monorepo
  'external-modulemap': '.*packages/(@namespace/[^/]+)/.*',
};
