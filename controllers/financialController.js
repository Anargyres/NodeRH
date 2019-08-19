const financialModel = require('../models/financialModel.js');

module.exports.getAllFinancials = (req, res) => {
    financialModel.findAll({}).then((financials) => {
          res.json({financials: financials});
      });
}
