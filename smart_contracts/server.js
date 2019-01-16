const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const nodeServerSS = require('node-server-screenshot');

const app = express();

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

  // Configuration api http://server7.wikisky.org/api?
  let ra = req.body.starInfo.ra.replace(/ /g, '%20');
  let dec = req.body.starInfo.dec.replace(/ /g, '%20');

  // Example: 'http://server1.sky-map.org/skywindow?ra=1%2003%2033.35&de=-49%2031%2038.1&zoom=10&show_box=1'
  const skyUrl =
    'http://server1.sky-map.org/skywindow?ra=' +
    ra +
    '&de=' +
    dec +
    '&zoom=10&show_box=1';

  const imagePath = 'images/' + req.body.starInfo.tokenId + '.png';
  nodeServerSS.fromURL(
    skyUrl,
    'public/' + imagePath,
    {
      clip: {
        x: 30,
        y: 30,
        width: req.body.userInfo.windoWidth,
        height: req.body.userInfo.windowHeight
      }
    },
    await function() {
      // done!
      res.send({ imagePath });
    }
  );

  //res.send({ status: 'great!' });
});

app.use(serveStatic('public', { index: ['index.html'] }));

app.listen(3000);
