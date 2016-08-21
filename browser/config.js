
var should = chai.should();
mocha.suite._timeout = 1000 * 60 * 60;
mocha.setup({
	ui: 'bdd',
	bail: true,
	globals: ['']
});

var page = {
	onload: null,
	load: function (cb) {
		page.onload = cb;
	}
};


var iframe = {jquery:null, window:null, self:null};
var $ = null, win = null


jQuery(function () {
	jQuery('body')
		.append('<iframe id="iframe" src="http://code"></iframe>');

	jQuery('#iframe').on('load', function (e) {
		iframe = {
			jquery: this.contentWindow.$,
			window: this.contentWindow,
			self: this
		};
		// shortcuts
		$ = iframe.jquery;
		win = iframe.window;

		page.onload();
		// setTimeout(function () {page.onload();}, 3000);
	});

	// wait until the iframe is loaded
	page.load(function () {
		mocha.run();
	});
});

describe('..', function () {
	
	// test suite
	tests.one();
	tests.two();
});
