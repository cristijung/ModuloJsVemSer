
let frutas = ['Maçã', 'Banana', 'Melância', 'Morango', 'Mamão', 'Melão', 'Uva'];
frutasIniadasM = [];
novoIndice = 0;

function selecionarFrutas(item, indice) {
    if (frutas[indice].indexOf('M') == 0) {
        frutasIniadasM[novoIndice] = frutas[indice];
        novoIndice++;
    }
}

frutas.forEach(selecionarFrutas);
console.log(frutasIniadasM);

//-------------------------------------------------------------
const alunos = [
    {nome: 'João', nota: 8},
    {nome: 'Pafúncio', nota: 9},
    {nome: 'Ana', nota: 6},
    {nome: 'Mafalda', nota: 10},
    {nome: 'Pedro', nota: 7}
];

function buscarAlunoENota(nomeAluno, arrayAlunos) {
    let encontrado = false;

    arrayAlunos.forEach(function(aluno) {
        if (aluno.nome === nomeAluno) {
            console.log(`Aluno: ${aluno.nome}, Nota: ${aluno.nota}`);
            encontrado = true;
        }
    });

    if(!encontrado) {
        console.log(`Aluno "${nomeAluno}" não encontrado!`);
    }
}

buscarAlunoENota('Maria', alunos);
buscarAlunoENota('Pafúncio', alunos);