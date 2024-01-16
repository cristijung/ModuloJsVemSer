function buscarImagens() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=5';

    axios.get(apiUrl)
        .then(response => {
            exibirImagens(response.data);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}

function exibirImagens(data) {
    const resultadoDiv = document.getElementById('resultado');

    
    resultadoDiv.innerHTML = '';

    data.forEach(imagem => {
        resultadoDiv.innerHTML += `<img src="${imagem.url}" alt="Imagem de gato">`;
    });
}
