//usando extensão de interfaces
//função para exibir as infos sobre um animal
function exibirInfoAnimal(animal) {
    var mensagem = "Nome: ".concat(animal.nome, ", Tipo: ").concat(animal.tipo, ", Idade: ").concat(animal.idade);
    if ('habitat' in animal) {
        mensagem += ", ".concat(animal.habitat);
    }
    return mensagem;
}
var leao = { nome: 'Leão', tipo: 'Mamífero', idade: 15 };
var orca = { nome: 'Orca', habitat: 'Oceano', tipo: 'Mamífero', idade: 24, };
console.log(exibirInfoAnimal(leao));
console.log(exibirInfoAnimal(orca));
