// For In

const frutas = {
  a: "Maçã",
  b: "Melão",
  c: "Morango",
  d: "Uva",
  e: "Abacaxi",
  f: "Melancia",
};

for (let item in frutas) {
  console.log(item + ": " + frutas[item]);
}

//-------------------------------------------
const palavra = "Oie";
for (const letra of palavra) {
  console.log(letra);
}
//------------------------------------------

const fruits = ["Maçã", "Banana", "Abacaxi", "Uva", "Pêssego"];
for (const listaFrutas of fruits) {
  console.log(listaFrutas);
}

const fruitsDois = ["Maçã", "Banana", "Abacaxi", "Uva", "Pêssego"];
for (const listaFrutasDois in fruitsDois) {
  console.log(listaFrutasDois);
}

//----------------------------------------------
//Calculando aumento de salário usando For
const contratadoEm = 2010;
const anoAtual = 2024;

const salarioInicial = 4523.99;
let salario = salarioInicial;
let percentualAumento = 1.5 / 100;

console.log(`Ano de contratação: ${contratadoEm}`);
console.log(`O salário atual é: R$${salario.toFixed(2)}`);

for (let ano = contratadoEm + 1; ano <= anoAtual; ano++) {
  if (ano >= 2020) {
    percentualAumento = percentualAumento * 2;
  }
  salario = salario + salario * percentualAumento;
  console.log(`\n\nAno atual: ${ano}`);
  console.log(`O percentual de aumento foi ${percentualAumento * 100}%`);
  console.log(`O salário atual é: R$${salario.toFixed(2)}`);
}
const percentualAumentoTotal = (salario / salarioInicial) * 100;
console.log(
  `\n\nEm comparação ao seu salário inicial, você teve aumento de ${percentualAumentoTotal.toFixed(
    2
  )}%`
);
