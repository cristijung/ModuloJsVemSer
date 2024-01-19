//api com fetch no Ts puro
//instalação de:
// npm install node-fetch
// npm install @types/node-fetch
//e no tsconfig -- em lib: "lib": ["es2015", "DOM"],
enum CategoriaGato {
    Engracado = 'funny',
    Gordo = 'chubby',
    Fofo = 'fluffy'
}

type DadosGato = {
    id: string;
    url: string;
    categories?: { id: number; name: string }[]; //o '?' significa q esta props é opcional
};

async function buscarImgCats(categoria: CategoriaGato): Promise<DadosGato> {
    const apiGatos = `https://api.thecatapi.com/v1/images/search?category=${categoria}`;

    const resposta = await fetch(apiGatos);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
    }

    const dados: DadosGato[] = await resposta.json();
    return dados[0];
    
}

function exibirInfoGato(gato: DadosGato): void {
    console.log(`
        ID do Gato: ${gato.id}
        URL da Imagem: ${gato.url}
        Categorias: ${gato.categories ? gato.categories.map(cat => cat.name).join(', ') : 'N/A'}
    `);
}

buscarImgCats(CategoriaGato.Engracado)
.then(exibirInfoGato)
.catch(error => console.error(error));