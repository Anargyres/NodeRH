const offerModel = require('../models/offerModel.js');

module.exports.getAllOffers = (req, res) => {
    offerModel.findAll({}).then((offers) => {
          res.json({offers: offers});
      });
}
