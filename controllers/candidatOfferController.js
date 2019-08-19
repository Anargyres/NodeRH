const candidatOfferModel = require('../models/candidatOfferModel.js');

module.exports.getAllCandidatsOffers = (req, res) => {
    candidatOfferModel.findAll({}).then((candidatsOffers) => {
          res.json({candidatsOffers: candidatsOffers});
      });
}
