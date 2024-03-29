//Arrays

let frutas = ['banana', 'maçã', 'figo', 'morango', 'uva'];
console.log(frutas.length);
console.log(frutas.length-1);
console.log(frutas.length-3);
console.log(frutas);
console.log('figo');

console.log(frutas.push('melancia'));
console.log(frutas);

console.log(frutas.pop());
console.log(frutas);
console.log([3]); //acessa o elemento pelo índice
console.log(frutas[3]);

console.log(frutas.sort());
console.log(frutas.indexOf('banana'));

const nomes = ['Pafúncio', 'Ana', 'Florisbela', 'Mauro', 'João', 'Mafalda'];
console.log(nomes.shift());
console.log(nomes);
delete nomes[1]; //exclui o elemento do array, mas deixa a posição vazia
console.log(nomes);

//concat
const meninas = ['Ana', 'Bia', 'Marcela'];
const meninos = ['João', 'Beto', 'Marcelo'];
const lista = meninas.concat(meninos);
console.log(lista);

//reduce
//reduce primeira forma com dois parâmetros
const salaJss = [6, 7, 8, 9, 10, 4];
const salaJavas = [3, 10, 9, 9, 10, 8];
const salaReacts = [5, 10, 8, 3];

function calcMedia(mediaDeSala) {
    const somaDasNotass = mediaDeSala.reduce((acumulado, nota, index) => acumulado + nota, 0);
    const medias = somaDasNotass / mediaDeSala.length;
    return medias;
}

console.log(`A média da sala de Js é: ${calcMedia(salaJss)}`);
console.log(`A média da sala de Java é: ${calcMedia(salaJavas)}`);
console.log(`A média da sala de React é: ${calcMedia(salaReacts)}`);


//reduce segunda forma com + 1 parâmetro (3)
const calcularMedia = (acumulador, valor, index, arr) => {
    if (index === arr.length - 1) {
      acumulador = acumulador / arr.length;
    } else {
      acumulador += valor;
    }
    return acumulador;
  };
  
  const salaJs = [6, 7, 8, 9, 10, 4];
  const salaJava = [3, 10, 9, 9, 10, 8];
  const salaReact = [5, 10, 8, 3];
  
  const mediaSalaJs = salaJs.reduce(calcularMedia, 0, 0);
  const mediaSalaJava = salaJava.reduce(calcularMedia, 0, 0);
  const mediaSalaReact = salaReact.reduce(calcularMedia, 0, 0);
  
  console.log("Média da sala de JS:", mediaSalaJs);
  console.log("Média da sala de Java:", mediaSalaJava);
  console.log("Média da sala de React:", mediaSalaReact);

