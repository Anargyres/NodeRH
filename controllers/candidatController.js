const candidatModel = require('../models/candidatModel.js');

module.exports.getAllCandidats = (req, res) => {
    candidatModel.findAll({}).then((candidats) => {
          res.json({candidats: candidats});
      });
}
