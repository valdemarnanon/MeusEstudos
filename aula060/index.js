//Factory functions / Constructo functions / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this);
}


const p1 = new Pessoa('Valdemar', 'Nanon');
delete p1.nome;
const p2 = new Pessoa('Maria', 'da 25');

console.log(p1);
console.log(p2);

// ==========================

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Valdemar', 'Nanon');
// console.log(p1.nomeCompleto);

// =================================================


// const pessoa1 = new Object();
// pessoa1.nome = 'XingXai';
// pessoa1.sobrenome = 'Chelsinha';
// pessoa1.idade = 21;
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

// pessoa1.falarNome();
// console.log(pessoa1.getDataNascimento());

// delete pessoa1.nome;
// console.log(pessoa1);


// const pessoa2 = {
//     nome: 'cheusia',
//     sobrenome: 'chelsea'
// };

// console.log(pessoa1, pessoa2)

// const pessoa = {
//     nome: 'cheusia',
//     sobrenome: 'chelsea'
// };

// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);
