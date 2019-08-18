const db = require('../mysql.js');
const Sequelize = require('sequelize');

// IF sequelize
const entreprise = db.define('entreprises', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    postal_code: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    mobile_tel: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    user: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  module.exports = entreprise;
