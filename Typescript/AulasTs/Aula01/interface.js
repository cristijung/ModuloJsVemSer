//script usando interface
//função para verificar se o user é um adm
function verificarAdm(usuario) {
    if (usuario.role === 'admin') {
        return "".concat(usuario.nome, " \u00E9 um administrador.");
    }
    else {
        return "".concat(usuario.nome, " n\u00E3o \u00E9 um administrador.");
    }
}
var user1 = { nome: 'Pafúncio', role: 'admin' };
var user2 = { nome: 'Ana', role: 'normal' };
console.log(verificarAdm(user1));
console.log(verificarAdm(user2));
