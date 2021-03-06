/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/

// https://eslint.org/docs/rules/
const coreESLintRules = {
  'accessor-pairs': 'error',
  'array-bracket-spacing': 'error',
  'array-callback-return': 'error',
  'array-element-newline': ['error', 'consistent'],
  'arrow-body-style': 'error',
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': 'error',
  'brace-style': 'error',
  'block-scoped-var': 'error',
  'block-spacing': 'error',
  'class-methods-use-this': 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': 'error',
  'comma-style': 'error',
  complexity: ['error', 12],
  'computed-property-spacing': 'error',
  'consistent-return': 'error',
  curly: 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': 'error',
  'eol-last': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-call-spacing': 'error',
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-denylist': [
    'error',
    'any',
    'Number',
    'number',
    'String',
    'string',
    'Boolean',
    'boolean',
    'Undefined',
    'undefined',
  ],
  'id-length': [
    'error',
    {
      min: 1,
      max: 32,
    },
  ],
  'jsx-quotes': 'error',
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'linebreak-style': 'error',
  'lines-between-class-members': 'error',
  'max-classes-per-file': ['error', 1],
  'max-depth': 'error',
  'max-lines': 'error', // default file length 300
  'max-nested-callbacks': ['error', 3], // default max is 10 callbacks
  'max-params': ['error', 4],
  'max-statements-per-line': 'error',
  'multiline-comment-style': 'error',
  'no-confusing-arrow': 'error',
  'no-duplicate-imports': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'new-parens': 'error',
  'newline-per-chained-call': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-console': 'error',
  'no-constructor-return': 'error',
  'no-div-regex': 'error',
  'no-empty-function': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-mixed-operators': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-plusplus': 'error',
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': ['error', { hoist: 'all' }],
  'no-tabs': 'error',
  'no-throw-literal': 'error',
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
  'no-underscore-dangle': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': 'error',
  'no-unused-expressions': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'no-useless-return': 'error',
  'no-whitespace-before-property': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'error',
  'require-await': 'error',
  'vars-on-top': 'error',
  radix: 'error',
  'require-await': 'error',
  'object-curly-spacing': ['error', 'always'],
  'object-shorthand': 'error',
  'padded-blocks': ['error', 'never'],
  'prefer-destructuring': ['error', { array: false, object: true }],
  'prefer-template': 'error',
  quotes: ['error', 'single', { avoidEscape: true }],
  'rest-spread-spacing': 'error',
  semi: 'error',
  'semi-spacing': 'error',
  'semi-style': 'error',
  'sort-keys': 'error',
  'space-before-blocks': 'error',
  'space-in-parens': 'error',
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': 'error',
  'switch-colon-spacing': 'error',
  'template-curly-spacing': 'error',
};

/**
 * A lot of import rules are already covered by the Typescript compiler, so we don't use any
 * of the eslint-plugin-import presets. These rules are helpful additions.
 */
const importRules = {
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-commonjs': 'error',
  'import/no-cycle': 'error',
  'import/no-duplicates': 'error', // prefer over ESLint's no-duplicate-imports rule?
  'import/no-dynamic-require': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-default': 'error',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': [
    'warn',
    {
      allow: [
        '**/*.scss',
        '**/*.css',
        'jest', // can probably remove because an explicit import is not required in Jest context
        '@testing-library/jest-dom/extend-expect',
      ],
    },
  ],
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': 'error', // preferred over ESLint's sorted-imports rule
};

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-import',
    'eslint-plugin-react',
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'react-hooks',
  ],
  rules: {
    ...coreESLintRules,
    ...importRules,
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message:
              'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // enforce no I-prefixed interfaces
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'prefer-arrow/prefer-arrow-functions': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-key': 'error',
    // inline arrow functions are not very expensive, and React.useCallback can be
    // if it's overused https://kentcdodds.com/blog/usememo-and-usecallback
    'react/jsx-no-bind': 'off',
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        lintFile: './tslint.json',
        rules: {
          'jsx-no-string-ref': true,
          'jsx-self-close': true,
          'object-literal-sort-keys': true,
          'react-a11y-anchors': true,
          'react-a11y-aria-unsupported-elements': true,
          'react-a11y-event-has-role': true,
          'react-a11y-image-button-has-alt': true,
          'react-a11y-img-has-alt': true,
          'react-a11y-lang': true,
          'react-a11y-meta': true,
          'react-a11y-no-onchange': true,
          'react-a11y-props': true,
          'react-a11y-proptypes': true,
          'react-a11y-required': true,
          'react-a11y-role': true,
          'react-a11y-role-supports-aria-props': true,
          'react-a11y-tabindex-no-positive': true,
          'react-a11y-titles': true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
