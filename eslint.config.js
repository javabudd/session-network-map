import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
	{
		files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
		ignores: ['dist', '.eslintrc.cjs', 'amplify/graphql'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: typescriptParser,
			globals: {
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				console: 'readonly',
				module: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': typescriptPlugin,
			'react-hooks': reactHooksPlugin,
			'react-refresh': reactRefreshPlugin
		},
		rules: {
			// TypeScript Recommendations
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', {'argsIgnorePattern': '^_'}],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/consistent-type-imports': 'warn',

			// React Recommendations
			'react-hooks/rules-of-hooks': 'error', // Enforce the rules of Hooks
			'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
			'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],

			// General Recommendations
			'no-console': 'warn',
			'no-debugger': 'warn',
			'eqeqeq': ['error', 'always'],
			'curly': ['error', 'all'],
			'semi': ['error', 'always'],
			'quotes': ['error', 'single', {'avoidEscape': true}],
			'indent': ['error', 'tab'],
			'comma-dangle': ['error', 'never']
		}
	},

	// Node.js-specific configuration for config files
	{
		files: ['.eslintrc.{js,cjs}'],
		languageOptions: {
			sourceType: 'module',
			globals: {
				require: 'readonly',
				__dirname: 'readonly'
			}
		}
	}
];
