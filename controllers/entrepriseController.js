const entrepriseModel = require('../models/entrepriseModel.js');

module.exports.getAllEntreprises = (req, res) => {
    entrepriseModel.findAll({}).then((entreprises) => {
          res.json({entreprises: entreprises});
      });
}
