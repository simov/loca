
tests.two = function () {

describe('two', function () {
    it('do something clever', function (done) {

        $('a[href="http://wallbase.cc/site/about"]')[0].click();

        page.load(function () {
            $('.main .line1').text().should.equal('About wallbase');
            done();
        });
    });
});

}
