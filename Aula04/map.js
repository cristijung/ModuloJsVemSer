const listMercadorias = [
  { item: "TV", preco: 5000 },
  { item: "Sofá", preco: 7896 },
  { item: "Geladeira", preco: 3000 },
  { item: "Computador", preco: 7000 },
  { item: "Poltrona", preco: 1200 },
];

const mostrarMercadorias = listMercadorias.map(mercadorias);
function mercadorias(elemento) {
  return {
    item: elemento.item,
    preco: elemento.preco,
  };
}

console.log(mostrarMercadorias);

const mercadoriasComDesconto = listMercadorias.map(aplicarDesconto);
function aplicarDesconto(elemento) {
  return {
    item: elemento.item,
    preco: elemento.preco - elemento.preco * 0.5,
  };
}

mercadoriasComDesconto.forEach((elemento) => {
  console.log(
    `O preço da mercadoria é: ${
      elemento.item
    } com desconto é: ${elemento.preco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`
  );
});
