const produtoService = require('../services/produtoService');

function listar(req, res) {
  const { categoria } = req.query;
  const produtos = produtoService.listarProdutos(categoria);
  res.json(produtos);
}

function buscarPorId(req, res) {
  const { id } = req.params;
  const produto = produtoService.buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  res.json(produto);
}

function cadastrar(req, res) {
  const { id, nome, preco, categoria, estoque } = req.body;

  // Validação dos dados de requisição HTTP
  if (id === undefined || !nome || preco === undefined || !categoria || estoque === undefined) {
    return res.status(400).json({ 
      mensagem: 'Todos os campos (id, nome, preco, categoria, estoque) são obrigatórios.' 
    });
  }

  const novoProduto = produtoService.cadastrarProduto({ id, nome, preco, categoria, estoque });
  res.status(201).json(novoProduto);
}

module.exports = {
  listar,
  buscarPorId,
  cadastrar
};
