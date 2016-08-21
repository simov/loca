
# loca

![Loca][4]


## browser

### [live demo][3]

### example

```js
var should = chai.should();
// mocha.reporter('webkit'); // in case this got merged in
mocha.reporter(mocha.WebKit);

mocha.setup({
  ui: 'bdd',
  globals: ['']
});

describe('test suite', function () {
  it('...', function () {});
});

mocha.run();

```


## node-webkit

### run

```bash
$ cd reporter/nw/
$ nw .
```

### example

```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <title>Node WebKit Mocha Reporter</title>

  <script type="text/javascript" charset="utf-8">
    // show the dev tools by default
    require('nw.gui').Window.get().showDevTools().resizeTo(800, 1000);

    // programatically
    var should = require('should');
    var Mocha = require('mocha'),
      fs = require('fs'),
      path = require('path');

    // First, you need to instantiate a Mocha instance.
    var mocha = new Mocha;
    // mocha.reporter('webkit'); // in case this got merged in
    mocha.reporter(require('loca'));

    // Then, you need to use the method "addFile" on the mocha
    // object for each file.

    // Here is an example:
    fs.readdirSync('test').filter(function (file) {
      // Only keep the .js files
      return file.substr(-3) === '.js';

    }).forEach(function (file) {
      // Use the method "addFile" to add the file to mocha
      mocha.addFile(
        path.join('test', file)
      );
    });

    // Now, you can run the tests.
    mocha.run(function (failures) {
      process.on('exit', function () {
        process.exit(failures);
      });
    });
  </script>
</head>
<body>
</body>
</html>
```

## more info

- [mocha original issue][2]
- [mocha pull request][1]

## license

MIT


  [1]: https://github.com/visionmedia/mocha/pull/1246
  [2]: https://github.com/visionmedia/mocha/issues/960#issuecomment-46750530
  [3]: http://simov.github.io/loca/reporter/browser/
  [4]: http://i.imgur.com/dFvQRtE.png
