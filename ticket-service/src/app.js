const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
// comment
// hello
// this is change
const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;

