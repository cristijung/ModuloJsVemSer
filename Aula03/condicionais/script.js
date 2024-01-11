//ternário
const salario = 10000;
let bonus = salario * (salario < 10000 ? 0.35 : 0.25);
console.log(bonus);

const aluno = "Pafúncio";
const situacao = 6.4;
let resultadoAno = situacao >= 7 ? "Aprovado" : "Reprovado";
console.log(`O resultado do ano letivo do ${aluno} e: ${resultadoAno}`);