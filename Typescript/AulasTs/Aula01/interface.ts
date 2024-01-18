//script usando interface

interface Usuario {
    nome: string;
    role: 'admin' | 'normal';
}

//função para verificar se o user é um adm
function verificarAdm(usuario: Usuario): string {
    if (usuario.role === 'admin') {
        return `${usuario.nome} é um administrador.`;
    } else {
        return `${usuario.nome} não é um administrador.`;
    }
}

const user1: Usuario = { nome: 'Pafúncio', role: 'admin'};
const user2: Usuario = { nome: 'Ana', role: 'normal'};

console.log(verificarAdm(user1));
console.log(verificarAdm(user2));