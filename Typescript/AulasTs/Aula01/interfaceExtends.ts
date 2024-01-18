//usando extensão de interfaces

interface InfoAnimal{
    nome: string;
    tipo: string;
    idade: number;
}

interface AnimalMarinho extends InfoAnimal {
    habitat: string;
}

//função para exibir as infos sobre um animal
function exibirInfoAnimal(animal: InfoAnimal | AnimalMarinho): string {
    let mensagem: string = `Nome: ${animal.nome}, Tipo: ${animal.tipo}, Idade: ${animal.idade}`;

    if ('habitat' in animal) {
        mensagem += `, ${animal.habitat}`;
    }
    return mensagem;
}

const leao: InfoAnimal = { nome: 'Leão', tipo: 'Mamífero', idade: 15};
const orca: AnimalMarinho = { nome: 'Orca',  habitat: 'Oceano', tipo: 'Mamífero', idade: 24,};

console.log(exibirInfoAnimal(leao));
console.log(exibirInfoAnimal(orca));