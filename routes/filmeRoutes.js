const express = require('express');
const filmeController = require('../controllers/filmeController');

const router = express.Router();

// Rotas para filmes
router.get('/list', filmeController.film_list);
router.post('/create', filmeController.filme_create);
router.get('/get/:id', filmeController.filme_detail);
router.put('/update/:id', filmeController.filme_update);
router.delete('/delete/:id', filmeController.filme_delete);

module.exports = router;
