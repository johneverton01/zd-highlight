const { resolve } = require('path');
const { readdirSync, lstatSync } = require('fs');

const PACKAGE_DIR = 'packages/'; // this could be replaced utilizing the globs in package.json's "workpackges" or from the lerna.json config

// get files in packages
const noExtraneousOverrides = readdirSync(resolve(__dirname, PACKAGE_DIR))
  // filter for non-hidden dirs to get a list of packages
  .filter(
    entry =>
      entry.substr(0, 1) !== '.' && lstatSync(resolve(__dirname, PACKAGE_DIR, entry)).isDirectory(),
  )
  // map to override rules pointing to local and root package.json for rule
  .map(entry => ({
    files: [`${PACKAGE_DIR}${entry}/**/*`],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
          packageDir: [__dirname, resolve(__dirname, PACKAGE_DIR, entry)],
        },
      ],
    },
  }));

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  ignorePatterns: ["node_modules/", "**/coverage/*", "**/dist/*", "**/types/*", "**/__mocks__/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json"
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "airbnb-typescript/base"
  ],
  overrides: [...noExtraneousOverrides],
  rules: {
    // maximum line length
    'max-len': ['error', { code: 125, tabWidth: 2 }],
    // disallow console.log, allow console.warn and console.error
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // allow functions to be used before their definition
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    // don't check classes are exported using default when there is only one export
    'import/prefer-default-export': 'off',
    // allow changes in properties of parameters
    'no-param-reassign': ['error', { props: false }],
    // allow circular import references,
    'import/no-cycle': 'off',
    // allow class methos without this
    'class-methods-use-this': 'off',
    // ignore error of peer dependencing the vue-router
    'import/no-unresolved': ['error', { ignore: ['vue-router', 'vue'] }],
    // ignore enforcement of consistent linebreak style
    'linebreak-style': 0,
  }
}