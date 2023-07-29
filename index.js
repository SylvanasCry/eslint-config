module.exports = {
  'root': true,
  'overrides': [
    {
      'files': [
        '*.ts',
        '*.tsx'
      ],
      'parserOptions': {
        'project': [
          './tsconfig.json'
        ]
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    'simple-import-sort',
    'import'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  'rules': {
    'no-unused-vars': 'off',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/semi': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          [
            '^\\u0000',
            '^@?\\w',
            '^[^.]',
            '^\\.'
          ]
        ]
      }
    ],
    'array-callback-return': 'warn',
    'block-spacing': 'warn',
    'camelcase': 'error',
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline'
      }
    ],
    'comma-spacing': [
      'warn',
      {
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      'warn',
      'last'
    ],
    'consistent-return': 'error',
    'curly': [
      'error',
      'all'
    ],
    'default-case': 'warn',
    'dot-location': [
      'error',
      'property'
    ],
    'eol-last': 'warn',
    'eqeqeq': 'error',
    'func-call-spacing': [
      'error',
      'never'
    ],
    'generator-star-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1
      }
    ],
    'keyword-spacing': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'max-classes-per-file': 'error',
    'max-len': [
      'warn',
      {
        'code': 120
      }
    ],
    'no-alert': 'warn',
    'no-compare-neg-zero': 'warn',
    'no-console': 'off',
    'no-else-return': 'warn',
    'no-empty': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-floating-decimal': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1
      }
    ],
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-prototype-builtins': 'off',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': [
      'error',
      {
        'allowFunctionParams': false,
        'enforceInMethodNames': true
      }
    ],
    'no-unmodified-loop-condition': 'error',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'semi': [
      'error',
      'always'
    ],
    'space-before-function-paren': 'off',
    'space-before-blocks': 'warn',
    'spaced-comment': 'warn',
    'space-in-parens': [
      'error',
      'never'
    ],
    'switch-colon-spacing': 'error'
  }
};
