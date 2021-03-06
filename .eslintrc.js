/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		node: true,
		es6: true,
		es2017: true,
		es2020: true,
		es2021: true,
	},
	globals: {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		'__APP_VERSION__': true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaVersion': 2020,
		'sourceType': 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
	],
	rules: {
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-this-alias': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-unused-vars': ['error', {
			'vars': 'all',
			'args': 'after-used',
			'ignoreRestSiblings': false,
		}],
		'semi': 0,
		'@typescript-eslint/semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
		'no-useless-escape': 2,
		'handle-callback-err': 2,
		'no-fallthrough': 2,
		'no-new-require': 2,
		'max-len': [2, 240],
		'camelcase': 0,
		'require-jsdoc': 0,
		'valid-jsdoc': 0,
		'prefer-spread': 1,
		'prefer-rest-params': 1,
		'linebreak-style': 0,
		'quote-props':[0, 'as-needed'],
		'no-prototype-builtins': 0,
		'@typescript-eslint/no-useless-constructor': ['error'],
		'@typescript-eslint/explicit-member-accessibility': ['error'],
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/ban-types': ['error', {
			'types': {
				'Function': false,
			},
			'extendDefaults' : true,
		}],
		'@typescript-eslint/naming-convention': ['error',
			{ selector: 'default', format: ['PascalCase', 'camelCase', 'snake_case', 'UPPER_CASE'] },
			{ selector: 'function', format: ['PascalCase', 'camelCase'], leadingUnderscore: 'forbid' },
			{ selector: 'variable', format: ['snake_case', 'camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
			{ selector: 'memberLike', format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'], leadingUnderscore: 'allow' },
		],
		'no-trailing-spaces': ['error', {
			ignoreComments: true,
			skipBlankLines: false,
		}],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'padded-blocks': 0,
		'indent': ['error', 'tab', {
			SwitchCase: 1,
		}],
		'no-tabs': 0,
		'no-useless-return': 0,
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always',
			functions: 'always-multiline',
		}],
		'quotes': ['error', 'single'],
		'keyword-spacing': ['error', {
			overrides: {
				catch: {
					before: true,
					after: false,
				},
			},
		}],
		'array-bracket-spacing': 0,
		'generator-star-spacing': 0,
		'one-var': 0,
		'no-mixed-operators': 0,
		'eol-last': ['error', 'always'],
	},
};
