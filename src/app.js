const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const veiculoRoutes = require('./routes/VeiculoRoutes');

const app = express();

// Habilitando CORS para todas as origens (recomendado para desenvolvimento)
// Agora todas as requisições de outros domínios são permitidas
app.use(cors());  

app.use(bodyParser.json());
app.use(veiculoRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
