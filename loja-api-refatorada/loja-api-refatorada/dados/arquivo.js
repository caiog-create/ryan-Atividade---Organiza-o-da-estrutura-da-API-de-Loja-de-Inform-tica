const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join(__dirname, 'produtos.json');

function lerProdutos() {
  try {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
    return JSON.parse(conteudo);
  } catch (erro) {
    console.error('Erro ao ler o arquivo produtos.json:', erro);
    return [];
  }
}

function salvarProdutos(produtos) {
  try {
    const conteudo = JSON.stringify(produtos, null, 2);
    fs.writeFileSync(caminhoArquivo, conteudo, 'utf-8');
    return true;
  } catch (erro) {
    console.error('Erro ao gravar no arquivo produtos.json:', erro);
    return false;
  }
}

module.exports = {
  lerProdutos,
  salvarProdutos
};
