const db = require('../mysql.js');
const Sequelize = require('sequelize');

// IF sequelize
const candidat = db.define('candidats', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: true,
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
    first_competence: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    second_competence: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    third_competence: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fourth_competence: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fifth_competence: {
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

  module.exports = candidat;
