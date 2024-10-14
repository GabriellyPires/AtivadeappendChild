const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Bem-vindo';
document.body.appendChild(titulo);

// Adicionando produto
const produto = document.createElement('div');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto: Calça';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição: Calça moletom 100% algodão, disponível em várias cores.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 89,90';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://images.unsplash.com/photo-1669207258749-31af209c3a8d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
imagemProduto.alt = 'Calça';


produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

document.body.appendChild(produto);