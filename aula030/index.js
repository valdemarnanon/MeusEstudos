// for classico - geralmente com interaveis (array ou strings)
// for in - retonar o indice ou chave (strings, array ou objeto)
// for off - retorna o valor em si (iteraveis, arrays ou strings)

        //    0123....
const nomes = ['Luiz', 'Otavio', 'Henrique'];

function minhaFuncaoLegal(p1, p2, p3) {
    console.log('minhaFuncaoLegal', p1, p2, p3);
}

function meuForEach(funcaoChamada){

    for (let i = 0; i < nomes.length; i++) {
        funcaoChamada(nomes[i], i, nomes);
    }
};

meuForEach(minhaFuncaoLegal)

// console.log('');

// // pega o indice
// for (let i in nomes) {
//     console.log(nomes[i]);
// }

// console.log('');

// // pega o valor
// for (let valor of nomes) {
//     console.log(valor);
// }

// console.log('');


// forEach função com parametro.
nomes.forEach(minhaFuncaoLegal);