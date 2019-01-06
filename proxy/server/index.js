const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;
const domain = 'http://localhost:';

app.use(bodyParser());
app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  let url = `http://localhost:3002/api/products?id=${req.query.id}`;
  request(url, (err, response) => {
    res.send(response.clone());
  });
});

app.get('/reviews/:productId', (req, res) => {
  request(`http://ec2-54-153-13-213.us-west-1.compute.amazonaws.com:3003/reviews/${req.params.productId}`, (err, response) => {
    res.send(response.body);
  });
});

app.get('/api/related/:productId', (req, res) => {
  request(`http://localhost:3001/api/related/${req.params.productId}`, (err, response) => {
    res.send(response.body);
  });
});

app.get('/api/items/:productId', (req, res) => {
  request(`http://localhost:3001/api/items/${req.params.productId}`, (err, response) => {
    res.send(response.body);
  });
});

app.get('/api/frequent/:productId', (req, res) => {
  request(`http://localhost:3001/api/frequent/${req.params.productId}`, (err, response) => {
    res.send(response.body);
  });
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});
