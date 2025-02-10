const express = require('express');
const db = require('../../database/db');
const VeiculoController = require('../controllers/VeiculoController');

const router = express.Router();
const veiculoController = new VeiculoController(db);

router.post('/veiculos', veiculoController.create.bind(veiculoController));
router.get('/veiculos', veiculoController.findAll.bind(veiculoController));
router.get('/veiculos/:id', veiculoController.findById.bind(veiculoController));
router.put('/veiculos/:id', veiculoController.update.bind(veiculoController));
router.delete('/veiculos/:id', veiculoController.delete.bind(veiculoController));

module.exports = router;