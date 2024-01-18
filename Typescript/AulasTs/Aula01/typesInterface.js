//types & interface
//função q recebe o user e o produto
function realizarCompra(usuario, produto) {
    var total = produto.preco * produto.quantidadeEstoque;
    return "Ol\u00E1, ".concat(usuario.nome, "! Sua compra do produto ").concat(produto.nome, " foi realizada com sucesso!. O total pago foi de: ").concat(total.toFixed(2), "!");
}
var comprador = { nome: 'Ana', idade: 25, email: 'ana@ana.com' };
var produtoUm = { nome: 'Camiseta', preco: 49.99, quantidadeEstoque: 2 };
var mensagemCompra = realizarCompra(comprador, produtoUm);
console.log(mensagemCompra);
