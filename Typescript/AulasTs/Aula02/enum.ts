//enum
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

enum CategoriaLivro {
    Ficcao = 'Ficção',
    NaoFiccao = 'Não Ficcção',
    Fantasia = 'Fantasia',
    Terror = 'Terror',
    Historia = 'História'
}

interface LivroDetalhado extends Livro {
    categoria: CategoriaLivro;
    disponivel: boolean;
}

const livro1: LivroDetalhado = {
    titulo: 'It',
    autor: 'Stephen King',
    anoPublicacao: 1975,
    categoria: CategoriaLivro.Terror,
    disponivel: true
}

function exibirDetalhesLivro(livro: LivroDetalhado): void {
    console.log(`
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Categoria: ${livro.categoria}
    Diposnível: ${livro.disponivel ? 'Sim' : 'Não'}
    `);
}

exibirDetalhesLivro(livro1);