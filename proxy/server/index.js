const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');
const port = 3000;

app.use(bodyParser());
app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  axios.get(`http://54.83.144.162:3002/api/products?id=${req.query.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('ERROR GETTING PRODUCT', err);
    });
});

app.get('/reviews/:productId', (req, res) => {
  axios.get(`http://ec2-54-153-13-213.us-west-1.compute.amazonaws.com:3003/reviews/${req.params.productId}${'?reviewType=' + req.query.reviewType}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('ERROR GETTING REVIEWS', err);
    });
});

app.get('/api/items', (req, res) => {
  axios.get(`http://ec2-54-183-132-22.us-west-1.compute.amazonaws.com:8888/api/items`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('ERROR GETTING ALL RELATED PRODUCTS', err);
    });
});

app.get('/api/items/:itemId', (req, res) => {
  axios.get(`http://ec2-54-183-132-22.us-west-1.compute.amazonaws.com:8888/api/items/${req.params.itemId}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('ERROR GETTING ALL ITEMS', err);
    });
});

app.get('/api/related/:itemId', (req, res) => {
  axios.get(`http://ec2-54-183-132-22.us-west-1.compute.amazonaws.com:8888/api/related/${req.params.itemId}`)
    .then(response => {
      console.log(req.url);
      res.send(response.data);
    })
    .catch(err => {
      console.log('ERROR GETTING RELATED PRODUCTS', err);
    });
});

app.get('/api/frequent/:itemId', (req, res) => {
  axios.get(`http://ec2-54-183-132-22.us-west-1.compute.amazonaws.com:8888/api/frequent/${req.params.itemId}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('ERROR GETTING FREQUENT ITEMS', err);
    });
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log('Now listening on port ' + port);
});
