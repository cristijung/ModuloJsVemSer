var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro["Ficcao"] = "Fic\u00E7\u00E3o";
    CategoriaLivro["NaoFiccao"] = "N\u00E3o Ficc\u00E7\u00E3o";
    CategoriaLivro["Fantasia"] = "Fantasia";
    CategoriaLivro["Terror"] = "Terror";
    CategoriaLivro["Historia"] = "Hist\u00F3ria";
})(CategoriaLivro || (CategoriaLivro = {}));
var livro1 = {
    titulo: 'It',
    autor: 'Stephen King',
    anoPublicacao: 1975,
    categoria: CategoriaLivro.Terror,
    disponivel: true
};
function exibirDetalhesLivro(livro) {
    console.log("\n    T\u00EDtulo: ".concat(livro.titulo, "\n    Autor: ").concat(livro.autor, "\n    Ano de Publica\u00E7\u00E3o: ").concat(livro.anoPublicacao, "\n    Categoria: ").concat(livro.categoria, "\n    Diposn\u00EDvel: ").concat(livro.disponivel ? 'Sim' : 'Não', "\n    "));
}
exibirDetalhesLivro(livro1);
