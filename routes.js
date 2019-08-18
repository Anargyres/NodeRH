const candidatController = require('./controllers/candidatController.js');

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

}

function initEntrepriseController(app) {

}

function initCandidatOfferController(app) {

}

module.exports.init = init;
