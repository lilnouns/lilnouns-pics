import prettier from 'eslint-config-prettier'
import lingui from 'eslint-plugin-lingui'
import next from 'eslint-plugin-next'
import nextOnPages from 'eslint-plugin-next-on-pages'
import tailwindcss from 'eslint-plugin-tailwindcss'
import unicorn from 'eslint-plugin-unicorn'

export default {
  root: true,
  plugins: {
    next,
    tailwindcss,
    unicorn,
    lingui,
    nextOnPages,
  },
  extends: [
    next.configs['core-web-vitals'],
    tailwindcss.configs.recommended,
    unicorn.configs.recommended,
    nextOnPages.configs.recommended,
    prettier,
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
  },
  overrides: [
    // Include any file-specific configurations here
  ],
}
