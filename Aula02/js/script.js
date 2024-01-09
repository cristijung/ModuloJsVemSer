//Exemplo 1 - Destacando um texto
function destacarTexto() {
    let elemento = document.getElementById('paragrafo');
    elemento.classList.toggle('destacado');
}

//Exemplo 2 - Adicionando Listas de forma dinâmica
function adicionarItem() {
    let lista = document.getElementById('minhaLista');
    let novoItem = document.createElement('li'); //nome li é semântico
    novoItem.appendChild(document.createTextNode('Novo Item'));

    //criação, estilização e funcionalidades para o btn excluir itens
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerHTML = 'Excluir';
    botaoExcluir.className = 'btn btn-danger';
    botaoExcluir.onclick = function() {
        lista.removeChild(novoItem);
    };

    novoItem.appendChild(botaoExcluir);
    lista.appendChild(novoItem);
}

//para excluir o último item adicionado
function excluirUltimoItem() {
    let lista = document.getElementById("minhaLista");
    let ultimoItem = lista.lastChild;

    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    }
}

//Exemplo 3 - Contador
let count = 0;
function incrementarUm() {
    atualizar(++count);
}

function resetarCount() {
    count = 0;
    atualizar(count);
}

function atualizar(count) {
    document.getElementById("trocar").innerText = count;
}


