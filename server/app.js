const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// const allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//
//   // intercept OPTIONS method
//   if ('OPTIONS' == req.method) {
//     res.sendStatus(200);
//   }
//   else {
//     next();
//   }
// };
//
// app.use(allowCrossDomain);
app.use('/api', require('./routes/api'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.status(err.status || 500);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
