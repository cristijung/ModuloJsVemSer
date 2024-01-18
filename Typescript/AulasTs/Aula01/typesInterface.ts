//types & interface

//interface
interface UsuarioOnline {
  nome: string;
  idade: number;
  email: string;
}

//type
type Produto = {
  nome: string;
  preco: number;
  quantidadeEstoque: number;
};

//função q recebe o user e o produto
function realizarCompra(usuario: UsuarioOnline, produto: Produto): string {
  const total = produto.preco * produto.quantidadeEstoque;
  return `Olá, ${usuario.nome}! Sua compra do produto ${
    produto.nome
  } foi realizada com sucesso!. O total pago foi de: ${total.toFixed(2)}!`;
}

const comprador: UsuarioOnline = { nome: 'Ana', idade: 25, email: 'ana@ana.com' };
const produtoUm: Produto = { nome: 'Camiseta', preco: 49.99, quantidadeEstoque: 2 };

const mensagemCompra = realizarCompra(comprador, produtoUm);
console.log(mensagemCompra);
