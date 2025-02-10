const express = require('express');
const bodyParser = require('body-parser');
const veiculoRoutes = require('./routes/VeiculoRoutes');

const app = express();
app.use(bodyParser.json());
app.use(veiculoRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});