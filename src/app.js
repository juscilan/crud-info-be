const express = require('express');
const bodyParser = require('body-parser');
const veiculoRoutes = require('./routes/VeiculoRoutes');

const app = express();
app.use(bodyParser.json());
app.use(veiculoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});