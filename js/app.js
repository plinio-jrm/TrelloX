requirejs.config({
	baseUrl: 'lib',
	paths: {
		app: '../js'
	}
});

requirejs(['app/core']);
console.log('teste app.js');