
var should = chai.should();
mocha.reporter('webkit');
mocha.setup({
    ui: 'bdd',
    globals: ['']
});

describe('test suite', function () {
    it('should pass', function (done) {
        setTimeout(function () {
            done();
        }, 100);
    });
    it('should fail', function (done) {
        'a'.should.equal('b');
        done();
    });
    it.skip('should skip', function (done) {
        done();
    });
    describe('inner', function () {
        it('should pass', function (done) {
            setTimeout(function () {
            done();
        }, 50);
        });
        it('should fail', function (done) {
            done(new Error('Something bad happened!'));
        });
        it.skip('should skip', function (done) {
            done();
        });
    });
});

mocha.run();
