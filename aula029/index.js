// for in -> le os indices ou chaves do objeto

//              0       1       2
const pessoa = {
    nome: 'Valdemar',
    sobrenome: 'Nanon',
    idade: 30
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }