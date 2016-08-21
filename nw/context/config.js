
// show the dev tools by default
require('nw.gui').Window.get().showDevTools().resizeTo(800, 1000);

$(function () {
	// programatically
	var Mocha = require('mocha'),
		fs = require('fs'),
		path = require('path');

	// First, you need to instantiate a Mocha instance.
	var mocha = new Mocha;
	// mocha.reporter('spec');
	mocha.reporter('loca');
	// pass the browser context
	mocha.suite.emit('pre-require', window, null, mocha);

	// Then, you need to use the method "addFile" on the mocha
	// object for each file.

	// Here is an example:
	fs.readdirSync('test').filter(function (file) {
		// Only keep the .js files
		return file.substr(-3) === '.js';

	}).forEach(function (file) {
		// Use the method "addFile" to add the file to mocha
		// mocha.addFile(
		// 	path.join('test', file)
		// );
		$('head').append('<script src="'+path.join('test', file)+'"></script>');
	});

	// Now, you can run the tests.
	mocha.run(function (failures) {
		process.on('exit', function () {
			process.exit(failures);
		});
	});
});
