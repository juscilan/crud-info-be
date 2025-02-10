const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Veiculo = require('../src/models/Veiculo');
const VeiculoController = require('../src/controllers/VeiculoController');

describe('VeiculoController', () => {
  let veiculoController;
  let dbStub;
  let veiculoModelStub;

  beforeEach(() => {
    // Simula o banco de dados
    dbStub = {
      run: sinon.stub(),
      all: sinon.stub(),
      get: sinon.stub(),
    };

    // Cria uma instância do VeiculoController com o banco de dados simulado
    veiculoController = new VeiculoController(dbStub);

    // Simula o modelo Veiculo
    veiculoModelStub = sinon.createStubInstance(Veiculo);
    veiculoController.veiculoModel = veiculoModelStub;
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('create', () => {
    it('deve criar um veículo com sucesso', (done) => {
      const req = { body: { placa: 'ABC1234', chassi: '123456789', renavam: '987654321', modelo: 'Fusca', marca: 'Volkswagen', ano: 1980 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula o comportamento do modelo Veiculo
      veiculoModelStub.create.yields(null);

      veiculoController.create(req, res);

      // Verifica se o método create foi chamado com os dados corretos
      expect(veiculoModelStub.create.calledOnceWith(req.body)).to.be.true;

      // Verifica a resposta
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith({ message: 'Veículo criado com sucesso!' })).to.be.true;

      done();
    });

    it('deve retornar erro 500 em caso de falha', (done) => {
      const req = { body: { placa: 'ABC1234', chassi: '123456789', renavam: '987654321', modelo: 'Fusca', marca: 'Volkswagen', ano: 1980 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula um erro no modelo Veiculo
      veiculoModelStub.create.yields(new Error('Erro no banco de dados'));

      veiculoController.create(req, res);

      // Verifica a resposta de erro
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: 'Erro no banco de dados' })).to.be.true;

      done();
    });
  });

  describe('findAll', () => {
    it('deve retornar todos os veículos', (done) => {
      const req = {};
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula o retorno de veículos
      const veiculos = [
        { id: 1, placa: 'ABC1234', chassi: '123456789', renavam: '987654321', modelo: 'Fusca', marca: 'Volkswagen', ano: 1980 },
      ];
      veiculoModelStub.findAll.yields(null, veiculos);

      veiculoController.findAll(req, res);

      // Verifica a resposta
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(veiculos)).to.be.true;

      done();
    });

    it('deve retornar erro 500 em caso de falha', (done) => {
      const req = {};
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula um erro no modelo Veiculo
      veiculoModelStub.findAll.yields(new Error('Erro no banco de dados'));

      veiculoController.findAll(req, res);

      // Verifica a resposta de erro
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: 'Erro no banco de dados' })).to.be.true;

      done();
    });
  });

  describe('findById', () => {
    it('deve retornar um veículo por ID', (done) => {
      const req = { params: { id: 1 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula o retorno de um veículo
      const veiculo = { id: 1, placa: 'ABC1234', chassi: '123456789', renavam: '987654321', modelo: 'Fusca', marca: 'Volkswagen', ano: 1980 };
      veiculoModelStub.findById.yields(null, veiculo);

      veiculoController.findById(req, res);

      // Verifica a resposta
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(veiculo)).to.be.true;

      done();
    });

    it('deve retornar 404 se o veículo não for encontrado', (done) => {
      const req = { params: { id: 999 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula o retorno de null (veículo não encontrado)
      veiculoModelStub.findById.yields(null, null);

      veiculoController.findById(req, res);

      // Verifica a resposta
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: 'Veículo não encontrado' })).to.be.true;

      done();
    });

    it('deve retornar erro 500 em caso de falha', (done) => {
      const req = { params: { id: 1 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula um erro no modelo Veiculo
      veiculoModelStub.findById.yields(new Error('Erro no banco de dados'));

      veiculoController.findById(req, res);

      // Verifica a resposta de erro
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: 'Erro no banco de dados' })).to.be.true;

      done();
    });
  });

  describe('update', () => {
    it('deve atualizar um veículo com sucesso', (done) => {
      const req = { params: { id: 1 }, body: { placa: 'XYZ5678', chassi: '987654321', renavam: '123456789', modelo: 'Gol', marca: 'Volkswagen', ano: 2020 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula o comportamento do modelo Veiculo
      veiculoModelStub.update.yields(null);

      veiculoController.update(req, res);

      // Verifica se o método update foi chamado com os dados corretos
      expect(veiculoModelStub.update.calledOnceWith(req.params.id, req.body)).to.be.true;

      // Verifica a resposta
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith({ message: 'Veículo atualizado com sucesso!' })).to.be.true;

      done();
    });

    it('deve retornar erro 500 em caso de falha', (done) => {
      const req = { params: { id: 1 }, body: { placa: 'XYZ5678', chassi: '987654321', renavam: '123456789', modelo: 'Gol', marca: 'Volkswagen', ano: 2020 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula um erro no modelo Veiculo
      veiculoModelStub.update.yields(new Error('Erro no banco de dados'));

      veiculoController.update(req, res);

      // Verifica a resposta de erro
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: 'Erro no banco de dados' })).to.be.true;

      done();
    });
  });

  describe('delete', () => {
    it('deve remover um veículo com sucesso', (done) => {
      const req = { params: { id: 1 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula o comportamento do modelo Veiculo
      veiculoModelStub.delete.yields(null);

      veiculoController.delete(req, res);

      // Verifica se o método delete foi chamado com o ID correto
      expect(veiculoModelStub.delete.calledOnceWith(req.params.id)).to.be.true;

      // Verifica a resposta
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith({ message: 'Veículo removido com sucesso!' })).to.be.true;

      done();
    });

    it('deve retornar erro 500 em caso de falha', (done) => {
      const req = { params: { id: 1 } };
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

      // Simula um erro no modelo Veiculo
      veiculoModelStub.delete.yields(new Error('Erro no banco de dados'));

      veiculoController.delete(req, res);

      // Verifica a resposta de erro
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: 'Erro no banco de dados' })).to.be.true;

      done();
    });
  });
});