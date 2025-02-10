const Veiculo = require('../models/Veiculo');

class VeiculoController {
  constructor(db) {
    this.veiculoModel = new Veiculo(db);
  }

  // Cria um novo veículo
  create(req, res) {
    const veiculo = req.body;
    this.veiculoModel.create(veiculo, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Veículo criado com sucesso!' });
    });
  }

  // Lista todos os veículos
  findAll(req, res) {
    this.veiculoModel.findAll(function (err, veiculos) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(veiculos);
    });
  }

  // Busca um veículo por ID
  findById(req, res) {
    const id = req.params.id;
    this.veiculoModel.findById(id, function (err, veiculo) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!veiculo) {
        return res.status(404).json({ message: 'Veículo não encontrado' });
      }
      res.status(200).json(veiculo);
    });
  }

  // Atualiza um veículo
  update(req, res) {
    const id = req.params.id;
    const veiculo = req.body;
    this.veiculoModel.update(id, veiculo, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
    });
  }

  // Remove um veículo
  delete(req, res) {
    const id = req.params.id;
    this.veiculoModel.delete(id, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Veículo removido com sucesso!' });
    });
  }
}

module.exports = VeiculoController;