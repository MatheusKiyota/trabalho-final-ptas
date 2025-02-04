const express = require('express');
const router = express.Router();
const treinoController = require('../controladores/treinoController');

router.get('/', treinoController.listarTreinos);
router.post('/', treinoController.criarTreino);
router.get('/:nome', treinoController.buscarTreino);
router.put('/:nome', treinoController.atualizarTreino);
router.delete('/:nome', treinoController.excluirTreino);

module.exports = router;
