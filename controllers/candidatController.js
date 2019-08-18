const candidatModel = require('../models/candidatModel.js');
const entrepriseModel = require('../models/entrepriseModel.js');
const offerModel = require('../models/offerModel.js');
const candidatOfferModel = require('../models/candidatOfferModel.js');

module.exports.getAllCandidats = (req, res) => {
    candidatModel.findAll({}).then((candidats) => {
          res.json({candidats: candidats});
      });
}
