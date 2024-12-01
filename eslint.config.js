// @ts-check
import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import ts from 'typescript-eslint'

export default ts.config(
    js.configs.recommended,
    ts.configs.recommended,
    perfectionist.configs['recommended-natural'],
    {
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    fixStyle: 'inline-type-imports',
                    prefer: 'type-imports',
                },
            ],
        },
    },
)
