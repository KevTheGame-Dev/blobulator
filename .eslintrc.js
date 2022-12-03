module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsdoc/require-jsdoc': [2, {
      require: {
        FunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        MethodDefinition: true
      }
    }],
    'jsdoc/require-description': 2,
    'jsdoc/newline-after-description': 2,
    'jsdoc/tag-lines': 0,
    'jsdoc/require-returns': 2,
    'jsdoc/require-throws': 2,
    'jsdoc/require-yields': 2,
    'jsdoc/require-param': 2,
    'jsdoc/check-alignment': 2,

    'jsdoc/multiline-blocks': 2,
    'jsdoc/empty-tags': 1,
    'jsdoc/no-multi-asterisks': [1, { allowWhitespace: true }],

    'jsdoc/require-returns-description': 0,
    'jsdoc/require-returns-type': 2,
    'jsdoc/require-returns-check': 2,

    'jsdoc/check-tag-names': 2,
    'jsdoc/check-values': 0,
    'jsdoc/check-types': 2,
    'jsdoc/valid-types': 2,

    'jsdoc/require-param-type': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-description': 0,
    'jsdoc/check-param-names': 2,

    'jsdoc/require-property': 0,
    'jsdoc/require-property-description': 0,
    'jsdoc/require-property-type': 2,
    'jsdoc/require-property-name': 2
  },
  plugins: [
    'jsdoc'
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'returns',
        augments: 'extends'
      },
      preferredTypes: {
        string: 'String',
        object: 'Object',
        any: 'Any',
        boolean: 'Boolean',
        number: 'Number',
        generator: 'Generator'
      }
    }
  }
};
