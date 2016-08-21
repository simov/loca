
describe('test suite', function () {
	it('pass', function (done) {
		'2'.should.equal('2');
		// doesn't have access to the browser context
		// console.log(window.location);
		done();
	});
	it('error', function (done) {
		'3'.should.equal('2');
		done();
	});
	it.skip('skip', function (done) {
		done();
	});
});
