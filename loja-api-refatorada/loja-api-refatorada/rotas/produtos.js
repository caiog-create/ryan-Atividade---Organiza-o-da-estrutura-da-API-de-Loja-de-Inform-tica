const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Define apenas o mapeamento entre método/rota HTTP e o controller correspondente
router.get('/', produtoController.listar);
router.get('/:id', produtoController.buscarPorId);
router.post('/', produtoController.cadastrar);

module.exports = router;
