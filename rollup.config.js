export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/angular-rules-engine.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'angular-rules-engine',
	globals: {
		'typescript-dotnet-commonjs': 'typescript-dotnet-umd'
	}
}
