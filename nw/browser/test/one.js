
tests.one = function () {

describe('one', function () {
    it('do something clever', function (done) {

        $('#logo a').attr('href').should.equal('http://wallbase.cc/');
        done();
    });
});

}
