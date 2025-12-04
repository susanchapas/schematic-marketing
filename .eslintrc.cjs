module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['jsx-a11y', 'react-hooks'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['Label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['Input', 'Select', 'Textarea'],
        depth: 3,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
