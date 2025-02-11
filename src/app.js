const cors = require('cors');
const path = require('path');
const YAML = require('yamljs');
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const veiculoRoutes = require('./routes/VeiculoRoutes');

const app = express();

// Habilitando CORS para todas as origens (recomendado para desenvolvimento)
app.use(cors());  

// Removendo o Powered-By - Boas Práticas de Segurança
app.disable('x-powered-by');

// Carregar o arquivo Swagger YAML

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Configurar o Swagger UI na rota /api-docs
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(veiculoRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
