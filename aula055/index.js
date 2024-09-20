// Filter, map, reduce

// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os numeros maiores que 10
//               0   1   2  3  4  5  6...

const numeros = [5, 50 ,80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retoner as pessoas cujo o nome termina com a
const pessoas = [
     {nome: 'Luiz', idade: 62 },
     {nome: 'Maria', idade: 23 },
     {nome: 'Eduardo', idade: 55 },
     {nome: 'Leticia', idade: 19 },
     {nome: 'Rosana', idade: 32 },
     {nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade >= 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('e'));
console.log(nomeTerminaComA)