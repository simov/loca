
tests.one = function () {

describe('one', function () {
	it('do something clever', function (done) {

		win.location.href = 'http://code/css';
			 
		page.load(function () {
			$('h1').text().should.equal('Index of /css');
			console.log($('body'));
			done();
		});
	});
});

}
