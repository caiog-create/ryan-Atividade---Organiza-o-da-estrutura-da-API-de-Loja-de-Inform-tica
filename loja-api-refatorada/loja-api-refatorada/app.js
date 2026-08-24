const express = require('express');
const rotasProdutos = require('./rotas/produtos');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API da Loja de Informática (Refatorada) rodando com sucesso!');
});

app.use('/produtos', rotasProdutos);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
