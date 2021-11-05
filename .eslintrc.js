module.exports = {
	root: true,
	env: {
	node: true,
	},
	extends: [
		'plugin:vue/recomended',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
  },
  rules: {
		'arrow-parens': ['error', 'as-needed', {RequireForBlockBody: true }],
		'import/no-extraneous-dependencies' : 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 'off',
		'prefer-destructuring': ['error', {
			'object': true,
			'array': false,
		}],
		'vue/html-ident':['error', 'tab'],
		'vue/max-attributes-per-line': ['error', {
			'singleline':3,
			'multiline':{
				'max': 1,
				'allowFirstLine': false
			}
		}],
		'vue/script-ident': ['error', 'tab', {
			'baseIncident': 1,
			'switchCase': 1
		}],
		'vue/singleline-html-element-content-newline': 'off',
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				ident: 'off',
			}
		}
	]
};
