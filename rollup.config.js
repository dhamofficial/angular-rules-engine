export default {
	entry: 'dist/index.js', // target file for rollup to process;
	dest: 'dist/bundles/angular-rules-engine.umd.js', // location where processed scripts are saved
	sourceMap: true, // option adds a sourcemap inside the generated file
	format: 'umd', // 
	moduleName: 'angularRulesEngine', //use to indicate the UMD module name, "what, what!"
	external: [ 'typescript-dotnet-commonjs/System/Compare' ],
	globals: {
		'typescript-dotnet-commonjs': 'typescript-dotnet-commonjs',
		'typescript-dotnet-commonjs/System/Compare': 'typescript-dotnet-commonjs/System/prototype'
	}
}
