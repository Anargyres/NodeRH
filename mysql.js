const sequelize = require('sequelize');

const dbConfig = {
    "database": "rh_project",
    "username": "root",
    "password": "root",
    "options": {
      "host": "localhost",
      "port": "8889",
      "dialect": "mysql",
      "logging": true,
      "define": {
          "timestamps": false
      }
    }
}

module.exports = new sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.options);
