const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser());
app.use(express.static('public'));

app.get('/reviews/:productId', (req, res) => {
  res.redirect('http://localhost:3000' + req.path);
  // console.log(req.url);
  // res.send('hello');
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});
