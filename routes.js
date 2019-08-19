const candidatController = require('./controllers/candidatController.js');
const offerController = require('./controllers/offerController.js');
const entrepriseController = require('./controllers/entrepriseController.js');
const candidatOfferController = require('./controllers/candidatOfferController.js');
const financialController = require('./controllers/financialController.js');

function init(app) {
  initCandidatController(app);
  initOfferController(app);
  initEntrepriseController(app);
  initCandidatOfferController(app);
  initFinancialController(app);
}

function initCandidatController(app) {
  app.get('/candidat/', candidatController.getAllCandidats);
}

function initOfferController(app) {
  app.get('/offer/', offerController.getAllOffers);
}

function initEntrepriseController(app) {
  app.get('/entreprise/', entrepriseController.getAllEntreprises);
}

function initCandidatOfferController(app) {
  app.get('/candidatOffer/', candidatOfferController.getAllCandidatsOffers);
}

function initFinancialController(app) {
  app.get('/financial/', financialController.getAllFinancials);
}

module.exports.init = init;
