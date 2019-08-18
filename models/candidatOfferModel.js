const db = require('../mysql.js');
const Sequelize = require('sequelize');

// IF sequelize
const candidatOffer = db.define('candidatsOffers', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_candidat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_offer: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    candidat_status: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    suivi_candidature: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    pourcentage_matching: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    rh_validation: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  module.exports = candidatOffer;
