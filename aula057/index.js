// Dobre os números
//               0   1   2  3  4  5  6...
const numeros = [5, 50 ,80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
// console.log(total)



//
//
const pessoas = [
     {nome: 'Luiz', idade: 62 },
     {nome: 'Maria', idade: 2300 },
     {nome: 'Eduardo', idade: 105 },
     {nome: 'Leticia', idade: 19 },
     {nome: 'Rosana', idade: 32 },
     {nome: 'Wallace', idade: 47 },
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);
console.log(maisVelha)