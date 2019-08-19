const candidatController = require('./controllers/candidatController.js');
const offerController = require('./controllers/offerController.js');

function init(app) {
  initCandidatController(app);
  initOfferController(app);
  initEntrepriseController(app);
  initCandidatOfferController(app);
}

function initCandidatController(app) {
  app.get('/candidat/', candidatController.getAllCandidats);
}

function initOfferController(app) {
  app.get('/offer/', offerController.getAllOffers);
}

function initEntrepriseController(app) {

}

function initCandidatOfferController(app) {

}

module.exports.init = init;
