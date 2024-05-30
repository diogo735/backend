const express = require('express');
const generoFilmeController = require('../controllers/generoFilmeController');

const router = express.Router();

// Rota para criar um gênero de filme
router.post('/create', generoFilmeController.criar);
router.get('/list', generoFilmeController.listar);
router.get('/:id', generoFilmeController.buscarPorId);
router.put('/:id', generoFilmeController.atualizar);
router.delete('/:id', generoFilmeController.deletar);



module.exports = router;
