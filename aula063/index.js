/*
 Object.values  // retornaa valores
 Object.entries // retona valores e chave em array, se quiser destruct tbm
 Object.assign(des, any) // chupa todas as chaves :3
 Object.getownPropertyDescriptor(o, 'prop') // descrisor daquela prropriedade
 ... (spread) melhor que => Object.assing   // espalha valores dentro de outro obj

 // Já vi
 Object.keys (retonar as chaves) // retorna chave
 Object.freeze (congela o objeto) // freza tudo
 Object.defineProperties (define várias propriedades) // define propriedades
 Object.defineProperty (define uma) // define pra uma propriedade.
 */
const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana' };
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
};

// console.log(Object.entries(produto));
// console.log(Object.keys(produto));
// console.log(Object.values(produto));

// =====================================

// const produto = {nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // retona as propriedades
// produto.nome = 'Outra coisa';
// delete produto.nome;
// console.log(produto);

// =====================================

// const produto = {nome: 'Produto', preco: 1.8 };
// Object.freeze(produto)
// produto.nome = 'Outro nome'; //não funciona
// const caneca =  { nome: produto.nome, preco: produto.preco };
// console.log(produto);
// console.log(Object.keys(produto));

// =====================================

// const produto = {nome: 'Produto', preco: 1.8 };
// const caneca =  { nome: produto.nome, preco: produto.preco }; // Forma n muito legal HAAHAHahahhAhA
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// caneca.nome = 'Caneca';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// =====================================

// const produto = {nome: 'Produto', preco: 1.8 };
// const caneca = { 
//     ...produto ,
//     material: 'porcelana'
// };

// produto.nome = 'Canecão';
// produto.preco = 2.5;
// caneca.nome = 'Canequinha';
// console.log(caneca);
// console.log(produto);