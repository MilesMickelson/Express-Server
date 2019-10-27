const express = require('express');
const morgan = require('morgan');
const data = require('./data');

const app = express();
var requestCount = 0;

app.use(morgan('dev'));

app.use(function(req, res, next){
  requestCount++
  console.log('request number: '+ requestCount);
  next();
});

app.get('/', function( req, res) {
  res.status(200).send('Hello World');
});

app.get('/data', function (req, res) {
  res.status(200).send(data);
})

app.get('*', function( req, res){
  res.status(404).send('Sorry, no page found');
});

module.exports = app;
