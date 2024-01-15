
function operacaoAssincrona(tempo, callback) {
    console.log("Iniciando operação assíncrona.....");
    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milissegundos`);
        callback();
    }, tempo)
}

function buscaCallback() {
    console.log("Callback executado! Operação concluída");
}

operacaoAssincrona(5000, buscaCallback);