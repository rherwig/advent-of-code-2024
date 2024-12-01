// @ts-check
import js from '@eslint/js'
import ts from 'typescript-eslint'

export default ts.config(js.configs.recommended, ts.configs.recommended, {
    rules: {
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'inline-type-imports',
                prefer: 'type-imports',
            },
        ],
        'sort-imports': [
            'error',
            {
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
    },
})
