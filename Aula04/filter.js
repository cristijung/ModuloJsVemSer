//Filter

const alunos = ['Ana', 'Bia', 'Caio', 'Mauro'];
const medias = [7, 2, 8, 9];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);