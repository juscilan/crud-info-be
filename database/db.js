const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'veiculos.db');
const db = new sqlite3.Database(dbPath);

// Cria a tabela de veículos
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS veiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      placa TEXT NULL UNIQUE,
      chassi TEXT NULL UNIQUE,
      renavam TEXT NOT NULL UNIQUE,
      modelo TEXT NULL,
      marca NULL,
      ano INTEGER NULL
    )
  `);
});

module.exports = db;