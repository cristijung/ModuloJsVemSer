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
const salaJs = [6, 7, 8, 9, 10, 4];
const salaJava = [3, 10, 9, 9, 10, 8];
const salaReact = [5, 10, 8, 3];

function calcMedia(mediaDeSala) {
    const somaDasNotas = mediaDeSala.reduce((acumulado, nota, index) => acumulado + nota, 0);
    const media = somaDasNotas / mediaDeSala.length;
    return media;
}

console.log(`A média da sala de Js é: ${calcMedia(salaJs)}`);
console.log(`A média da sala de Java é: ${calcMedia(salaJava)}`);
console.log(`A média da sala de React é: ${calcMedia(salaReact)}`);

