const express = require('express');
const router = express.Router();

//import kontrolera
const MatchResultsController = require('../controllers/match-results');

//import middleware
const checkAuth = require('../middleware/check-auth');

//lista wszystkich rozgrywek
router.get('/', MatchResultsController.matchResults_get_all);

//dodawanie nowego wyniku
//router.post('/', checkAuth, MatchResultsController.matchResults_new);
router.post('/', MatchResultsController.matchResults_new);

//szczegóły rozgrywki o nr
router.get('/:matchResultId', MatchResultsController.matchResults_get_by_id);

//zmiana rozgrywki o nr
//router.patch('/:matchResultId', checkAuth, MatchResultsController.matchResults_change);
router.patch('/:matchResultId', MatchResultsController.matchResults_change);

//usunięcie rozgrywki o nr
//router.delete('/:matchResultId', checkAuth, MatchResultsController.matchResults_delete);
router.delete('/:matchResultId', MatchResultsController.matchResults_delete);

module.exports = router;