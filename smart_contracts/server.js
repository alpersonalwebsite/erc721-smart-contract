var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var nodeServerSS = require('node-server-screenshot');

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.post('/star', function(req, res) {
  if (req.get('host') !== '127.0.0.1:3000') {
    res.send({ status: 'domain error' });
    return;
  }

  // Replace maybe with PhantomJS and some npm package
  // And check: https://www.npmjs.com/package/express-session
  // We dont want to store all the images
  // User closes tab, closes session and deletes image
  var skyUrl =
    'http://server1.sky-map.org/skywindow?ra=1%2003%2033.35&de=-49%2031%2038.1&zoom=10&show_box=1';
  nodeServerSS.fromURL(
    skyUrl,
    'public/images/' + req.body.tokenId + '.png',
    function() {
      // done!
    }
  );

  res.send({ status: 'great!' });
});

app.use(serveStatic('public', { index: ['index.html'] }));

app.listen(3000);
