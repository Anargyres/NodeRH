const express = require('express');
const sequelize = require('sequelize');
const routes = require('./routes.js');

const PORT = 8080;

const app = express();

routes.init(app);

const server = app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
