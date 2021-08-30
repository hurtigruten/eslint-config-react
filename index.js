module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  ignorePatterns: ['node_modules'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:react/recommended',
    'prettier'
  ],
  rules: {
    'no-undef': 0, // ts takes better care of that
    '@typescript-eslint/no-inferrable-types': 0, // we want explicit typing
    'no-shadow': 0, // wouldnt let us use names like 'value' in functions
    'no-unused-vars': 0, // ts takes better care of that
    '@typescript-eslint/no-unsafe-assignment': 1,
    'operator-linebreak': 0, // ignored because of prettier
    'linebreak-style': 0, // ignore line endings
    'max-classes-per-file': 0,
    'no-void': 0,
    'no-undef-init': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        bundledDependencies: true
      }
    ],
    'import/order': [
      2,
      {
        'newlines-between': 'always'
      }
    ],
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-function-return-type': 0, //  ["warn", { "allowTypedFunctionExpressions": true }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/prefer-default-export': 0,
    'jsx-no-lambda': 0,
    'no-console': 0,
    'interface-name': 0,
    'no-multiple-empty-lines': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
