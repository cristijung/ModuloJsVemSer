// //tipando as variáveis
// let num: number = 32;
// const nome: string = 'Alice';
// console.log(`${nome} e ${num}`);

// //inferencia de valor
// let valor = 12;
// let nomes = 'Ana'; //string
// nomes = 'Bia'; //string
// console.log(`O nome é: ${nome} e a idade é: ${valor}`);


// let listaDeNumeros: number[] = [1, 2, 3];
// let listaDeStrings: Array<string> = ["a", "b", "c"];



// let pessoa: { nome: string; idade: number; } = {
//     nome: "Carlos",
//     idade: 25
// };


// let id: string | number;
// id = "123"; // Válido
// id = 123;   // Também válido


// let respostaExata: "sim" | "não";
// respostaExata = "sim"; // Válido




// enum Direcao {
//     Norte,
//     Sul,
//     Leste,
//     Oeste
// };

// let direcao: Direcao = Direcao.Norte;



// interface Usuario {
//     nome: string;
//     idade?: number; // Propriedade opcional
// }

// let usuario: Usuario = { nome: "Lucas" };



interface Pessoa {
    nome: string;
    idade: number;
  
    saudar(saudacao: string): void;
  }
  
  function saudarPessoa(pessoa: Pessoa) {
    console.log(`${pessoa.saudar} Meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`);
  }
  
  const pessoa: Pessoa = {
    nome: "João",
    idade: 30,
    saudar(saudacao: string) {
      console.log(`${saudacao}`);
    }
  };
  
  saudarPessoa(pessoa); // A função saudarPessoa espera um objeto que siga a estrutura da interface Pessoa
  
  