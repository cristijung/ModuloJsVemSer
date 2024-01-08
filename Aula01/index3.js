let nome = 'Ana'; //atribuição

const num1 = 456;
const num2 = 789;
let soma = num1 + num2;
let sub = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;

console.log("A soma dos números é: " + soma + sub + multi + div); //concatenação padrão
console.log(`A soma dos números ${num1} e ${num2} é: ${soma}`); //interpolação

//-------------------------------------------
let input = null;

if (input === null) {
    console.log('Não há informação');
} else {
    console.log(input);
}

let texto = null;
let textoDois;
let textoTres = ' ';

console.log(texto);
console.log(textoDois);
console.log(textoTres);

//-----------------------------------------------------
//Exemplo simples que verifica se uma variável é null ou undefined

function verificarValor(variavel) {
    if (variavel === null) {
        console.log('A variável é null');
    } else if (variavel === undefined) {
        console.log('A variável não tem um valor definido');
    } else {
        console.log('A variável tem um valor definido: ', variavel);
    }
}

let variavelUm = null;
verificarValor(variavelUm);

let variavelDois;
verificarValor(variavelDois);

let variavelTres = 102;
verificarValor(variavelTres);
//--------------------------------------------------------------------
// usando o TypeOff: usado para mostrar e/ou determinar o tipo de variável
//que está sendo usada no código

function verificarTipo(valor) {
    if(typeof valor === 'number') {
        console.log('A variável é do tipo número');
    } else if (typeof valor === 'string') {
        console.log('A variável é do tipo string');
    } else if (typeof valor == 'boolean') {
        console.log('A variável é do tipo boleano');
    } else {
        console.log('A variável tem um tipo diferenciado');
    }
}

verificarTipo(102);
verificarTipo('Ana Banana');
verificarTipo(false);
verificarTipo([1, 2, 3]);