//Algoritmo - número primos
//1. Um par de números primos é chamado de "primos gêmeos" quando a diferença entre eles é exatamente 
//Escreva um algoritmo que a partir de um número inteiro positivo N como entrada e encontre todos os pares de números 
//primos gêmeos no intervalo de 1 a N (inclusive). Utilize operadores lógicos e de comparação para verificar se um número 
//é primo e, em seguida, verifique se a diferença entre dois números primos é igual a 2. O algoritmo deve listar 
//todos os pares encontrados. 
//Certifique-se de que o algoritmo seja otimizado para uma execução rápida mesmo para valores grandes de N.
//Código resolbvido:

function isPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }  
    return true;
  }
  
  function encontrarPrimosGemeos(N) {
    for (let i = 2; i <= N - 2; i++) {      
      if (isPrimo(i) && isPrimo(i + 2)) {
        console.log(`(${i}, ${i + 2})`);
      }
    }
  }
  
 encontrarPrimosGemeos(50);

 //--------------------------------------------
 //Notas de alunos

 function calcularMedia(notas) {
  let soma = 0;
  
  for (let i = 0; i < notas.length; i++) {
    soma += notas [i];
  }
  return soma / notas.length;
 }

 function verificarStatusAluno(notas) {
  const media = calcularMedia(notas);

  if (media >= 8) {
    return 'Aprovado(a)';
    } else if (media >= 5 && media < 8) {
      return 'Recuperação';
    } else {
      return 'Reprovado(a)';
    }
 }

 const notasAluno = [7.9, 7.9, 7.9];
 const situacao = verificarStatusAluno(notasAluno);
 console.log(`O aluno está ${situacao}`);

 //-------------------------------------------
//Ano Bissexto
//Um ano é bissexto se for divisível por 4. 
//No entanto, anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

function verificarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !==0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const anoUm = 2022;
const anoDois = 2024;

console.log(`${anoUm} é bissexto? ${verificarAnoBissexto(anoUm)}`);
console.log(`${anoDois} é bissexto? ${verificarAnoBissexto(anoDois)}`);