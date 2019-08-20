const db = require('../mysql.js');
const Sequelize = require('sequelize');

// IF sequelize
const financial = db.define('financials', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_entreprise: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tarif_abonnement_annuel: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    tarif_offre: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    tarif_recrutement: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    paiement_status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    id_offer: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  module.exports = financial;
