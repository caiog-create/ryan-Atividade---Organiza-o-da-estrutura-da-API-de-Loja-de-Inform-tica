const { lerProdutos, salvarProdutos } = require('../dados/arquivo');

function listarProdutos(categoria) {
  const produtos = lerProdutos();

  if (categoria) {
    return produtos.filter(
      p => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  return produtos;
}

function buscarProdutoPorId(id) {
  const produtos = lerProdutos();
  return produtos.find(p => p.id === Number(id));
}

function cadastrarProduto(dadosProduto) {
  const produtos = lerProdutos();
  
  const novoProduto = {
    id: dadosProduto.id,
    nome: dadosProduto.nome,
    preco: dadosProduto.preco,
    categoria: dadosProduto.categoria,
    estoque: dadosProduto.estoque
  };

  produtos.push(novoProduto);
  salvarProdutos(produtos);

  return novoProduto;
}

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  cadastrarProduto
};
