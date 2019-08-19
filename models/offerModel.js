const db = require('../mysql.js');
const Sequelize = require('sequelize');

// IF sequelize
const offer = db.define('offers', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    entreprise: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    openning_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  module.exports = offer;
