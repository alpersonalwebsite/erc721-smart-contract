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

app.post('/star', async function(req, res) {
  if (req.get('host') !== '127.0.0.1:3000') {
    res.send({ status: 'domain error' });
    return;
  }

  // Replace maybe with PhantomJS and some npm package
  // And check: https://www.npmjs.com/package/express-session
  // We dont want to store all the images
  // User closes tab, closes session and deletes image
  const skyUrl =
    'http://server1.sky-map.org/skywindow?ra=1%2003%2033.35&de=-49%2031%2038.1&zoom=10&show_box=1';

  const imagePath = 'images/' + req.body.tokenId + '.png';
  nodeServerSS.fromURL(
    skyUrl,
    'public/' + imagePath,
    { clip: { x: 30, y: 30, width: 600, height: 400 } },
    await function() {
      // done!
      res.send({ imagePath });
    }
  );

  //res.send({ status: 'great!' });
});

app.use(serveStatic('public', { index: ['index.html'] }));

app.listen(3000);
