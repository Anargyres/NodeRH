const db = require('../mysql.js');
const Sequelize = require('sequelize');

// IF sequelize
const financial = db.define('entreprises', {
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
      type: Sequelize.DOUBLe,
      allowNull: true,
    },
    tarif_recrutement: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
  });

  module.exports = financial;
