
var $ = window.$;

describe('test suite', function () {
	it('pass', function (done) {
		'2'.should.equal('2');
		console.log($('body'));
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
