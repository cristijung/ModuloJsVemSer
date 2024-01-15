//promise 1

const tempo = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

tempo(4000)
    .then(function() {
        console.log("apareceu depois de 4 segundos");
    })
//------------------------------------------------------------------------------
    // promise 2
    function minhaFuncao() {
        return new Promise((resolve, reject) => {
          
          const sucesso = true;
      
          if (sucesso) {        
            resolve("Operação bem-sucedida!");
          } else {
            // Se a operação falhar, chame reject
            reject("Erro na operação");
          }
        });
      }
      
      // Usando a Promise
      minhaFuncao()
        .then((resultado) => {
          console.log(resultado); // Saída: Operação bem-sucedida!
        })
        .catch((erro) => {
          console.error(erro); // Saída: Erro na operação
        });
