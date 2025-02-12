class Veiculo {
    constructor(db) {
      this.db = db;
    }
  
    create(veiculo, callback) {
      const { placa, chassi, renavam, modelo, marca, ano } = veiculo;
      const sql = `
        INSERT INTO veiculos (placa, chassi, renavam, modelo, marca, ano)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      this.db.run(sql, [placa, chassi, renavam, modelo, marca, ano], callback);
    }
  
    findAll(callback) {
      const sql = 'SELECT * FROM veiculos order by marca';
      this.db.all(sql, callback);
    }
  
    findById(id, callback) {
      const sql = 'SELECT * FROM veiculos WHERE id = ?';
      this.db.get(sql, [id], callback);
    }
  
    update(id, veiculo, callback) {
      const { placa, chassi, renavam, modelo, marca, ano } = veiculo;
      const sql = `
        UPDATE veiculos
        SET placa = ?, chassi = ?, renavam = ?, modelo = ?, marca = ?, ano = ?
        WHERE id = ?
      `;
      this.db.run(sql, [placa, chassi, renavam, modelo, marca, ano, id], callback);
    }
  
    delete(id, callback) {
      const sql = 'DELETE FROM veiculos WHERE id = ?';
      this.db.run(sql, [id], callback);
    }
  }
  
  module.exports = Veiculo;