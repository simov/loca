
tests.two = function () {

describe('two', function () {
	it('do something clever', function (done) {

		win.location.href = 'http://code/js';
			 
		page.load(function () {
			$('h1').text().should.equal('Index of /js');
			console.log($('body'));
			done();
		});
	});
});

}
